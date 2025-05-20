import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-aluno',
  standalone: true, // Indica que o componente é standalone
  imports: [CommonModule, ReactiveFormsModule], // Adicione o CommonModule aqui
  templateUrl: './login-aluno.component.html',
  styleUrls: ['./login-aluno.component.css']
})
export class LoginAlunoComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Simulação de autenticação
      if (email === 'aluno@escola.com' && password === '123456') {
        localStorage.setItem('token', 'aluno-token'); // Salva o token no localStorage
        this.router.navigate(['/aluno']); // Redireciona para a página inicial do aluno
      } else {
        alert('Usuário ou senha inválidos!');
      }
    }
  }
}
