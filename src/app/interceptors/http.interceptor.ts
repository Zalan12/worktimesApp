import { HttpInterceptorFn } from '@angular/common/http';
<<<<<<< HEAD
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  const loadingService=inject(LoadingService)
  loadingService.show();

  return next(req).pipe(finalize(()=>loadingService.hide()));
=======
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs';
import { inject } from '@angular/core';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  
  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    finalize(() => loadingService.hide())
  );
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
};
