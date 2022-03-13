import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Article } from 'src/app/models/article';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  formDatabases!:FormGroup;
  formText!:FormGroup;
  load:boolean = false;
  articles:Article[] = [];
  articleMode:string = '';
  article_aux:Article = 
  {
    name: '',
    database: '',
    price_buy: 0,
    price_sale: 0,
    stock: 0,
    category: ''
  };
  article_aux1:Article = 
  {
    name: '',
    database: '',
    price_buy: 0,
    price_sale: 0,
    stock: 0,
    category: ''
  };
  article_aux2:Article = 
  {
    name: '',
    database: '',
    price_buy: 0,
    price_sale: 0,
    stock: 0,
    category: ''
  };
  article_aux3:Article = 
  {
    name: '',
    database: '',
    price_buy: 0,
    price_sale: 0,
    stock: 0,
    category: ''
  };

  constructor(
    private fb: FormBuilder) {
   }

  ngOnInit(): void {
    
    this.formText = this.fb.group({
      name: ['',[Validators.required,Validators.maxLength(100),Validators.minLength(3)]],
      price_buy:['',[Validators.required]],
      price_sale:['',[Validators.required]],
      stock:['',[Validators.required]],
      category:['',[Validators.required]]
    });

    this.formDatabases = this.fb.group({
      mysql: false,
      sqlsrv: false,
      pgsql: false
    });

  }

  add(){
    if(!this.formDatabases.value.sqlsrv && !this.formDatabases.value.mysql && !this.formDatabases.value.pgsql){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No elegiste una base de datos!',
      });

    }else{

      this.load = true;
      if(this.formDatabases.value.sqlsrv){
        this.article_aux1.name = this.formText.value.name;
        this.article_aux1.price_buy = this.formText.value.price_buy;
        this.article_aux1.price_sale = this.formText.value.price_sale;
        this.article_aux1.stock = this.formText.value.stock;
        this.article_aux1.category = this.formText.value.category;
        this.article_aux1.database = 'sqlsrv'
        this.articles.push(this.article_aux1);
        this.article_aux1 =
      {
        name: '',
        database: '',
        price_buy: 0,
        price_sale: 0,
        stock: 0,
        category: ''                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      };
      }
      if(this.formDatabases.value.mysql){
        this.article_aux2.name = this.formText.value.name;
        this.article_aux2.price_buy = this.formText.value.price_buy;
        this.article_aux2.price_sale = this.formText.value.price_sale;
        this.article_aux2.stock = this.formText.value.stock;
        this.article_aux2.category = this.formText.value.category;
        this.article_aux2.database = 'mysql'
        this.articles.push(this.article_aux2);
        this.article_aux2 =
      {
        name: '',
        database: '',
        price_buy: 0,
        price_sale: 0,
        stock: 0,
        category: ''
      };
      
      }
      if(this.formDatabases.value.pgsql){
        this.article_aux3.name = this.formText.value.name;
        this.article_aux3.price_buy = this.formText.value.price_buy;
        this.article_aux3.price_sale = this.formText.value.price_sale;
        this.article_aux3.stock = this.formText.value.stock;
        this.article_aux3.category = this.formText.value.category;
        this.article_aux3.database = 'pgsql'
        this.articles.push(this.article_aux3);
        this.article_aux3 =
      {
        name: '',
        database: '',
        price_buy: 0,
        price_sale: 0,
        stock: 0,
        category: ''
      };
      }
      this.resetForms();
      this.load = false;
    }
  }

  resetForms(){
    this.formText.reset();
    this.formDatabases.reset();
    this.articleMode = '';
  }

  delete(article:Article){
    this.articles = this.articles.filter(
      (articleDelete) => articleDelete != article
      );
  }

  addEdit(){
    this.load = true;
    var index = this.articles.indexOf(this.article_aux);

    if(this.formDatabases.value.sqlsrv){
      this.article_aux1.name = this.formText.value.name;
      this.article_aux1.price_buy = this.formText.value.price_buy;
      this.article_aux1.price_sale = this.formText.value.price_sale;
      this.article_aux1.stock = this.formText.value.stock;
      this.article_aux1.category = this.formText.value.category;
      this.article_aux1.database = 'sqlsrv'
      this.articles[index] = this.article_aux1;
      this.article_aux1 =
    {
      name: '',
      database: '',
      price_buy: 0,
      price_sale: 0,
      stock: 0,
      category: ''                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    };
    }
    if(this.formDatabases.value.mysql){
      this.article_aux2.name = this.formText.value.name;
      this.article_aux2.price_buy = this.formText.value.price_buy;
      this.article_aux2.price_sale = this.formText.value.price_sale;
      this.article_aux2.stock = this.formText.value.stock;
      this.article_aux2.category = this.formText.value.category;
      this.article_aux2.database = 'mysql'
      this.articles[index] = this.article_aux2;
      this.article_aux2 =
    {
      name: '',
      database: '',
      price_buy: 0,
      price_sale: 0,
      stock: 0,
      category: ''
    };
    
    }
    if(this.formDatabases.value.pgsql){
      this.article_aux3.name = this.formText.value.name;
      this.article_aux3.price_buy = this.formText.value.price_buy;
      this.article_aux3.price_sale = this.formText.value.price_sale;
      this.article_aux3.stock = this.formText.value.stock;
      this.article_aux3.category = this.formText.value.category;
      this.article_aux3.database = 'pgsql';
      this.articles[index] = this.article_aux3;
      this.article_aux3 =
    {
      name: '',
      database: '',
      price_buy: 0,
      price_sale: 0,
      stock: 0,
      category: ''
    };
    }
    this.article_aux = 
  {
    name: '',
    database: '',
    price_buy: 0,
    price_sale: 0,
    stock: 0,
    category: ''
  };
    this.resetForms();
    this.load = false;

  }

  edit(article:Article){
    this.articleMode = 'edit';
    this.article_aux = article;
    this.formText.controls['name'].setValue(article.name);
    this.formText.controls['price_buy'].setValue(article.price_buy);
    this.formText.controls['price_sale'].setValue(article.price_sale);
    this.formText.controls['stock'].setValue(article.stock);
    this.formText.controls['category'].setValue(article.category);

    if(article.database == 'sqlsrv'){
      this.formDatabases.controls['sqlsrv'].setValue(true);
    }
    if(article.database == 'pgsql'){
      this.formDatabases.controls['pgsql'].setValue(true);
    }
    if(article.database == 'mysql'){
      this.formDatabases.controls['mysql'].setValue(true);
    }
  }

  save(articles: Article[]){

  }
}