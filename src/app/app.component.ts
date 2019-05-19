import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tabs';

  @ViewChild(TabsComponent) tabsComponent: TabsComponent;

  user = {
    name: 'Anton',
    age: 22
  }

  @ViewChild('thirdTab') thirdTabTemplate;
  @ViewChild('customTab') customTabTemplate;

  onFirstTabClick() {
    this.tabsComponent.openTab('Dynamic Tab', this.thirdTabTemplate, this.user, true);
  }

  onAnotherTabClick() {
    this.tabsComponent.openTab('Age Tab', this.customTabTemplate, this.user, true);
  }
}
