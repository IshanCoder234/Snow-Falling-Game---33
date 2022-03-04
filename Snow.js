class Snow {
    constructor(x,y,r) {
      var options = {
          restitution: 0.4
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r
      this.image=loadImage("snow4.webp")
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("white");
      image(this.image,0,0, this.r*2,this.r*2);
      pop();
    }
  };