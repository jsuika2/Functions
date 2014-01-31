/**
 * Created by Jeremy A. Suika on 1/29/14.
 *   "Functions of a Personal Nature or Functions_Personal"
 */



//Problem: I am having a two friends to share some pizza,I don't want us to run out of pizza....

alert("I am having two friends over to share a pizza pie. Deciding if we need to order a second pizza."); //explains the problem in a alert

var slicesPie =prompt("How many slices in your Pizza? Large =8","8");

var joshPizza=prompt("How many slices of Pizza does Josh want to eat","");
var jonPizza=prompt("How many slices of Pizza does Jon want to eat","");

var bigLunch=prompt("Did I have a big lunch preventing from eating pizza","yes or no");

var joshNachos=prompt("Did Josh bring Nachos for everyone to enjoy before pizza?","yes or no?");


if (bigLunch=="yes"){
    var jeremyPizza=0;
}else{
    var jeremyPizza=3;
}

if(joshNachos=="yes"){
    var total1 =((joshPizza-1) / slicesPie)  +   ((jonPizza-2) / slicesPie)   +   ((jeremyPizza-1) / slicesPie);
}else{
    var total1 =(joshPizza/slicesPie)+(jonPizza/slicesPie)+(jeremyPizza/slicesPie);
}
if(total1<=1){
 console.log("We are good with one pizza pie.");

}
else if(bigLunch=="yes" || (   (joshPizza/slicesPie)+(jonPizza/slicesPie)  <=1) ){
    console.log("We are good on pizza because I am not eating or Josh and Jon ate less then 8 slices");
}else{
   console.log("We have to order another pizza pie. And go on a diet!!");
}