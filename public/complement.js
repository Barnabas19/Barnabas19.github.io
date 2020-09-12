//removing the preloader
window.addEventListener("load", function(){
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const button = document.querySelector(".button");
button.addEventListener("click", function(){
  getPhoto();
});


function getPhoto(){
  const URL = "/photo";
  const promise = fetch(URL);
  promise.then(function(response){
    const processingPromise = response.json();
    return processingPromise; 
  }).then(function(processedPromise){
    const div = document.querySelector(".div");
    const image = document.createElement("img");
    image.src = processedPromise.photo;
    image.alt = "Nice doggo";
    image.style.cssText = 'height: 233px; width: 233px; border-radius: 15px; margin: 4px;'
    div.appendChild(image);
  });
}