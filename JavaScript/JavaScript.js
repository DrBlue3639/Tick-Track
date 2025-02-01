let showSet1 = true;
//function that updates the images
function updateImages() {
  const images = document.querySelectorAll("#imageContainer img");

  //add hidden tag to all the images
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("hidden");
  }

  //showing only the logos we want
  if (showSet1) {
    document.getElementById("image1").classList.remove("hidden");
    document.getElementById("image2").classList.remove("hidden");
  } else {
    document.getElementById("image3").classList.remove("hidden");
    document.getElementById("image4").classList.remove("hidden");
  }

  //this line switches between the images1,2 and image3,4
  showSet1 = !showSet1;
}
setInterval(updateImages, 2000);
updateImages();
