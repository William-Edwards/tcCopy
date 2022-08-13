import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ScopesComponent } from './modules/scopes/scopes.component';
import { TargetsComponent } from './modules/targets/targets.component';
import { Role } from './models/roles';
import { ScopeOneComponent } from './modules/scopes/scope-one/scope-one.component';
import { ScopeTwoComponent } from './modules/scopes/scope-two/scope-two.component';
import { ScopeThreeComponent } from './modules/scopes/scope-three/scope-three.component';
import { TargetOneComponent } from './modules/targets/target-one/target-one.component';
import { TargetTwoComponent } from './modules/targets/target-two/target-two.component';

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
  },
  {
    path: 'scopes',
    component: ScopesComponent
  },
  {
    path: 'scope-one',
    component: ScopeOneComponent
  },
  {
    path: 'scope-two',
    component: ScopeTwoComponent
  },
  {
    path: 'scope-three',
    component: ScopeThreeComponent
  },
  {
    path: 'targets',
    component: TargetsComponent
  },
  {
    path: 'target-one',
    component: TargetOneComponent
  },
  {
    path: 'target-two',
    component: TargetTwoComponent
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
  canActivate: [AuthGuard], data: { roles: [Role.Admin] }
},

// redirect home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
