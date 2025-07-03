import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent implements AfterViewInit {
  @ViewChild('tiltBox', { static: false }) tiltBox!: ElementRef;

  paragraphs = [
    'Olá! Sou Caio Gonçalves Vieira, Cientista de Dados com experiência em Machine Learning, Análise de Dados e Desenvolvimento de Software.',
    'Minha paixão é transformar dados complexos em soluções práticas que geram valor para negócios e sociedade.',
    'Com formação em Ciência da Computação e diversos cursos de especialização, trago uma abordagem multidisciplinar para resolver problemas desafiadores.'
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