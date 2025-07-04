import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent implements AfterViewInit {
  @ViewChild('tiltBox', { static: false }) tiltBox!: ElementRef;

  paragraphs = [
    'Olá! Sou Caio Gonçalves Vieira, Engenheiro de Dados Jr. com experiência em manuntenção e formação de pipelines, análise de aados e desenvolvimento de software.',
    'Sou apaixonado por projetar e otimizar pipelines de dados escaláveis, garantindo a integridade, disponibilidade e governança da informação para habilitar análises avançadas e decisões orientadas por dados.',
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