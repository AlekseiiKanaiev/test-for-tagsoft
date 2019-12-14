import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { GetDataService } from 'src/app/_services/getData.service';
import { Data } from 'src/app/_models/data.model';
import { Character } from 'src/app/_models/character.model';
import { Subscription } from 'rxjs';
import { PageChangedEvent, BsModalService, BsModalRef } from 'ngx-bootstrap';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private isSort = true;
  private curPage = 1;

  angleIcon = faAngleDown;
  modalRef: BsModalRef;
  characters: Character[];
  curChars: Character[];
  totalItems: number;
  maxSize = 5;
  itemsPerPage = 10;
  

  constructor(private gts: GetDataService, private bsModServ: BsModalService) { }

  ngOnInit() {
    this.sub = this.gts.getData().subscribe(
      (data: Data) => {
        this.characters = data.results;
        this.pageChanged();
        this.totalItems = data.info.count;
        const nextUrl = data.info.next;
        if (nextUrl) { this.getAllCharacters(nextUrl); }
      },
      error => console.log('Error: ' + error)
    );

  }
  getAllCharacters(url?: string) {
    this.sub = this.gts.getData(url).subscribe(
      (data: Data) => {
        this.characters = this.characters.concat(data.results);
        const nextUrl = data.info.next;
        if (nextUrl) { this.getAllCharacters(nextUrl); }
      },
      error => console.log('Error: ' + error)
    );
  }

  sort() {
    (this.isSort) ?
      this.characters.sort((a, b) => (a.name > b.name) ? 1 : -1) :
      this.characters.sort((a, b) => (a.name > b.name) ? -1 : 1);
    this.isSort = !this.isSort;
    this.angleIcon = (this.isSort) ? faAngleUp : faAngleDown;
    this.pageChanged();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.bsModServ.show(template);
  }

  pageChanged(event?: PageChangedEvent) {
    if (event) { this.curPage = event.page; }
    const start = (this.curPage - 1) * this.itemsPerPage;
    const end = (this.curPage) * this.itemsPerPage;
    this.curChars = this.characters.slice(start, end);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
