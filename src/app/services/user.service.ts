import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URl =" http://localhost:8090/";

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  constructor(private http: HttpClient) {}

  postActivity(activityDto: any): Observable<any> {
    return this.http.post(BASIC_URl + 'api/activity', activityDto);
  }

  getActivities(): Observable<any>{
    return this.http.get(BASIC_URl + 'api/activities');
  }
  postWorkout(workoutDto: any): Observable<any> {
    return this.http.post(BASIC_URl + 'api/workout', workoutDto);
  }
  getWorkouts(): Observable<any>{
    return this.http.get(BASIC_URl + 'api/workouts');
  }
}
