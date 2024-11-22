import { MenuRootItem } from 'ontimize-web-ngx';

import { DinosaurCardComponent } from './Dinosaur-card/Dinosaur-card.component';

import { DinosaurActivityCardComponent } from './DinosaurActivity-card/DinosaurActivity-card.component';

import { DinosaurAttendanceCardComponent } from './DinosaurAttendance-card/DinosaurAttendance-card.component';

import { DinosaurMeasurementCardComponent } from './DinosaurMeasurement-card/DinosaurMeasurement-card.component';

import { DinosaurSkillCardComponent } from './DinosaurSkill-card/DinosaurSkill-card.component';

import { DinosaurTrainerAssociationCardComponent } from './DinosaurTrainerAssociation-card/DinosaurTrainerAssociation-card.component';

import { FeedLogCardComponent } from './FeedLog-card/FeedLog-card.component';

import { PlayGroupCardComponent } from './PlayGroup-card/PlayGroup-card.component';

import { PlayGroupFacilityCardComponent } from './PlayGroupFacility-card/PlayGroupFacility-card.component';

import { PlayGroupHostCardComponent } from './PlayGroupHost-card/PlayGroupHost-card.component';

import { PlayGroupSessionCardComponent } from './PlayGroupSession-card/PlayGroupSession-card.component';

import { TrainerCardComponent } from './Trainer-card/Trainer-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Dinosaur', name: 'DINOSAUR', icon: 'view_list', route: '/main/Dinosaur' }
    
        ,{ id: 'DinosaurActivity', name: 'DINOSAURACTIVITY', icon: 'view_list', route: '/main/DinosaurActivity' }
    
        ,{ id: 'DinosaurAttendance', name: 'DINOSAURATTENDANCE', icon: 'view_list', route: '/main/DinosaurAttendance' }
    
        ,{ id: 'DinosaurMeasurement', name: 'DINOSAURMEASUREMENT', icon: 'view_list', route: '/main/DinosaurMeasurement' }
    
        ,{ id: 'DinosaurSkill', name: 'DINOSAURSKILL', icon: 'view_list', route: '/main/DinosaurSkill' }
    
        ,{ id: 'DinosaurTrainerAssociation', name: 'DINOSAURTRAINERASSOCIATION', icon: 'view_list', route: '/main/DinosaurTrainerAssociation' }
    
        ,{ id: 'FeedLog', name: 'FEEDLOG', icon: 'view_list', route: '/main/FeedLog' }
    
        ,{ id: 'PlayGroup', name: 'PLAYGROUP', icon: 'view_list', route: '/main/PlayGroup' }
    
        ,{ id: 'PlayGroupFacility', name: 'PLAYGROUPFACILITY', icon: 'view_list', route: '/main/PlayGroupFacility' }
    
        ,{ id: 'PlayGroupHost', name: 'PLAYGROUPHOST', icon: 'view_list', route: '/main/PlayGroupHost' }
    
        ,{ id: 'PlayGroupSession', name: 'PLAYGROUPSESSION', icon: 'view_list', route: '/main/PlayGroupSession' }
    
        ,{ id: 'Trainer', name: 'TRAINER', icon: 'view_list', route: '/main/Trainer' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    DinosaurCardComponent

    ,DinosaurActivityCardComponent

    ,DinosaurAttendanceCardComponent

    ,DinosaurMeasurementCardComponent

    ,DinosaurSkillCardComponent

    ,DinosaurTrainerAssociationCardComponent

    ,FeedLogCardComponent

    ,PlayGroupCardComponent

    ,PlayGroupFacilityCardComponent

    ,PlayGroupHostCardComponent

    ,PlayGroupSessionCardComponent

    ,TrainerCardComponent

];