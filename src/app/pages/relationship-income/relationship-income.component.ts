import { Component, OnInit } from '@angular/core';
import {Card} from "../../shared/models/cards";
import {table} from "../../shared/models/table";
import {CustomerServiceService} from "../../shared/services/customer-service.service";
import {BehaviorSubject} from "rxjs";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-relationship-income',
  templateUrl: './relationship-income.component.html',
  styleUrls: ['./relationship-income.component.scss']
})
export class RelationshipIncomeComponent implements OnInit {
  Headers: table[] = [];
  Data: any[] = [];
  HeaderCards: Card[] = [];
  PageModel: {name:string, children: any[], id: string, parentId: string}[] = [];
  subjectFilter = new BehaviorSubject<any>({});

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.customerService.GetHeaders().subscribe( (res: any) => {
      this.HeaderCards = res;
    });
    this.customerService.GetPageModel().subscribe( (res:any) => {
      const param = {parentId: res[0].id, children: []};
      this.subjectFilter.next(param);
      this.PageModel = res
    });
    this.OnSearchData();
  }

  OnSearchData() {
    const param = this.subjectFilter.getValue();
    return this.customerService.GetData(param).subscribe( (res: any) => {
      console.log(res)
      this.Data = res.data;
      this.Headers = res.tableHeader;
    })
  }

  OnSelectedFilter(event: any) {
    if(event){
      let params: any = {};
      this.subjectFilter.subscribe(val => {
        params = val
      });
      if(event.selected) {
        params.children.push(event.value.id)
      } else {
        params.children = params.children.filter((t: any) => {
          if(t !== event.value.id) {
            return t
          }
        })
      }

      this.subjectFilter.next(params);

      Swal.fire(`Payload: ${JSON.stringify(params)}`);
      this.OnSearchData();
    }
  }

  OnSelectedItem(event:any) {
    Swal.fire('You have selected ' + event);
  }
}
