import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { NavigationModule } from '@shared/components/navigation/navigation.module';
import { OpeningsTableModule } from './components/openings-table/openings-table.module';
import { OpeningsCgModule } from './components/openings-cg/openings-cg.module';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NavigationModule,
    OpeningsTableModule,
    OpeningsCgModule,
    AnalysisRoutingModule
  ],
  declarations: [
    AnalysisComponent
  ]
})
export class AnalysisModule { }
