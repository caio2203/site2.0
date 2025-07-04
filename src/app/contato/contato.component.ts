import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  socialLinks = [
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/caio-gon%C3%A7alves-vieira-77642630b?otpToken=MTMwNjFjZTMxYTJkYzBjNWIzMjYwZmViNDExYmU2YjE4YWNkZDA0NTk5YTY4OTZiN2JjZTAwNjc0NjUyNTVmNGZlZDBkN2U5NzNlM2U2ZTU2M2FkZWZiODkwZjNhZGMwOTAzZTU3YzgwOWRkM2IzNjg3ZGYyZjEzLDEsMQ%3D%3D&midSig=0NoGSf9oRCsrQ1&eid=lw6gui-mcnhgfbm-4n&midToken=AQFEKMreRTzgww&trkEmail=eml-email_job_alert_digest_01-header-0-profile_glimmer-null-lw6gui%7Emcnhgfbm%7E4n-null-null&lipi=urn%3Ali%3Apage%3Aemail_email_job_alert_digest_01%3BWHhLVMYSTI%2BPD7oQG5JCVQ%3D%3D&trk=eml-email_job_alert_digest_01-header-0-profile_glimmer&originalSubdomain=br'},
    { icon: 'fab fa-github', url: 'https://github.com/caio2203'},
    { icon: 'fab fa-twitter', url: 'https://wa.me/557798333160?text=Olá%20Caio,%20tudo%20bem?%0AGostaria%20de%20fazer%20uma%20proposta%20a%20você%21'},
    { icon: 'fas fa-envelope', url: 'https://mail.google.com/mail/?view=cm&to=caiogoncalvesvieira11@gmail.com&su=Proposta%20Comercial&body=Olá%20Caio,%0A%0AEstou%20entrando%20em%20contato%20para...%0A%0AAtenciosamente,'},
  ];
  
  contactText = 'Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!';
}
