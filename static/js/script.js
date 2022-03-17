window.onload=function()
{
		 var oPlay=document.getElementById('play');
		 var aLi=oPlay.getElementsByTagName('li');
		 var oButton=document.getElementById('button');
		 var aDiv=oButton.getElementsByTagName('div');
		 var oPrev=document.getElementById('prev');
		 var oNext=document.getElementById('next');
		 var oFlash=document.getElementById('flash');
		 var now=0;
		 var timer2=null;
		 for(var i=0; i<aDiv.length; i++) {
		 	aDiv[i].index=i;
		 	aDiv[i].onmouseover=function(){
		 		if(now==this.index) return;
		 		now=this.index;
		 		tab();
		 	}
		 }
		 oPrev.onclick=function(){
		 	now--;
		 	if(now==-1){
		 		now=aDiv.length-1;
		 	}
		 	tab();
		 }
		 oNext.onclick=function(){
		 	now++;
		 	if(now==aDiv.length){
		 		now=0;
		 	}
		 	tab();
		 }
		 oFlash.onmouseover=function()
		{
		    clearInterval(timer2);
		}
		 oFlash.onmouseout=function()
		{
			timer2=setInterval(oNext.onclick,4000);
		}
		 timer2=setInterval(oNext.onclick,5000);
		 function tab(){
		 	for(var i=0; i<aLi.length; i++){
		 		aLi[i].style.display='none';
		 	}
		 	for(var i=0; i<aDiv.length; i++) {
		 		aDiv[i].style.background="#DDDDDD";
		 	}
		 	aDiv[now].style.background='#2667ff';
		 	aLi[now].style.display='block';
		 	aLi[now].style.opacity=0;
		 	aLi[now].style.filter="alpha(opacity=0)";
		 	jianbian(aLi[now]);
		 }
		function jianbian(obj){
			var alpha=0;
			clearInterval(timer);
			var timer=setInterval(function(){
				alpha++;
				obj.style.opacity=alpha/100;
				obj.style.filter="alpha(opacity="+alpha+")";
				if(alpha==100) {
					clearInterval(timer);
				}
			},10);
		}
        
        
 var nav=document.getElementById('nav');
 var oNav=nav.getElementsByTagName('li');
 var container=document.getElementById('container');
 var oDiv=container.getElementsByClassName('tab');
 
 for(var i=0;i<oNav.length;i++){
 oNav[i].index=i;
 oNav[i].onclick=function () {
 for(var i=0;i<oNav.length;i++){
 oNav[i].className='';
 oDiv[i].style.display="none";
 }
 this.className='activetab';

 oDiv[this.index].style.display="block"
 }
 for(var m=1;m<oNav.length;m++){
 oNav[m].className='';
 oDiv[m].style.display="none";
 }
 }
/*22*/ 

 var nav2=document.getElementById('nav2');
 var oNav2=nav2.getElementsByTagName('button');
 var container2=document.getElementById('container2');
 var oDiv2=container2.getElementsByClassName('tab');
 
 for(var i=0;i<oNav2.length;i++){
 oNav2[i].index=i;
 oNav2[i].onclick=function () {
 for(var i=0;i<oNav2.length;i++){
 oNav2[i].className='';
 oDiv2[i].style.display="none";
 }
 this.className='active';

 oDiv2[this.index].style.display="block"
 }
 for(var m=1;m<oNav2.length;m++){
 oNav2[m].className='';
 oDiv2[m].style.display="none";
 }
 }



}