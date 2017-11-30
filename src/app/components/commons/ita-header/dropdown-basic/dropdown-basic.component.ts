import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  phone: string;
  email: string;
}

// create user mock for testing
const User: User = {
  name: 'Andriy',
  phone: '555-5555',
  email: 'vasya@gmail.com'
};

@Component({
  // selector: 'cmp-ita-dropdown-basic',
  selector: 'cmp-ita-email',
  templateUrl: './dropdown-basic.component.html',
})
export class DropdownBasicComponent implements OnInit {
public user: User;
constructor() {
  // TODO
}

public ngOnInit() {
  this.user = User;
}
}
