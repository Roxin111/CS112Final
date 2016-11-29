/**
 * Created by Roxin on 11/22/2016.
 */
const Fortune1 = 0;
const Fortune2 = 1;
const Fortune3 = 2;
const Fortune4 = 3;
const Fortune5 = 4;
const Fortune6 = 5;
const Fortune7 = 6;
const Fortune8 = 7;

var displayFortune1 = "";
var displayFortune2 = "";
var displayFortune3 = "";
var displayFortune4 = "";
var displayFortune5 = "";
var displayFortune6 = "";
var displayFortune7 = "";
var displayFortune8 = "";

var playername = "name";
function createFortune(){
    var pn;
  pn =  localStorage.getItem("name");
    displayFortune1 = "You will have many good years of luck" + pn;
    displayFortune2 = "You will do well during finals however, you will need to study first" + pn;
    displayFortune3 = pn + "Many people talk about your good looks!";
    displayFortune4 = pn + "You will have the fortune of traveling to many distant lands in your future";
    displayFortune5 = "Find what you want to do in life, Then you will never work a day in your life" + pn;
    displayFortune6 = pn + "Don't eat the last cookie in the cookie jar. Your mom won't be so happy!";
    displayFortune7 = pn + "You will not be defeated so easily! Just don't forget your limits.";
    displayFortune8 = "There are rumors that a great warrior has entered our lands. Their name is" + pn;
}
function save(){
    localStorage.setItem("name",playername);
}
function clearLocal(){
    localStorage.clear();
}
function $(value) {
    return document.getElementById(value);
}
function DisplayResult()
{
    var Fortunenumber = RandomInt(0, 8);
    if (Fortunenumber == Fortune1) {
        $("Output").innerHTML=displayFortune1;
    } else if (Fortunenumber == Fortune2) {
        $("Output").innerHTML=displayFortune2;
    } else if (Fortunenumber == Fortune3) {
        $("Output").innerHTML=displayFortune3;
    } else if (Fortunenumber == Fortune4) {
        $("Output").innerHTML=displayFortune4;
    } else if (Fortunenumber == Fortune5) {
        $("Output").innerHTML=displayFortune5;
    } else if (Fortunenumber == Fortune6) {
        $("Output").innerHTML=displayFortune6;
    }else if (Fortunenumber == Fortune7) {
        $("Output").innerHTML=displayFortune7;
    } else if (Fortunenumber == Fortune8) {
        $("Output").innerHTML=displayFortune8;
    }

}