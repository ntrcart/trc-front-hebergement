import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HebergementMutualiseComponent } from './hebergement/hebergement-mutualise/hebergement-mutualise.component';
import { HebergementCPanelComponent } from './hebergement/hebergement-cpanel/hebergement-cpanel.component';
import { HebergementCmsComponent } from './hebergement/hebergement-cms/hebergement-cms.component';
import { HebergementVpsComponent } from './hebergement/hebergement-vps/hebergement-vps.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HebergementMutualiseComponent,
    HebergementCPanelComponent,
    HebergementCmsComponent,
    HebergementVpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
