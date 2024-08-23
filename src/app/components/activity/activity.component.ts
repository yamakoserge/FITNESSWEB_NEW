import { Component } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  gridStyle = {
    width: '100%',
    textAlign: 'center',
  };
  activityForm!: FormGroup;
  activites:any;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.activityForm = this.fb.group({
      caloriesBurned: [null, [Validators.required]],
      steps: [null, [Validators.required]],
      distance: [null, [Validators.required]],
      date: [null, [Validators.required]],
    });

    this.getAllActivities();
  }
  submitForm() {
    this.userService.postActivity(this.activityForm.value).subscribe(
      res => {
        this.message.success('Activity posted successfully', {
          nzDuration: 3000});
        this.activityForm.reset();
        this.getAllActivities();
      }, error => {
        this.message.error('ErrorWhile posting Activity', { nzDuration: 3000 });
      })
  }
  getAllActivities(){
    this.userService.getActivities().subscribe(res=> {
      this.activites = res;
      console.log(this.activites);
    })
  }
}
