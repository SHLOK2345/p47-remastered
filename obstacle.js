class Obstacle{

    constructor(){
    var y=random([50,100,150,200,250])

    var rand=random([175,325,375])

    var yaxis=random(100,600)

    this.body=createSprite(width,y,50,200)
    this.image1=loadImage("pipeNorth.png")
    this.body.addImage(this.image1)
    this.body.velocityX=-5
    this.body.lifetime=300


    //this.body.debug=true
    this.body.setCollider("rectangle",0,0,50,200)
    this.body2=createSprite(width,y+600,50,200)
    this.image2=loadImage("pipeSouth.png")
    this.body2.addImage(this.image2)
    this.body2.velocityX=-5
    this.body2.lifetime=300 


   // this.body2.debug=true
    this.body2.setCollider("rectangle",0,0,50,350)


    this.body3=createSprite(width,rand,50,200)
    this.image3=loadImage("cloud.png")
    this.body3.addImage(this.image3)
    this.body3.velocityX=-7
    this.body3.lifetime=300
    this.body3.scale=0.2

   // this.body3.debug=true
    this.body3.setCollider("circle",0,0,200)  


    this.body4=createSprite(width,yaxis,50,300)
    this.image4=loadImage("bird1.png")
    this.body4.addImage(this.image4)
    this.body4.velocityX=-15
    this.body4.lifetime=300
    this.body4.scale=0.2

   // this.body4.debug=true
    this.body4.setCollider("circle",0,0,200)
    }

    display(){
        imageMode(CENTER)
        image(this.image1,this.body.position.x,this.body.position.y,50,200)
        image(this.image2,this.body2.position.x,this.body2.position.y,50,200)


    }
}