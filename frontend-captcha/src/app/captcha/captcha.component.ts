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

  spark1:any = 0;
  spark2:any = 0;
  spark3:any = 0;
  spark4:any = 0;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.apiService.generatorCatpcha(id).subscribe(data => {
      this.captcha = data;
      let obj = JSON.parse(this.captcha.result.code);
      console.log(obj);

     this.uploads.push(obj.p1 *90);
     this.uploads.push(obj.p2 *90);
     this.uploads.push(obj.p3 *90);
     this.uploads.push(obj.p4 *90);

    });
  }


  setTransform(upload){
    return 'rotate('+upload+'deg)';
  }

  setTransformSpark(spark){
    return 'rotate('+spark+'deg)';
  }

  rotateReturn(spark, index){
    this.sparks[index] = spark - 90;
  }

  rotateAdvance(spark, index){
    this.sparks[index] = spark + 90;
  }
}
