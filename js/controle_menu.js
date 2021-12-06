//Esse script realizará a abertura do menu vertical quando for clicado no botão hamburguer
let hamburguer = document.getElementById('hamburguer')
let menuAberto;//Verificará se o menu vertical está aparecendo ou não
let largura;//pegará a largura da tela do usuário sempre que a mesma for redirecionada

/*Função que chamará o menu quando o botão haburguer for clicado*/
function apareceMenu(){
	let menu_vertical = document.getElementById('menu_vertical')//variável que seleciona o menu horizontal dentro da página html
		if(!menuAberto){
			
			menu_vertical.style.display = 'block'
			
			menuAberto = true;
		}else if(menuAberto){
			menu_vertical.style.display = 'none';
			
			menuAberto = false;
		}
}
hamburguer.addEventListener('click',apareceMenu);
function redimensionaTela(){
	largura = window.innerWidth;
}
window.addEventListener('resize',redimensionaTela())
if(largura>768 && menuAberto ){
	document.getElementById('menu_vertical').style.display ='none';
	menuAberto = false;
}


