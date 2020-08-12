class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    // to show the pigs
    this.visiblity=255;
  }
  display() {
    if(this.body.speed<3) {
      super.display();
    } 
    else {
      World.remove(world,this.body);
      push();
      //to make the pig disappear 
      this.visiblity=this.visiblity-5;
      // to add transparency
      tint(255,this.visiblity);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }

};