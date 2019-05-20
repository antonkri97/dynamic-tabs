import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  template: `
    <app-tabs>
      <app-tab tabTitle="first tab">
        <button (click)="onFirstTabClick()">open second tab</button>
      </app-tab>
      <app-tab tabTitle="second tab">
        <button (click)="onAnotherTabClick()">open age tab</button>
      </app-tab>
    </app-tabs>

    <ng-template #thirdTab let-user="data">
      Hi, I am {{ user?.name }}
    </ng-template>

    <ng-template #customTab let-user="data">
      <h1>y.o. {{ user?.age }}</h1>
      <form #form="ngForm" (ngSubmit)="logForm(form.value)">
        <app-state-selector name="state" ngModel #state="ngModel"></app-state-selector>
        <button type="submit">Submit</button>
      </form>

      <h2>Current selection:</h2>
      <h3>{{state.value}}</h3>

    </ng-template>
  `,
})
export class AppComponent {
  title = 'tabs';

  @ViewChild(TabsComponent) tabsComponent: TabsComponent;

  user = {
    name: 'Anton',
    age: 22
  };

  @ViewChild('thirdTab') thirdTabTemplate;
  @ViewChild('customTab') customTabTemplate;

  onFirstTabClick() {
    this.tabsComponent.openTab('Dynamic Tab', this.thirdTabTemplate, this.user, true);
  }

  onAnotherTabClick() {
    this.tabsComponent.openTab('Age Tab', this.customTabTemplate, this.user, true);
  }

  logForm(value) {
    console.log(value);
  }
}
