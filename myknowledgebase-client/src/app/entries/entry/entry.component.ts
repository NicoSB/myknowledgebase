import {Component, Input, OnInit} from '@angular/core';
import {Entry} from './entry.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onView() {
    this.router.navigate(['/entry', this.entry.id]);
  }

}
