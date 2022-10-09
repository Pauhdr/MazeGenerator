class Cell{
    constructor(x, y, w){
        this.x=x;
        this.y=y;
        this.w= w;
        this.visited=false;
        this.walls=[true, true, true, true];
        this.pathWay=false;
    }

    show(){
        let x=this.x*w;
        let y=this.y*w;
        stroke(0);
        strokeWeight(w/2)
        strokeCap(PROJECT);
        if(this.walls[0]){
            line(x, y, x+this.w, y);
        }
        if(this.walls[1]){
            line(x+this.w, y+this.w, x+this.w, y);
        }
        if(this.walls[2]){
            line(x+this.w, y+this.w, x, y+this.w);
        }
        if(this.walls[3]){
            line(x, y+this.w, x, y);
        }

        // if(this.visited){
        //     fill(255, 0, 255, 100);
        //     noStroke();
        //     rect(x, y, w, w);
        // }
        // if(this==current){
        //     fill(0, 255, 0);
        //     noStroke();
        //     rect(x, y, w, w);
        // }
        if(this.pathWay){
            fill(255, 0, 0,100);
            noStroke();
            rect(x, y, w, w);
        }
        // if(this==start||this==end){
        //     fill(0, 0, 255);
        //     noStroke();
        //     rect(x, y, w, w);
        // }
    }

    checkNeighbors(){
        let neighbors=[];
        let x=this.x;
        let y=this.y;
        let top= cells[index(x, y-1)];
        let right= cells[index(x+1, y)];
        let bottom= cells[index(x, y+1)];
        let left= cells[index(x-1, y)];

        if(top!=undefined&&!top.visited){
            neighbors.push(top);
        }
        if(right!=undefined&&!right.visited){
            neighbors.push(right);
        }
        if(bottom!=undefined&&!bottom.visited){
            neighbors.push(bottom);
        }
        if(left!=undefined&&!left.visited){
            neighbors.push(left);
        }

        if(neighbors.length>0){
            let i=floor(random(0,neighbors.length))
            return neighbors[i]
        }else{
            return undefined
        }
    }
}

