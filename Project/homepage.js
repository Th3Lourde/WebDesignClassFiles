

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

  phase1();

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
