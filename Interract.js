//Alerts user about the destination page
const link = document.querySelectorAll(".link");
for(let i = 0; i<link.length; i++){
    link[i].addEventListener("click" , function(){
        window.alert(`Taking You To \"${link[i].textContent}\" section`);
    });
}