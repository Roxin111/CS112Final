/**
 * Created by Roxin on 10/31/2016.
 */
const Fortune1 = 0;
const Fortune2 = 1;
const Fortune3 = 2;
const Fortune4 = 3;
const Fortune5 = 4;
const Fortune6 = 5;
const Fortune7 = 6;
const Fortune8 = 7;

const displayFortune1 = "A beautiful, smart, and loving person will be coming into your life.";
const displayFortune2 = "All will go well with your new project.";
const displayFortune3 = "It is honorable to stand up for what is right, however unpopular it seems.";
const displayFortune4 = "People find it difficult to resist your persuasive manner.";
const displayFortune5 = "Success is going from failure to failure without loss of enthusiasm.";
const displayFortune6 = "Miles are covered one step at a time.";
const displayFortune7 = "Help! I’m being held prisoner in a chinese bakery!";
const displayFortune8 = "Don’t just spend time. Invest it.";
function $(value) {
    return document.getElementById(value);
}
function Fortune (){
    
}
function RandomInt (low,high)
{
    return Math.floor(Math.random()*(high-low)) +low
}
function Displayresult ()
{
    Fortunenumber = RandomInt(0, 8);
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
    }
    else if (Fortunenumber == Fortune8) {
        $("Output").innerHTML=displayFortune8;
    }

}