import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() articles!: Article[];
  @Output() articleEdit = new EventEmitter<Article>();
  @Output() articleDelete = new EventEmitter<Article>();
  @Output() allArticles = new EventEmitter<Article[]>();

  constructor() { }
  ngOnInit(): void {
  }
  selectAll(articles: Article[]){
    this.allArticles.emit(articles);
  }
  selectOne(article: Article, edit:boolean) {
    console.log(article);
    edit?
    this.articleEdit.emit(article)
    :
    this.articleDelete.emit(article);
  }
}
