import { NgModule, APP_INITIALIZER } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HorizontalContextComponent } from './horizontal-context/horizontal-context.component';
import { HorizontalLaneComponent } from './horizontal-lane/horizontal-lane.component';
import { BenchmarkChartComponent } from './benchmark-chart/benchmark-chart.component';
import { XAxisComponent } from './x-axis/x-axis.component';
import { YAxisComponent } from './y-axis/y-axis.component';
import { PointComponent } from './point/point.component';
import { BoxComponent } from './box/box.component';
import { QuantilePipe } from './quantile.pipe';
import { ChartDirective } from './chart.directive';
import { NameComponent } from './name/name.component';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocaleInitializerService {
  initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      registerLocaleData(localeDe);
      resolve();
    });
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HorizontalContextComponent,
    HorizontalLaneComponent,
    BenchmarkChartComponent,
    XAxisComponent,
    YAxisComponent,
    PointComponent,
    BoxComponent,
    QuantilePipe,
    ChartDirective,
    NameComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    LocaleInitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: (localeInitializer: LocaleInitializerService) => () => localeInitializer.initialize(),
      multi: true,
      deps: [LocaleInitializerService]
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
