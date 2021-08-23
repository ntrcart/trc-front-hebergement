import { NavbarComponent } from './navbar/navbar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HebergementMutualiseComponent } from './hebergement/hebergement-mutualise/hebergement-mutualise.component';
import { HebergementCPanelComponent } from './hebergement/hebergement-cpanel/hebergement-cpanel.component';
import { HebergementCmsComponent } from './hebergement/hebergement-cms/hebergement-cms.component';
import { HebergementVpsComponent } from './hebergement/hebergement-vps/hebergement-vps.component';


const routes: Routes = [
  { path:"hebergementMutualise", component:HebergementMutualiseComponent},
  { path:"HebergementCPanel", component:HebergementCPanelComponent},
  { path:"HebergementCms", component:HebergementCmsComponent},
  { path:"HebergementVps", component:HebergementVpsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
