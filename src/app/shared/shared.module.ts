import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequestBoxInfoComponent } from '@root/main/request-box-info/request-box-info.component';
import { MaterialModule } from './material.module';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { UploadFilesComponent } from './upload-files/upload-files.component';




@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    LoadingComponent,
    UploadFilesComponent
    // RequestBoxInfoComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    LoadingComponent,
    UploadFilesComponent
    // RequestBoxInfoComponent
  ]
})
export class SharedModule { }
