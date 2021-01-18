import {Component, Input, OnInit} from '@angular/core';
import {AdServiceService} from '../../services/ad-service.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() author: string;
  @Input() creationDate: string;

  detailsUrl: string;

  constructor(private adService: AdServiceService) {
  }

  ngOnInit(): void {
    this.detailsUrl = '/ad/' + this.id;
  }


}
