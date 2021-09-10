class Bird{

    constructor(){
    this.body=createSprite(300,200,40,35)
   
    this.image=loadImage("bird.png")
    this.body.addImage(this.image)
    this.body.scale=0.05

    
    }

    display(){
      imageMode (CENTER)
        image(this.image,this.body.position.x,this.body.position.y,120,110)
    }
}