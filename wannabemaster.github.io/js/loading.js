
function loading() {
	document.getElementById("loadDiv").style.visibility="visible";//显示
}
 
function autoCloseLoading(){
	setTimeout(function(){closeLoading()},15000);
}
 
function closeLoading() {
	document.getElementById("loadDiv").style.visibility="hidden";//隐藏
}