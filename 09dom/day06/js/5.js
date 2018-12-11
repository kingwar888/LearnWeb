//找到form中倒数第二个元素，绑定单击事件
var form=document.forms[0];
//为username和pwd绑定获得焦点事件
form.username.onclick=form.pwd.onclick=getFocus;
function getFocus(){
	this.className="txt_focus";
	this.parentNode //td
		.parentNode //tr
		.querySelector("div")
			.className="";
}
//为username绑定失去焦点事件为valiName
form.username.onblur=valiName;
function valiName(){
	// txt.className="";
	// var div=txt.parentNode //td
	// 			.parentNode //tr
	// 			.querySelector("div");
	// if(/^\w{1,10}$/.test(txt.value)){
	// 	div.className="vali_success";
	// 	return true;
	// }else{//否则
	// 	div.className="vali_fail";
	// 	return false;
	// }
	return valiName(this,/^\w{1,10}$/)
}
form.pwd.onblur=valiPwd;
function valiPwd(){
	// txt.className="";
	// var div=txt.parentNode //td
	// 			.parentNode //tr
	// 			.querySelector("div");
	// if(/^\d{6}$/.test(txt.value)){
	// 	div.className="vali_success";
	// 	return true;
	// }else{//否则
	// 	div.className="vali_fail";
	// 	return false;
	// }
	return valiPwd(this,/^\d{6}$/);
}
//为form绑定submit事件
form.onsubmit=function(e){
	var rName=valiName.call(form.username);
	var rPwd=valiPwd.call(form.pwd);
	if(!(rName&&rPwd)) e.preventDefault();
}