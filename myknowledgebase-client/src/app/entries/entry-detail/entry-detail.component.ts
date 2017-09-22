import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EntryService} from '../../entry.service';
import {Entry} from '../entry/entry.model';
import {ErrorStateService} from '../../error-state.service';

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
    private errorStateService: ErrorStateService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.entryService.observeGetEntry(this.id).subscribe((entry: Entry) => {
      this.entry = entry;
      this.errorStateService.emitErrorState(false);
    },
    (error => {
      console.log(error);
      this.errorStateService.emitErrorState(true);
    }));
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
