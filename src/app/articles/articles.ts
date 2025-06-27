import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  imports: [Article, ArticleData, ArticlesComponent],
  templateUrl: './articles.html',
  styleUrl: './articles.css'
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  constructor() {}

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }
}
