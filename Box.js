class Box {
    constructor(x,y) {
      var options = {
        'restitution' : 0.8,
        'friction':0.3,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,90,90,options);
      this.width = 90;
      this.height = 90;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };