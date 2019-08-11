$(document).ready(function() {

  var products = [
    { id: 1, name: "Lightsaber", price: 100 },
    { id: 2, name: "Yoda Sleeping Bag", price: 34 },
    { id: 3, name: "Space Laser Gun", price: 40 }
  ];

  var productsHTML = "";

  products.forEach(function(product) {
    productsHTML += '<h2>' + product.name + '</h2>' + '<p>' + product.price + '</p>';
  })

  console.log('productsHTML');
  console.log(productsHTML);

  // add that string to the DOM
  var productsDiv = document.querySelector('.products');

  productsDiv.innerHTML = productsHTML;



  function doSomething() {
    // alert('hahahahaah');
    console.log('you clicked on the header');
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    var coor = "X coords: " + x + ", Y coords: " + y;
    // console.log(coor);
    var xTag = document.querySelector('#x-coordinate');
    var yTag = document.querySelector('#y-coordinate');

    xTag.innerHTML = x;
    yTag.innerHTML = y;

  }

  function secondFunction() {
    console.log('you clicked on the paragraph')
  }
});
