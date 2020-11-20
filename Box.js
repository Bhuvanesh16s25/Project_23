class Box{

    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height)
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push ()
        rectMode(CENTER)
        fill ("red")

        rect(pos.x,pos.y,this.width,this.height);
        pop ()
    }

}