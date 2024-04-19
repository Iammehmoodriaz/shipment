import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HRMS';
  h = []
  ngOnInit() {
    // let arr = [3,2, 2, 4, 4, 6, 6,5,5]
    // arr.forEach((e, index) => {
    //   let count = 0;
    //   arr.forEach(j => {
    //     if(j == e){
    //       count++
    //     }
    //   })
    //   if(count == 1){
    //     this.h.push(e)
    //   }
      
    // })
    // console.log(this.h)


  }
}
