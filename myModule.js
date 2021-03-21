function myModule(){
	var msg="Dear My Friend!"
	function doSomething(){
		console.log(msg.toUpperCase())
	}
	function doOtherthing(){
		console.log(msg.toLowerCase())
	}
	return{
		doSomething:doSomething,
		doOtherthing:doOtherthing
	}
}
