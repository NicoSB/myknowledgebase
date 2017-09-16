import { Component, OnInit } from '@angular/core';
import {Entry} from './entry/entry.model';
import {EntryService} from '../entry.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  entries: Entry[];

  constructor(
    private entryService: EntryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.entryService.observeGetAllEntries().subscribe((entries: Entry[]) => {
      this.entries = entries;
    });
  }

  onAdd() {
    this.router.navigate(['entry', 'new']);
  }
}
