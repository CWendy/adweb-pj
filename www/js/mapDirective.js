/* 用于显示、控制地图的控制器 */
var appDirectives = angular.module('app.directives', []);
appDirectives.directive('appMapSearch', function() {
        return {
            restrict: "E",
            replace: true,
            template: "<div id='allMap'></div>",
            scope: {
                center: "=",
                markers: "=",
                width: "@",
                height: "@",
                zoom: "@",
                zoomControl: "@",
                scaleControl: "@",
                address: "@"
            },
            link: function (scope, element, attrs) {
                scope.$parent.load();
                var map;
                map = new BMap.Map("allMap");
                //map.addControl( new BMap.ZoomControl() );
                var point = new BMap.Point(116.331398,39.897445);
                map.centerAndZoom(point,15);

                map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
                map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function(r){
                    if(this.getStatus() == BMAP_STATUS_SUCCESS){
                        var mk = new BMap.Marker(r.point);
                        point = r.point;
                        map.addOverlay(mk);
                        map.panTo(r.point);
                        //alert('您的位置：'+r.point.lng+','+r.point.lat);

                        localStorage.removeItem("lng");
                        localStorage.removeItem("lat");
                        if(localStorage.getItem("lng")!=null){
                            alert("上次定位过");
                        }

                        localStorage.setItem("lng", r.point.lng);
                        localStorage.setItem("lat", r.point.lat);


                        var options = {
                            onSearchComplete: function(results){
                                // 判断状态是否正确
                                if (local.getStatus() == BMAP_STATUS_SUCCESS){
                                    var s = "{\"scenelist\":[";
                                    for (var i = 0; i < results.getCurrentNumPois()-1; i++){
                                        //s.push(results.getPoi(i).title);
                                        s = s + "\""+results.getPoi(i).title+"\""+",";
                                    }
                                       s = s + "\""+results.getPoi(i).title+"\""+"]}";
                                   // document.getElementById("r-result").innerHTML = s.join("<br/>");
                                    //alert(s);
                                    scope.$parent.loadList(s);
                                }
                            }
                        };
                        var local = new BMap.LocalSearch(map, options);
                        local.search("景点");

                        //

                    }
                    else {
                        alert('failed'+this.getStatus());
                    }
                },{enableHighAccuracy: true})
            }
        };
    });

appDirectives.directive('appMapScenery', function() {
    return {
        restrict: "E",
        replace: true,
        template: "<div id='allMap'></div>",
        scope: {
            center: "=",
            markers: "=",
            width: "@",
            height: "@",
            zoom: "@",
            zoomControl: "@",
            scaleControl: "@",
            address: "@"
        },
        link: function (scope, element, attrs) {
            console.log(scope.$parent.lng);
            //scope.$parent.load();
            var map;
            map = new BMap.Map("allMap");
            //map.addControl( new BMap.ZoomControl() );
            var point = new BMap.Point(scope.$parent.lng,scope.$parent.lat);
            map.centerAndZoom(point,15);

            map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放


        }
    };
});

appDirectives.directive('appMapRoute', function() {
    return {
        restrict: "E",
        replace: true,
        template: "<div id='allMap'></div>",
        scope: {
            center: "=",
            markers: "=",
            width: "@",
            height: "@",
            zoom: "@",
            zoomControl: "@",
            scaleControl: "@",
            address: "@"
        },
        link: function (scope, element, attrs) {
            var map;
            map = new BMap.Map("allMap");
            //map.addControl( new BMap.ZoomControl() );
            var point = new BMap.Point(124, 41);
            map.centerAndZoom(point,15);

            map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放


        }
    };
});

appDirectives.directive('appMapRoutePlanning', function() {
    return {
        restrict: "E",
        replace: true,
        template: "<div id='allMap'></div>",
        scope: {
            center: "=",
            markers: "=",
            width: "@",
            height: "@",
            zoom: "@",
            zoomControl: "@",
            scaleControl: "@",
            address: "@"
        },
        link: function (scope, element, attrs) {
            var map;
            map = new BMap.Map("allMap");
            //map.addControl( new BMap.ZoomControl() );
            var point = new BMap.Point(124, 41);
            map.centerAndZoom(point,15);

            map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        }
    };
});

