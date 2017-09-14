import { Component, OnInit } from '@angular/core';
import {Entry} from './entry/entry.model';
import {EntryService} from '../entry.service';

@Component({
  selector: 'app-home',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  entries: Entry[];

  constructor(private entryService: EntryService) {
  }

  ngOnInit() {
    this.entryService.observeGetAllEntries().subscribe((entries: Entry[]) => {
      this.entries = entries;
    });
  }

}
