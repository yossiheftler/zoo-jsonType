import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { BeastsPanelComponent } from './comps/panels/beasts-panel/beasts-panel.component';
import { WildsPanelComponent } from './comps/panels/wilds-panel/wilds-panel.component';
import { BeastCardComponent } from './comps/cards/beast-card/beast-card.component';
import { BirdsPanedComponent } from './comps/panels/birds-panel/birds-paned.component';
import { wildCardComponent } from './comps/cards/wild-card/wild-card.component';
import { BirdCardComponent } from './comps/cards/birds-card/birds-card.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { PaginatorComponent } from './comps/general/paginator/paginator.component';
import { NavComponent } from './comps/general/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeastsPanelComponent,
    BirdsPanedComponent,
    WildsPanelComponent,
    BeastCardComponent,
    wildCardComponent,
    BirdCardComponent,
    FooterComponent,
    PaginatorComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
