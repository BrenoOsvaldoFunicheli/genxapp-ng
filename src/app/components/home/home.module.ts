import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { TablesComponent } from '../../components/home/tables/tables.component';
import { UserEditComponent } from '../../components/home/user-edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    TablesComponent,
    UserEditComponent
  ],
  providers: []
})

export class HomeModule {}
