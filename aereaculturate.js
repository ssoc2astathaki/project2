function reset(){
	document.getElementById('b').value = "";
	document.getElementById('h').value = "";
	document.getElementById('result').innerHTML = "";
	document.getElementById('btn').removeAttribute('disabled');
}
 
 
function calculateArea(btn){
	let b = document.getElementById('b').value;
	let h = document.getElementById('h').value;
 
	if(b != "" && h !=""){
		let par_b=parseInt(b);
		let par_h=parseInt(h);
 
		let area=par_b*par_h;
 
		btn.setAttribute('disabled', 'disabled');
 
		document.getElementById('result').innerHTML = "<center><label style='font-size:26px;'>Το εμβαδόν του ορθογωνίου παραλληλογράμμου είναι:</label> <br /><span class='text-primary' style='color:red; font-size:30px;'>"+area+"</span></center>";
 
	}else{
		alert(" Παρακαλώ εισάγετε τιμές");
	}
 
}