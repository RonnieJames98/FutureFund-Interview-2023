function horizontalWin(box){
    
    // CHANGE ID FROM 'winner' => 'winner_horizontal'
    line.setAttribute('id','winner_horizontal');
    var winner = document.getElementById('winner_horizontal');
        
    // IDENTIFY LOCATION OF MIDDLE BOX
    var offsetTop = document.getElementById(box).offsetTop;
    var offsetLeft = document.getElementById(box).offsetLeft;
    console.log(offsetLeft);
    console.log(offsetTop);
        
    // ADJUST PLACEMENT OF HORIZONTAL LINE
    winner.style.top = offsetTop + 20 + "px";
    winner.style.left = offsetLeft - 110 + "px";
        
}

function verticalWin(box){
    
    // CHANGE ID FROM 'winner' => 'winner_vertical'
    line.setAttribute('id','winner_vertical');
    var winner = document.getElementById('winner_vertical');
        
    // IDENTIFY LOCATION OF MIDDLE BOX
    var offsetTop = document.getElementById(box).offsetTop;
    var offsetLeft = document.getElementById(box).offsetLeft;
    console.log(offsetLeft);
    console.log(offsetTop);
        
    // ADJUST PLACEMENT OF VERTICAL LINE
    winner.style.top = offsetTop - 100 + "px";
    winner.style.left = offsetLeft + 40 + "px";
}

function diagWinOne(){
    
    // CHANGE ID FROM 'winner' => 'winner_diagOne'
    line.setAttribute('id','winner_diagOne');
    var winner = document.getElementById('winner_diagOne');
        
    // IDENTIFY LOCATION OF MIDDLE BOX
    var offsetTop = document.getElementById("b5").offsetTop;
    var offsetLeft = document.getElementById("b5").offsetLeft;
    console.log(offsetLeft);
    console.log(offsetTop);
        
    // ADJUST PLACEMENT OF DIAGONAL LINE
    winner.style.top = offsetTop + 20 + "px";
    winner.style.left = offsetLeft - 130 + "px";
}

function diagWinTwo(box){
    // CHANGE ID FROM 'winner' => 'winner_diagTwo'
    line.setAttribute('id','winner_diagTwo');
    var winner = document.getElementById('winner_diagTwo');
        
    // IDENTIFY LOCATION OF MIDDLE BOX
    var offsetTop = document.getElementById("b5").offsetTop;
    var offsetLeft = document.getElementById("b5").offsetLeft;
    console.log(offsetLeft);
    console.log(offsetTop);
        
    // ADJUST PLACEMENT OF DIAGONAL LINE
    winner.style.top = offsetTop + 20 + "px";
    winner.style.left = offsetLeft - 130 + "px";    
}

// GAME FUNCTION
function game() {

	// INITIALIZING BOXES
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;
    
    var line = document.getElementById("line");

	// PLAYER X WIN CHECK AND DISABLE OTHER BOXES
    // HORIZONTAL 1
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        
        horizontalWin("b2");
        
        window.alert('Player X won');
	}
    // HORIZONTAL 2
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        
        horizontalWin("b5");
        
		window.alert('Player X won');
	}
    // HORIZONTAL 3
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		
        horizontalWin("b8")
        
		window.alert('Player X won');
	}
    // VERTICAL 1
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		
        verticalWin("b4");
        
		window.alert('Player X won');
	}
    // VERTICAL 2
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		
        verticalWin("b5");
        
		window.alert('Player X won');
	}
    // VERTICAL 3
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		
        verticalWin("b6");
        
		window.alert('Player X won');
	}
    // DIAGONAL LEFT TO RIGHT
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		
        diagWinOne();
        
		window.alert('Player X won');
	}
    // DIAGONAL RIGHT TO LEFT
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print').innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		
        diagWinTwo();
        
		window.alert('Player X won');
	}

	// PLAYER 0 WIN CHECK AND DISABLE OTHER BOXES
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' || b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        
        horizontalWin("b2");
        
		window.alert('Player 0 won');
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' || b5 == '0') && (b6 == '0' || b6 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        
        horizontalWin("b5");
        
		window.alert('Player 0 won');
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' || b8 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
        
        horizontalWin("b8");
        
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' || b4 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        
        verticalWin("b4");
        
		window.alert('Player 0 won');
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' || b5 == '0') && (b8 == '0' || b8 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
        
        verticalWin("b5");
        
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' || b6 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        
        verticalWin("b6");
        
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' || b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        
        diagWinOne();
        
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' || b5 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print').innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        
        diagWinTwo();
        
		window.alert('Player 0 won');
	}

	// CHECK FOR TIE
	else if ((b1 == 'X' || b1 == '0') && 
             (b2 == 'X'|| b2 == '0') && 
             (b3 == 'X' || b3 == '0') &&
		      (b4 == 'X' || b4 == '0') && 
             (b5 == 'X' ||b5 == '0') && 
             (b6 == 'X' || b6 == '0') &&
		      (b7 == 'X' || b7 == '0') && 
             (b8 == 'X' || b8 == '0') && 
             (b9 == 'X' || b9 == '0')) 
    {
            document.getElementById('print').style.color = "red";
			document.getElementById('print').innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {
		// RESULT
		if (flag == 1) {
            document.getElementById('print').style.color = "blue";
			document.getElementById('print').innerHTML = "Player X Turn";
		}
		else {
            document.getElementById('print').style.color = "orange";
			document.getElementById('print').innerHTML = "Player 0 Turn";
		}
	}
}



// RESETS GAME BY CLEARING BOX VALUES
function reset() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// MARKS BOXES X OR 0
// FLAG 1 == X || FLAG 0 == 0
flag = 1;
function box1() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function box2() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function box3() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function box4() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function box5() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function box6() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function box7() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function box8() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function box9() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}
