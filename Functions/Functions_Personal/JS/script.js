/**
 * Created by Jeremy A. Suika on 1/29/14.
 *   "Functions of a Personal Nature or Functions_Personal"
 */



//Problem: I am having a few friends share some pizza, I don't want to eat to much and not have enought.


var joshPizza=prompt("How many slices of Pizza does Josh eat","");
var jonPizza=prompt("How many slices of Pizza does Jon eat","");

var test1 =(joshPizza/8)+(jonPizza/8);



//to test prompts or results
console.log(test1);

if(test1<=1){
    console.log("We are good on food");
}else{
    console.log("We have to get some more food for everyone");
}





   // if(amountCarsSold >=10){                                 //the  prompt from above will be greater or equal to 10 to get a bonus
     //   console.log("Bonus of "+"$"+bonus+" plus you get $"+(eachCar * amountCarsSold)+ " for each car sold");  //this one took some time, but explains-
   // }else{                                                                                                       //- the console message of achieving bonus
    //    console.log("No bonus this month, only "+"$"+eachCar * amountCarsSold);   //The else option, if the statement above is FALSE, you get no bonus.
