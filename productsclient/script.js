class ProductService {

  getAllProducts() {
    return fetch("https://fakestoreapi.com/products")
  }
  getProductDetails(id) {
    return fetch(`https://fakestoreapi.com/products/${id}`)
  }
  getCategories(){
    return fetch("https://fakestoreapi.com/products/categories")
  }
  getProductsByCategoryName(category){
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
  }
}

var service = new ProductService()
service.getCategories().then(res=>res.json()).then(data=>displayCategories(data))
var allCategories = service.getCategories()
// displayCategories(allCategories)
function displayCategories(categories){
  let html = ``
  categories.forEach(c=>{
    html += ` <li class="nav-item">
    <button class="nav-link active " aria-current="page" value="${c}" onclick="fetchProductByCategoryName(event)">${c}</button>
  </li>`
  })
document.querySelector("#id_nav").innerHTML=html
}


service.getAllProducts().then(res=>res.json()).then(data=>displayproducts(data))
// displayproducts(allProducts)

function displayproducts(allProducts){
  var htmlData = ``
allProducts.forEach(p => {
  htmlData += `
  <div class="col-3 mt-4">
  <div class="card" style="width: 100%;">
  <img src="${p.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">${p.description}</p>
    <p class="card-text">${p.category}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${p.price}</li>
    <li class="list-group-item">${p.rating}</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
  <button class="btn btn-info" value="${p.id}" onclick="fetchProduct(event)">View More</button>
    
  </div>
</div>  
  </div>
  `
})
document.querySelector("#id_result").innerHTML = htmlData
}
function fetchProduct(e) {
  let id = e.target.value;
  service.getProductDetails(id).then(res=>res.json()).then(details=>{

    let displayData = `
  <div class="col-4"></div>
<div class="col-4">

<div class="card" style="width: 100%;">
  <img src="${details.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${details.title}</h5>
    <p class="card-text">${details.description}</p>
    <p class="card-text">${details.category}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${details.price}</li>
    <li class="list-group-item">${details.rating}</li>
    
  </ul>
  
</div>


</div>
<div class="col-4"></div>
  `
  document.querySelector("#id_result").innerHTML = displayData
  })
  
}

function fetchProductByCategoryName(event){
  let category = event.target.value
  service.getProductsByCategoryName(category).then(res=>res.json()).then(data=>displayproducts(data))
  
}