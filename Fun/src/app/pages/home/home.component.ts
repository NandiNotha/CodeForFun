import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PosesService } from 'src/app/Services/poses.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  poses: any;   
 
  constructor(private posesService: PosesService, private router: Router)
  {    

  }  
  ngOnInit() {
    this.posesService.getPoses().subscribe({
      next: (data: any) => {
        this.poses = data;
        console.log(data, 'poses');
      },
      error: (err: any) => {
        // this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
      }
    });
  }
                
      onBook(id:any){
         this.router.navigate(['appointment',id]); 
        }
}
