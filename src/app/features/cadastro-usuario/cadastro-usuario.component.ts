import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importa o ReactiveFormsModule
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  userForm: FormGroup;
  generatedLogin: string = '';
  generatedPassword: string = '';

  constructor(private fb: FormBuilder) {
    // Inicializa o formulário
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });

    // Gera login e senha automaticamente ao preencher o formulário
    this.userForm.valueChanges.subscribe(() => {
      this.generateLoginAndPassword();
    });
  }

  // Gera login e senha com base nos dados do formulário
  generateLoginAndPassword() {
    const name = this.userForm.get('name')?.value || '';
    const email = this.userForm.get('email')?.value || '';

    // Gera o login com base no nome e no email
    this.generatedLogin = name.toLowerCase().replace(/\s+/g, '.') + '@' + email.split('@')[1];

    // Gera uma senha aleatória
    this.generatedPassword = Math.random().toString(36).slice(-8); // Exemplo: "a1b2c3d4"
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData = {
        ...this.userForm.value,
        login: this.generatedLogin,
        password: this.generatedPassword
      };

      // Salva os dados no localStorage
      localStorage.setItem('user', JSON.stringify(userData));

      console.log('Usuário cadastrado e salvo no localStorage:', userData);

      // Aqui você pode redirecionar ou exibir uma mensagem de sucesso
    }
  }
}
