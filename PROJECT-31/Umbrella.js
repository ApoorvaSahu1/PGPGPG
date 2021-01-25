class Umbrella {
     constructor(x, y) {
         var options = {
             isStatic: true
         }
         this.r = 300
         this.body = Bodies.circle(x, y, this.r/2 - 35, options);
         World.add(world, this.body);
         this.image1 = loadImage("walking_1.png");
        
     }
     display() {
         imageMode(CENTER);
         image(this.image1, this.body.position.x, this.body.position.y, this.r, this.r);
      
 
     }
 }
 
 