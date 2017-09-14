import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EntryService} from '../../entry.service';
import {Entry} from '../entry/entry.model';
import {HighlightJsService} from 'angular2-highlight-js';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit, AfterViewInit {
  private entry: Entry;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entryService: EntryService,
    private highlightService: HighlightJsService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.entryService.observeGetEntry(id).subscribe((entry: Entry) => {
      this.entry = entry;
    });
  }

  ngAfterViewInit(): void {
    this.highlightService.highlight(this.el.nativeElement.querySelectorAll());
  }


  onEdit() {
    this.router.navigate(['edit'], {relativeTo : this.route});
  }
}
