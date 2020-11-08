import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.accountService.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if (token && !this.accountService.isTokenExpired(token)) {
      // O request é imutavel, ou seja, não é possível mudar nada
      // Faço o clone para conseguir mudar as propriedades
      // Passo o token de autenticação no header
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    // Retorna a request com o erro tratado
    return next.handle(request)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    debugger
    console.log(err.status)
    this.toastr.error('', 'Ocorreu um erro, tente novamente');
    // if (err.error instanceof ErrorEvent) {
    //   this.toastr.error('', 'Ocorreu um erro, tente novamente');
    //   // Erro de client-side ou de rede
    //   console.log('ALOOOOO');
    //   console.error('Ocorreu um erro:', err.error.message);
    // } else {
    //   this.toastr.error('', 'Ocorreu um erro, tente novamente');
    //   console.log('ALUUUUU');
    //   // Erro retornando pelo backend
    //   console.error(
    //     `Código do erro ${err.status}, ` +
    //     `Erro: ${JSON.stringify(err.error)}`);
    // }
    // // retornar um observable com uma mensagem amigavel.
    // // this.toastr.error('', 'Ocorreu um erro, tente novamente');
    return throwError('Ocorreu um erro, tente novamente');
  }
}
