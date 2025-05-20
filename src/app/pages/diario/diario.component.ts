import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {
  anoAtual = new Date().getFullYear();
  mesAtual = new Date().getMonth(); // 0 = Janeiro
  diaAtual = new Date().getDate();
  anoHoje = new Date().getFullYear();
  mesHoje = new Date().getMonth();

  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  get nomeMesAtual() {
    return this.meses[this.mesAtual];
  }

  // Feriados nacionais de 2025 (exemplo, adicione mais se quiser)
  feriadosAno: { [mes: number]: number[] } = {
    0: [1],           // Janeiro: Confraternização Universal
    1: [25],          // Fevereiro: Carnaval (exemplo)
    2: [4],           // Março: Carnaval (exemplo)
    3: [18, 21],      // Abril: Paixão de Cristo, Tiradentes
    4: [1],           // Maio: Dia do Trabalho
    8: [7],           // Setembro: Independência
    9: [12],          // Outubro: Nossa Sra. Aparecida
    10: [2, 15],      // Novembro: Finados, Proclamação da República
    11: [25]          // Dezembro: Natal
  };

  get feriadosMes(): number[] {
    return this.feriadosAno[this.mesAtual] || [];
  }

  semanasDoMes: (number | null)[][] = [];

  horariosAulas: string[] = [
    '1ª aula - 07:00 às 07:50',
    '2ª aula - 07:50 às 08:40',
    '3ª aula - 08:40 às 09:30',
    '4ª aula - 09:50 às 10:40',
    '5ª aula - 10:40 às 11:30',
    '6ª aula - 11:30 às 12:20'
  ];

  // Getter para ocultar "Intervalo" se você tiver no array
  get horariosAulasVisiveis() {
    return this.horariosAulas.filter(aula => !aula.startsWith('Intervalo'));
  }

  // Adicione esta linha para inicializar o valor selecionado
  horarioSelecionado = this.horariosAulasVisiveis[0];

  alunos = [
    { nome: 'Bernardo da Silva', presente: false },
    { nome: 'Bianca Lopes', presente: false },
    { nome: 'Beatriz Lima', presente: false },
    { nome: 'Carlos Guimarães', presente: false }
  ];

  ngOnInit() {
    this.gerarSemanasDoMes();
  }

  gerarSemanasDoMes() {
    const ano = this.anoAtual;
    const mes = this.mesAtual;
    const primeiroDiaSemana = new Date(ano, mes, 1).getDay();
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();

    const semanas: (number | null)[][] = [];
    let semana: (number | null)[] = Array(primeiroDiaSemana).fill(null);

    for (let dia = 1; dia <= ultimoDia; dia++) {
      semana.push(dia);
      if (semana.length === 7) {
        semanas.push(semana);
        semana = [];
      }
    }
    if (semana.length > 0) {
      while (semana.length < 7) semana.push(null);
      semanas.push(semana);
    }
    this.semanasDoMes = semanas;
  }

  avancarMes() {
    if (this.mesAtual === 11) {
      this.mesAtual = 0;
      this.anoAtual++;
    } else {
      this.mesAtual++;
    }
    this.gerarSemanasDoMes();
  }

  voltarMes() {
    if (this.mesAtual === 0) {
      this.mesAtual = 11;
      this.anoAtual--;
    } else {
      this.mesAtual--;
    }
    this.gerarSemanasDoMes();
  }

  togglePresenca(aluno: any) {
    aluno.presente = !aluno.presente;
  }

  salvarFrequencia() {
    alert('Frequência salva com sucesso!');
  }
}
