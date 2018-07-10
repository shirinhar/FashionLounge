import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Http } from '@angular/http';


@Injectable()
export class QueryHandler {

  email: string;
  role: string;
  rootUrl: string;
  modules: string[];

  constructor(public http: Http, public http2: Http, public http3: Http, public http4: Http, public http5: Http, public http6: Http, public http7: Http, public http8: Http, public http9: Http, public http10: Http, public http11: Http, public http12: Http, public http13: Http, public http14: Http, public http15: Http, public http16: Http) {
    console.log('Query handler is instantiated!');
    this.rootUrl = 'http://localhost:8100/';
  }

  set_email(userEmail){
    this.email = userEmail;
  }

  set_role(role: string){
    console.log("setting role.... rolse is now", role)
    this.role = role;
  }

  getModules(){
    console.log(this.email);
    var queryLink = this.rootUrl + 'modules.php/';
    var queryString = JSON.stringify({teachID: this.email, role: this.role});
    return this.http2.post(queryLink, queryString);
  }

  getSpecModule(module){
    console.log("getting grouplist for module: " + module);
    var queryLink = this.rootUrl + 'moduleOverview.php';
    var queryString = JSON.stringify({teachID: this.email, module_id: module, role: this.role});
    return this.http4.post(queryLink, queryString);
  }

  getStates(module){
    console.log("getting states of all projects under the module: " + module);
    var queryLink = this.rootUrl + 'moduleStates.php';
    var queryString = JSON.stringify({module_id: module, teachID: this.email, role: this.role});
    return this.http4.post(queryLink, queryString);
  }


  getStudentInfo(project_title, student_id){
    console.log("getting information of student");
    var queryLink = this.rootUrl + 'studentInfo.php';
    var queryString = JSON.stringify({project_title: project_title, student_id: student_id});
    console.log(queryString);
    return this.http6.post(queryLink, queryString);
  }


}
