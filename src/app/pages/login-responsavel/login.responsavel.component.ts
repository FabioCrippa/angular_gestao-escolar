import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-responsavel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importa o ReactiveFormsModule
  templateUrl: './login.responsavel.component.html',
  styleUrls: ['./login.responsavel.component.css']
})
export class LoginResponsavelComponent {
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
      if (email === 'responsavel@escola.com' && password === '123456') {
        localStorage.setItem('token', 'responsavel-token'); // Salva o token no localStorage
        this.router.navigate(['/responsavel']); // Redireciona para a página inicial do responsável
      } else {
        alert('Usuário ou senha inválidos!');
      }
    }
  }
}
