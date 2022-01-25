import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BimfaceFeaturesRoutingModule } from './bimface-features-routing.module';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';


@NgModule({
  declarations: [
    Feature1Component,
    Feature2Component
  ],
  imports: [
    CommonModule,
    BimfaceFeaturesRoutingModule
  ]
})
export class BimfaceFeaturesModule { }
