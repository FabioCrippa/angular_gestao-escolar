import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, { provide: Router, useValue: routerSpy }]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('deve permitir acesso se o usuário estiver autenticado', () => {
    localStorage.setItem('token', 'exemplo-de-token');
    expect(guard.canActivate()).toBeTrue();
  });

  it('deve bloquear acesso e redirecionar para /loginEscola se o usuário não estiver autenticado', () => {
    localStorage.removeItem('token');
    expect(guard.canActivate()).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/loginEscola']);
  });
});
