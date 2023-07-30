//Here we load and place content for quote of the day container
//As well as current sleep state graph

loadQuoteImage = () => {
  let URL_IMG = "https://zenquotes.io/api/image";
  let imageContainer = document.getElementById("quote-image-area");
  let image = document.createElement("img");
  image.src = URL_IMG;
  imageContainer.appendChild(image);
};

//IIEF
(function () {
  loadQuoteImage();
})();
