import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/users/index/index.component';
import { FormUserComponent } from './components/users/form-user/form-user.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { IndexAvisosComponent } from './components/avisos/index-avisos/index-avisos.component';
import { FormAvisosComponent } from './components/avisos/form-avisos/form-avisos.component';
import { IndexCarouselComponent } from './components/carousel-system/index-carousel/index-carousel.component';
import { FormCarouselComponent } from './components/carousel-system/form-carousel/form-carousel.component';
import { IndexPagosComponent } from './components/pagos/index-pagos/index-pagos.component';
import { FormPagosComponent } from './components/pagos/form-pagos/form-pagos.component';
import { IndexFestividadesComponent } from './components/festividades/index-festividades/index-festividades.component';
import { FormFestividadesComponent } from './components/festividades/form-festividades/form-festividades.component';
import { PrincipalComponent } from './core/principal/principal.component';
import { AtractivosComponent } from './core/atractivos/atractivos.component';
import { HistoriaComponent } from './core/historia/historia.component';
import { SomosComponent } from './core/somos/somos.component';
import { GaleriaComponent } from './core/galeria/galeria.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SistemaComponent } from './core/sistema/sistema.component';
import { AuthGuard } from './guards/auth.guard';
import { UserSystemComponent } from './components/user-system/user-system.component';
import { IndexPersonalComponent } from './components/personal/index-personal/index-personal.component';
import { FormPersonalComponent } from './components/personal/form-personal/form-personal.component';

const routes: Routes = [
  // RUTAS PRINCIPALES DEL SITIO WEB
  { path: '', component: PrincipalComponent},
  { path: 'lugares', component: AtractivosComponent},
  { path: 'historia', component: HistoriaComponent},
  { path: 'somos', component: SomosComponent},
  { path: 'galeria', component: GaleriaComponent},
  // DECLARACION DE RUTAS DEL SISTEMA - RUTA PRINCIPAL
  { path: 'sistema/auth', redirectTo: '/sistema/login', pathMatch: 'full' },
  { path: 'sistema/login', loadChildren: './core/login/auth/auth.module#AuthModule' },
  { path: 'sistema', component: WelcomeComponent },
  { path: 'sistema', component: SistemaComponent, children: [
    // VENTANA DE INICIO PRINCIPAL DEL SISTEMA
    // RUTAS DEL SISTEMA - USUARIOS
    { path: 'user', component: UserSystemComponent},
    { path: 'users', component: IndexComponent },
    { path: 'users/add', component: FormUserComponent },
    { path: 'users/edit/:id', component: FormUserComponent},
    // RUTAS DEL SITEMA - PERSONAL
    { path: 'personal', component: IndexPersonalComponent },
    { path: 'personal/add', component: FormPersonalComponent },
    { path: 'personal/edit/:id', component: FormPersonalComponent},
    // RUTAS DEL SISTEMA - AVISOS
    { path: 'avisos', component: IndexAvisosComponent },
    { path: 'avisos/add', component: FormAvisosComponent },
    { path: 'avisos/edit/:id', component: FormAvisosComponent},
    // RUTAS DEL SISTEMA - CAROUSEL
    { path: 'carousel', component: IndexCarouselComponent },
    { path: 'carousel/add', component: FormCarouselComponent },
    { path: 'carousel/edit/:id', component: FormCarouselComponent},
    // RUTAS DEL SISTEMA - PAGOS
    { path: 'pagos', component: IndexPagosComponent },
    { path: 'pagos/add', component: FormPagosComponent },
    { path: 'pagos/edit/:id', component: FormPagosComponent},
    // RUTAS DEL SISTEMA - FESTIVIDADES
    { path: 'festividades', component: IndexFestividadesComponent },
    { path: 'festividades/add', component: FormFestividadesComponent },
    { path: 'festividades/edit/:id', component: FormFestividadesComponent},
  ] },
  // RUTA REDICCIONAL A 404
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
