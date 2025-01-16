import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  title: string = "";
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  onEnter() {
    this.movieService.getMovies(this.title);
  }
}
