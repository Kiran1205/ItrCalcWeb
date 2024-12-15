import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersComponent {
  constructor() { }

}
