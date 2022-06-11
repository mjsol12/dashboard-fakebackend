import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {delay, dematerialize, materialize, mergeMap, Observable, of} from "rxjs";
import * as CustomHeader from "../Configuration/table/CustomerRevenue.json";
import * as PageModel from  "../Configuration/page/pagemodel.json";
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    return of(null).pipe(mergeMap(() => {
      console.log(req.url);
      if (req.url.endsWith('/headers') && req.method === 'GET') {
        const body = [
          { header: 'Total', value: Math.floor(100000 + Math.random() * 900000)},
          { header: 'Credit', value: Math.floor(100000 + Math.random() * 900000)},
          { header: 'Deposit', value: Math.floor(100000 + Math.random() * 900000)},
          { header: 'Service Number', value: Math.floor(100000 + Math.random() * 900000)}
        ];

        return of(new HttpResponse({status: 200, body: body}))
      }
      if(req.url.endsWith('/page-model') && req.method === 'GET') {
        const {default: pagemodel} = JSON.parse(JSON.stringify(PageModel));

        const recursive = (pagemodel: any[], id: string| null) => {
          const parent = [];
          for(let pm of pagemodel) {
            if(pm.parentId === id) {
              pm.children = recursive(pagemodel, pm.id );
              parent.push(pm)
            }
          }
          return parent
        };

        let data = recursive(pagemodel, null);

        return of(new HttpResponse({status: 200, body: data}))
      }

      if (req.url.endsWith('/query-data') && req.method === 'POST') {
        const body  = req.body;
        console.log(body)
        const data = [];
        for(let i = 0; i < 20; i++) {
          const randomName: string = uniqueNamesGenerator({
            dictionaries: [adjectives, colors, animals],
            style:'capital',
            separator: ' '
          }); // big_red_donkey

          data.push({
            category: randomName,
            categoryRevenue: Math.floor(100 + Math.random() * 900),
            roe2020: Math.floor( Math.random() * 10),
            revenue2020: Math.floor(100 + Math.random() * 900),
            ytdroe: Math.floor(Math.random() * 10),
            ytdroerevenue: Math.floor(100 + Math.random() * 900),
            roe2021: Math.floor( Math.random() * 10),
            roe2021Revenue: Math.floor(100 + Math.random() * 900),
            roe2022: Math.floor(Math.random() * 10),
            roe2022Revenue: Math.floor(100 + Math.random() * 900),
            lifetimeRoe: Math.floor(Math.random() * 10)
          })
        }

        data.push({
          category: 'TOTAL',
          categoryRevenue: Math.floor(100 + Math.random() * 900),
          roe2020: Math.floor( Math.random() * 10),
          revenue2020: Math.floor(100 + Math.random() * 900),
          ytdroe: Math.floor(Math.random() * 10),
          ytdroerevenue: Math.floor(100 + Math.random() * 900),
          roe2021: Math.floor( Math.random() * 10),
          roe2021Revenue: Math.floor(100 + Math.random() * 900),
          roe2022: Math.floor(Math.random() * 10),
          roe2022Revenue: Math.floor(100 + Math.random() * 900),
          lifetimeRoe: Math.floor(Math.random() * 10)
        });
        const {Header} = CustomHeader;
        return of(new HttpResponse({status: 200, body: {
            tableHeader: JSON.parse(JSON.stringify(Header)),
            data
          }}))
      }

      return next.handle(req);

    }))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}
export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
