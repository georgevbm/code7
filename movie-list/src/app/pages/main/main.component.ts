import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    movies: Movie[] = [];

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.listMovies();
    }

    private listMovies() {
        this.movieService.getListMovies().subscribe(data => {
            this.movies = data;
        })
    }
}
