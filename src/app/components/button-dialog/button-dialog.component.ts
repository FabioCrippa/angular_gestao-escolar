import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-dialog',
  standalone: true,
  templateUrl: './button-dialog.component.html',
  styleUrls: ['./button-dialog.component.css'],
  imports: [MatDialogModule, MatButtonModule, CommonModule]
})
export class ButtonDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ButtonDialogComponent>,
    private router: Router
  ) {}

  closeDialogAndNavigate(route: string): void {
    this.dialogRef.close();
    this.router.navigate([route]);
  }
}
