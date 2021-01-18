import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdsViewComponent} from './views/ads-view/ads-view.component';
import {SingleAdViewComponent} from './views/single-ad-view/single-ad-view.component';
import {CreateAdViewComponent} from './views/create-ad-view/create-ad-view.component';

const routes: Routes = [
  {path: '', component: AdsViewComponent},
  {path: 'ad/create', component: CreateAdViewComponent},
  {path: 'ad/:id', component: SingleAdViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
