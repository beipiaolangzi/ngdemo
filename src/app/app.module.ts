import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { ShopChildComponent } from './shop-child/shop-child.component';
import { UserChildComponent } from './user-child/user-child.component';
import { MyserviceService } from './service/myservice.service';
import { ChatComponent } from './chat/chat.component';
import { ChatChildComponent } from './chat-child/chat-child.component';
import { EatComponent } from './eat/eat.component';
import { EatChildComponent } from './eat-child/eat-child.component';
import { EatService } from './service/eat.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    UserComponent,
    HomeChildComponent,
    ShopChildComponent,
    UserChildComponent,
    ChatComponent,
    ChatChildComponent,
    EatComponent,
    EatChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MyserviceService,
    EatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
