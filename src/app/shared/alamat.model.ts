export class alamat_customer {
    nama: string;
    Alamat: string;
	Provinsi: string;
	Kota: string;
	Kode_pos: string;
	no_hp: number;
	
	constructor (nama: string, Alamat: string, Provinsi: string, Kota: string, Kode_pos: string, no_hp: number) {
		this.nama = nama;
		this.Alamat = Alamat;
		this.Provinsi = Provinsi;
		this.Kota = Kota;
		this.Kode_pos = Kode_pos;
		this.no_hp = no_hp;
	}
	
}
