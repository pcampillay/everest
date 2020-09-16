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
  upload1: any = 0;
  upload2: any = 0;
  upload3: any = 0;
  upload4: any = 0;

  uploads: any = [];

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
      this.upload1 = obj.p1 *90;
      this.upload2 = obj.p2 *90;
      this.upload3 = obj.p3 *90;
      this.upload4 = obj.p4 *90;

     this.uploads.push(obj.p1 *90);
     this.uploads.push(obj.p2 *90);
     this.uploads.push(obj.p3 *90);
     this.uploads.push(obj.p4 *90);

    });
  }

  clickDoor(id:any) {
   
  }
  rotateUpload(upload){

  }

  setTransform(upload){
    return 'rotate('+upload+'deg)';
  }
}
