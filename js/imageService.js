var imgs = document.getElementById("blog-presentation-picture");
var img = imgs.getElementsByTagName("img")[0];
var number = 2;
var path = "img/";
var option = 1;
img.onload = function () {
  loadImg(number, option);
};

var anotherImgs = document.getElementById("blog-office-picture");
var anotherImg = anotherImgs.getElementsByTagName("img")[0];
var anotherNumber = 2;
var anotherOption = 2;
var anotherPath = "img/";

anotherImg.onload = function () {
  loadImg(anotherNumber, anotherOption);
};

function loadImg(number, option) {
  var new_Img = new Image();

  if (option == 1) {
    new_Img.src = path + number + ".jpg";
  } else if (option == 2) {
    new_Img.src = path + "office-" + number + ".jpg";
  }
  var link = document.createElement("a");
  link.href = "#";
  link.appendChild(new_Img);

  if (option == 1) {
    imgs.appendChild(link);
  } else if (option == 2) {
    anotherImgs.appendChild(link);
  }

  number++;

  new_Img.onload = function () {
    loadImg(number);
  };
  new_Img.onerror = function () {
    link.parentNode.removeChild(link);
    return false;
  };
}
