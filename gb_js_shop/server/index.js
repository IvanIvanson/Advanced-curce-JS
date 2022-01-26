const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()

const port = 3000;

const catalog_path = path.resolve(__dirname, './data/catalog.json')
const cart_path = path.resolve(__dirname, './data/cart.json')
const static_dir = path.resolve(__dirname, '../dist/')

app.use(express.static(static_dir))
app.use(express.json())

app.get('/api/v1/catalog', (req, res) => {
  fs.readFile(catalog_path, 'utf-8', (err, data) => {
    if(!err) {
      res.send(data);
    } else {
      res.status(500).send(err)
    }
  })
})

app.get('/api/v1/catalog/:id', (req, res) => {
  fs.readFile(catalog_path, 'utf-8', (err, data) => {
    if(!err) {
      const catalog = JSON.parse(data);
      const product = catalog.find((item) => item.id == req.params.id)

      if(!product) {
        res.status(404).send('Not Found');
        return;
      }

      res.send(JSON.stringify(product));
    } else {
      res.status(500).send(err)
    }
  })
})

app.get('/api/v1/cart', (req, res) => {
  fs.readFile(cart_path, 'utf-8', (err, data) => {
    if(!err) {
      res.send(data);
    } else {
      res.status(500).send(err)
    }
  })
})


app.post('/api/v1/cart', (req, res) => {
  fs.readFile(cart_path, 'utf-8', (err, data) => {
    if(!err) {
      const cart = JSON.parse(data);
      cart.push(req.body);
      fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
        res.sendStatus(201)
      })
    } else {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

// удаление из корзины

app.delete('/api/v1/delBasket/:id', (req, res) => {
  fs.readFile(CART_URL, 'UTF8', (err, data) => {
    if(err){
      res.send({
        result: 0,
        err,
      });
    }else {
       let basket = JSON.parse(data);
       const newContents = [];

       basket.forEach(item => {
         if(item.id === +req.params.id){
           if(item.count !==1){
              item.count -= 1;
              newContents.push(item);
           }
              }  else{
               newContents.push(item);
             }
           });

       basket = newContents;
       fs.writeFile(CART_URL, JSON.stringify(basket), 'utf8', (err, data) => {
        if(err){
          res.send({
            result: 0,
            err,
          });
        }else {
          res.send({
            result: 1,
            userbasket: basket,
           })
          }
         })
       }
    })
  })