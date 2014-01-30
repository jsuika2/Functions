/**
 * Created by Jeremy A. Suika on 1/29/14.
 *   "Functions of a Personal Nature or Functions_Personal"
 */



//Problem: I am having a few friends share some pizza, I don't want to eat to much and not have enought.


var joshPizza=prompt("How many slices of Pizza does Josh eat","");
var jonPizza=prompt("How many slices of Pizza does Jon eat","");

var bigLunch=prompt("Did I have a big lunch preventing from eating a lot of pizza");

var test1 =(joshPizza/8)+(jonPizza/8);



//to test prompts or results
//console.log(test1);

if(test1<=1){
    console.log("We are good on food");
}if (joshPizza==2){
    console.log("Josh ate two slices")
}else{
    console.log("We have to get some more food for everyone");
}
