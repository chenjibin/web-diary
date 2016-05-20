var pointer = document.querySelectorAll('input[type="radio"]');
var init;
window.onload = function() {
    //var pointer = document.getElementsByTagName('input');
    //var att = document.getElementById('image-group').getElementsByTagName('img');
    //for(var i = 0;i<pointer.length;i++){
    //    pointer[i].index = i;
    //    pointer[i].onmouseover = function() {
    //        var n = this.index;
    //        att[n].setAttribute('class','fs-opacity-none');
    //    };
    //    pointer[i].onmouseout = function() {
    //        var n = this.index;0te('class','fs-opacity-none');
    //    }
    //}
    for(var i = 0;i<pointer.length;i++){
        pointer[i].index = i;
        pointer[i].onmouseover = function() {
                fnStop();
        };
        pointer[i].onclick = function() {
            for(var l = 0;l<pointer.length;l++){
                pointer[l].checked = false;
            }
            this.checked = true;
        };
        pointer[i].onmouseout = function() {
                fnStart();
        };
    }
    fnStop();
    fnStart();
};
function fnStart() {
    init = setInterval('fnAuto()',5000);
}
function fnStop() {
    window.clearInterval(init);
}
function fnAuto() {
    var aa =document.querySelector('input[type="radio"]:checked').index;
    if(aa == 4) {
        aa=-1;
    }
    aa+=1;
    pointer[aa].checked = true;
}
