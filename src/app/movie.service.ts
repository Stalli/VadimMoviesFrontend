import { Injectable } from '@angular/core';
import { Movie } from './domain/movie';
import { environment } from "./environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesSubject: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  public movies$: Observable<Movie[]> = this.moviesSubject.asObservable();

  private activeUrl = environment.apiUrl;
  private moviesUrl = `${this.activeUrl}/?movieTitle=`;

  constructor(private http: HttpClient) {
  }

  getMovies(title: string) {
    const url = `${this.moviesUrl}${title}`;

    this.http.get<Movie[]>(url)
      .subscribe(
        (movies) => {
          this.moviesSubject.next(movies); // Обновляем состояние
        },
        (error) => {
          console.error('Error', error);
          this.moviesSubject.next([]); // В случае ошибки передаем пустой массив
        }
      );

  }
}
