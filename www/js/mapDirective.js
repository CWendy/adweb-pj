/* 用于显示、控制地图的控制器 */
var appDirectives = angular.module('app.directives', []);
appDirectives.directive('appMap', function() {
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
                var myGeo = new BMap.Geocoder();
                myGeo.getPoint("静安寺", function(point) {
                    if(!point) {
                        console.log(point);
                        map.centerAndZoom( (116.404, 39.915), 16);
                        map.addOverlay( new BMap.Marker(116.404, 39.915) );
                    }
                    else {
                        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
                        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
                    }
                }, "上海");

                map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
                map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            }
        };
    });
