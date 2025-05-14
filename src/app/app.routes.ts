import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detailcomponent';

export const routes: Routes = [{path:'', component: HomeComponent },
    { path:'detail/:id',component: DetailComponent},
];
