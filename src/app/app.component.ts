import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  _equipmentlist:equipment[];
  // _student:student;
  // _studentlist:student[]=[];
  uniquekey:number=0;


  ngOnInit()
  {
    this.getEquipment();
    // this._student= new student();
  }

  getEquipment()
  {
    this._equipmentlist=[
      {id:1, name:"record1", isselected:false},
      {id:2, name:"record2", isselected:false},
      {id:3, name:"record3", isselected:false},
      {id:4, name:"record4", isselected:false},
      {id:5, name:"record5", isselected:false},
      {id:6, name:"record6", isselected:false}

    ]
  }

  onchange()
  {
    console.log(this._equipmentlist);
  }
}
class equipment{
  id: number;
  name: string;
  isselected: boolean;
}
