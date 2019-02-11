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
    OferingComponent
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
