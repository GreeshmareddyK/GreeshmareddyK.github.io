var tetris = {};

//Draw the board
tetris.drawBoard = function(){
  for(var row=0;row<24;row++){
    $('#playfield').append('<tr class="'+row+'"></tr>');
    for (var col=0;col<10;col++){
      $('tr.'+row).append('<td id="'+col+'"></td>');
    }
 }
}
$(document).ready(function(){
   
   tetris.drawBoard();
   tetris.currentCoor = tetris.shapeCoordinates(tetris.currentShape,tetris.origin);
   tetris.fillColor(tetris.currentCoor,'blackcolor');
   
   $(document).keydown(function(key){
		if(key.keyCode === 39){
		tetris.move('right');
		} 
		else if (key.keyCode === 37){
		tetris.move('left');
		}
		else if (key.keyCode === 38){
 			tetris.rotateShape();
  		}
		else if (key.keyCode === 40){
		tetris.drop();
		}
    })
	var gravity = setInterval(function(){tetris.drop();},700);

})

tetris.currentCoor = [{row:1,col:1},
 {row:1,col:2},
 {row:2,col:1},
 {row:2,col:2}];
 
 tetris.origin = {row:2,col:5};
 tetris.currentShape = 'L';
 tetris.currentCoor;
 
//Filling Cells

 tetris.fillColor = function(coordinates,fillColor){
 	for(var i=0;i<coordinates.length;i++){
 		var row = coordinates[i].row;
 		var col = coordinates[i].col;
 		var $coor = $('tr.'+row).find('#'+col);
 		$coor.attr('bgcolor',fillColor);
 	}
 }
 
//define shapes 
 tetris.shapeCoordinates= function(currentShape,origin){
  if(currentShape === 'L'){
    return [{row:origin.row, col:origin.col},{row:origin.row-1, col:origin.col},{row:origin.row+1, col:origin.col},{row:origin.row+1, col:origin.col+1}]
       }
     else if(currentShape === 'J'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row+1,col:origin.col-1}]
	} else if(currentShape === 'I'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-2,col:origin.col},{row:origin.row+1,col:origin.col}]
	} else if(currentShape === 'O'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col+1},{row:origin.row,col:origin.col+1}]
	} else if(currentShape === 'S'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row-1,col:origin.col+1}]
	} else if(currentShape === 'T'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1}]
	} else if(currentShape === 'Z'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col-1},{row:origin.row,col:origin.col+1}]
	} else if(currentShape === 'L90'){
		return [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col+1},{row:origin.row,col:origin.col-1},{row:origin.row+1,col:origin.col-1}];
	} else if(currentShape === 'L180'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row-1,col:origin.col-1}];
	} else if(currentShape === 'L270'){
		return [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col+1},{row:origin.row,col:origin.col-1},{row:origin.row-1,col:origin.col+1}];
	} else if(currentShape === 'J90'){ 
		return [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1},{row:origin.row-1,col:origin.col-1}]
	} else if(currentShape === 'J180'){ 
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row-1,col:origin.col+1}]
	} else if(currentShape === 'J270'){ 
		return [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1},{row:origin.row+1,col:origin.col+1}]
	} else if(currentShape === 'I90'){
		return [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1},{row:origin.row,col:origin.col+2}]
	} else if(currentShape === 'S90'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col-1},{row:origin.row-2,col:origin.col-1}]
	} else if(currentShape === 'Z90'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col+1},{row:origin.row-2,col:origin.col+1}]
	} else if(currentShape === 'T90'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row,col:origin.col+1}]
	} else if(currentShape === 'T180'){
		return [{row:origin.row,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1}]
	} else if(currentShape === 'T270'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row,col:origin.col-1}]
	} 
}
 
 //rotate Shapes
 
 tetris.rotateShape = function(){
	var lastShape= this.currentShape;
	this.fillColor(this.currentCoor,'');
	if(this.currentShape === 'L'){
    this.currentShape = 'L90';
	} 
	else if(this.currentShape === 'L90'){
    this.currentShape = 'L180';
	}
	else if(this.currentShape === 'L180'){
		this.currentShape = 'L270';
	} else if(this.currentShape === 'L270'){
		this.currentShape = 'L';
	} else if(this.currentShape === 'J'){
		this.currentShape = 'J90';
	} else if(this.currentShape === 'J90'){
		this.currentShape = 'J180';
	} else if(this.currentShape === 'J180'){
		this.currentShape = 'J270';
	} else if(this.currentShape === 'J270'){
		this.currentShape = 'J';
	} else if(this.currentShape === 'I'){
		this.currentShape = 'I90';
	} else if(this.currentShape === 'I90'){
		this.currentShape = 'I';
	} else if(this.currentShape === 'S'){
		this.currentShape = 'S90';
	} else if(this.currentShape === 'S90'){
		this.currentShape = 'S';
	} else if(this.currentShape === 'Z'){
		this.currentShape = 'Z90';
	} else if(this.currentShape === 'Z90'){
		this.currentShape = 'Z';
	} else if(this.currentShape === 'T'){
		this.currentShape = 'T90';
	} else if(this.currentShape === 'T90'){
		this.currentShape = 'T180';
	} else if(this.currentShape === 'T180'){
		this.currentShape = 'T270';
	} else if(this.currentShape === 'T270'){
		this.currentShape = 'T';
	}
  
	this.currentCoor = this.shapeCoordinates(this.currentShape,this.origin);
	for(var i=0;i<this.currentCoor.length;i++)
	{
    if(this.ifReverse())
	{
      this.currentShape = lastShape;
    }
  }

  this.currentCoor = this.shapeCoordinates(this.currentShape,this.origin);
  
  this.fillColor(this.currentCoor,'red');
}
 
 
 
 
 
 //to move
 tetris.move=function(direction){
	// var reverse=false;
	 this.fillColor(this.currentCoor,'');
  //moving origin
   if(direction === 'right')
    {
		this.origin.col++;
	} else if (direction === 'left')
	{
	this.origin.col--;
	}
   
   this.currentCoor = this.shapeCoordinates(this.currentShape,this.origin);
	
  if(this.ifReverse()){
    if(direction === 'right'){
      this.origin.col--;
    } else if (direction === 'left'){
      this.origin.col++;
    }
  }
  this.currentCoor = this.shapeCoordinates(this.currentShape,this.origin);
  this.fillColor(this.currentCoor,'red');
 }

 
 
 //to drop
 
 tetris.drop = function(){
  var reverse = false;

  this.fillColor(this.currentCoor,'');
  this.origin.row++;

  for(var i=0;i<this.currentCoor.length;i++){
    this.currentCoor[i].row++;
    if(this.ifReverse()){
      reverse = true;
    }
  }

  if(reverse){
    for(var i=0;i<this.currentCoor.length;i++){
	this.currentCoor[i].row--;
    }
    this.origin.row--;
  }
  this.fillColor(this.currentCoor,'red');
  if(reverse){
    this.fillColor(this.currentCoor,'red');
	this.emptyFullRow();
    this.newImage();
  }
}

//new currentShape generation
tetris.newImage = function(){
  var rand = Math.floor(Math.random()*7);
  var shapeArray = ['L','J','I','O','S','T','Z'];
  this.currentShape = shapeArray[rand];
  this.origin = {row:2,col:5};
  this.currentCoor = this.shapeCoordinates(this.currentShape,this.origin);
}

//function to avoid overlapping
tetris.ifReverse = function(){
  for(var i=0;i<this.currentCoor.length;i++)
  {
    var row = this.currentCoor[i].row;
    var col = this.currentCoor[i].col;
    var $coor = $('tr.'+row).find('#'+col);
    if($coor.length === 0 || $coor.attr('bgcolor') ==='red'){
      return true;
    }
  }
  return false;
}

//emptying a row one its full
tetris.emptyFullRow = function(){
  var dropRow = 0;
	for (var i=23; i>=0;i--){
    var rowFull = true;
 
    for (var j=0;j<10;j++){
      var $coor = $('.'+i).find('#'+j);
      if($coor.attr('bgcolor')!=='red')
	  {
        rowFull = false;
      }

      if(dropRow>0){
        var $newCoor = $('.'+(i+dropRow)).find('#'+j);
        $newCoor.attr('bgcolor',$coor.attr('bgcolor'));
      }
    }

    if(rowFull){
      dropRow++;
    }
  }
}