import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "src/app/models/movie.model";

@Injectable()
export class MovieService {
    private URL = '../assets';

    constructor(private http: HttpClient) { }

    getListMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.URL + `/FILMES.JSON`)
    }
}