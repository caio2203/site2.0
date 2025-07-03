import { Component } from '@angular/core';

interface Experience {
  title: string;
  skills: string[];
  description: string;
}

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {
  experiences: Experience[] = [
    {
      title: 'Cientista de Dados Sênior',
      skills: ['Python', 'TensorFlow', 'SQL'],
      description: 'Desenvolvimento de modelos preditivos para análise de mercado, alcançando 95% de precisão nas previsões.'
    },
    {
      title: 'Engenheiro de Machine Learning',
      skills: ['PyTorch', 'AWS', 'Docker'],
      description: 'Implementação de pipelines de dados escaláveis para processamento de grandes volumes de informação.'
    },
    {
      title: 'Analista de Dados',
      skills: ['Power BI', 'Tableau', 'Excel'],
      description: 'Criação de dashboards interativos para visualização de dados estratégicos para tomada de decisão.'
    }
  ];
} 