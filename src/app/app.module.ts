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
import { HistoriaComponent } from './core/historia/historia.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AtractivosComponent } from './core/atractivos/atractivos.component';
import { PrincipalComponent } from './core/principal/principal.component';
import { SomosComponent } from './core/somos/somos.component';
import { GaleriaComponent } from './core/galeria/galeria.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  { path: 'lugares', component: AtractivosComponent},
  { path: 'historia', component: HistoriaComponent},
  { path: 'somos', component: SomosComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404'}
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
    AtractivosComponent,
    PrincipalComponent,
    SomosComponent,
    GaleriaComponent
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
