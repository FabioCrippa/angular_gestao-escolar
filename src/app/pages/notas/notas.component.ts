import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Disciplina {
  nome: string;
  notas: number[];
  frequencias: number[];
}

interface Aluno {
  nome: string;
  ano: number;
  turma: string;
  disciplinas: Disciplina[];
}

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  aluno: Aluno = {
    nome: 'Gabrieli Crippa Sancassani',
    ano: 3,
    turma: 'A',
    disciplinas: [
      { nome: 'Matemática', notas: [8, 7, 9, 8], frequencias: [98, 97, 99, 100] },
      { nome: 'Português', notas: [6, 5, 7, 8], frequencias: [90, 92, 95, 93] },
      { nome: 'História', notas: [9, 8, 10, 9], frequencias: [100, 100, 100, 100] },
      { nome: 'Geografia', notas: [7, 8, 7, 8], frequencias: [98, 97, 99, 100] },
      { nome: 'Ciências', notas: [8, 7, 8, 9], frequencias: [97, 98, 99, 100] },
      { nome: 'Inglês', notas: [7, 8, 7, 8], frequencias: [96, 97, 98, 99] },
      { nome: 'Artes', notas: [9, 9, 10, 10], frequencias: [100, 100, 100, 100] },
      { nome: 'Educação Física', notas: [10, 10, 10, 10], frequencias: [100, 100, 100, 100] },
      { nome: 'Ensino Religioso', notas: [8, 8, 9, 9], frequencias: [99, 99, 100, 100] },
      { nome: 'Redação', notas: [7, 8, 7, 8], frequencias: [98, 97, 99, 100] },
      { nome: 'Informática', notas: [9, 9, 10, 10], frequencias: [100, 100, 100, 100] }
    ]
  };

  getMedia(disciplina: Disciplina): number {
    const soma = disciplina.notas.reduce((acc, n) => acc + n, 0);
    return +(soma / disciplina.notas.length).toFixed(1);
  }

  getFreqTotal(disciplina: Disciplina): number {
    const soma = disciplina.frequencias.reduce((acc, f) => acc + f, 0);
    return +(soma / disciplina.frequencias.length).toFixed(1);
  }

  getSituacao(disciplina: Disciplina): string {
    const media = this.getMedia(disciplina);
    const freq = this.getFreqTotal(disciplina);

    if (freq < 75) return 'Reprovado por falta';
    if (media >= 5) return 'Aprovado';
    if (media <= 4) return 'Reprovado';
    return 'Recuperação';
  }

  enviarPorEmail() {
    const aluno = this.aluno;
    let corpo = `Boletim Escolar%0D%0A`;
    corpo += `Aluno: ${aluno.nome}%0D%0A`;
    corpo += `Ano: ${aluno.ano} - Turma: ${aluno.turma}%0D%0A%0D%0A`;
    corpo += `Disciplina | Notas | Frequências | Média | Freq. Total | Situação%0D%0A`;

    aluno.disciplinas.forEach(d => {
      corpo += `${d.nome} | ${d.notas.join(', ')} | ${d.frequencias.join(', ')} | ${this.getMedia(d)} | ${this.getFreqTotal(d)}% | ${this.getSituacao(d)}%0D%0A`;
    });

    window.open(`mailto:?subject=Boletim Escolar de ${aluno.nome}&body=${corpo}`);
  }

  imprimirBoletim() {
    window.print();
  }
}
