<h1 align="center">Primeiro Projeto Com NodeJS</h1>

<h2>🚀 Sobre o Projeto</h2>
<p>
Esta aplicação Simula um cadastro de pedidos de uma Hamburgueria utilizando NodeJs e Express.<br>
<br>Foram Criadas as Seguintes Rotas:<br>
<br><b>- POST/ORDER :</b> Esta rota Cria o pedido do cliente com os dados de Id (Utilizada a Biblioteca UUID .V4), itens do Pedido, Nome do Cliente, Preço e Status do Pedido.<br>
Essas informações foram passadas através do body da requisição no formato JSON e armazenadas em um ARRAY de pedidos(ARRAY-ORDERS);<br>
Ficando da seguinte Maneira:<br>
{<br>
	"id": "da91694d-aaa6-430b-9008-97a7a531afcb",<br>
	"order": "3 x-tudo, 1 batata média, 1 coca-cola",<br>
	"clientName": "teste",<br>
	"price": 105.5,<br>
	"status": "Pronto"<br>
}<br>
<b>- GET/ORDER :</b> Esta Ordem Lista em formato JSON o array de pedidos com todos os pedidos Cadastrados.

<b>- PUT /order/:id :</b> Esta Rota permite alterar um pedido, seja o pedido inteiro ou apenas 1 item. As informações são passadas através do body da requisição, também no formato JSON;
Foi Criado um novo objeto com o pedido atualizado e a rota retorna este pedido com o status de sucesso.
Aqui, utilizei o 'this' no pedido atualizado para posterior troca de status na rota de pedido concluído.<br>

<b>- DELETE /order/:id </b> Esta rota deleta um pedido específico recebendo os dados do ID através dos parâmetros da rota.

<b>- GET /order/:id:  </b> Esta rota retorna um pedido específico também recebendo os dados do ID através dos parâmetros da rota.

<b>PATCH /order/:id: </b> Esta rota retorna um pedido específico com o Status atualizado para "PRONTO".
Nesta Rota for utilizado o 'this' para chamar o pedido atualizado e o 'spread operator' para fazer a troca do Status do pedido.

<h3>Middlewares:</h3>
Foram criados 2 Middlewares nesta aplicação;<br>
O primeiro é chamado em todas as requisições e possui um 'console.log' mostrando o método e a URL de cada requisição;<br>
O segundo faz a verificação do ID recebido nos parâmetros da requisição, caso o Id não seja encontrado ele retorna um ERRO, caso seja válido, a requisição Prossegue.

## 🖥 Tecnologias
Este Projeto foi feito com NODEJS e FrameWork EXPRESS.
Biblioteca UUID para criação de ID em modo Randômico.
</p>