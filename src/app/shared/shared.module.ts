import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToolbarModule,
    ButtonModule,
    MenuModule,
    SidebarModule,
    DropdownModule,
    FormsModule,
  ],
})
export class SharedModule {}
