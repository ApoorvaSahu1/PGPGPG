class Drop{
  constructor(x, y) {
    var options = {
        restitution: 0.1,
        friction: 0.1
    }
    this.r = 10
    this.body = Bodies.circle(x, y, this.r/2, options);
    World.add(world, this.body);
}
display() {
    var pos = this.body.position;
    noStroke();
    fill(0, 0, 100);
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, this.r, this.r);

}
update() {
    if(this.body.position.y > 650){
        Body.setPosition(this.body, {x: random(0, 500), y: random(0, 500)});
    }
}
}



