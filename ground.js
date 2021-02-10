class Ground{
    constructor(){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(700,650,1400,10,options);
       this.width=1400;
       this.height=10;
       World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
      }
}