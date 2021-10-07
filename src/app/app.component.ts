import { 
  Component, 
  ComponentRef, 
  ViewContainerRef } from '@angular/core';
import { 
  ModalDialogService, 
  IModalDialog, 
  IModalDialogButton, 
  IModalDialogOptions, 
  SimpleModalComponent} from 'ngx-modal-dialog';

import { CustomModalComponent } from './custom-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password meter';
  password = "";
  strength:any;
  avatar = "assets/images/mario.png";

  constructor(
    public modalService: ModalDialogService, 
    private viewRef: ViewContainerRef
  ) { }

  changePassword(event:any){
    this.password = event.target.value;
    if(event.keyCode == 13)
      console.log(`enter key, strength = ${this.strength}`)
  }

  openNewDialog(event: any) {
    this.modalService.openDialog(this.viewRef, {
      title: 'Change your avatar',
      childComponent: CustomModalComponent,
      settings: {
        closeButtonClass: 'close'
      },
      data: { image: this.avatar },
      actionButtons: [
        {
          text: 'Cancel',
          buttonClass: 'btn btn-success',
          onAction: () => new Promise((resolve: any) => {
            resolve();
          })
        },
        {
          text: 'Save',
          buttonClass: 'btn btn-danger',
          onAction: () => new Promise((resolve: any) => {
            resolve();            
            this.avatar = window.avatar;
          })
        }
      ]
    });
  }

}