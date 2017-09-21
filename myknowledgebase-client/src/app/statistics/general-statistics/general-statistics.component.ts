import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../statistics.service';

@Component({
  selector: 'app-general-statistics',
  templateUrl: './general-statistics.component.html',
  styleUrls: ['./general-statistics.component.css']
})
export class GeneralStatisticsComponent implements OnInit {

  private entryCount: Number = -1;
  private tagCount: Number = -1;

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.statisticsService.observeGetTagCount().subscribe((tagCount: Number) => {
      this.tagCount = tagCount;
    });

    this.statisticsService.observeGetEntryCount().subscribe((entryCount: Number) => {
      this.entryCount = entryCount;
    });
  }

}
