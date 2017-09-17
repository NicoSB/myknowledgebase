import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'tags': new FormControl(null, [Validators.required])
    });
  }

  onSearch() {
    const tags: string = this.searchForm.get('tags').value;
    const tagArray = tags.split(' ');
    this.router.navigate(['entry'], { queryParams: { tags: tagArray }});
  }

}
