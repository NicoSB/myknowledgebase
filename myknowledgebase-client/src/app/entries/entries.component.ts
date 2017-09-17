import {Component, OnDestroy, OnInit} from '@angular/core';
import {Entry} from './entry/entry.model';
import {EntryService} from '../entry.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {isArray} from "util";

@Component({
  selector: 'app-home',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit, OnDestroy {

  entries: Entry[];
  tags: string[] = [];
  subscription: Subscription;

  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route
      .queryParams
      .subscribe(params => {
        const tags = params['tags'] || [];
        if (!isArray(tags)) {
          this.tags.push(tags);
        } else {
          this.tags = tags;
        }
        this.fetchEntries();
    });
  }

  private fetchEntries() {
    if (this.tags.length === 0) {
      this.entryService.observeGetAllEntries().subscribe((entries: Entry[]) => {
        this.entries = entries;
      });
    } else {
      this.entryService.observeGetEntriesByTags(this.tags).subscribe((entries: Entry[]) => {
        this.entries = entries;
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAdd() {
    this.router.navigate(['entry', 'new']);
  }
}
