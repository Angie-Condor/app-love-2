windows.onload= function(){
  var modalPopup = document.getElementById("modal-popup");
  var img = document.getElementsByClassName("img");
  var img1 = document.getElementById("img1");
  var modalImg = document.getElementById("modal-img");

  img1.onclick = function(){
    // for(var i = 0; i <= img.length; i++){
    //   img[i]
    modalPopup.style.display = "block";
    modalImg.src = this.src;
  }

  var close = document.getElementsByClassName("close")[0];
  close.onclick = function(){
    modalPopup.style.display = "none";
  }
}
