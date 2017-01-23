import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Collectable } from '../shared/collectable.model';
import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-konfirmasi-pembelian',
  templateUrl: './konfirmasi-pembelian.component.html',
  styleUrls: ['./konfirmasi-pembelian.component.css']
})
export class KonfirmasiPembelianComponent implements OnInit {
	 collectedItems: Collectable[] = [];

  @Input() 
  myName : any; 
  myAddress : any;
  myProv : any;
  myKota : any;
  myPos : any;
  myhp : any;
  myrek :any;
  
  
   
  constructor ( private router : Router, private service : CollectableService, private location: Location)
  {
	this.myName = service.getNama();
	this.myAddress=service.getAlamat();
	this.myProv=service.getProvinsi();
	this.myKota=service.getKota();
	this.myPos=service.getKodePos();
	this.myhp=service.getNoHp();
	this.myrek=service.getRek();
	}
	
	
	ngOnInit() {
		this.collectedItems = this.service.getCollection();
	}
	
}
