import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  upvote: number;
  downvote: number;

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() {
    this.upvote = 0;
    this.downvote = 0;
   }

   upVote(){
    this.upvote += 1;
  }
  downVote(){
    this.downvote += 1;
  }

  ngOnInit() {
  }

}
