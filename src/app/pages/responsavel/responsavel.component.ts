import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-responsavel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './responsavel.component.html',
  styleUrls: ['./responsavel.component.css']
})
export class ResponsavelComponent {
  showUserMenu = false;

  logout() {
    // Sua lógica de logout
    window.location.href = '/home';
  }
}
