let counter = 0;
let upgradedCounter = 1;

let costIncrease = 100;
let clicksCost = 100;

let upgrader = 1;

let winCondition = 1000;

alert("Get to 1000 CLicks To Win!")

for(let i = 0; i <= 10; i++)
{
    document.getElementById("button1").onclick = function()
    {   
        counter += upgradedCounter;
        document.getElementById("button1").innerHTML = counter;

        if(counter == winCondition)
        {
            document.getElementById("winner").innerHTML = `YOU WON TOTAL CLICKS ${winCondition}, REFRESH TO RESTART`
        }
        console.log(counter);
    }

    console.log(counter);

    document.getElementById("button2").onclick = function ()
    {
        if(counter < clicksCost)
        {
            alert("Not Enough Clicks")
        }

        else if(counter >= clicksCost)
        {
            counter = counter - clicksCost;
            clicksCost += costIncrease;
            document.getElementById("button2").innerHTML = `Double Your Clicks $${clicksCost}`;
            upgradedCounter += upgrader;
        }
    }

}


