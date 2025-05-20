import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-escola',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importa o ReactiveFormsModule
  templateUrl: './login.escola.component.html',
  styleUrls: ['./login.escola.component.css']
})
export class LoginEscolaComponent {
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

      if (email === 'admin@escola.com' && password === '123456') {
        localStorage.setItem('token', 'exemplo-de-token');
        this.router.navigate(['/escola']);
      } else {
        alert('Usuário ou senha inválidos!');
      }
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
