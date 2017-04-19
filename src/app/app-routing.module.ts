import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lobby',
    pathMatch: 'full'
  },
  {
    path: 'lobby',
    component: LobbyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }