import { Response } from '@angular/http';
import { MymeanService } from '../services/mymean.services';
import MyMean from '../models/mymean.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymean',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private mymeanService: MymeanService
  ) { }

  //Declaring the new todo Object and initilizing it
  public newMymean: MyMean = new MyMean()

  //An Empty list for the visible todo list
  mymeansList: MyMean[];
  editMymeans: MyMean[] = [];

  ngOnInit(): void {

    //At component initialization the 
    this.mymeanService.getMyMeans()
      .subscribe(mymeans => {
        //assign the todolist property to the proper http response
        this.mymeansList = mymeans
        console.log(mymeans)
      })
  }
  //This method will get called on Create button event
  
  create() {
    this.mymeanService.createMymean(this.newMymean)
      .subscribe((res) => {
        this.mymeansList.push(res.data)
        this.newMymean = new MyMean()
      })
  }

  
}