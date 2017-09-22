import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Entry} from '../entry/entry.model';
import {EntryService} from '../../entry.service';

import {Location} from '@angular/common';
import {ErrorStateService} from "../../error-state.service";

@Component({
  selector: 'app-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {

  entryForm: FormGroup;
  entry: Entry;
  updateFailed = false;
  editMode = false;
  id: Number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private entryService: EntryService,
              private errorStateService: ErrorStateService,
              private location: Location) {
  }

  ngOnInit() {
    this.entryForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null),
      'codeSnippet': new FormControl(null),
      'url': new FormControl(null),
      'tags': new FormControl(null, [Validators.required])
    });

    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.editMode = true;
      this.errorStateService.emitErrorState(false);
      this.entryService.observeGetEntry(this.id).subscribe((entry: Entry) => {
        this.entry = entry;
        this.entryForm.setValue({
          'title': entry.title,
          'description': entry.description,
          'codeSnippet': entry.codeSnippet,
          'url': entry.url,
          'tags': entry.tags.join(' ')
        });
      },
      (error => {
        console.log(error);
        this.errorStateService.emitErrorState(true);
      }));
    }
  }

  onSubmit() {
    this.entry = this.entryForm.getRawValue();
    this.entry.tags = this.entryForm.get('tags').value.split(' ');

    if (this.editMode) {
      this.entry.id = this.id;
      this.entryService.observeUpdateEntry(this.entry).subscribe(() => {
          this.updateFailed = false;
          this.router.navigate(['/entry/' + this.entry.id]);
        },
        () => {
          this.updateFailed = true;
        });
    } else {
      this.entryService.observeCreateEntry(this.entry).subscribe((entry: Entry) => {
          this.updateFailed = false;
          this.router.navigate(['/entry/' + entry.id]);
        },
        () => {
          this.updateFailed = true;
        });
    }
  }

  onCancel() {
    this.location.back();
  }
}
