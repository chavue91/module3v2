var playerName = window.prompt("What is your robot's name?");
var palyerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, palyerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT") {

    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and us that result to update the value in the 'enemyHealth' variable

    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked

    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
    );

    //Check enemy's health

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

    }

    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable

    palyerHealth = palyerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked

    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + palyerHealth + " health remaining and " + playerMoney + " gold."
    );

    //Check player health

    if (palyerHealth <= 0) {
        window.alert(playerName + " has died!");
    }

    else {
        window.alert(playerName + " still has " + palyerHealth + " health left.");
    }

    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. " + playerName + " will lose 2 gold!");
            playerMoney = playerMoney - 2;
            console.log(
                playerName + " has decided to skip this fight. " + playerName + " now have " + playerMoney + " gold left!"
            );
        }
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }


};


fight();