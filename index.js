const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const uuid = require('uuid');

// array de pedidos
const orders = []

// Middleware de método e URL
const methodAndUrl = (req, res, next) =>{
    console.log( req.method, req.url)
    next()
}

// Middleware que verifica se o ID existe
const trueId = (req, res, next)=>{
    const {id} = req.params
    const index = orders.findIndex(client => client.id === id)
   
    if(index<0){
        return res.status(404).json({message: "USER NOT FOUND"})
       }

       req.userId = id
       req.userIndex = index

       next()
 }

// ROTA DE LISTAGEM DE PEDIDOS
app.get('/order', methodAndUrl, (req, res)=>{
    return res.json(orders)
})

// ROTA DE CRIAÇÃO DE PEDIDOS
app.post('/order', methodAndUrl, (req, res) =>{
        const {order, clientName, price} = req.body
        const status = "Em Preparação"
        const newOrder = {id:uuid.v4(), order, clientName, price, status}
        orders.push(newOrder);

        return res.status(201).json(orders)

})

// ROTA DE ATUALIZAÇÃO DE PEDIDOS
app.put('/order/:id', methodAndUrl, trueId, (req, res) =>{
    const {order, clientName, price, status} = req.body
    const id = req.userId
    const index = req.userIndex
    const updatedOrder = {id, order, clientName, price, status}
    this.updatedOrder = updatedOrder
    orders[index] = updatedOrder
    return res.status(200).json(updatedOrder)
})

// ROTA PARA APAGAR PEDIDOS
app.delete('/order/:id', methodAndUrl, trueId,(req, res) =>{
    const index = req.userIndex
    orders.splice(index,1)

    return res.status(204).json()
})

// ROTA QUE RETORNA PEDIDO ESPECÍFICO
app.get('/order/:id', methodAndUrl, trueId, (req, res) =>{
   const index = req.userIndex

    newOrder = orders[index]
    return res.json(newOrder)
})

// ROTA QUE ALTERA O STATUS DO PEDIDO
app.patch('/order/:id', methodAndUrl, trueId, (req, res) =>{
    const id = req.userId
    const index = req.userIndex
    const updatedOrder = {...orders[index], status:"Pronto"}

    return res.status(201).json(updatedOrder)
})

app.listen(port, ()=>{
    console.log(`Server Started on port ${port}`)
})