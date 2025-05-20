import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // Importe RouterModule

@Component({
  selector: 'app-escola',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicione RouterModule aqui
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent {
  showUserMenu = false;

  usuarioLogado = {
    nome: 'Mariana' // ou substitua pelo nome do usuário autenticado
  };

  dashboardItems = [
    { icon: 'https://img.icons8.com/fluency/48/signing-a-document.png', label: 'Cadastrar professor', link: '/cadastroProfessor' },
    { icon: 'https://img.icons8.com/fluency/48/signing-a-document.png', label: 'Cadastrar aluno', link: '/cadastroAluno' },
    { icon: 'https://img.icons8.com/color/48/identification-documents.png', label: 'Carteirinha de estudante', link: '/carteirinhaEstudante' },
    { icon: 'https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-cap-back-to-school-justicon-lineal-color-justicon.png', label: 'Lista de alunos', link: '/listaAlunos' },
    { icon: 'https://img.icons8.com/ios/50/teacher.png', label: 'Lista de professores', link: '/listaProfessores' },
    { icon: 'https://img.icons8.com/color/48/exam.png', label: 'Notas', link: '/notas' },
    { icon: 'https://img.icons8.com/ios/50/commercial--v1.png', label: 'Comunicados', link: '/comunicados' },
    { icon: 'https://img.icons8.com/stickers/50/journal.png', label: 'Diário', link: '/diario' },
    { icon: 'https://img.icons8.com/color/48/calendar--v1.png', label: 'Atividades', link: '/atividades' },
    { icon: 'https://img.icons8.com/flat-round/50/secured-letter--v1.png', label: 'Mensagens', link: '/mensagens' }
  ];

  constructor(private router: Router) {}

  logout() {
    // Aqui você pode limpar o token ou dados do usuário, se necessário
    this.router.navigate(['/home']);
  }
}
