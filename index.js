const express = require('express');
const app = express();
const port = 3001;



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


  const productList = [
    {
      "index": 0,
      "id": [0, 1],
      "img": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/e/peanut_butter_crunchy_340g.png",
      "name": "Peanut Butter1",
      "taste": ["Crunchy","Smooth"],
      "count": 4,
      "size": {
        "width": 200,
        "height": 200
      },
      "weight": ['250g', '300g'],
      "popularity": 5,
      "price": 13.89,
    },
    {
      "index": 1,
      "id": [0, 2],
      "img": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/e/peanut_butter_crunchy_340g.png",
      "name": "Peanut Butter2",
      "taste": ["Crunchy","Smooth"],
      "count": 4,
      "size": {
        "width": 200,
        "height": 200
      },
      "weight": ['250g', '300g'],
      "popularity": 8,
      "price": 12.99,
    },
    {
      "index": 2,
      "id": [0, 3],
      "img": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/e/peanut_butter_crunchy_340g.png",
      "name": "Peanut Butter3",
      "taste": ["Crunchy","Smooth"],
      "count": 4,
      "size": {
        "width": 200,
        "height": 200
      },
      "weight": ['250g', '300g'],
      "popularity": 11,
      "price": 10.99,
    },

    {
      "index": 4,
      "id": [0, 4],
      "img": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/e/peanut_butter_crunchy_340g.png",
      "name": "Peanut Butter4",
      "taste": ["Crunchy","Smooth"],
      "count": 4,
      "size": {
        "width": 200,
        "height": 200
      },
      "weight": ['250g', '300g'],
      "popularity": 9,
      "price": 20.99,
    },
    {
      "index": 0,
      "id": [0, 1],
      "img": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/e/peanut_butter_crunchy_340g.png",
      "name": "Peanut Butter5",
      "taste": ["Crunchy","Smooth"],
      "count": 4,
      "size": {
        "width": 200,
        "height": 200
      },
      "weight": ['250g', '300g'],
      "popularity": 1,
      "price": 13.89,
    },
    {
      "index": 1,
      "id": [0, 2],
      "img": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/e/peanut_butter_crunchy_340g.png",
      "name": "Peanut Butter6",
      "taste": ["Crunchy","Smooth"],
      "count": 4,
      "size": {
        "width": 200,
        "height": 200
      },
      "weight": ['250g', '300g'],
      "popularity": 2,
      "price": 12.99,
    },
    {
      "index": 2,
      "id": [0, 3],
      "img": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/e/peanut_butter_crunchy_340g.png",
      "name": "Peanut Butter7",
      "taste": ["Crunchy","Smooth"],
      "count": 4,
      "size": {
        "width": 200,
        "height": 200
      },
      "weight": ['250g', '300g'],
      "popularity": 3,
      "price": 10.99,
    },

    {
      "index": 4,
      "id": [0, 4],
      "img": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/e/peanut_butter_crunchy_340g.png",
      "name": "Peanut Butter8",
      "taste": ["Crunchy","Smooth"],
      "count": 4,
      "size": {
        "width": 200,
        "height": 200
      },
      "weight": ['250g', '300g'],
      "popularity": 4,
      "price": 30.99,
    },
  
  
  ];
  
  app.get('/pizzas', (req, res) => {
    const id = req.query.category;
  
    const filteredProducts = id ? productList.filter(product => product.id.includes(Number(id))) : productList;
  
    const sort = req.query.sort;
    if (sort === 'priceAsc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'popularity') {
      filteredProducts.sort((a, b) => b.popularity - a.popularity);
    }
  
    res.json(filteredProducts);
  });
  












app.get('/', (req, res) => {
  res.send(productList);
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
