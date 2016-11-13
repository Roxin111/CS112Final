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
function RandomInt (low,high)
{
    return Math.floor(Math.random()*(high-low+1)) +low
}
function Displayresult ()
{
    Fortunenumber = RandomInt(0, 8);
    if (Fortunenumber == Fortune1) {
        summary = SESSION_PLAYER_WINS;
        playerWins++;
    } else if (Fortunenumber == Fortune2) {
        summary = SESSION_PLAYER_WINS;
        playerWins++;
    } else if (Fortunenumber == Fortune3) {
        summary = SESSION_PLAYER_WINS;
        playerWins++;
    } else if (Fortunenumber == Fortune4) {
        summary = SESSION_COMPUTER_WINS;
        computerWins++;
    } else if (Fortunenumber == Fortune5) {
        summary = SESSION_COMPUTER_WINS;
        computerWins++;
    } else if (Fortunenumber == Fortune6) {
        summary = SESSION_COMPUTER_WINS;
        computerWins++;
    }else if (Fortunenumber == Fortune7) {
        summary = SESSION_COMPUTER_WINS;
        computerWins++;
    }
    else if (Fortunenumber == Fortune8) {
        summary = SESSION_COMPUTER_WINS;
        computerWins++;
    }
}