import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { BehaviorSubject } from 'rxjs';
=======
import { BehaviorSubject, retry } from 'rxjs';
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
<<<<<<< HEAD
  private loadingCount=0;
  loading$ = this.loadingSubject.asObservable();

  show()
  {
=======
  loading$ = this.loadingSubject.asObservable();

  private loadingCount = 0;

  show() {
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
    this.loadingCount++;
    this.emitLoadingState(true);
  }

<<<<<<< HEAD

  hide()
    {
      if(this.loadingCount===0)
      {
        return
      }

      this.loadingCount--;
      if(this.loadingCount===0)
      {
        this.emitLoadingState(false)
      }
    
  }

  private emitLoadingState(isLoading:boolean)
  {
      Promise.resolve().then(()=>{this.loadingSubject.next(isLoading)

      })
=======
  hide() {

    if(this.loadingCount === 0 ){
      return;
    }

    this.loadingCount--;

    if (this.loadingCount === 0){
      this.emitLoadingState(false);
    }
  }

  private emitLoadingState(isLoading: boolean) {
    Promise.resolve().then(() => {
      this.loadingSubject.next(isLoading);
    });
>>>>>>> d9d13c4c0c43c0e1df7b9d06f5d62517314f620c
  }
}
