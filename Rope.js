class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
       
     
        this.sling =Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
       
       strokeWeight(5);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y);
    }
    
}