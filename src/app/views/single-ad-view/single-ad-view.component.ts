import { Component, OnInit } from '@angular/core';
import {Ad} from '../../models/ad.model';
import {AdServiceService} from '../../services/ad-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-ad-view',
  templateUrl: './single-ad-view.component.html',
  styleUrls: ['./single-ad-view.component.css']
})
export class SingleAdViewComponent implements OnInit {

  ad: Ad;

  constructor(private route: ActivatedRoute, private adService: AdServiceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.ad = this.adService.getAdById(+id);
  }

}
