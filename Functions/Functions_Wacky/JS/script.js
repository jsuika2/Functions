/**
 * Created by Jeremy A. Suika on 1/29/14.
 * Functions Wacky
 */

// This function is seeing if a clown fish can travel 20 miles in 2 days. He will have trails, lets see if he can overcome them and find his son.


alert("A clown fish must travel 20 miles in 2 days to find his fish son or bad things happen. The things he meets, can slow him down or help him. ")  //describes the function
var milesPerDay=prompt("Regardless of distractions, the clown fish travels how many miles per day?","5");  //the fish will travel a certain miles per day regardless of distractions, I chose 5

var fishMiles = 5;   //variable to give the fish a little extra miles at the start,
var day1Miles       //day1Miles is used to calulate the total miles of day one, = 5 + what ever the answer to the SHARK prompt
var day2Miles        //day 2 miles will be the total of all the calulations, variable used to see if the shark meets the miles requirements.


var sharkBait =prompt("DAY ONE--- Did he visit the sharks near the reef (sharks will slow him down in miles per day","yes or no"); //the first problem he faces

if (sharkBait=="yes"){          //If TRUE, he meet the sharks, then he loses 5 miles on his trip
    day1Miles=fishMiles-10      // This calulates the expression described above
}else{
    day1Miles=fishMiles+5       //If FALSE, he does not meet the sharks, then he keeps on going, and gets more miles added to his total
}

var turtles =prompt("DAY TWO--- The sea turtles help the clown fish go faster. The fish gets 2 miles further for each turtle that helps, how many turtles helped him?",""); //prompt to see how many turtles help him, every turtle that helps him, he gets 2 miles added
var turtleTotal =turtles *2;    //for every sea turtle that helps him, he gets 2 miles added to his trip


//if (day2Miles = 5 + day1Miles + turtleTotal >= 20){          //If his miles from day 1 and 2, are greater or equal to 20, then the statement is true, he can see his son
  //  console.log("clown fish has traveled 20 miles made it to his son, Congrats");  //the display of the statement above
//}else{
 //   console.log("clown fish did not make it to his son in time")    //IF the miles are less then 20, then he did not make it, its a sad fish day.
//}

(day2Miles= 5 + day1Miles + turtleTotal >= 20)  ? console.log("clown fish has traveled 20 miles made it to his son, Congrats") : console.log("clown fish did not make it to his son in time")


//statent above is the 










//if ((day2Miles = milesPerDay + day1Miles + turtleTotal) >= 20){         //If his miles from day 1 and 2, are greater or equal to 20, then the statement is true
// console.log("clown fish has traveled at least 20 miles made it to his son, Congrats");  //the display of the statement above
//}else{
//  console.log("clown fish did not make it to your son in time")  //IF the miles are less then 20, then he did not make it, its a sad fish day.
//}

//((day2Miles = milesPerDay + day1Miles + turtleTotal) >= 20) ? console.log("clown fish has traveled at least 20 miles made it to his son, Congrats") : console.log("clown fish did not make it to your son in time")














//test
//console.log(turtleTotal);
//console.log(day2Miles);






/*if (fishMiles >= totalMiles){
    console.log("Dad Fish traveled the distance of 20 miles and found his son");
} else{
    console.log("Dad fish did not find his son and all of lost");
}


/*

 */