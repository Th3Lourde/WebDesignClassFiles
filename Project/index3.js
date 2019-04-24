
var select = "#1";

$('#1').addClass('active');

function update_bubble(val) {
  $(select).removeClass('active');
  $(val).addClass('active');
  select = val;
  switch (select) {
    case "#1":
      $(".mySlides").css("background-image","url(imgs/zoom.png)");
      break;
    case "#2":
      // $(".mySlides").css("background-image","url(/imgs/example1.png)");
      $(".mySlides").css("background-image","url(imgs/example1.png)");
      break;
    case "#3":
      $(".mySlides").css("background-image","url(imgs/example2.png)");
      break;

  }
  // UPDATE BACKGROUND IMAGE
}

function update_arrow(val){
  var tmp3 = 0;
  if (val === "prev"){
    switch (select) {
      case "#1":
        tmp3 = "#3";
        break;
      case "#2":
        tmp3 = "#1";
        break;
      case "#3":
        tmp3 = "#2";
        break;
    }

  } else if (val === "next") {
    switch (select) {
      case "#1":
        tmp3 = "#2";
        break;
      case "#2":
        tmp3 = "#3";
        break;
      case "#3":
        tmp3 = "#1";
        break;
    }
  }

  // console.log(tmp3);
  update_bubble(tmp3);


}

$('.dot').click(function(){
  var tmp1 = $(this).attr('id');
  tmp1 = "#" + tmp1;
  // console.log(tmp1);
  update_bubble(tmp1);
})

$('.prev, .next').click(function(){
  var tmp2 = $(this).attr('class');
  // console.log(tmp2);
  update_arrow(tmp2);

  // console.log("Thing");


})
