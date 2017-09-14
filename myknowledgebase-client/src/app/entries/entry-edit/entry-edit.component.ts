import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Entry} from '../entry/entry.model';
import {EntryService} from '../../entry.service';

@Component({
  selector: 'app-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {

  entryForm: FormGroup;
  entry: Entry;
  updateFailed = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private entryService: EntryService) {
  }

  ngOnInit() {
    this.entryForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null),
      'codeSnippet': new FormControl(null),
      'url': new FormControl(null),
      'tags': new FormControl(null, [Validators.required])
    });

    const id = +this.route.snapshot.paramMap.get('id');
    this.entryService.observeGetEntry(id).subscribe((entry: Entry) => {
      this.entry = entry;
      this.entryForm.setValue({
        'title': entry.title,
        'description': entry.description,
        'codeSnippet': entry.codeSnippet,
        'url': entry.url,
        'tags': entry.tags.join(' ')
      });
    });
  }

  onSubmit() {
    this.entry = this.entryForm.getRawValue();
    this.entry.id = +this.route.snapshot.paramMap.get('id');
    this.entry.tags = this.entryForm.get('tags').value.split(' ');
    console.log(this.entry);
    this.entryService.observeUpdateEntry(this.entry).subscribe(() => {
      this.updateFailed = false;
      this.router.navigate(['/entry/' + this.entry.id]);
    },
    () => {
      this.updateFailed = true;
    });
  }
}
