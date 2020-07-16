class Paper {
    constructor(x,y,diameter) {
      var options = {
        isStatic:false,  
        'restitution':1,
        'friction' :0.5,
        'density':1.2,
      }
      this.body = Bodies.circle(x,y,diameter, options);

      this.x=x;
      this.y=y;
      this.diameter=diameter*2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      
      fill('white');
      circle(this.body.position.x,this.body.position.y,this.diameter);
      pop();
    }
  };