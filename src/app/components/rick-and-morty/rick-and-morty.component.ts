import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/_services/getData.service';
import { Data } from 'src/app/_models/data.model';
import { Character } from 'src/app/_models/character.model';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit {
  characters: Character[];

  constructor(private gts: GetDataService) { }

  ngOnInit() {
    this.gts.getData().subscribe(
      (data: Data) => {
        console.log(data);
        this.characters = data.results;
      },
      error => console.log('Error: ' + error)
    );
  }

}
