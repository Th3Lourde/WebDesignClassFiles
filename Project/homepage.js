
var phase_1_done = false

$("#start_text").click(function(){
  // var counter=setInterval(timer, 1000);
  var count = 4;

  function show_intro_text(){
    $('.welcome-moving').transition({ y: '-100vh', delay:600});
    // $('.welcome-moving').transition({ y: '100vh'});
    // $('.welcome-moving').transition({ y: '100vh'});
    // $('.welcome-moving').transition({ y: '-100vh'});
    // $('.welcome-moving').transition({ y: '-100vh'});

    // $('.').transition({
    //   perspective: '100px',
    //   rotateY: '180deg'
    // });

    var letters = [".one", ".two", ".three", ".four", ".five", ".six", ".seven", ".eight", ".nine", ".ten", ".eleven", ".twelve", ".thirteen", ".fourteen", ".fifteen", ".sixteen", ".seventeen", ".eighteen", ".nineteen", ".twenty", ".twenty-one", ".twenty-two", ".twenty-three", ".twenty-four", ".twenty-five", ".twenty-six", ".twenty-seven", ".twenty-eight"];


    var hang = 900;

    var i;
    for (i = 0; i < letters.length; i++) {
      $(letters[i]).transition({ opacity: 100, delay: hang });
      hang += 50;
    }

    var letters = [".one-1",".one-2",".one-3",".one-4"];

    var hang = 2600;
    for (i = 0; i < letters.length; i++) {
      $(letters[i]).transition({ textDecoration: 'underline', textDecorationColor:'#FF4136' , delay: hang });
      hang += 50;
    }

    var letters = [".two-1",".two-2",".two-3",".two-4", ".two-5", ".two-6"];

    var hang = 2700;
    for (i = 0; i < letters.length; i++) {
      $(letters[i]).transition({ textDecoration: 'underline', textDecorationColor:'#FFDC00' , delay: hang });
      hang += 50;
    }


    var letters = ["three-1", "three-2", "three-3"];

    var hang = 2800;
    for (i = 0; i < letters.length; i++) {
      $(letters[i]).transition({ textDecoration: 'underline', textDecorationColor:'#B10DC9 !important' , delay: hang });
      hang += 50;
    }

    $('.examples-container').transition({left:'15vw', delay: 3000})

    // $('.ready-container').css("opacity",0);
    $('.ready-container').transition({ y: '350px', delay: 3025 });
    $('.ready-container').css("height","10vh");
    $('#start_text').css("width","15vw");
    $('#start_text').html("Continue :)");
    // $('.ready-container').transition({ y: '300px'});


    // $('.fade_in').transition({ opacity: 100, delay: 500 });
    // $('.one').transition({ opacity: 100, delay: 500 });
    // $('.two').transition({ opacity: 100, delay: 585 });
    // $('.three').transition({ opacity: 100, delay: 625 });
    // $('.four').transition({ opacity: 100, delay: 710 });
    // $('.five').transition({ opacity: 100, delay: 785 });
    // $('.six').transition({ opacity: 100, delay: 835 });


  }



  function phase1(){


    $('.ready-container').transition({ y: '40px' });
    $('.ready-container').transition({ y: '-800px' });



    $('.skip-tutorial-container').transition({ y: '40px' });
    $('.skip-tutorial-container').transition({ y: '-800px' });

    show_intro_text();
  }

  function phase2(){

    $('#top-message').transition({ y: '40px'});
    $('#top-message').transition({ y: '-800px'});

    $('#mid-message').transition({ y: '40px'});
    $('#mid-message').transition({ y: '-800px'});

    $('.ex-1').transition({ y: '40px'});
    $('.ex-1').transition({ y: '-800px'});

    $('.ex-2').transition({ y: '40px'});
    $('.ex-2').transition({ y: '-800px'});

    $('.ex-3').transition({ y: '40px'});
    $('.ex-3').transition({ y: '-800px'});

    $('.ready-container').transition({ y: '425px'});
    $('.ready-container').transition({ y: '-800px'});

    $('.intro-2-container').transition({ x: '2050px', delay: 1000});
    // $('.intro-2-container').transition({ x: '2050px', delay: 1000});

    // $('.turial-btn-container').transition({ x: '100' });
    $('.turial-btn-container').transition({ x: '97vw', delay: 900});

  }


  var a = $('#start_text').html()

  if (a == "Click Me!"){
    phase1();
  } else if (a == "Continue :)"){
    console.log("Phase Two :D");
    phase2();
  }



  function timer(){
    var text = $("#start_text").html();
    console.log(text)
    if (count === 0){
      clearInterval(counter);
      console.log("Phase 1");
      phase1();
    } else {
      count = count - 1;
      if (count === 0){
        $("#start_text").html("Go");
      } else {
        $("#start_text").html(count);
      }
    }
  }

});


function showMaxIt(){
  // $(".intro-2-container").transition({ x: '5vw', delay: 200 });
  $(".max-it").transition({ x: '-90vw', delay: 400 });
  $(".max-it-de").transition({ x: '-90vw', delay: 400 });
  // $(".max-it").css({ left:'-2.5vw' });


  $(".tut-1").transition({ opacity:100, delay: 1000 });
  $(".tut-2").css({display:"block"});
  $(".tut-2").transition({ opacity:100, delay: 1500 });

  $(".tut-3").transition({ opacity:100, delay: 2000 });

  $(".menu").transition({ opacity:100, delay: 3500 });

}


$("#to_max_it").click(function(){

  $(".intro-2-container").transition({ x: '5vw', delay: 200 });
  $(".turial-btn-container").transition({ x: '5vw', delay: 500 });

  showMaxIt();


});
