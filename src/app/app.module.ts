import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    // ...
    ButtonModule,
    InputTextModule,
    DialogModule,
    TableModule,
    ToastModule,
  ]
})
export class AppModule {}
