import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'devotions', loadChildren: './pages/devotions/devotions.module#DevotionsPageModule' },
  { path: 'devotion-details', loadChildren: './pages/devotion-details/devotion-details.module#DevotionDetailsPageModule' },
  { path: 'questions', loadChildren: './pages/questions/questions.module#QuestionsPageModule' },
  { path: 'question-details', loadChildren: './pages/question-details/question-details.module#QuestionDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
