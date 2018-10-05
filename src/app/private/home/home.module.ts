import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { SearchComponent } from '../../shared/input/search/search.component';

import { HomeMaterialModule } from './home.material.module';

import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { effects, reducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeMaterialModule,
    VirtualScrollModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('configArticle', reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    HomeComponent,
    SearchComponent,
    ArticlesComponent,
    ArticleComponent
  ]
})
export class HomeModule {}
