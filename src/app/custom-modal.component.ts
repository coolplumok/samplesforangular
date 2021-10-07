import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { Component, ComponentRef, ViewEncapsulation } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

declare global {
  interface Window { avatar: any; }
}

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CustomModalComponent implements IModalDialog {
  parentInfo: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';  

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    this.parentInfo = options.data;
  }  

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      window.avatar = this.croppedImage;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
  


}