import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	
	constructor(private http: Http) {}
	
	httpProduk(){
		return this.http.get('http://localhost:8000/produk_list/?format=json').map(
			(res) => res.json()
		);
	}
}