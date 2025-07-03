import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  socialLinks = [
    { icon: 'fab fa-linkedin-in', url: '#' },
    { icon: 'fab fa-github', url: '#' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fas fa-envelope', url: '#' }
  ];
  
  contactText = 'Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!';
}
