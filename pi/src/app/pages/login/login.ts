import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  erro = '';

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
  });

  entrar() {
    this.erro = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, senha } = this.form.getRawValue();
    const usuario = this.auth.login(email, senha);

    if (
      !usuario ||
      typeof usuario !== 'object' ||
      !('tipo' in usuario) ||
      (usuario.tipo !== 'veterinario' && usuario.tipo !== 'cliente')
    ) {
      this.erro = 'E-mail ou senha incorretos.';
      return;
    }

    this.router.navigate([usuario.tipo === 'veterinario' ? '/veterinario' : '/cliente']);
  }
}
