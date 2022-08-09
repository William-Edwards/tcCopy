import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ProfileComponent } from './modules/profile/profile.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }]
  , canActivate: [AuthGuard]
},
// login and register routing
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
},

{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
},

// redirect home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
