export class Collectable {
    id_produk: string;
	id_inventori: number;
    nama: string;
	tanggal_masuk: Date;
    manufacturer: string;
	led_color: string;
	switch_type: string;
	size: string;
	gambar_produk: string;
    stok: number;
	harga: number;

    constructor(id_produk:string, id_inventori: number, nama: string, tanggal_masuk: Date, manufacturer: string, led_color: string, switch_type: string, size: string, gambar_produk: string, stok: number, harga: number) {
		this.id_produk = id_produk;
		this.id_inventori = id_inventori;
		this.nama = nama;
		this.tanggal_masuk = tanggal_masuk;
		this.manufacturer = manufacturer;
		this.led_color = led_color;
		this.switch_type = switch_type;
		this.size = size;
		this.gambar_produk = gambar_produk;
		this.stok = stok;
		this.harga = harga;
    }
}