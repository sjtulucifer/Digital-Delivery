import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BimfaceFeaturesRoutingModule } from './bimface-features-routing.module';
import { Feature1Component } from './feature1/feature1.component';


@NgModule({
  declarations: [
    Feature1Component
  ],
  imports: [
    CommonModule,
    BimfaceFeaturesRoutingModule
  ]
})
export class BimfaceFeaturesModule { }
