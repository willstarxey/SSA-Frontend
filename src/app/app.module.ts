import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SectionComponent } from './section/section.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { HistoriaComponent } from './historia/historia.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AtractivosComponent } from './atractivos/atractivos.component';

const routes: Routes = [
  { path: '' , component: AppComponent, children: [
    { path: 'atractivos', component: AtractivosComponent},
    { path: 'historia', component: HistoriaComponent}
    ]},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CarouselComponent,
    SectionComponent,
    AsideComponent,
    FooterComponent,
    HistoriaComponent,
    NotFoundComponent,
    AtractivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
