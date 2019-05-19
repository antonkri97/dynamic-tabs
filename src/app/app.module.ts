import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { DynamicTabAnchorDirective } from './tabs/dynamic-tab-anchor.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    DynamicTabAnchorDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TabComponent]
})
export class AppModule { }
