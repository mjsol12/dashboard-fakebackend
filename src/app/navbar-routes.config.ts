import {DataTitle, RouterPaths} from "./shared/routes/routes.model";
import {BehaviorSubject} from 'rxjs';

export const ROUTES: any[] = [
  {
    path: RouterPaths.DASHBOARD,
    title: DataTitle.DASHBOARD,
    icon: 'assets/img/dashboard.svg',
    class: '',
    badge: ''
  },
  {
    path: RouterPaths.RELATIONSHIP_INCOME,
    title: DataTitle.RELATIONSHIP_INCOME,
    icon: 'assets/img/relation-income.svg',
    class: '',
    badge: ''
  },
  {
    path: RouterPaths.DEALS,
    title: DataTitle.DEALS,
    icon: 'assets/img/deals.svg',
    class: '',
    badge: ''
  },
  {
    path: RouterPaths.ACCESS,
    title: DataTitle.ACCESS,
    icon: 'assets/img/access.svg',
    class: '',
    badge: ''
  },
  {
    path: RouterPaths.DETAILS,
    title: DataTitle.DETAILS,
    icon: 'assets/img/details.svg',
    class: '',
    badge: ''
  }
];

// in real life it will be more than that
export const sidebarRoutes = new BehaviorSubject(ROUTES);

export const sidebarRoutes$ = sidebarRoutes.asObservable();
