class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png")
        this.visibility = 225;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        if(this.body.speed<3){
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width,this.height);
          
        }else{
          World.remove(world,this.body)
          push();
          this.visibility = this.visibility -5
          tint(225,this.visibility)
          image(this.image,pos.x,pos.y,this.width,this.height);
          pop();
        }
        
      }
}