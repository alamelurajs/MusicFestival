import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MusicFestivalComponent } from './musicFestival/musicFestival.component';
import { MusicFestivalService } from './musicFestival/musicFestival.service';
@NgModule({
    // All the modules will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'home', component: MusicFestivalComponent},            
            {path: '', redirectTo: 'home', pathMatch: 'full'},
        ]),
    ],
    // All the Component, Routes & Pipe will declare here
    declarations: [
        AppComponent,
        MusicFestivalComponent
    ],
    // Only Main Component Declare here
    bootstrap: [
        AppComponent
    ],
    // All Services Declare here
    providers: [
        MusicFestivalService
    ]
})

export class AppModule {

}
