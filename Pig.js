class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }

display(){
if(this.body.speed>3){
  World.remove(world, this.body);
}

else{
 super.display()
}
};

score(){
  if (this.Visiblity < 0 && this.Visiblity > -1005){ score++; }
}

}