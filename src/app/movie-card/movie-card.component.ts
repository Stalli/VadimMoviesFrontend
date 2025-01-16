import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../domain/movie";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() data!: Movie;
  imageSource: SafeUrl = "";


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let objectURL = 'data:image/png;base64,' + this.data.image;
    this.imageSource = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

}
