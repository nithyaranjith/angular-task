import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'client-list',
        component: ClientListComponent,
        children: [
            {
                path: 'client-detail',
                component: ClientDetailComponent
            },
            {
                path: 'edit',
                component: EditComponent
            },
            {
                path: 'add',
                component: AddComponent
            }
        ]
    },

];
