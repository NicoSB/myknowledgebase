import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  @Output() titleEmitter = new EventEmitter();
  titleFilter = '';

  searchForm: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'tags': new FormControl(null, [Validators.required]),
      'title': new FormControl(null)
    });

    this.searchForm.valueChanges.subscribe(data => {
      this.emitTitle();
    });
  }

  ngOnChanges() {
    console.log(this.titleFilter);
  }

  onSearch() {
    const tags: string = this.searchForm.get('tags').value;
    const tagArray = tags.split(' ');
    this.router.navigate(['entry'], { queryParams: { tags: tagArray }});
  }

  emitTitle() {
    this.titleEmitter.emit(this.searchForm.get('title').value);
  }
}
