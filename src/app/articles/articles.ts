import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
import { ArticleData } from '../data/data';
import { ArticleComponent } from '../article/article';

@Component({
  selector: 'app-articles',
  imports: [ArticleComponent],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
  standalone: true,
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }
}
