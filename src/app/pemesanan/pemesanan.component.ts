import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-pemesanan',
  templateUrl: './pemesanan.component.html',
  styleUrls: ['./pemesanan.component.css']
})
export class PemesananComponent implements OnInit {

//  collectedItems: Collectable[] = [];

   constructor( private service: CollectableService, private router: Router) { 
		this.service = service;
		this.router = router;
   }

  ngOnInit() {
    //this.collectedItems = this.collectableService.getCollection();
  }
  
   send(str,str2, str3, str4, str5, str6, str7){
    //console.log(str,str2,str3,str4,str5,str6);
    this.service.saveData(str,str2,str3,str4,str5,str6, str7); 
    //console.log('str');
	//,'str','str','str','str','str');
    //this.router.navigate(['/pembayaran']);
  }

}
