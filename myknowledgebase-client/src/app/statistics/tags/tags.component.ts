import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../statistics.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: String[];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.statisticsService.observeGetAllTags().subscribe((tags: String[]) => {
      this.tags = tags;
    });
  }

}
