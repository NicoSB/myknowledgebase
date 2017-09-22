import {Component, OnInit} from '@angular/core';
import {ErrorStateService} from './error-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private faulty: boolean;

  constructor(private errorStateService: ErrorStateService) {}

  ngOnInit() {
    this.errorStateService.errorEmitter.subscribe((faulty: boolean) => {
      this.faulty = faulty;
    });
    this.faulty = this.errorStateService.isFaulty();
  }
}
