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
      title: 'Estagiário em engenharia e análise de dados no NID',
      skills: ['Python', 'Spoon (Pentanho)', 'Git', 'Power Bi'],
      description: 'Refatorei e automatizei pipelines de dados com Python e Spoon, otimizando o fluxo e garantindo a qualidade da informação para integração em Power BI. Paralelamente, realizei análises de dados e implementei RLS no Power BI, proporcionando visualizações segmentadas. Desenvolvi também um sistema de envio automático de relatórios via Power Services, melhorando a comunicação e a tomada de decisão dos contribuintes.'
    },
    {
      title: 'Serviços de automação de workflows e integrações',
      skills: ['Ubuntu Server', 'n8n', 'Google APIs', 'Google / Meta APIs', 'Docker'],
      description: 'Desenvolvi automações de workflows e integrações de sistemas utilizando ferramentas como n8n, Google APIs e WhatsApp Business, em ambiente Docker. Isso resultou na otimização de processos críticos, aumentando a eficiência operacional e garantindo a escalabilidade das soluções implementadas.'
    }
  ];
} 