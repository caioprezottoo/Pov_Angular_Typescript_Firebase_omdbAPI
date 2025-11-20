import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Movie, searchMovies, getMovieById } from '../../services/omdbAPI.service';
import { FormsModule } from '@angular/forms';
import { CustomButton } from '../../../components/button/button';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomButton],
  templateUrl: './explore.html',
  styleUrls: ['./explore.css'],
})
export class Explore implements OnInit {
  query = '';
  movies: Movie[] = [];
  loading = false;
  error = '';

  private movieIds = [
    "tt0111161", "tt0068646", "tt0468569", "tt0167260",
    "tt0050083", "tt0110912", "tt0137523", "tt1375666",
    "tt0080684", "tt0133093", "tt0099685", "tt0816692",
    "tt0114369", "tt0102926", "tt0118799", "tt0317248"
  ];

  constructor(private router: Router) { }

  async ngOnInit() {
    this.loading = true;

    try {
      const requests = this.movieIds.map(id => getMovieById(id));
      this.movies = await Promise.all(requests);
    } catch (e) {
      this.error = "Could not load movies.";
    }

    this.loading = false;
  }

  async handleSearchClick() {
    if (this.query.trim().length < 2) {
      this.error = '';
      return;
    }

    this.loading = true;
    this.error = '';

    try {
      const res = await searchMovies(this.query);

      if (res.Response === "True") {
        this.movies = res.Search;
        this.error = '';
      } else {
        this.movies = [];
        this.error = res.Error || "No results found.";
      }
    } catch (e) {
      this.error = 'Error fetching movies.';
    }

    this.loading = false;
  }

  goToMovie(movieId: string) {
    this.router.navigate([`/movies/${movieId}`]);
  }
}
