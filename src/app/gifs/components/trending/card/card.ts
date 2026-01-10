import { Component, input, signal } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'trending-card',
  imports: [NgOptimizedImage,ClipboardModule],
  templateUrl: './card.html',
  styles: ``,
})
export class Card {
  srcImg = input.required<string>();
  wImg = input.required<string>();
  hImg = input.required<string>();

  showToast = signal(false);

  copied = ()=>{
    this.showToast.set(!this.showToast());
    setTimeout(() => {
      this.showToast.set(false);
    }, 2500);
  }
}
