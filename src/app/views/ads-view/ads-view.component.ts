import { Component, OnInit } from '@angular/core';
import {AdServiceService} from '../../services/ad-service.service';
import {Router} from '@angular/router';
import {Ad} from '../../models/ad.model';

@Component({
  selector: 'app-ads-view',
  templateUrl: './ads-view.component.html',
  styleUrls: ['./ads-view.component.css']
})
export class AdsViewComponent implements OnInit {

  ads: Array<Ad>;

  constructor(private adsService: AdServiceService, private router: Router) { }

  ngOnInit(): void {
    this.ads = this.adsService.ads;
  }

}
