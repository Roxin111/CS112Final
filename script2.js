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

const displayFortune1 = "";
const displayFortune2 = "";
const displayFortune3 = "";
const displayFortune4 = "";
const displayFortune5 = "";
const displayFortune6 = "";
const displayFortune7 = "";
const displayFortune8 = "";

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