import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EntryService} from '../../entry.service';
import {Entry} from '../entry/entry.model';
import {HighlightJsService} from 'angular2-highlight-js';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
  private entry: Entry;
  private id: Number;
  private deleteFailed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entryService: EntryService,
    private highlightService: HighlightJsService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.entryService.observeGetEntry(this.id).subscribe((entry: Entry) => {
      this.entry = entry;
    });
  }


  onEdit() {
    this.router.navigate(['edit'], {relativeTo : this.route});
  }

  onDelete() {
    this.entryService.observeDeleteEntry(this.id).subscribe(() => {
        this.deleteFailed = false;
        this.router.navigate(['entry']);
    },
    () => {
      this.deleteFailed = true;
    });
  }

  wrapCodeSnippet() {
    return '<pre><code class="highlight">' + this.entry.codeSnippet + '</code></pre>';
  }
}
