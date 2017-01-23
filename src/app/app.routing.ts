import { Routes, RouterModule } from '@angular/router';

import { CollectionComponent } from './collection/collection.component';
import { HomeComponent } from './home/home.component';
import { PemesananComponent } from './pemesanan/pemesanan.component';
import { PembayaranComponent } from './pembayaran/pembayaran.component';
import { KonfirmasiPembelianComponent } from './konfirmasi-pembelian/konfirmasi-pembelian.component';
import { SelesaiMemesanComponent } from './selesai-memesan/selesai-memesan.component'

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'cart', component: CollectionComponent },
    { path: 'home', component: HomeComponent },
	{ path: 'pemesanan', component: PemesananComponent },
	{ path: 'pembayaran', component: PembayaranComponent },
	{ path: 'konfirmasi_pembelian', component: KonfirmasiPembelianComponent },
	{ path: 'show_message', component: SelesaiMemesanComponent },
	
];

export const routing = RouterModule.forRoot(APP_ROUTES);