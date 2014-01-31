/**
 * Created by Jeremy A. Suika on 1/29/14.
 */

var fishMiles = 5;   //
var day1Miles
var day2Miles

alert("A clown fish must travel 20 miles in 2 days to find his fish son or bad things happen. The things he meets, can slow him down or help him. ")
alert("Each day the fish travels he goes 5 miles, regardless of distractions or help.")

var sharkBait =prompt("DAY ONE--- Did he visit the sharks near the reef (sharks will slow him down in miles per day","yes or no");

if (sharkBait=="yes"){
    day1Miles=fishMiles-10
}else{
    day1Miles=fishMiles+5
}

var turtles =prompt("DAY TWO--- The sea turtles help the clown fish go faster. The fish gets 2 miles further for each turtle that helps, how many turtles helped him?","");
var turtleTotal =turtles *2;


if (day2Miles = 5 + day1Miles + turtleTotal >= 20){
    console.log("clown fish has traveled 20 miles made it to his son, Congrats");
}else{
    console.log("clown fish did not make it to your son in time")
}





//test
//console.log(turtleTotal);
console.log(day2Miles);






/*if (fishMiles >= totalMiles){
    console.log("Dad Fish traveled the distance of 20 miles and found his son");
} else{
    console.log("Dad fish did not find his son and all of lost");
}


/*

 */