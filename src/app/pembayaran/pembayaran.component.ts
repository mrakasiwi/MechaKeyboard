import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-pembayaran',
  templateUrl: './pembayaran.component.html',
  styleUrls: ['./pembayaran.component.css']
})
export class PembayaranComponent implements OnInit {
/*
  @Input() 
  myName : any; 
  myAddress : any;
  myProv : any;
  myKota : any;
  myPos : any;
  myhp : any;
  myrek :any;
 
*/
  
  constructor ( router : Router, service : CollectableService)
  {
/*	this.myName = service.getNama();
	this.myAddress=service.getAlamat();
	this.myProv=service.getProvinsi();
	this.myKota=service.getKota();
	this.myPos=service.getKodePos();
	this.myhp=service.getNoHp();
	this.myrek=service.getRek();
/*			
    console.log('cone called');
	  	
	*/
  }
  
  ngOnInit() {
  }

}
