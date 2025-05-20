import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atividades',
  standalone: true,
  imports: [CommonModule], // Adicione CommonModule aqui
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent {
  activities = [
    {
      title: 'Projeto de Matemática',
      student: 'Ana Souza',
      subject: 'Matemática',
      description: 'Construção de sólidos geométricos com material reciclável.',
      image: 'https://img.icons8.com/color/300/geometry.png'
    },
    {
      title: 'Pintura em Tela',
      student: 'Carlos Lima',
      subject: 'Artes',
      description: 'Explorando cores e formas na pintura livre.',
      image: 'https://img.icons8.com/color/300/paint-palette.png'
    },
    {
      title: 'Projeto de Frações',
      student: 'Gabrieli Crippa',
      subject: 'Matemática',
      description: 'Um projeto que explora conceitos de frações usando materiais recicláveis.',
      image: 'https://img.icons8.com/color/300/pie-chart.png' // imagem ilustrativa
    },
    {
      title: 'Redação sobre Meio Ambiente',
      student: 'Luis Sancassani',
      subject: 'Português',
      description: 'Uma redação criativa sobre a importância da preservação ambiental.',
      image: 'https://img.icons8.com/color/300/earth-planet.png' // imagem ilustrativa
    },
    {
      title: 'Experimento de Plantas',
      student: 'Beatriz Lima',
      subject: 'Ciências',
      description: 'Um experimento que demonstra o processo de fotossíntese.',
      image: 'https://img.icons8.com/color/300/geometry.png'
    },
    {
      title: 'Linha do Tempo da História',
      student: 'Carlos Guimarães',
      subject: 'História',
      description: 'Uma linha do tempo interativa sobre a Revolução Industrial.',
      image: 'https://img.icons8.com/color/300/earth-planet.png'
    },
    {
      title: 'Pintura Abstrata',
      student: 'Ana Clara Souza',
      subject: 'Artes',
      description: 'Uma pintura abstrata que explora cores e formas geométricas.',
      image: 'https://img.icons8.com/color/300/pie-chart.png'
    },
    
  ];

  filteredActivities = this.activities;

  filterActivities(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'all') {
      this.filteredActivities = this.activities;
    } else {
      this.filteredActivities = this.activities.filter(a => a.subject === value);
    }
  }
}
