import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from 'src/app/_services/getData.service';
import { Data } from 'src/app/_models/data.model';
import { Character } from 'src/app/_models/character.model';
import { Subscription } from 'rxjs';
import { PageChangedEvent } from 'ngx-bootstrap';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  characters: Character[];
  totalItems: number;
  maxSize = 5;
  itemsPerPage = 20;

  constructor(private gts: GetDataService) { }

  ngOnInit() {
    this.sub = this.gts.getData().subscribe(
      (data: Data) => {
        console.log(data);
        this.characters = data.results;
        this.totalItems = data.info.count;
        // this.itemsPerPage = data.results.length;
      },
      error => console.log('Error: ' + error)
    );

  }

  pageChanged(event: PageChangedEvent) {
    console.log(event);
    const url = `https://rickandmortyapi.com/api/character/?page=${event.page}`;
    this.gts.getData(url).subscribe(
      data => this.characters = data.results
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
