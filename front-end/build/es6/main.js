/* Main v1.00.0 | (c) 2020 |  Gustavo Lima ⊙‿⊙ ʕ•ᴥ•ʔ ಠ_ಠ  */
//DICIONÁRIO=====
/*
	1) Tipos de Funções:
		- Reader: Identifica valores de arquivos externos;
		- Listener: Funções que atualizam variáveis de acordo com algum estado do sistema (várias vezes a partir de mudança);
		- Setup: Funções que declaram condições do sistema (somente uma vez);
		- Action: Funções que são chamadas e tratam dados (várias vezes quando chamadas);
*/
//IMPORT =====
import app from './app/app';

//SYSTEM =====
	var App;

//FUNCTIONS =====
	window.onload = function(e){
		Setup_System();
	}

	function Setup_System(){
		App = new app();
	}