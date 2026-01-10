import { Component, input, signal } from '@angular/core';
import { GifInterface } from '../../../interface/GifInterface';
import { Card } from "../card/card";

@Component({
  selector: 'trending-list-gif',
  imports: [Card],
  templateUrl: './list-gif.html',
  styles: ``,
})
export class ListGif {
  public cardsrc = input.required<Set<GifInterface>>();


}
