import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'portfolio';
  projectList: Array<{
    ProjectName:String, 
    projectLink:String,
    imageLink:String,
    projectDesc:String
  }> = [{
    ProjectName:"Project1",
    projectLink:"localhost:4200/home",
    imageLink:"localhost:4200/home",
    projectDesc:"this is great project"
  },
  {
    ProjectName:"Project1",
    projectLink:"localhost:4200/home",
    imageLink:"localhost:4200/home",
    projectDesc:"this is great project"
  },
  {
    ProjectName:"Project1",
    projectLink:"localhost:4200/home",
    imageLink:"localhost:4200/home",
    projectDesc:"this is great project"
  }];
  // @ViewChild('scrollMe') private myScrollContainer: ElementRef ;
  constructor(private elRef: ElementRef){

  }
  ngOnInit() { 
    this.scrollToBottom();
}
ngAfterViewChecked() {        
  this.scrollToBottom();        
} 
onSubmit(){
  console.log("Submitted");
}

scrollToBottom():void{
    console.log("Hey do this");
    try {
      // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  } catch(err) { }    
  }
}
