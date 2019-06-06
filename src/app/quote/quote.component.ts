import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quote: Quote;
  quotes = [new Quote(1, 'Enock','Pambana na life', 'By Wilstan Onditi', new Date(2019, 3 , 14))];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)
    }


  deleteQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}`);

      if (toDelete) {
        this.quotes.splice(index, 1);
    }
    }
  }
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() {}

  ngOnInit() {}
}
