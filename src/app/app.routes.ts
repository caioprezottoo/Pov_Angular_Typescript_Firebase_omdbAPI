// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Initialpage } from './home/initialpage/initialpage';
import { Login } from './auth/pages/login/login';
import { Singup } from './auth/pages/singup/singup';
import { Explore } from './movies/pages/explore/explore';
import { MovieLayout } from './movies/layout/movie-layout/movie-layout';
import { Reviewed } from './movies/pages/reviewed/reviewed';
import { Watchlist } from './movies/pages/watchlist/watchlist';
import { Profile } from './profile/pages/profile/profile';

export const routes: Routes = [
    { path: '', component: Initialpage },
    { path: 'login', component: Login },
    { path: 'signup', component: Singup },
    {
        path: 'movies',
        component: MovieLayout,
        children: [
            { path: 'explore', component: Explore },
            { path: 'reviewed', component: Reviewed },
            { path: 'watchlist', component: Watchlist },
            { path: 'profile', component: Profile },

        ]
    },
    { path: '**', redirectTo: '' }
];
