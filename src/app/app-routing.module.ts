import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DesayunoComponent } from './components/desayuno/desayuno.component';
import { MenuComponent } from './components/menu/menu.component';
import { VinoComponent } from './components/vino/vino.component';
import { CopasComponent } from './components/copas/copas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'desayuno', component: DesayunoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'vino', component: VinoComponent },
  { path: 'copas', component: CopasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
