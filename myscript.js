new Vue({
				el: '#vue-app',
				data: {
					anterior: null, 
					atual: '',	/* Definindo o valor a ser exibido no display  */
					operador: null,
					operadorClicked: false
				},
				methods:{	/* Criando os metodos para cada operação da calculadora  */
					clear: function(){
						this.atual = '';
					},
					percent: function(){
						this.atual = `${parseFloat(this.atual)/100}`;
					},
					acrescentar: function(number){
						if(this.operadorClicked) {
							this.atual = '';
							this.operadorClicked = false;
						}
						this.atual = `${this.atual}${number}`;
					},
					ponto: function(){
						if (this.atual.indexOf('.') === -1) {
							this.acrescentar('.'); 	
						}
					},
					juntaAnterior: function(){
						this.anterior = this.atual;
						this.operadorClicked = true;
					},
					add: function(){
						this.operador = (a, b) => a + b;
						this.juntaAnterior();
					},
					sub: function(){	
						this.operador = (a, b) => a - b;
						this.juntaAnterior();						
					},
					dividir: function(){	
						this.operador = (a, b) => a / b;
						this.juntaAnterior();
					},
					multiplicar: function(){
						this.operador = (a, b) => a * b;
						this.juntaAnterior();
					},
					resultado: function(){	/* O resultado a ser exibido no display  */
						try{
							if(isNaN(this.atual)) throw "Impossivel dividir por 0"
							this.atual = `${this.operador(parseFloat(this.anterior), parseFloat(this.atual))}`;
							this.anterior = null;
							}
						catch(err) {
							this.atual = "Erro! Aperte botão C. " + err;
							}
					},
				}
			});