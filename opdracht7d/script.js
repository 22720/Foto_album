var thumbnails = document.getElementById("thumbnails");
var imageholder = document.getElementById("imageholder");
var imageNames = ["DoeIkGraag.jpg",
				"Girlfriend.jpg",
				"Halloween.jpg",
				"Kat.jpg",
				"Kiss.jpg",
				"Lantaarnpaal.jpg",
				"Me.jpg",
				"Riddler.jpg",
				"Schieten.jpg",
				"School.jpg",
				"Stad.jpg",
				"Turkije.jpg"];

imageholder.src = "images/" + imageNames[0];

for (let i=0;i<imageNames.length;i++){
  let img = document.createElement('img');
  let src = document.createAttribute('src');
  src.value = "images/" + imageNames[i];
  img.setAttributeNode(src);
  thumbnails.appendChild(img);

  img.addEventListener('click', () => {
    imageholder.src = "images/" + imageNames[i];
  })
}
