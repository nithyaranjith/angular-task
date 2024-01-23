import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  // model: any;
  // constructor() { }
  // ngonInit(): void {
  //   this.model = [
  //     {
  //       id: 1345, 
  //       Name: 'orange',
  //       PhoneNumber: 9524414213,
  //       Email: "orange123gmail.com",
  //       city: 'chennai'
  //     },
  //     {
  //       id: 1466,
  //       Name: 'mango',
  //       PhoneNumber: 9524414214,
  //       Email: "mango123gmail.com",
  //       city: 'thiruvannamalai'
  //     },
  //     {
  //       id: 1345,
  //       Name: 'grapes',
  //       PhoneNumber: 9524414215,
  //       Email: "grape123gmail.com",
  //       city: 'chennai'
  //     },
  //   ]
  // }
  // headers = ['Id','Name','PhoneNumber','Email','city'];
  // rows = [
  //   {
  //     id: 1345, 
  //     Name: 'orange',
  //     PhoneNumber: 9524414213,
  //     Email: "orange123gmail.com",
  //     city: 'chennai'
  //   },
  //   {
  //     id: 1466,
  //     Name: 'mango',
  //     PhoneNumber: 9524414214,
  //     Email: "mango123gmail.com",
  //     city: 'thiruvannamalai'
  //   },
  //   {
  //     id: 1345,
  //     Name: 'grapes',
  //     PhoneNumber: 9524414215,
  //     Email: "grape123gmail.com",
  //     city: 'chennai'
  //   },
  // ]

}
