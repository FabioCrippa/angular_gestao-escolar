import { Component } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent {
  sendWhatsAppMessage() {
    const recipient = (document.getElementById('recipient') as HTMLSelectElement).value;
    const messageContent = (document.getElementById('message-content') as HTMLTextAreaElement).value;

    if (recipient && messageContent) {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(messageContent)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Por favor, preencha todos os campos antes de enviar.');
    }
  }

  sendEmailMessage() {
    const recipient = (document.getElementById('recipient') as HTMLSelectElement).value;
    const messageContent = (document.getElementById('message-content') as HTMLTextAreaElement).value;

    if (recipient && messageContent) {
      const mailtoUrl = `mailto:?subject=Mensagem Importante&body=${encodeURIComponent(messageContent)}`;
      window.open(mailtoUrl, '_blank');
    } else {
      alert('Por favor, preencha todos os campos antes de enviar.');
    }
  }
}
