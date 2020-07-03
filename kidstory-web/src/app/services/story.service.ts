import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  public static ENDPOINT: string = 'http://localhost:8080/api/story';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any> {
    return this.http.get(StoryService.ENDPOINT);
  }

  public getById(elementId: string): Observable<any> {
    return this.http.get(StoryService.ENDPOINT + '/' + elementId);
  }
}
