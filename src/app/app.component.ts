import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
// export class AppComponent implements OnInit {
 
  // _equipmentlist:equipment[];
  // _operator:operator;
  // _operatorlist:operator[]=[];
  // uniquekey:number=0;
  // isLoading = false;
  // load(): void {
  //   this.isLoading = true;
  //   setTimeout( () => this.isLoading = false, 2000 );
  // }


  // ngOnInit()
  // {
  //   this.getEquipment();
  //   this._operator= new operator();
  // }

  // getEquipment()
  // {
  //   this._equipmentlist=[
  //     {id:1, name:"Fall Protection", isselected:false},
  //     {id:2, name:"Airborne hazards", isselected:false},
  //     {id:3, name:"Crane safety", isselected:false},
  //     {id:4, name:"First aid", isselected:false},
  //     {id:5, name:"OSHA", isselected:false},
  //     {id:6, name:"AED", isselected:false}

  //   ]
  // }
 
  // onchange()
  // {
  //   console.log(this._equipmentlist);
  // }

  // onsubmit()
  // {
  //   this._operator.operatorid = this._equipmentlist.filter(x=>x.isselected==true).map(x=>x.id).join(",").toString();
  //   this._operator.operatorname = this._equipmentlist.filter(x=>x.isselected==true).map(x=>x.name).join(",").toString();
  //   this.uniquekey = this.uniquekey + 1;
  //   this._operator.id = this.uniquekey;
  //   this._operatorlist.push(this._operator);
  // }
// }
// class equipment{
//   id: number;
//   name: string;
//   isselected: boolean;
// }
// class operator
// {
//   id: number;
//   name: string;
//   operatorid: string;
//   operatorname: string;
// }

export class AppComponent implements OnInit {
  dropdownList:{};
  dropdownSettings:{};
  form: FormGroup;
  constructor(private formBuilder : FormBuilder){}

  ngOnInit(){
    this.initForm();
    this.dropdownList = this.getData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All'
    };
  }

  initForm(){
    this.form = this.formBuilder.group({
      grocery : ['',[Validators.required]]
    })
  }

  handleButtonClick(){
    console.log('reactive form value ', this.form.value);
   // console.log('Actual data ', this.getObjectListFromData(this.form.value.grocery.map(item => item.item_id)));
  }

  onItemSelect($event:''){
    console.log('$event is ', $event); 
  }

  getObjectListFromData(ids:''){
    return this.getData().filter(item => ids.includes(item.item_id))
  }

  getData() : Array<any>{
    return [
      { item_id: 1, item_text: 'Apple', group : 'F' },
      { item_id: 2, item_text: 'Orange', group : 'F' },
      { item_id: 3, item_text: 'Potatoes', group : 'V' },
      { item_id: 4, item_text: 'Cabbage', group : 'V' },
      { item_id: 5, item_text: 'Cauliflower', group : 'V' }
    ];
  }

  setDefaultSelection(){
    let item = this.getData()[0];
    this.form.patchValue({
      grocery : [{
        item_id : item['item_id'],
        item_text : item['item_text']
      }]  
    })
  }


}