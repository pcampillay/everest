import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-page-captcha',
  templateUrl: './page-captcha.component.html',
  styleUrls: ['./page-captcha.component.scss']
})
export class PageCaptchaComponent implements OnInit {

  captcha :any;
  uploads: any = [];
  sparks: any = [0,0,0,0];
  valids: any = [0,0,0,0];
  condition: boolean = false;
  puerta : number;
  subPage: boolean = true;

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
    if(spark === 0){
      spark = 360;
    }
    this.sparks[index] = spark - 90;
    this.validUpload();
  }

  rotateAdvance(spark, index){
    if(spark === 360){
      spark = 0;
    }
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
        this.puerta = dat.result;
      }
      else{
        this.condition = false;
        this.puerta = 0;
      }
    });
  }

  verContenido(){
    this.subPage = false;
    if(this.puerta === 1){
      this.router.navigate(['./puerta-a'], {relativeTo: this.route});
    }
    if(this.puerta === 2){
      this.router.navigate(['./puerta-b/'], {relativeTo: this.route});
    }
    if(this.puerta === 3){
      this.router.navigate(['./puerta-c/'], {relativeTo: this.route});
    }
  }

}
