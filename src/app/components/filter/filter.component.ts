import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

declare const setSortActive: any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  isActived: boolean = false;

  @Output() sortLimit = new EventEmitter();
  @Output() sortCarrier = new EventEmitter();
  @Output() sortRating = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onActive() {
    this.isActived = true;
  }

  onDisactive() {
    this.isActived = false;
  }

  onSetSortActive(e: Event) {
    setSortActive(e)
  }

}
