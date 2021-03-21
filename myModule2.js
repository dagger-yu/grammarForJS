(function(){
	var msg="Dear My Friend!"
	function doSomething(){
		console.log('doSomething:'+msg.toUpperCase())
	}
	function doOtherthing(){
		console.log('doOtherthing:'+msg.toLowerCase())
	}
	window.myModule2={
		doSomething:doSomething,
		doOtherthing:doOtherthing
	}
})()
