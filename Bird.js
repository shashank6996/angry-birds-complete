class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);

    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")

    this.allPosition = [] 

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

  if(this.body.speed>15 && this.body.position.x>250){
    var cp = [this.body.position.x, this.body.position.y]
    this.allPosition.push(cp)
  }
  
  //code to store smoke image in all the positions of the bird
  
  
  for( var i=0     ;  i<this.allPosition.length      ;  i = i+1       ){
       image(this.smokeImage, this.allPosition[i][0],this.allPosition[i][1])
  }


  }
}
