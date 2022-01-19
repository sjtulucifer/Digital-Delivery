import { Component, OnInit } from '@angular/core';
import { GetKeyInfoService } from 'src/app/services/get-key-info.service';

// 获取模型视图令牌
var viewToken: string;
// 3D模型对象
var viewer3D: any;
// bimface应用对象
var app: any;

@Component({
  selector: 'dd-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css']
})
export class Feature1Component implements OnInit {

  constructor(private getInfo: GetKeyInfoService) {
  }

  ngOnInit(): void {
    viewToken = this.getInfo.getViewToken();
    //创建BimfaceSDKLoaderConfig
    let loaderConfig = new BimfaceSDKLoaderConfig();
    //设置BimfaceSDKLoaderConfig的viewToken
    loaderConfig.viewToken = viewToken;
    //调用BimfaceSDKLoader的load方法加载模型
    BimfaceSDKLoader.load(loaderConfig, this.successCallback, this.failureCallback);
  }

  //加载成功回调函数
  successCallback(viewMetaData: any): void {
    //获取DOM元素
    let domShow = document.getElementById('domId');
    //创建WebApplication3DConfig
    let webAppConfig = new Glodon.Bimface.Application.WebApplication3DConfig();
    //设置创建WebApplication3DConfig的dom元素值
    webAppConfig.domElement = domShow;
    //创建WebApplication3D
    app = new Glodon.Bimface.Application.WebApplication3D(webAppConfig);
    //添加待显示的模型
    app.addView(viewMetaData.viewToken);
    //获取viewer3D对象
    viewer3D = app.getViewer();
  };


  //加载失败回调函数
  failureCallback(error: any): void {
    console.log(error);
  };
}
