let cells=[];
let w=40;
let cols, rows;
let current;
let stack=[];
let start, end;
let path=[];
let finalWay=[];
let completed=false;
let m=0;

function setup(){
 createCanvas(400, 400);
//  translate(width/2, height/2)
 cols=floor((width-w)/w);
 rows=floor((height-w)/w);
 
 for(let i=0;i<rows;i++){
    for (let j = 0; j < cols; j++) {
       cells.push(new Cell(j, i, w));       
    }   
 }

 current=cells[index(floor(random(0, cols)),0)];
 current.visited=true;
 start=current;
 start.walls[0]=false;
 end=cells[index(floor(random(0, cols)),rows-1)]
 end.walls[2]=false;
// frameRate(5)
}

function draw(){
    background(255);
    translate(w/2, w/2)
    cells.forEach(cell => cell.show());
    // console.log(stack.length);
    let next=current.checkNeighbors();
    
    if(path.includes(current)){
        path=path.slice(0, path.indexOf(current)+1);
        
    }else if(finalWay.length<=0){
        path.push(current);
        
    }
    
    
    if(next){
        if(next==end && !end.visited){      
            finalWay=path;
            finalWay.push(next);              
        }
        next.visited=true;
        stack.push(current);
        removeWalls(current,next);
        
        current=next;
    }else if(stack.length>0){
        current = stack.pop();
    }
    if(stack.length==0&&finalWay.length>0&&m<finalWay.length){
        finalWay[m].pathWay=true;
        m++;
        // if(completed){
        //     noLoop()
        // }
        // completed=true;
        
        
        
    }
}

function index(i, j){
    if(i<0 || j<0 || i> cols-1 || j>rows-1){
        return -1
    }
    return i+j*cols;
}

function removeWalls(a, b){
    let diffX= a.x-b.x;
    if(diffX==1){
        a.walls[3]=false;
        b.walls[1]=false;
    }else if (diffX==-1){
        a.walls[1]=false;
        b.walls[3]=false;
    }
    let diffY= a.y-b.y;
    if(diffY==1){
        a.walls[0]=false;
        b.walls[2]=false;
    }else if (diffY==-1){
        a.walls[2]=false;
        b.walls[0]=false;
    }

}