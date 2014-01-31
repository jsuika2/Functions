/**
 * Created by Jeremy A. Suika on 1/29/14.
 *   "Functions of a Personal Nature or Functions_Personal"
 */



//Problem: I am having a two friends to share some pizza,I don't want us to run out of pizza....

alert("I am having two friends over to share a pizza pie. Deciding if one pizza is enough..."); //explains the problem in a alert

var joshNachos=prompt("Did Josh bring Nachos for everyone to enjoy before pizza?","yes or no?");  //a yes or no prompt, to be used later in a condition

var slicesPie =prompt("How many slices in your Pizza? Large =8","8"); //This variable can be change to make it a bigger pizza, but each slice is 1/8, 2/8

var joshPizza=prompt("How many slices of Pizza does Josh want to eat","");  //Whatever the input it will be converted to X/8 EXAMPLE: 1/8 is eating one slice of pizza
var jonPizza=prompt("How many slices of Pizza does Jon want to eat","");    //Whatever the input it will be converted to X/8 EXAMPLE: 1/8 is eating one slice of pizza


var bigLunch=prompt("Did I have a big lunch preventing from eating pizza? (yes will equal 3 slices, no will equal 0 slices)","yes or no"); //This variable will be used later to see how much pizza I will eat




if (bigLunch=="yes"){        //if I had a big lunch, I will not eat any pizza
    var jeremyPizza=0;          //The result will be 0 slices
}else{                          //The else to indicate the potential change
    var jeremyPizza=3;          //If NO, then I will eat 3 slices of pizza
}

if(joshNachos=="yes"){    //By bringing extra food, we will eat less pizza, it will affect the equation
    var total1 =((joshPizza-1) / slicesPie)  +   ((jonPizza-2) / slicesPie)   +   ((jeremyPizza-1) / slicesPie);   //a random number is subtracted from the Prompts for pizza eaten. Josh had -1 slices removed from his pizza total
}else{
    var total1 =(joshPizza/slicesPie)+(jonPizza/slicesPie)+(jeremyPizza/slicesPie);  //this total is numbers from the prompts above, the pizza totals divided by 8 and added together
}
if(total1<=1){                  //If that total above is less then the WHOLE NUMBER ONE, then its tue and theres pizza for everyone--- 5/8 = 6.25. .625<1, 5 slices out of 8 slices
 console.log("We are good with one pizza pie.");    //the prompt to indicate that the above statements are true

}
else if(bigLunch=="yes" && (   (joshPizza/slicesPie)+(jonPizza/slicesPie)  <=1) ){     // the ELSE IF statement and logical operator, used to say" If I had a big lunch and they ate less then 8 slices we have enough pizza.
    console.log("We are good on pizza because I am not eating or Josh and Jon ate less then 8 slices"); //What the log says if the Else If statement is true
}else{
   console.log("We have to order another pizza pie. And go on a diet!!");  //if the statements are not true, 1 pizza is not enough
}