import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent implements AfterViewInit {
  @ViewChild('tiltBox', { static: false }) tiltBox!: ElementRef;

  paragraphs = [
    'Olá! Sou Caio Gonçalves Vieira, Engenheiro de Dados Jr. com experiência na manutenção e construção de pipelines de dados, análise exploratória e desenvolvimento de automações para otimização de processos.',
    'Sou apaixonado por projetar e escalar pipelines de dados eficientes, assegurando a integridade, disponibilidade e governança da informação, com o objetivo de viabilizar análises avançadas e decisões orientadas por dados. Também possuo experiência em ambientes Linux, principalmente com Ubuntu Server e Fedora, onde atuo na automação de tarefas, deploy de serviços e administração de servidores pessoais.',
    'Cursando Sistemas de Informação e com experiência prática na área, trago uma abordagem multidisciplinar para resolver problemas desafiadores.'
  ];

  hoverClass = '';

  ngAfterViewInit() {
    if ((window as any).VanillaTilt && this.tiltBox) {
      (window as any).VanillaTilt.init(this.tiltBox.nativeElement, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      });
    }
  }

  setHover(classe: string) {
    this.hoverClass = classe;
  }

  clearHover() {
    this.hoverClass = '';
  }
} 