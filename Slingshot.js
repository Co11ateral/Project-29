class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8);
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y+15);
            line(pointA.x-25,pointA.y,pointB.x+30,pointB.y+12);
            
            image(this.sling1,200,70,45,150);
            image(this.sling2,173,70,40,85);
            image(this.sling3,pointA.x-27,pointA.y-5,10,15);
        }
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
}