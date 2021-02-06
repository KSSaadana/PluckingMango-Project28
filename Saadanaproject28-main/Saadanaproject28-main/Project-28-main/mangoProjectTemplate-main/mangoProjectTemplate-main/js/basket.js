class Basket{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
			restitution :0,
            friction :1,
			}
		
		this.image=loadImage("images/Picture1.png")
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options);
		this.x=x;
        this.y=y;
		this.width=width;
		this.height = height;
		
		World.add(world, this.body);
	}

	display()
	{
		var basketPos=this.body.position;	
		push()
		translate(basketPos.x,basketPos.y);
		rotate(this.body.angle)
		fill(255,0,255);
		
		imageMode(CENTER);
		image(this.image, this.x, this.y,this.r*2, this.r*2)
		pop()
 }
}