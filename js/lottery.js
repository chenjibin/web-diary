
var $start = document.getElementById('start'),
	$stop = document.getElementById('stop'),
	$result =document.getElementById('result'),
	eles = ['iPhone7','谢谢参与','iMac Book Pro','谢谢参与','iPad4','奔驰GLC300','谢谢参与','10元抵用券','谢谢参与','20元抵用券','30元抵用券','谢谢参与','50元抵用券'],
	m = null,
	flag = 0;
window.onload = function() {		
		//开始抽奖
		$start.onclick = startFun;
		//停止抽奖
		$stop.onclick = stopFun;
		//键盘事件(回车键开启和停止抽奖)
		document.onkeyup = function(e) {
			e= event || window.event;
			if(e.keyCode == 13){
				if(flag ===0) {
					startFun();
					flag= 1;
				}else {
					stopFun();
					flag= 0;
				}
			}
		};
};
function startFun() {
	clearInterval(m);
		m = setInterval(function(){
			var i = Math.floor((Math.random()*eles.length));			
			$result.innerHTML = eles[i];
		},50);
	$start.setAttribute('class','forbidden');
}
function stopFun() {
	$start.removeAttribute('class','forbidden');
			window.clearInterval(m);
}