import { Component, OnInit } from '@angular/core';
import { BioService} from 'src/app/core/services/bio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bio$ = this.bioService.getBio();

  respOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-5', useSmallerHeadings: true },
    { viewClasses: 'd-flex d-md-none', headingClass: '', useSmallerHeadings: true }
  ];

  constructor(private bioService: BioService) { }
}
