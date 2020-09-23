
var idend=4;
var idstart=1;
var rotation =0;

document.getElementById("next").onclick = function(){
	idend=idend+1;
	var element =document.getElementById("bra"+idend);
	element.classList.add("elementToFadeIn");
	document.getElementById("bra"+idend).style.display = "block";
	
	document.getElementById("bra"+idstart).style.display = "none";
	idstart=idstart+1;
	
	if(idend%8==0){
		idend=0;
		idstart=5;
		
	}
	else if(idend%4==0){
		idstart=1;
		idend=4;
	}
	

};
document.getElementById("prev").onclick = function(){
	if(idend==0){
		idstart=1;
		idend=5;
	}

	document.getElementById("bra"+idend).style.display = "none";
	idend=idend-1;

	idstart=idstart-1;
	document.getElementById("bra"+idstart).style.display = "block";

};

var idenda=4;
var idstarta=1;
var rotation =0;

document.getElementById("nexta").onclick = function(){
	idenda=idenda+1;
	var element =document.getElementById("ba"+idenda);
	element.classList.add("elementToFadeIn");
	document.getElementById("ba"+idenda).style.display = "block";
	
	document.getElementById("ba"+idstarta).style.display = "none";
	idstarta=idstarta+1;
	
	if(idenda%8==0){
		idenda=0;
		idstarta=5;
		
	}
	else if(idenda%4==0){
		idstarta=1;
		idenda=4;
	}
	

};
document.getElementById("preva").onclick = function(){
	if(idenda==0){
		idstarta=1;
		idenda=5;
	}

	document.getElementById("ba"+idenda).style.display = "none";
	idenda=idenda-1;

	idstarta=idstarta-1;
	document.getElementById("ba"+idstarta).style.display = "block";

};