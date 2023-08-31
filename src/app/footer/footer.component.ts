import { Component } from '@angular/core';
import { BioService } from '../core/services/bio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  bio$ = this.bioService.getBio();

  constructor(private bioService: BioService) {

  }

}
