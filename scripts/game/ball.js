import { GameObject } from "../game-engine/gameObject";

export class Ball extends GameObject {
    constructor(size){
        super(50, 50, size, size);
        this.speed = 5;
        this.size = size;
    }

    update(){
        if(this.input.onKey(this.input.key.LEFT)){
            this.x -= this.speed;
        }

        if(this.input.onKey(this.input.key.RIGHT)){
            this.x += this.speed;
        }

        if(this.input.onKey(this.input.key.UP)){
            this.y -= this.speed;
        }

        if(this.input.onKey(this.input.key.DOWN)){
            this.y += this.speed;
        }
    }

    Draw(){
        this.drawing.drawCircle(this.center.x, this.center.y, this.size)
    }
}

