window.onload = drag;

function drag() {
	var $title = document.getElementById('title');
	$title.onmousedown = fnDown;
}
function fnDown(e) {
	e = event || window.event;
	var $loginBox = document.getElementById('login-box'),
		boxW = $loginBox.offsetWidth,
		boxH = $loginBox.offsetHeight,
		disX = e.clientX - $loginBox.offsetLeft,
		disY = e.clientY - $loginBox.offsetTop;
	document.onmousemove = function() {	
		fnMove(e,disX,disY,boxW,boxH,$loginBox);
	};
	document.onmouseup = function() {
		document.onmousemove = null;
		document.onmouseup = null;
	};
}
function fnMove(e,posX,posY,boxW,boxH,$loginBox) {
	e = event || window.event;
		var l = e.clientX-posX,
			t = e.clientY-posY,
			winW = document.documentElement.clientWidth || document.body.clientWidth,
			winH = document.documentElement.clientHeight || document.body.clientHeight,
			maxW = winW-boxW,
			maxH = winH-boxH;
			document.title = e.clientX+','+e.clientY+','+l;
		if(l<0)  {
			l = 0;
		}else if(l>=maxW){
			l=maxW;
		}
		if(t<0)  {
			t = 0;
		}else if(t>=maxH){
			t=maxH;
		}
		$loginBox.style.left =l+boxW/2 +'px';
		$loginBox.style.top =t+boxH/2 +'px';
}
