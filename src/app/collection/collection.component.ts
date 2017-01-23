import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Collectable } from '../shared/collectable.model';
import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {
  collectedItems: Collectable[] = [];

  onRemoveFromCollection(item: Collectable) {
    this.collectableService.removeFromCollection(item);
  }

  constructor( private collectableService: CollectableService, private location: Location,) { }

  ngOnInit() {
    this.collectedItems = this.collectableService.getCollection();
  }
  
  goBack(): void {
    this.location.back();
  }

}
