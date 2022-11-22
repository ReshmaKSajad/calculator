fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>console.log(data))

fetch("https://fakestoreapi.com/products/1").then(res=>res.json()).then(data=>console.log(data))

fetch("https://fakestoreapi.com/products/categories").then(res=>res.json()).then(data=>console.log(data))

fetch("https://fakestoreapi.com/products/category/jewelery").then(res=>res.json()).then(data=>console.log(data))

fetch("https://fakestoreapi.com/products?limit=5").then(res=>res.json()).then(data=>console.log(data))