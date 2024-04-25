import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  title= "Ecommerce";

  public getYear() {
    return new Date().getUTCFullYear();
  }

}
