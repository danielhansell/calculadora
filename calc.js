document.getElementById("n1").addEventListener("click", n1);
document.getElementById("n2").addEventListener("click", n2);
document.getElementById("n3").addEventListener("click", n3);
document.getElementById("n4").addEventListener("click", n4);
document.getElementById("n5").addEventListener("click", n5);
document.getElementById("n6").addEventListener("click", n6);
document.getElementById("n7").addEventListener("click", n7);
document.getElementById("n8").addEventListener("click", n8);
document.getElementById("n9").addEventListener("click", n9);
document.getElementById("n0").addEventListener("click", n0);
document.getElementById("s").addEventListener("click", o1);
document.getElementById("r").addEventListener("click", o2);
document.getElementById("m").addEventListener("click", o3);
document.getElementById("d").addEventListener("click", o4);
document.getElementById("sr").addEventListener("click", showResult);
document.getElementById("ap").addEventListener("click", apagar);
document.getElementById("pt").addEventListener("click", ponto);
var a=0;
var b=0;
var c=0;
var d=0;

function n1(){ 
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("n1").innerHTML;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function n2(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("n2").innerHTML;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function n3(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("n3").innerHTML;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function n4(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("n4").innerHTML;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function n5(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("n5").innerHTML;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function n6(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("n6").innerHTML;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function n7(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("n7").innerHTML;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function n8(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("n8").innerHTML;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function n9(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("n9").innerHTML;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function n0(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("n0").innerHTML;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function o1(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("s").innerHTML;
	a=a+1;
	d=d+1;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function o2(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("r").innerHTML;
	a=a+1;
	d=d+1;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function o3(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("m").innerHTML;
	a=a+1;
	d=d+1;
	document.getElementById("resultado").innerHTML = atual + junto;
}

function o4(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("d").innerHTML;
	a=a+1;
	d=d+1;
	document.getElementById("resultado").innerHTML = atual + junto;
}
function apagar(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("ap").innerHTML;
	document.getElementById("resultado").innerHTML = "";
}
function ponto(){
	let atual = document.getElementById("resultado").innerHTML;
	let junto = document.getElementById("pt").innerHTML;
	b=b+1;
	if(b==2){
		if(d!==0){
			c=c+1;
			b=b-1;
		}
	}
	document.getElementById("resultado").innerHTML = atual + junto;
}

function showResult(){
	let atual = document.getElementById("resultado").innerHTML;
	let soma = atual.indexOf("+");
	let subtracao = atual.indexOf("-");
	let multiplicacao = atual.indexOf("x");
	let divisao = atual.indexOf("÷");
	
	if(a===1 && b===1 && c===0 && d===1){
		if(soma !== -1){
			array = atual.split("+", 2);
			res = parseFloat(array[0]) + parseFloat(array[1]);
			document.getElementById("resultado").innerHTML = res;
		}
		else if(subtracao !== -1){
			array = atual.split("-", 2);
			res = parseFloat(array[0]) - parseFloat(array[1]);
			document.getElementById("resultado").innerHTML = res;
		}
		else if (multiplicacao !== -1){
			array = atual.split("x", 2);
			res = parseFloat(array[0]) * parseFloat(array[1]);
			document.getElementById("resultado").innerHTML = res;
		}
		else if (divisao !== -1){
			array = atual.split("÷", 2);
			res = parseFloat(array[0]) / parseFloat(array[1]);
			document.getElementById("resultado").innerHTML = res;
		}
	}
	else if(a!==1){
		document.getElementById("resultado").innerHTML = "";
	}
	else if(b!==1){
		document.getElementById("resultado").innerHTML = "";
	}
	else if(c!==0){
		document.getElementById("resultado").innerHTML = "";
	}
	else if(d!==1){
		document.getElementById("resultado").innerHTML = "";
	}
	a=0;
	b=0;
	c=0;
	d=0;
}
