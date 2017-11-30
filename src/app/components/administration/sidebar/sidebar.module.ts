import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarRoutingModule } from './sidebar-routing.module';

import { MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
     CommonModule,
     SidebarRoutingModule,
     MatSidenavModule,
     BrowserAnimationsModule,
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent, SidebarRoutingModule]
})

export class SidebarModule { }
