import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectableService } from './shared/collectable.service';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { DataService } from './data.service';
import 'rxjs/add/operator/map';
import { PemesananComponent } from './pemesanan/pemesanan.component';
import { PembayaranComponent } from './pembayaran/pembayaran.component';
import { KonfirmasiPembayaranComponent } from './konfirmasi-pembayaran/konfirmasi-pembayaran.component';
import { KonfirmasiPembelianComponent } from './konfirmasi-pembelian/konfirmasi-pembelian.component';
import { SelesaiMemesanComponent } from './selesai-memesan/selesai-memesan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionComponent,
    HeaderComponent,
    PemesananComponent,
    PembayaranComponent,
    KonfirmasiPembayaranComponent,
    KonfirmasiPembelianComponent,
    SelesaiMemesanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CollectableService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
