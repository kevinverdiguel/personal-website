import { Component } from '@angular/core';
import { BioService } from 'src/app/core/services/bio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bio$ = this.bioService.getBio();
  respOptions = [
    {viewClasses: 'd-none d-md-flex', headingclass: 'display-3', useSmallerHeadings: false},
    {viewClasses: 'd-none d-md-flex', headingclass: 'display-3', useSmallerHeadings: true},

  ]

  constructor(private bioService: BioService){}

}
