import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {

  captcha :any;
  uploads: any = [];
  sparks: any = [0,0,0,0];
  valids: any = [0,0,0,0];
  condition: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.generatorCaptcha(id).subscribe(data => {
      this.captcha = data;
      let obj = JSON.parse(this.captcha.result.code);
      for (let variable in obj) {       
        this.uploads.push(obj[variable] * 90);
     }
    });
  }


  setTransform(upload){
    return 'rotate('+upload+'deg)';
  }

  rotateReturn(spark, index){
    this.sparks[index] = spark - 90;
    this.validUpload();
  }

  rotateAdvance(spark, index){
    this.sparks[index] = spark + 90;
    this.validUpload();
  }

  validUpload(){
    let objValid = {
      "p1" : this.sparks[0]/90,
      "p2" : this.sparks[1]/90,
      "p3" : this.sparks[2]/90,
      "p4" : this.sparks[3]/90
    }
    let stringValid = JSON.stringify(objValid);

    let result = {
      "id" : this.captcha.result.id,
      "code" : stringValid
    }

    this.apiService.validCaptcha(result).subscribe(data => {
      let dat:any = data;
      if(dat.result>0){
        this.condition = true;
      }
      else{
        this.condition = false;
      }
    });

  }
}
