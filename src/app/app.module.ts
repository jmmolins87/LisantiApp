import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DesayunoComponent } from './components/desayuno/desayuno.component';
import { MenuComponent } from './components/menu/menu.component';
import { VinoComponent } from './components/vino/vino.component';
import { CopasComponent } from './components/copas/copas.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { MapComponent } from './components/home/map/map.component';
import { CarrouselComponent } from './components/home/carrousel/carrousel.component';
import { CulturaComponent } from './components/home/cultura/cultura.component';
import { OferingComponent } from './components/home/ofering/ofering.component';
import { BannerCopasComponent } from './components/copas/banner-copas/banner-copas.component';
import { BannerDesayunoComponent } from './components/desayuno/banner-desayuno/banner-desayuno.component';
import { BannerMenuComponent } from './components/menu/banner-menu/banner-menu.component';
import { BannerVinoComponent } from './components/vino/banner-vino/banner-vino.component';
import { BgVideoComponent } from './components/home/bg-video/bg-video.component';
import { Map2Component } from './components/home/map2/map2.component';
import { CortinillaComponent } from './components/shared/cortinilla/cortinilla.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ContactoComponent,
    DesayunoComponent,
    MenuComponent,
    VinoComponent,
    CopasComponent,
    LoaderComponent,
    MapComponent,
    CarrouselComponent,
    CulturaComponent,
    OferingComponent,
    BannerCopasComponent,
    BannerDesayunoComponent,
    BannerMenuComponent,
    BannerVinoComponent,
    BgVideoComponent,
    Map2Component,
    CortinillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfohgODjA7L4Xr-fF_a9pr5a5AZxDFF6I'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
