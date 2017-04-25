var btnBox = getClass('carousel-btns')[0];
var aBtns = btnBox.getElementsByTagName('li');
var aItem = getClass('carousel-item');
var oImgBox = getClass('carousel-imgs')[0];

for(var i = 0; i<aBtns.length; i++){
	aBtns[i].index = i;
	aBtns[i].onclick = function(){
		for(var j = 0; j<aBtns.length; j++ ){
			aBtns[j].className = '';
		}
	oImgBox.style.left = -aItem[0].offsetwidth * this.index +"px";
		this.className = 'selected';
	}
}
