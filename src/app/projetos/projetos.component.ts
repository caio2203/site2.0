import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Project {
  name: string;
  description: string;
  topics: string[];
  html_url: string;
  homepage?: string;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
}

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Site Crigina Hair',
      description: 'Criei um site responsivo com Angular, TypeScript, HTML e CSS para apresentação de serviços de beleza. A integração com WhatsApp e a funcionalidade de agendamentos personalizados melhoraram a experiência do cliente e otimizaram o processo de marcação de serviços para o negócio.',
      topics: ['TypeScript', 'HTML', 'CSS'],
      html_url: 'privado',
      language: 'Angular'
    },
    {
      name: 'Automação via WhatsApp',
      description: 'Desenvolvi uma automação de agendamentos via WhatsApp, integrando Google Calendar e Sheets utilizando n8n em ambiente Dockerizado. Essa solução simplificou o processo de agendamento, reduzindo a carga de trabalho manual e melhorando a organização de compromissos.',
      topics: ['n8n', 'Docker', 'Google/Meta APIs'],
      html_url: 'privado',
      language: 'JavaScript'
    },
    {
      name: 'Análise de E-Commerce',
      description: 'Realizei a análise de um dataset de e-commerce utilizando Python, Pandas e Jupyter Notebook, identificando os produtos de melhor performance. Automatizei o download de gráficos, agilizando a visualização de insights e apoiando decisões estratégicas para otimização de vendas.',
      topics: ['Python', 'Pandas', 'Jupyter Notebook'],
      html_url: 'https://github.com/caio2203/projeto_ecommerce',
      language: 'Pandas'
    }
  ];
  isLoading = true;
  error = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Não filtre os projetos privados!
  }

  fetchGitHubProjects(): void {
    const url = 'https://api.github.com/users/seu-usuario/repos?sort=updated&direction=desc';
    
    this.http.get<Project[]>(url).subscribe({
      next: (projects) => {
        this.projects = projects
          .filter(p => p.description)
          .slice(0, 6);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching projects:', err);
        this.error = true;
        this.isLoading = false;
        this.projects = this.getFallbackProjects();
      }
    });
  }

  private getFallbackProjects(): Project[] {
    return [
      {
        name: 'Site Crigina Hair',
        description: 'Criei um site responsivo com Angular, TypeScript, HTML e CSS para apresentação de serviços de beleza. A integração com WhatsApp e a funcionalidade de agendamentos personalizados melhoraram a experiência do cliente e otimizaram o processo de marcação de serviços para o negócio.',
        topics: ['TypeScript', 'HTML', 'CSS'],
        html_url: 'privado',
        language: 'Angular'
      },
      {
        name: 'Automação via WhatsApp',
        description: 'Desenvolvi uma automação de agendamentos via WhatsApp, integrando Google Calendar e Sheets utilizando n8n em ambiente Dockerizado. Essa solução simplificou o processo de agendamento, reduzindo a carga de trabalho manual e melhorando a organização de compromissos.',
        topics: ['n8n', 'Docker', 'Google/Meta APIs'],
        html_url: 'privado',
        language: 'Angular'
      },
      {
        name: 'Análise de E-Commerce',
        description: 'Realizei a análise de um dataset de e-commerce utilizando Python, Pandas e Jupyter Notebook, identificando os produtos de melhor performance. Automatizei o download de gráficos, agilizando a visualização de insights e apoiando decisões estratégicas para otimização de vendas.',
        topics: ['Python', 'Pandas', 'Jupyer Notebook'],
        html_url: 'https://github.com/caio2203/projeto_ecommerce',
        language: 'Pandas'
      }
    ];
  }
} 