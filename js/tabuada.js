let valor_digitado;//essa variável será usada para armazenar o valor do input 

function geraTabuada(){
	
	valor_digitado = document.getElementById('valor')
	console.log(valor_digitado)
	if(valor_digitado.value == null || valor_digitado.value == ''){
			alert('o campo de digitação deve ser preenchido')

	}else{
			valor_digitado.value = parseInt(valor_digitado.value);
			console.log('o valor não é vazio')
		
		let container = document.getElementById('tabuada')//variável que pega o campo que deverá conter a tabuada
		let titulo = document.createElement('h2');//Titulo da tabuada
		titulo.setAttribute('id','titulo');
		
		let multiplicacao = document.createElement('div')//cria uma div para a tabuada de multiplicação do número
		multiplicacao.setAttribute('id','multiplicacao')//settando um valor de id para o campo de multiplicação
		
		let divisao = document.createElement('div')//cria uma div para a tabuada de divisão do número
		divisao.setAttribute('id','divisao')//settando um valor de id para o campo de divisão

		let divisao_titulo = document.createElement('h2');
		divisao_titulo.setAttribute('id','titulo_divisao')
		divisao_titulo.innerHTML = 'Divisão';
		let multiplicacao_titulo = document.createElement('h2');
		multiplicacao_titulo.setAttribute('id','titulo_multiplicacao')
		multiplicacao_titulo.innerHTML = 'Multiplicação' 

		//Verificando se o valor digitado não é vazio, nulo ou não é um número
		
				
				//Criando e inserindo o título da tabuada e os campos
				titulo.innerHTML = `A tabuada de ${valor_digitado.value} é:`;
				container.appendChild(titulo)
				divisao.append(divisao_titulo)
				multiplicacao.append(multiplicacao_titulo)
				container.append(multiplicacao)
				container.append(divisao)

			for(let i = 0; i<=10;i++){
				//document.write(`${valor_digitado.value} x ${i} = ${valor_digitado.value*i} `)
				let linha_tabuada = document.createElement('span')
				linha_tabuada.innerHTML =`${valor_digitado.value} x ${i} = ${valor_digitado.value*i}`;
				linha_tabuada.className = 'linha_tabuada';
				multiplicacao.append(linha_tabuada) 
			}

			for(let i = 0; i<=10;i++){
				//document.write(`${valor_digitado.value} x ${i} = ${valor_digitado.value*i} `)
				let linha_tabuada = document.createElement('span')
				linha_tabuada.innerHTML =`${valor_digitado.value} / ${i} = ${(valor_digitado.value / i).toFixed(2)}`;
				linha_tabuada.className = 'linha_tabuada';
				divisao.append(linha_tabuada) 
			}
			valor_digitado.value = ''
	}
	

}
	//essa função serve para apagar todas as tabuadas geradas
	function apagarTabuada(){
		//seleciona os ids das tabuadas e apaga seus conteudos
		document.getElementById('titulo').remove();
		document.getElementById('multiplicacao').remove();
		document.getElementById('divisao').remove();
		document.getElementById('titulo_multiplicacao').remove();
		document.getElementById('titulo_divisao').remove();
	}
	
	window.addEventListener('reload',function(){
			valor_digitado.value = '';
			valor_digitado.placeholder = 'Digite um número';
	})
