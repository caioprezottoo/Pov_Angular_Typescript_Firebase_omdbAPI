import { Routes } from '@angular/router';
import { Initialpage } from './home/initialpage/initialpage';
import { Login } from './auth/pages/login/login';
import { Signup } from './auth/pages/signup/signup';
import { Explore } from './movies/pages/explore/explore';
import { MovieLayout } from './movies/layout/movie-layout/movie-layout';
import { Reviewed } from './movies/pages/reviewed/reviewed';
import { Watchlist } from './movies/pages/watchlist/watchlist';
import { Profile } from './profile/pages/profile/profile';

export const routes: Routes = [
    { path: '', component: Initialpage },
    { path: 'login', component: Login },
    { path: 'signup', component: Signup },
    {
        path: 'movies',
        component: MovieLayout,
        children: [
            { path: 'explore', component: Explore },
            { path: 'reviewed', component: Reviewed },
            { path: 'watch-list', component: Watchlist },
            { path: 'profile', component: Profile },

            {
                path: ':id',
                loadComponent: () =>
                    import('./movies/pages/movie/movie').then(m => m.MoviePage)
            }
        ]
    },
    { path: '**', redirectTo: '' }
];
