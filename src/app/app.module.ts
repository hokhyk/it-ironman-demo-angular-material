import {  } from './dashboard/dashboard.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /**
     * @angular/animations使用了WebAnimation API，但不是所有瀏覽器都有支援，如果你希望盡可能讓所有瀏覽器都支援，可以安裝web-animations.js套件。
     * npm install --save web-animations-js
     * 接著打開src/pollyills.ts檔案，找到import 'web-animations-js'這一行，並且把它取消註解掉，如果找不到這一行，也可以直接手動加入就好。
    **/
   BrowserAnimationsModule,
    NoopAnimationsModule, //雖然動畫效果會讓畫面更加豐富，但也有可能會有效能問題，且不是每個人都喜歡那麼多的特效，想要取消特效的話，可以改加入NoopAnimationsModule
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
