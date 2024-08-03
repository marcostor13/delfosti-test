import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';

export const routes: Routes = [
    {
        path: 'home',
        component: MainComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./pages/home/home.component'),
            },

        ],
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
