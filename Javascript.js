var song;
var myp5;
var img;

function fadeOutEffect() {
    var fadeTarget = document.getElementById("titlescreen");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 150);

    myp5 = new p5(create_canvas_in_canvasContainer, 'canvasContainer');
}


function create_canvas_in_canvasContainer(p) {
  p.setup = function () {
    p.createCanvas(400,400);
    console.log("setup");
    img = p.loadImage('asset/forest.jpg');
    song.play();
  }




    p.preload = function preload() { 

        song = p.loadSound('asset/Our-Mountain_v003.mp3');
    }


    p.mousePressed= function mousePressed() {
      if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.stop();
        p.background(255, 0, 0);
      } else {
        song.play();
        p.background(0, 255, 0);
      }
    }


  p.draw =     function draw() {
    // ALL LOGIC FOR DRAWING EACH FRAME GOES HERE!!!
      p.background("white");
      p.image(img, 0, 0);

      //front legs
      p.fill("pink");
      p.rect(160, 230, 20, 60);
      p.rect(190, 240, 20, 60);

      p.rect(158, 290, 25, 10);
      p.rect(188, 300, 25, 10);

      //back legs
      p.rect(260, 230, 20, 60);
      p.rect(290, 240, 20, 60);

      p.rect(258, 290, 25, 10);
      p.rect(288, 300, 25, 10);

      //tail
      p.rect(320, 200, 20, 10);

      //body
      p.ellipse(230, 220, 190, 120);

      //leftears
      p.triangle(60, 85, 100, 80, 100, 120);

      //head
      p.ellipse(150, 150, 150, 120);

      //rightear
      p.triangle(240, 85, 200, 80, 200, 120);

      //nose
      p.ellipse(140, 165, 60, 30);
      p.ellipse(130, 165, 5, 15);
      p.ellipse(147, 165, 5, 15);


      //eyes
      p.fill("black");
      p.ellipse(100, 150, 10, 10);
      p.ellipse(185, 155, 10, 10);

      //console.log("draw");
    }
}




document.onload = function(){ // waiting while document is downloaded and rendered

    document.getElementById("start").addEventListener('click', fadeOutEffect);
    


 }


// Gamescreen

// L.Window

// M.Window

// R.Window