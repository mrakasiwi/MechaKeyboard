import { Collectable } from './collectable.model';
import { alamat_customer } from './alamat.model';

export interface myData {
   nama:string;
   Alamat:string;
   Provinsi:string;
   Kota:string;
   Kode_pos:string;
   no_hp:string;
   no_rekening:string;

}

export class CollectableService {

  private collection: Collectable[] = [];
  //private sharingData: alamat_customer[] = [];

  getCollection() {
    return this.collection;
  }

  addToCollection( item: Collectable) {
    if (this.collection.indexOf(item) !== -1 ) {
      return;
    }
    this.collection.push(item);
  }

    removeFromCollection(item: Collectable) {
    this.collection.splice(this.collection.indexOf(item), 1);
  }
  
  sharingData: myData = {nama:"nyks", Alamat:"nyks", Provinsi:"nyks", Kota:"nyks", Kode_pos:"nyks", no_hp:"nyks", no_rekening:null};
  
  
	saveData(str1, str2, str3, str4, str5, str6, str7){
//		console.log('save data function called' + str1 + this.sharingData.nama);
		this.sharingData.nama = str1;
//		console.log('save data function called' + str2 + this.sharingData.Alamat);
		this.sharingData.Alamat=str2;
		
/*		
		console.log('save data function called' + str3 + this.sharingData.Provinsi);
		console.log('save data function called' + str4 + this.sharingData.Kota);
		console.log('save data function called' + str5 + this.sharingData.Kode_pos);
		console.log('save data function called' + str6 + this.sharingData.no_hp);
*/		
		
		this.sharingData.Provinsi=str3;
		this.sharingData.Kota=str4;
		this.sharingData.Kode_pos=str5;
		this.sharingData.no_hp=str6; 
		this.sharingData.no_rekening=str7; 
  }
	  
	  getNama = (string =>
	  {
//		console.log('get data function called');
		return this.sharingData.nama;
	  });
	  
	  getAlamat = (string =>
	  {
//		console.log('get data function called');
		return this.sharingData.Alamat;
	  }	);
		
	getProvinsi= (string =>
	  {
//		console.log('get data function called');
		return this.sharingData.Provinsi;
	  }	);
	
	getKota= (string =>
	  {
//		console.log('get data function called');
		return this.sharingData.Kota;
	  });
	
	getKodePos= (string =>
	  {
//		console.log('get data function called');
		return this.sharingData.Kode_pos;
	  }	);
	
	getNoHp = (string =>
	  {
//		console.log('get data function called');
		return this.sharingData.no_hp;
	  }  );
	  
	  getRek = (string =>
	  {
//		console.log('get data function called');
		return this.sharingData.no_rekening;
	  }  );
	    
}