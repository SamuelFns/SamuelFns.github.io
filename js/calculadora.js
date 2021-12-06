//variável global do resultado
let resultado = document.getElementById('resultado');
//função responsável por calcular a partir dos botões apertados pelo usuário 
function calcular(tipo,valor){
		
			if (tipo == 'acao') {
				switch(valor){
					case 'c':
					resultado.value = ''
					resultado.placeholder = 0;
					break;
					case'.':
					case'+':
					case'-':
					case';':
					case'*':
					case"/":
					resultado.value +=valor;
					break;
					case'=':
					let valor_campo = eval(resultado.value);
					resultado.value = valor_campo;
					
					break;
				}
			}else{
				resultado.value+=valor;
			}
		}
	


//fução responsável por realizar os cálculos a partir das teclas apertadas pelo teclado
function calcularTeclado(evnt){
	//let x = evnt.getModifierState("NumLocK")		
			//esse event serve para capturar eventos de página, 
			//assim , quando a função for chamada, 
			//ele ira analisar o evnt a partir do código da tecla do teclado
			console.log(evnt.keyCode)
			switch(evnt.keyCode){
				
					//essa região é referente ás teclas de número que ficam na parte superior do teclado
					
					case 48:
					case 49:
					case 50:
					case 51:
					case 52:
					case 53:
					case 54:
					case 55:
					case 56:
					case 57:
					resultado.value+=evnt.key;
					break;

					//esse trecho é responsável por pegar os valores de + - /  * do numPad do teclado
					case 107:
					case 111:
					case 109:
					case 106:
					case 173:
					case 191:
					case evnt.shiftKey && 61:
					case evnt.shiftKey && 56:
					resultado.value+=evnt.key;
					break;

					//esse trecho serve para pegar o apertar da tecla c, que será referida como o botão de apagar da calculadora
					case 67:
					resultado.value = '';
					resultado.placeholder = 0;
					break;
					
					case 61:
					let valor_campo = eval(resultado.value);
					resultado.value = valor_campo;
					

				}
		
		
			
		
	}
	//função responsável por apagar os campos quando  a página for recarregada
	function apagarCampos(){
		resultado.value = '';
		resultado.placeholder = 0;
	}
	
	window.onkeydown = calcularTeclado;

	window.reload = apagarCampos();