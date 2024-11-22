import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Dinosaur', loadChildren: () => import('./Dinosaur/Dinosaur.module').then(m => m.DinosaurModule) },
    
        { path: 'DinosaurActivity', loadChildren: () => import('./DinosaurActivity/DinosaurActivity.module').then(m => m.DinosaurActivityModule) },
    
        { path: 'DinosaurAttendance', loadChildren: () => import('./DinosaurAttendance/DinosaurAttendance.module').then(m => m.DinosaurAttendanceModule) },
    
        { path: 'DinosaurMeasurement', loadChildren: () => import('./DinosaurMeasurement/DinosaurMeasurement.module').then(m => m.DinosaurMeasurementModule) },
    
        { path: 'DinosaurSkill', loadChildren: () => import('./DinosaurSkill/DinosaurSkill.module').then(m => m.DinosaurSkillModule) },
    
        { path: 'DinosaurTrainerAssociation', loadChildren: () => import('./DinosaurTrainerAssociation/DinosaurTrainerAssociation.module').then(m => m.DinosaurTrainerAssociationModule) },
    
        { path: 'FeedLog', loadChildren: () => import('./FeedLog/FeedLog.module').then(m => m.FeedLogModule) },
    
        { path: 'PlayGroup', loadChildren: () => import('./PlayGroup/PlayGroup.module').then(m => m.PlayGroupModule) },
    
        { path: 'PlayGroupFacility', loadChildren: () => import('./PlayGroupFacility/PlayGroupFacility.module').then(m => m.PlayGroupFacilityModule) },
    
        { path: 'PlayGroupHost', loadChildren: () => import('./PlayGroupHost/PlayGroupHost.module').then(m => m.PlayGroupHostModule) },
    
        { path: 'PlayGroupSession', loadChildren: () => import('./PlayGroupSession/PlayGroupSession.module').then(m => m.PlayGroupSessionModule) },
    
        { path: 'Trainer', loadChildren: () => import('./Trainer/Trainer.module').then(m => m.TrainerModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }