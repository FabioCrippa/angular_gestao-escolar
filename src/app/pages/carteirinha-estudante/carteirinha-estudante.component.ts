import { Component } from '@angular/core';

@Component({
  selector: 'app-carteirinha-estudante',
  templateUrl: './carteirinha-estudante.component.html',
  styleUrls: ['./carteirinha-estudante.component.css']
})
export class CarteirinhaEstudanteComponent {
  students = [
    {
      name: 'Gabrieli Crippa Sancassani',
      matricula: '01000',
      curso: 'Ensino Fundamental',
      turma: '4A',
      ra: '33.333.333-33',
      dataNascimento: '01/11/2003'
    },
    {
      name: 'Luis Crippa Sancassani',
      matricula: '01001',
      curso: 'Ensino Fundamental',
      turma: '3B',
      ra: '55.555.555-55',
      dataNascimento: '02/06/2002'
    },
    {
      name: 'Bárbara Crippa',
      matricula: '01003',
      curso: 'Ensino Médio',
      turma: '1A',
      ra: '66.666.666-66',
      dataNascimento: '15/02/2010'
    }
  ];

  selectedStudent: any = {};

  filterTable(event: Event) {
    const input = (event.target as HTMLInputElement).value.toUpperCase();
    const filteredStudent = this.students.find(student =>
      student.name.toUpperCase().includes(input)
    );

    // Atualiza o estudante selecionado com base no filtro
    if (filteredStudent) {
      this.selectedStudent = filteredStudent;
    } else {
      this.selectedStudent = {};
    }
  }

  selectStudent(student: any) {
    this.selectedStudent = student;
  }

  printCard() {
    window.print();
  }
}
