import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleAnalysisComponent } from './article-analysis/article-analysis.component';
import { ArticleDatabaseComponent } from './article-database/article-database.component';
import { ArticlesComponent } from './articles.component';

const routes: Routes = [
  {
    path: '',
    component:ArticlesComponent,
    children:[
      {
        path: 'nuevo-articulo',
        component:AddArticleComponent
      },
      {
        path: 'base-datos',
        component:ArticleDatabaseComponent
      },
      {
        path: 'analisis',
        component: ArticleAnalysisComponent
      },
      {
        path: '**', redirectTo: 'base-datos', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
