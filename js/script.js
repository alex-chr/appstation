$(document).ready(function(){
  $('.slider_slick').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 3,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1
        }
      }
      ]
  });
});

var input = [];
function verifForm() {
  for (var i = 0; i < 4; i++) {
    input[i] = document.getElementsByTagName('input')[i];
  }

  for (var i = 0; i < 2; i++) {
    if (input[i].value == "") {
      donnerErreur(input[i]);
      return false;
    }
    else {
      input[i].classList.remove("mauvais");
    }
  }

  if (input[1].value.includes("@") == false) {
    donnerErreur(input[1]);
    return false;
  }
  else if (input[3].value != "") {
    if (isNaN(parseFloat(input[3].value)) == true)  {
      donnerErreur(input[3]);
      return false;
    }
  }
  else if (document.getElementsByTagName("textarea")[0].value == "") {
    donnerErreur(document.getElementsByTagName("textarea")[0]);
    return false;
  }
}

function donnerErreur(blockErreur) {
  blockErreur.classList.add("mauvais");
  blockErreur.classList.add("secoue");
  blockErreur.addEventListener("webkitAnimationEnd", function() {
      blockErreur.classList.remove("secoue");
  });
}
