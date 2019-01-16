import { Response } from '@angular/http';
import { MymeanService } from '../services/mymean.services';
import MyMean from '../models/mymean.models';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mymean',
  templateUrl: './mymean.component.html',
  styleUrls: ['./mymean.component.scss']
})
export class MymeanComponent implements OnInit {

  constructor(private mymeanService: MymeanService) { }

  //Declaring the new mymean Object and initilizing it
  newMymean: MyMean = new MyMean();

  //An Empty list for the visible mymean list
  mymeansList: MyMean[];
  editMymeans: MyMean[] = [];

  ngOnInit() {
    //At component initialization the 
    this.mymeanService.getMyMeans()
      .subscribe(mymeans => {
        //assign the mymeanlist property to the proper http response
        this.mymeansList = mymeans
        console.log(mymeans)
      })
  }

  create() {
    this.mymeanService.createMymean(this.newMymean)
      .subscribe((res) => {
        this.mymeansList.push(res.data)
        this.newMymean = new MyMean()
      })
  }

  editMymean(mymean: MyMean) {
    console.log(mymean)
     if(this.mymeansList.includes(mymean)){
      if(!this.editMymeans.includes(mymean)){
        this.editMymeans.push(mymean)
      }else{
        this.editMymeans.splice(this.editMymeans.indexOf(mymean), 1)
        this.mymeanService.editMymean(mymean).subscribe(res => {
          console.log('Update Succesful')
         }, err => {
            this.editMymean(mymean)
            console.error('Update Unsuccesful')
          })
        }
      }
    }

    doneMymean(mymean:MyMean){
      mymean.status = 'Done'
      this.mymeanService.editMymean(mymean).subscribe(res => {
        console.log('Update Succesful')
      }, err => {
        this.editMymean(mymean)
        console.error('Update Unsuccesful')
      })
    }

    submitMymean(event, mymean:MyMean){
      if(event.keyCode ==13){
        this.editMymean(mymean)
      }
    }

    deleteMymean(mymean: MyMean) {
      this.mymeanService.deleteMymean(mymean._id).subscribe(res => {
        this.mymeansList.splice(this.mymeansList.indexOf(mymean), 1);
      })
    }

}