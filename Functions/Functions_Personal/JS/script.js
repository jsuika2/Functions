/**
 * Created by Jeremy A. Suika on 1/29/14.
 *   "Functions of a Personal Nature or Functions_Personal"
 */



//Problem: I am having a two friends to share some pizza,I don't want us to run out of pizza....

alert("I am having two friends over to share a pizza pie. Deciding if we need to order a second pizza."); //explains the problem in a alert


var joshPizza=prompt("How many slices of Pizza does Josh want to eat","");
var jonPizza=prompt("How many slices of Pizza does Jon want to eat","");

var bigLunch=prompt("Did I have a big lunch preventing from eating a lot of pizza","yes or no");


if (bigLunch=="yes"){
    var jeremyPizza=1
}else{
    var jeremyPizza=3
}

var joshNachos=prompt("Did Josh bring Nachos for everyone to enjoy before pizza?","yes or no?");

var total1 =(joshPizza/8)+(jonPizza/8)+(jeremyPizza/8);




//if (joshNachos=="yes"){
   // var total1 =   ((joshPizza-3) / 8) + ((jonPizza-3) / 8) + ((jeremyPizza-1) / 8)

//}else{
  //  var total1 =(joshPizza/8)+(jonPizza/8)+(jeremyPizza/8)
//}



//to test prompts or results
//console.log(jeremyPizza);

if(total1<=1){
    console.log("We are good with one pizza pie.");
}else if(joshNachos=="yes")
    console.log(var total1=((joshPizza-2) / 8) + ((jonPizza-3) / 8) + ((jeremyPizza-1) / 8));
else{
    console.log("We have to order another pie. (and go on a diet!!");
}
