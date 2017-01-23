import { Component, OnInit } from '@angular/core';

import { CollectableService } from '../shared/collectable.service';
import { Collectable } from '../shared/collectable.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	recordProduk = [];
	Produk = [];
  collectables: Collectable [] = [];

  AddToCart(item: Collectable){
    this.collectableService.addToCollection(item);
    alert(item.nama + ' berhasil ditambah kedalam cart');
  }

  constructor(private collectableService : CollectableService, private dataservice: DataService) { }

  ngOnInit() {
	  
	this.dataservice.httpProduk().subscribe(
		(data) => this.recordProduk = data.slice(1, 5)
		);
	this.dataservice.httpProduk().subscribe(
		(data) => this.Produk = data
	);
	
  }

}
