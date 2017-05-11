var map = new BMap.Map("container");
var point = new BMap.Point(120.15, 30.24);//西湖
var school = new BMap.Point(120.018158,30.295574);//学校

map.centerAndZoom(point, 15);

map.addControl(new BMap.NavigationControl());//平移缩放   
map.addControl(new BMap.ScaleControl());//比例尺    
map.addControl(new BMap.OverviewMapControl());//缩略地图   
map.addControl(new BMap.MapTypeControl());//地图类型    
map.enableScrollWheelZoom();//滚轮

$(init)

function init(){

	var local = new BMap.LocalSearch(map, {
		pageCapacity: 6,
		renderOptions: {
			map: map,
			autoViewport: true,
			panel:"information"
		}
	});

	local.searchNearby("宾馆",point);

	$("body").on("click", "#button1", function() {
		$("#information").fadeIn();
		map.clearOverlays();
		var local = new BMap.LocalSearch(map, {
			renderOptions: {
				map: map,
				autoViewport: true,
				panel: "information"
			}
		});
		local.searchNearby("宾馆", point);
	});

	$("body").on("click", "#button2", function() {
		$("#information").fadeIn();
		map.clearOverlays();
		var transit = new BMap.TransitRoute(map, {
			renderOptions: {
				map: map,
				panel: "information"
			}
		});
		transit.search("杭州师范大学仓前新校区", "宾馆");
	});

	$("body").on("click", "#button3", function() {
		$("#information").hide();
		map.centerAndZoom(school, 17);
		var building =[ [120.014282,30.295145],
		[120.012296,30.296291],
		[120.014021,30.297226],
		[120.016159,30.295036],
		[120.016244,30.294677],
		[120.017403,30.294660],
		[120.017206,30.293742],
		[120.016756,30.293558],
		[120.015860,30.295170],
		[120.016990,30.295808],
		[120.016469,30.296089],
		[120.015804,30.296556],
		[120.015535,30.296946],
		[120.015230,30.296089],
		[120.014798,30.296463],
		[120.018787,30.295169],
		[120.017547,30.293921],
		[120.020134,30.294935],
		[120.020404,30.295590],
		[120.018787,30.294405],
		[120.017098,30.293843],
		[120.019074,30.295278],
		[120.021212,30.297040],
		[120.021428,30.296728],
		[120.020619,30.296400],
		[120.019937,30.296837],
		[120.020188,30.297055],
		[120.020637,30.297414],
		[120.017817,30.296650],
		[120.018266,30.297383],
		[120.020368,30.297975],
		[120.020637,30.298162],
		[120.018338,30.297897],
		[120.018679,30.298256],
		[120.017781,30.297507],
		[120.018230,30.297741],
		[120.017368,30.297585],
		[120.017511,30.297679],
		[120.015265,30.297667],
		[120.022218,30.298677],
		[120.022200,30.297574],
		];
		for(var i=0;i<building.length;i++)
		{
            //设置标注
            var marker = new BMap.Marker(new BMap.Point(building[i][0],building[i][1]));
            map.addOverlay(marker);
             //信息框
             var sContent =
             "<div class=\"ui-building\"> \
             <div class=\"container-fluid\"> \
             <div class=\"row\"> \
             <div class=\"ui-img\"><img src=\"../images/EX06-1.jpg\" id=\"ui-img-1\"></div> \
             </div> \
             <div class=\"row\"> \
             <div class=\"col-sm-8\"> \
             <div class=\"ui-building-left\"> \
             <div class=\"ui-building-left-title\">" + "XXXXXXXX" + "</div> \
             <div class=\"ui-building-left-star\">\
             <span class=\"glyphicon glyphicon-star\" id=\"star\"></span>\
             <span class=\"glyphicon glyphicon-star\"></span>\
             <span class=\"glyphicon glyphicon-star\"></span>\
             </div>\
             <div class=\"ui-building-left-sub\">\
             <span class=\"font1\">" + "XX/XX分" + "</span> \
             <span class=\"font1\">" + "XXXX条评论" + "</span> \
             </div>\
             </div> \
             </div> \
             <div class=\"col-sm-4\"> \
             <div class=\"ui-building-right\"> \
             <div class=\"ui-building-right-sub font1\">查看详情</div> \
             </div> \
             </div> \
             </div> \
             </div> \
             </div>";

             var content1=building[i][2];

             var infoWindow = new BMap.InfoWindow(sContent);
             marker.addEventListener("click", function(){
             	this.openInfoWindow(infoWindow);
             	document.getElementById('imgdemo').onload = function (){
             		infoWindow.redraw();
             	}
             });
         }

     });
}