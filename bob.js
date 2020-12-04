class bob{
	constructor(inputX,inputY,inputRadius){
		var options={
			restitution:1,
			friction:0,
			frictionAir:0.0,
			slop:1,
			inertia: Infinity,
        }
		this.x=inputX;
		this.y=inputY;
		this.r=inputRadius;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
	}
	display()
	{	
		var posPaper=this.body.position;		
		var angle = this.body.angle;
		push()
		translate(posPaper.x, posPaper.y);
		rotate(angle);
		rectMode(CENTER)
		strokeWeight(3);
		fill(255,0,255)
        ellipse(0,0,this.r, this.r); 
		pop()	
	}
}