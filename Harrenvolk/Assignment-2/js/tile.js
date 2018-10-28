

(function() { "use strict" 
  var controller, display, game;


  controller = {

    down:false,
    left:false,
    right:false,
    up:false,

    keyUpDown:function(event) {

      var key_state = (event.type == "keydown")?true:false;

      switch(event.keyCode) {

        case 37: controller.left = key_state; break; 
        case 38: controller.up = key_state; break; 
        case 39: controller.right = key_state; break; 
        case 40: controller.down = key_state; break; 

      }

    }

  };


  display = {

    buffer:document.createElement("canvas").getContext("2d"), 
    context:document.querySelector("canvas").getContext("2d"), 
    output:document.querySelector("p"), 

    render:function() {

      
      for (let index = game.world.map.length - 1; index > -1; -- index) {

        this.buffer.fillStyle = (game.world.map[index] == 1)?"#0099ff":"#303840"; 
        this.buffer.fillRect((index % game.world.columns) * game.world.tile_size, Math.floor(index / game.world.columns) * game.world.tile_size, game.world.tile_size, game.world.tile_size);

      }


      this.buffer.fillStyle = game.player.color;
      this.buffer.beginPath();
      this.buffer.arc(game.player.x, game.player.y, game.player.radius, 0, Math.PI * 2);
      this.buffer.closePath();
      this.buffer.fill();

      
      this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);

      

    },


    resize:function(event) {

      var client_height = document.documentElement.clientHeight;

      display.context.canvas.width = document.documentElement.clientWidth - 32;

      if (display.context.canvas.width > client_height) {

        display.context.canvas.width = client_height;

      }

      display.context.canvas.height = Math.floor(display.context.canvas.width * 0.5625);

      display.render();

    }

  };

  game = {

    counter:Math.random() * 100,

  
    player: {

      color:"#ff9900",
      radius:8,
      tile_x:undefined,
      tile_y:undefined,
      velocity_x:0,
      velocity_y:0,
      x:160,
      y:90

    },

   
    world: {

      columns:16,
      rows:9,
      tile_size:20,

      map:[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
           1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
           1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
           1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
           1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],

    },

    loop:function() {


      if (controller.down) {

        game.player.velocity_y += 0.25;

      }

      if (controller.left) {

        game.player.velocity_x -= 0.25;

      }

      if (controller.right) {

        game.player.velocity_x += 0.25;

      }

      if (controller.up) {

        game.player.velocity_y -= 0.25;

      }


      
      if (game.player.x - game.player.radius < 0) {

        game.player.velocity_x = 0;
        game.player.x = game.player.radius;

      } else if (game.player.x + game.player.radius > display.buffer.canvas.width) { 

        game.player.velocity_x = 0;
        game.player.x = display.buffer.canvas.width - game.player.radius;

      }

      if (game.player.y - game.player.radius < 0) {

        game.player.velocity_y = 0;
        game.player.y = game.player.radius;

      } else if (game.player.y + game.player.radius > display.buffer.canvas.height) {

        game.player.velocity_y = 0;
        game.player.y = display.buffer.canvas.height - game.player.radius;

      }

      game.player.x += game.player.velocity_x;
      game.player.y += game.player.velocity_y;


      game.player.velocity_x *= 0.9;
      game.player.velocity_y *= 0.9;

      game.player.tile_x = Math.floor(game.player.x / game.world.tile_size);
      game.player.tile_y = Math.floor(game.player.y / game.world.tile_size);

      game.world.map[game.player.tile_y * game.world.columns + game.player.tile_x] = 0;

      let victory = true;

 
      for (let index = game.world.map.length - 1; index > -1; -- index) {

        
        if (game.world.map[index] == 1) {

          victory = false;
          break;

        }

      }


      if (victory) {

        
        controller.down = controller.left = controller.right = controller.up = false;
        game.counter = -1;
        alert("You have done it! You have vanquished the evil blue squares! But they will rise again...");

      }

      game.counter --;

      if (game.counter < 0) {

        game.counter = Math.random() * 125;
        game.world.map[Math.floor(Math.random() * game.world.map.length)] = 1;
      }

      display.render();

      window.requestAnimationFrame(game.loop);

    }

  };




  display.buffer.canvas.height = 180;
  display.buffer.canvas.width = 320;

  window.addEventListener("resize", display.resize);
  window.addEventListener("keydown", controller.keyUpDown);
  window.addEventListener("keyup", controller.keyUpDown);

  display.resize();


  game.loop();

})();
