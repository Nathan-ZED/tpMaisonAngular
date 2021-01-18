import {Component, Input, OnInit} from '@angular/core';
import {Ad} from '../../models/ad.model';
import {AdServiceService} from '../../services/ad-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() ads: Array<Ad>;

  constructor(private adsService: AdServiceService) { }

  ngOnInit(): void {
  }

}
