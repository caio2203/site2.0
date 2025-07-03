import { Component, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  navLinks = [
    { path: '#inicio', label: 'Início' },
    { path: '#sobre-mim', label: 'Sobre Mim' },
    { path: '#projetos', label: 'Projetos' },
    { path: '#experiencias', label: 'Experiências' },
    { path: '#contato', label: 'Contato' }
  ];

  private lastScrollTop = 0;
  private retractTimeout: any = null;
  private state: 'showing' | 'retracting' | 'hiding' = 'showing';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement.querySelector('header'), 'showing');
    this.state = 'showing';
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  handleScroll = (): void => {
    const header = this.el.nativeElement.querySelector('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop <= 100) {
      this.renderer.removeClass(header, 'hiding');
      this.renderer.removeClass(header, 'retracting');
      this.renderer.addClass(header, 'showing');
      this.state = 'showing';
      this.lastScrollTop = scrollTop;
      return;
    }
    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      // Só executa retração se não estiver retraindo ou escondido
      if (this.state === 'showing') {
        this.renderer.removeClass(header, 'showing');
        this.renderer.removeClass(header, 'hiding');
        this.renderer.addClass(header, 'retracting');
        this.state = 'retracting';
        clearTimeout(this.retractTimeout);
        this.retractTimeout = setTimeout(() => {
          this.renderer.removeClass(header, 'retracting');
          this.renderer.addClass(header, 'hiding');
          this.state = 'hiding';
        }, 400);
      }
    } else if (scrollTop < this.lastScrollTop) {
      clearTimeout(this.retractTimeout);
      this.renderer.removeClass(header, 'hiding');
      this.renderer.removeClass(header, 'retracting');
      this.renderer.addClass(header, 'showing');
      this.state = 'showing';
    }
    this.lastScrollTop = scrollTop;
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
    clearTimeout(this.retractTimeout);
  }
} 