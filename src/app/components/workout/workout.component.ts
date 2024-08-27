import { Component } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
})
export class WorkoutComponent {
  gridStyle = {
    width: '100%',
    textAlign: 'center',
  };
  workoutForm!: FormGroup;

  listOfType: any[] = [
    'Cardio',
    'Strength',
    'HIIT',
    'Pilates',
    'Dance',
    'Swinning',
    'Cycling',
    'Running',
    'Walking',
    'Baxing',
    'Crossfit',
    'Rowing',
    'Stretching',
    'Martial Arts',
    'Gymnastics',
    'Climbing',
    'Plyometrics',
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService
  ) {}

  ngOnInit() {
    this.workoutForm = this.fb.group({
      type: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      date: [null, [Validators.required]],
      caloriesBurned: [null, [Validators.required]],
    });
  }

  submitForm(){
    this.userService.postWorkout(this.workoutForm.value).subscribe(res=>{
      this.message.success("Workout posted successfully", {nzDuration: 3000});
      this.workoutForm.reset();
    },error=>{
      this.message.error("Error while posting workout", {nzDuration:3000})
    })
  }
}
