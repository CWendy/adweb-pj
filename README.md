# adweb-pj
Project code for the course Advanced Web Technology (2016).

## Useful Instructions
* Please look at [Ionic Documentation](http://ionicframework.com/docs/) first.
* run command line in project folder and type:    
`ionic serve`    
to start the server.
* The stylesheet is stored in `scss/ionic.app.scss`, which is written with scss.    
` ionic serve `
 will look for the changes in scss file and generate the css file to `www/css/ionic.app.css` automatically.    
 Please check [Using Sass in Ionic](http://ionicframework.com/docs/cli/sass.html) for detail.    
 This [brief tutorial for scss](http://sass-lang.com/guide) is easy and helpful. 
* Add more [useful instrucions](#useful-instructions) here, during your exploration of **Ionic** and **Node.js**, to help others. 

## `www/Templates` and `www/js`
Those templates and Javascripts were initially placed there. Change them whenever you like.

## Side Menu
It's implemented by `<ion-side-menus>` and `<ion-list>`, decorated with some simple ion icons.
  

***
## Update by xiayan
更新主页html及css代码。仍有以下内容尚待开发和完善：  
1. js文件控制的各种页面响应。   
2. 搜索框左边带滑动条的城市选择栏，由于非pj文档要求且实现比较复杂，暂且搁置。  
3. 下拉菜单表项。  
4. 景观列表使用的名为list-inner-container的ion-scroll组件，其高度和内部div高度设置为固定值（单位px）时可以正常工作，一旦高度改为百分比表示就无法正常工作（响应式布局高度需要用百分比表示）。  
5. 界面美工细化。  
  
其他页的前端由于时间不够还没有开始做，足迹/喜欢/心愿列表布局跟主页都差不多，写起来应该都比较快，剩下的主要任务是景观详细页。  
感觉我写得好少，不要打我。要打打htc。  

2016.06.18
