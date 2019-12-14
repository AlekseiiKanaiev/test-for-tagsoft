import { Character } from './character.model';

export class Data {
    info: { count: number, next: string, pages: number, prev: string };
    results: Character[];
}
