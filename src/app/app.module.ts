import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { CustomModalComponent } from './custom-modal.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordStrengthMeterModule,
    ModalDialogModule.forRoot(),
    ImageCropperModule,
  ],
  declarations: [
    AppComponent,
    CustomModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
