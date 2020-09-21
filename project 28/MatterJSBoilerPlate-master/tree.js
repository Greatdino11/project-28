class Tree{
    constructor(width, height){
        
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/tree.png");
        
    }
    display(){
        
        imageMode(CENTER);
        image(this.image, 530, 470, this.width, this.height);
        
    }
}