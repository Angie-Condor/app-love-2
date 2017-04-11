window.addEventListener("load",function(){
  var modalPopup = document.getElementById("popup-contenedor");
  // var img = document.getElementsByClassName("img");
  var img1 = document.getElementById("img1");
  var modalImg = document.getElementById("modal-img");

  // img1.onclick = function(){
  //   // for(var i = 0; i <= img.length; i++){
  //   //   img[i]
  //   modalPopup.style.display = "block";
  //   modalImg.setAttribute("src",this.src);
  // }

  img1.addEventListener("click",function(e){
    e.preventDefault();
    modalPopup.style.display = "block";
    modalImg.setAttribute("src",this.src);
  });

  var close = document.getElementsByClassName("close")[0];
  close.onclick = function(){
    modalPopup.style.display = "none";
  }
});
