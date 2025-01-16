import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../domain/movie";

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {
  movies: Movie[] | null = null;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.movies$.subscribe({
      next: (movies) => {
        this.InitCards(movies);
      },
      error: (err) => {
        console.error('Error in CardsContainer', err);
      }
    });
  }

  private InitCards(movies : Movie[]) {
    console.log('InitCards');
    this.movies = movies;
  }
}
