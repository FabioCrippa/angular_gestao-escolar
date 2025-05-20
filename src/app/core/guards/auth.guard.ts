import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isAuthenticated = user.token !== undefined;

    if (isAuthenticated && user.role === 'admin') {
      return true; // Permite o acesso à rota
    } else {
      this.router.navigate(['/loginEscola']); // Redireciona para a página de login
      return false; // Bloqueia o acesso à rota
    }
  }
}
