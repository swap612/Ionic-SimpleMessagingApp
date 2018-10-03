import { Component } from '@angular/core';
import { NavController, Option } from 'ionic-angular';
import {SMS, SmsOptions} from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 phoneNumber : number;
 textMessage : string;

  constructor(public navCtrl: NavController,private sms: SMS) {
   
  }
 
// Send a text message using default options
sendTextMessage(){
  //option var used to stores the sms options 
  const options: SmsOptions ={
    replaceLineBreaks:false
  }
  //send() from SMS 
  this.sms.send(String(this.phoneNumber),this.textMessage,options).then((result)=>{
    console.log(result);
  },()=>{
    console.log();
  })
}

}
