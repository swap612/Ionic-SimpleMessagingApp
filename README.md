# Ionic-SimpleMessagingApp
Builing a simple messaging app using ionic.

For setting up the development evironment for Ionic Framework follow instructions from <a href="https://github.com/swap612/DetectiveApp/blob/master/README.md"> README.md. </a><br>
  
<b>Objective:</b> To send a mesage through app <br> 
<p>To build the Ionic app: <br>
  1. In terminal type ionic start <b>ProjectName</b> blank --v3 <br>
  2. Goto dir <b>ProjectName</b> generated in the above step.<br>
  3. Install the following plugins to get sms support:
  <pre>
  $ ionic cordova plugin add cordova-sms-plugin
  $ npm install --save @ionic-native/sms
  </pre>
  4. Add this SMS plugin to app's NgModule.Edit <b> /src/app/app.module.ts</b> file<br> add import statement: <br>import { SMS } from '@ionic-native/sms'. Also add SMS entry in @NgModule Providers section<br>
  5. Generally we need to modify these 3 files <br>
  <ul><li>home.html </li>- it contains the GUI part of app.
  <li>home.ts </li> - It has the logic for the app.
  <li>home.sass </li>- It contains the styling part for the app.
   </ul>  
