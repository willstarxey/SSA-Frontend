import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SectionComponent } from './components/section/section.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistoriaComponent } from './core/historia/historia.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AtractivosComponent } from './core/atractivos/atractivos.component';
import { PrincipalComponent } from './core/principal/principal.component';
import { SomosComponent } from './core/somos/somos.component';
import { GaleriaComponent } from './core/galeria/galeria.component';
import { SistemaComponent } from './core/sistema/sistema.component';

import { UsersService } from './services/users.service';
import { AvisosService } from './services/avisos.service';
import { CarouselService } from './services/carousel.service';
import { FestividadesService } from './services/festividades.service';
import { PagosService } from './services/pagos.service';
import { NgxSpinnerModule } from 'ngx-spinner';


import { IndexComponent } from './components/users/index/index.component';
import { NavbarSystemComponent } from './components/navbar-system/navbar-system.component';
import { FormUserComponent } from './components/users/form-user/form-user.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { IndexAvisosComponent } from './components/avisos/index-avisos/index-avisos.component';
import { FormAvisosComponent } from './components/avisos/form-avisos/form-avisos.component';
import { IndexPagosComponent } from './components/pagos/index-pagos/index-pagos.component';
import { FormPagosComponent } from './components/pagos/form-pagos/form-pagos.component';
import { IndexCarouselComponent } from './components/carousel-system/index-carousel/index-carousel.component';
import { FormCarouselComponent } from './components/carousel-system/form-carousel/form-carousel.component';
import { IndexFestividadesComponent } from './components/festividades/index-festividades/index-festividades.component';
import { FormFestividadesComponent } from './components/festividades/form-festividades/form-festividades.component';
import { AuthService } from './services/auth.service';
import { UserSystemComponent } from './components/user-system/user-system.component';
import { IndexPersonalComponent } from './components/personal/index-personal/index-personal.component';
import { FormPersonalComponent } from './components/personal/form-personal/form-personal.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    GaleriaComponent,
    SistemaComponent,
    IndexComponent,
    NavbarSystemComponent,
    FormUserComponent,
    WelcomeComponent,
    IndexAvisosComponent,
    FormAvisosComponent,
    IndexPagosComponent,
    FormPagosComponent,
    IndexCarouselComponent,
    FormCarouselComponent,
    IndexFestividadesComponent,
    FormFestividadesComponent,
    UserSystemComponent,
    IndexPersonalComponent,
    FormPersonalComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    NgbModule
  ],
  providers: [
    UsersService,
    AvisosService,
    CarouselService,
    FestividadesService,
    PagosService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
