import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from 'src/app/_services/getData.service';
import { Data } from 'src/app/_models/data.model';
import { Character } from 'src/app/_models/character.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit, OnDestroy {
  characters: Character[];
  private sub: Subscription;

  constructor(private gts: GetDataService) { }

  ngOnInit() {
    this.sub = this.gts.getData().subscribe(
      (data: Data) => {
        console.log(data);
        this.characters = data.results;
      },
      error => console.log('Error: ' + error)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
