import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  _equipmentlist:equipment[];
  _operator:operator;
  _operatorlist:operator[]=[];
  uniquekey:number=0;


  ngOnInit()
  {
    this.getEquipment();
    this._operator= new operator();
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

  onsubmit()
  {
    this._operator.operatorid = this._equipmentlist.filter(x=>x.isselected==true).map(x=>x.id).join(",").toString();
    this._operator.operatorname = this._equipmentlist.filter(x=>x.isselected==true).map(x=>x.name).join(",").toString();
    this.uniquekey = this.uniquekey + 1;
    this._operator.id = this.uniquekey;
    this._operatorlist.push(this._operator);
  }
}
class equipment{
  id: number;
  name: string;
  isselected: boolean;
}
class operator
{
  id: number;
  name: string;
  operatorid: string;
  operatorname: string;
}