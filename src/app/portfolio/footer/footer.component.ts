import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  respOptions = [
    { viewClasses: 'd-none d-md-flex', headingclass: 'display-3', useSmallerHeadings: false },
    //{viewClasses: 'd-none d-md-flex', headingclass: 'display-3', useSmallerHeadings: true},

  ]
}
