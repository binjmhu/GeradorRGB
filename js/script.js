var data = new Date();
	
var str_data = data.getDate() + '/' + (data.getMonth() + 1) + '/' + 
	data.getFullYear();
	
var str_hora = data.getHours() + ':' + data.getMinutes();
	
function printarData() {
	document.write(str_data);
}
	
function printarHora() {
	document.write(str_hora);
}

function cores(){
	var vermelho = document.getElementById("vermelho").value;
	var verde = document.getElementById("verde").value;
	var azul = document.getElementById("azul").value;
	
	document.getElementById("colorbox").style.backgroundColor = "rgb(" 
	+ vermelho + ","+ verde + ","+ azul + ")";
	
	document.getElementById("saida").innerHTML = "rgb(" 
	+ vermelho + ","+ verde + ","+ azul + ")";

}