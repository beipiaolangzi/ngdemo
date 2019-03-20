import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';
import { ChatComponent } from './chat/chat.component';
import { EatComponent } from './eat/eat.component';
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'server', component: ChatComponent
  },
  {
    path: 'eat', component: EatComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
