

function update_start(a){
  $('#start_text').html(a);
}

// update_start(1);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two seconds later');
}


var timesRun = 0;
var go = true;

$('#start').hover(function(){
    console.log('go');
    var interval = setInterval(function(){
        if (go){
          if (timesRun < 3 && timesRun >= 0 && go){
            timesRun += 1;
            update_start(timesRun);

          } else if (timesRun === 3){
            // Stop the interval
            alert("Boom");
            clearInterval(interval);
            timesRun = -1;
          }

          // if (timesRun === 3 || timesRun > 3){
          //   clearInterval(interval);
          // }
        }
    }, 1000);
  }
)

$('#start').mouseout(function(){
  timesRun = 0;
  go = false;
  $('#start_text').html("Ready?");
  demo();
  go = true;
})

// var timesRun = 0;
// var interval = setInterval(function(){
//     timesRun += 1;
//     if(timesRun === 60){
//         clearInterval(interval);
//     }
//     //do whatever here..
// }, 2000);





// $( document ).ready(function() {
//   main();
// });
