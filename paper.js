class paper
{
    constructor(x,y,r)
    {
       var option={
          isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

            }

            this.x=x;
            this.y=y;
            this.r=rthis.body=bodies.circles(this.x, this.y, this.r/2, options)
            world.add(world, this.body);
    }
    display()
    {
        var paperpos=this.body.position;

        Push()
        Translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        Fill(255,0,255)
        ellipse(0,0,this.r, this.r);
        Pop()





    
    }


}
