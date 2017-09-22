import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ErrorStateService {

  errorEmitter: EventEmitter<boolean>;
  private faulty = false;

  constructor() {
    this.errorEmitter = new EventEmitter();
  }

  public emitErrorState(state: boolean) {
    if (this.faulty !== state) {
      this.faulty = state;
      this.errorEmitter.next(this.faulty);
    }
  }

  public isFaulty(): boolean {
    return this.faulty;
  }
}
