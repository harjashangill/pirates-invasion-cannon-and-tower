class Cannon{
    constructor(x,y,width,height,angle){

        this.x = x;
        this.y = y
        this.width = width
        this.height = height
        this.angle = angle


    }

    display(){
        fill ( "grey")
        push()
        translate (this.x,this.y)
        rotate (this.angle)
            rect(130,40,100,50)
            arc(this.x-40,this.y+80,200,250,PI,TWO_PI)
        pop()
    }
}