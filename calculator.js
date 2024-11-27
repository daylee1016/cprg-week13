calculate.addEventListener('click', function () {
	//console.log('It worked!');
	let grade = earned.value;
	let outOf = total.value;
	let percentage = (grade/outOf)*100;
    //percentage = percentage * 100;//
		//let grade = getElementById('earned').value;
    let letter = "";

    if (percentage < 50)//<= less than equal to//
    {
        letter = "F";
    }

    else if (percentage < 55){
        letter = "D";
    }
    else if (percentage < 66){
        letter = "C";
    }
    else if (percentage < 76){
        letter = "B";
    }
    else if (percentage < 89){
        letter = "A";
    }
   else if (percentage <= 100){
        letter = "A+";
    }

    output.innerHTML = "You earned "+grade+" out of "+outOf+" which is "+percentage+"%. That is a letter grade of "+letter+".";

		console.log(grade);
	console.log(outOf);
    console.log(percentage);
    console.log(letter)
    
});