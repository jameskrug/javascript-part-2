function Tile(type){
    this.type=type;
    var walkable = false;
    if ((type == ":") || (type == "*")){
        walkable = true;
    }
    this.isWalkable = walkable;
}

function Map(width, height){
    this.tiles = [];
    
    for (var i = 1; i <= width; i ++){
        this.tiles[i] = [];
        for (var j = 1; j <= height; j++){
            var tileType = Math.floor(Math.random()*3+1);
            if (tileType == 1){
                this.tiles[i][j] = new Tile(":");
            }
            else if (tileType == 2){
                this.tiles[i][j] = new Tile("~");
            }
            else if (tileType == 3){
                this.tiles[i][j] = new Tile("*");
            }
        }
    }
}

var height = 40;
var width = 40;
var world1 = new Map(width,height);

console.log("The World Map")
for (var m = 1; m <= width; m ++){
    
    var theLine = "";
    for (var n = 1; n <= height; n++){
        theLine = theLine + " " + world1.tiles[m][n].type;
    }
    console.log(theLine);
}

console.log("The Walkable Map:")
for (var m = 1; m <= width; m ++){
    
    var theLine = "";
    for (var n = 1; n <= height; n++){
        if (world1.tiles[m][n].type == "~"){
            theLine = theLine + " O";
        }
        else{
            theLine = theLine + " X"; 
        }
    }
    console.log(theLine);
}

