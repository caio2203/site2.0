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
  commits: number;
  branches: number;
}

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Plataforma de Cursos Online',
      description: 'Plataforma para criação e venda de cursos online, com área do aluno e integração de pagamentos.',
      topics: ['angular', 'typescript', 'stripe'],
      html_url: '#',
      language: 'TypeScript',
      commits: 42,
      branches: 3
    },
    {
      name: 'App de Tarefas Colaborativas',
      description: 'Aplicativo web para gerenciamento de tarefas em equipe, com chat integrado e notificações em tempo real.',
      topics: ['nodejs', 'socket.io', 'mongodb'],
      html_url: '#',
      language: 'JavaScript',
      commits: 27,
      branches: 2
    },
    {
      name: 'Reconhecimento Facial em Imagens',
      description: 'Sistema de reconhecimento facial para autenticação e controle de acesso usando deep learning.',
      topics: ['python', 'opencv', 'deep-learning'],
      html_url: '#',
      language: 'Python',
      commits: 58,
      branches: 4
    }
  ];
  isLoading = true;
  error = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.fetchGitHubProjects();
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
        name: 'Análise de Dados Financeiros',
        description: 'Sistema de análise preditiva para mercado financeiro usando Python e Machine Learning',
        topics: ['python', 'machine-learning', 'pandas'],
        html_url: '#',
        language: 'Python',
        commits: 30,
        branches: 2
      },
      {
        name: 'Dashboard de BI',
        description: 'Dashboard interativo para visualização de métricas de negócios',
        topics: ['powerbi', 'data-visualization', 'business-intelligence'],
        html_url: '#',
        language: 'DAX',
        commits: 15,
        branches: 1
      },
      {
        name: 'Plataforma de Cursos Online',
        description: 'Plataforma para criação e venda de cursos online, com área do aluno e integração de pagamentos.',
        topics: ['angular', 'typescript', 'stripe'],
        html_url: '#',
        language: 'TypeScript',
        commits: 42,
        branches: 3
      },
      {
        name: 'App de Tarefas Colaborativas',
        description: 'Aplicativo web para gerenciamento de tarefas em equipe, com chat integrado e notificações em tempo real.',
        topics: ['nodejs', 'socket.io', 'mongodb'],
        html_url: '#',
        language: 'JavaScript',
        commits: 27,
        branches: 2
      },
      {
        name: 'Reconhecimento Facial em Imagens',
        description: 'Sistema de reconhecimento facial para autenticação e controle de acesso usando deep learning.',
        topics: ['python', 'opencv', 'deep-learning'],
        html_url: '#',
        language: 'Python',
        commits: 58,
        branches: 4
      }
    ];
  }
} 