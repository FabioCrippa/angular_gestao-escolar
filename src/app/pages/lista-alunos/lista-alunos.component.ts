import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent {
  students = [
    {
      matricula: '01000',
      name: 'Gabrieli Crippa Sancassani',
      photo: 'https://img.icons8.com/?size=100&id=wBIX79CjJh8m&format=png&color=000000',
      curso: 'Ensino Fundamental',
      turma: '4A',
      ra: '33.333.333-33',
      cpf: '222.222.222-22',
      dataNascimento: '01/11/2003',
      genero: 'Feminino',
      nomeMae: 'Natalia Crippa Sancassani',
      nomePai: 'André Luis Sancassani',
      endereco: 'Avenida Fortunato Bressan, 01',
      bairro: 'Jardim Brasília',
      cep: '14800-000',
      cidade: 'Araraquara',
      estado: 'SP',
      contato: '16-9999.9999'
    },
    {
      matricula: '01001',
      name: 'Crippa Sancassani',
      photo: 'https://img.icons8.com/?size=100&id=wBIX79CjJh8m&format=png&color=000000',
      curso: 'Ensino Fundamental',
      turma: '4A',
      ra: '33.333.333-33',
      cpf: '222.222.222-22',
      dataNascimento: '01/11/2003',
      genero: 'Feminino',
      nomeMae: 'Natalia Crippa Sancassani',
      nomePai: 'André Luis Sancassani',
      endereco: 'Avenida Fortunato Bressan, 01',
      bairro: 'Jardim Brasília',
      cep: '14800-000',
      cidade: 'Araraquara',
      estado: 'SP',
      contato: '16-9999.9999'
    }
    // Adicione mais estudantes conforme necessário
  ];

  filteredStudents = [...this.students]; // Inicializa com todos os estudantes

  filterStudents(event: Event) {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredStudents = this.students.filter(student =>
      student.name.toLowerCase().includes(input)
    );
  }
}
