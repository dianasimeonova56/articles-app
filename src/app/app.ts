import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Article } from './article/article.model';
import { ArticleData } from './data/data';
import { ArticlesComponent } from './articles/articles';
import { ArticleComponent } from './article/article';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticlesComponent, ArticleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Article Site';
}
