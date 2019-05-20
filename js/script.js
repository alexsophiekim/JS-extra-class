var gallery = document.getElementById('imgs');

var clothes = [
    {
      name: "Zara Simple Blouse",
      price: 90,
      img:"img/cloth0.jpg"
    },
    {
      name: "Brown Dotted Shirt",
      price: 65,
      img:"img/cloth1.jpg"
    },
    {
      name: "White Dress",
      price: 165,
      img:"img/cloth2.jpg"
    },
    {
      name: "White Jacket",
      price: 105,
      img:"img/cloth3.jpg"
    },
    {
      name: "Kimono Jacket",
      price: 70,
      img:"img/cloth4.jpg"
    },
    {
      name: "Midi Dress",
      price: 120,
      img:"img/cloth5.jpg"
    },
    {
      name: "Nan Sleeve",
      price: 120,
      img:"img/cloth6.jpg"
    },
    {
      name: "Red Jacket",
      price: 120,
      img:"img/cloth7.jpg"
    },
    {
      name: "White Button Shirt",
      price: 60,
      img:"img/cloth8.jpg"
    }
];

var i;
for (var i = 0; i < clothes.length; i++) {
  gallery.innerHTML += '<div class ="image-div"><h2> '+clothes[i].name+'</h2> <h3>$ '+clothes[i].price+'</h3> <img class="image" src="img/cloth' +i+ '.jpg"> </div>';


}
