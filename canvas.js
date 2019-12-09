var doretHealth = 0;
doretHealth = 0;
var level;
level = 1;
var e = document.getElementById("menuItems");

function addDoret(){
    var e = document.getElementById("menuItems");
    var value = parseInt(e.options[e.selectedIndex].value);
    alert("Value of your choice: " + value);
    doretHealth += value;
    level++;
    alert("Starting level " + level);
    changeLevel();
    draw();
    alert("Raybould's Health: " + doretHealth);
}

function changeLevel(){
    if(level == 2){
        document.getElementById("Prompt").textContent="In order for Billy to obtain the most nutrients, he should take?";
        document.getElementById("option1").textContent="More micronutrients than macronutrients";
        document.getElementById("option1").value="1";
        document.getElementById("option2").textContent="Equal amounts of macronutrients and micronutrients";
        document.getElementById("option1").value="1";
        document.getElementById("option3").textContent="More macronutrients than micronutrients";
        document.getElementById("option1").value="4";
        document.getElementById("option4").textContent="Neglect both";
        document.getElementById("option1").value="0";
    }
    if (level == 3){
        document.getElementById("Prompt").textContent="How many different types of nutrients should Billy take to stay the healthiest?";
        document.getElementById("option1").textContent="3";
        document.getElementById("option1").value="1";
        document.getElementById("option2").textContent="4";
        document.getElementById("option1").value="2";
        document.getElementById("option3").textContent="6";
        document.getElementById("option1").value="3";
        document.getElementById("option4").textContent="7";
        document.getElementById("option1").value="4";
    }
    if (level == 4){
        document.getElementById("Prompt").textContent="For Billy to stay nice and hydrated, how many glasses of water should he drink per day?";
        document.getElementById("option1").textContent="0";
        document.getElementById("option1").value="0";
        document.getElementById("option2").textContent="4";
        document.getElementById("option1").value="2";
        document.getElementById("option3").textContent="6";
        document.getElementById("option1").value="3";
        document.getElementById("option4").textContent="8";
        document.getElementById("option1").value="4";
    }
    if (level == 5){
        document.getElementById("Prompt").textContent="Which food should Billy eat to get his carbs?";
        document.getElementById("option1").textContent="Sweet potatoes";
        document.getElementById("option1").value="4";
        document.getElementById("option2").textContent="Brown rice";
        document.getElementById("option1").value="4";
        document.getElementById("option3").textContent="Cauliflower ";
        document.getElementById("option1").value="2";
        document.getElementById("option4").textContent="Nuts";
        document.getElementById("option1").value="2";
    }
    if (level == 6){
        document.getElementById("Prompt").textContent="Which of the following nutrients should Billy take to provide his body with the essential amino acids it deserves?";
        document.getElementById("option1").textContent="Carbohydrates";
        document.getElementById("option1").value="1";
        document.getElementById("option2").textContent="Fats";
        document.getElementById("option1").value="1";
        document.getElementById("option3").textContent="Proteins";
        document.getElementById("option1").value="4";
        document.getElementById("option4").textContent="Water";
        document.getElementById("option1").value="1";
    }
    if (level == 7){
        document.getElementById("Prompt").textContent="In order for Billy to gain fat in a healthy and rich way, which of these foods should he eat more of?";
        document.getElementById("option1").textContent="Avocadoes";
        document.getElementById("option1").value="4";
        document.getElementById("option2").textContent="Fish";
        document.getElementById("option1").value="4";
        document.getElementById("option3").textContent="Poutine";
        document.getElementById("option1").value="1";
        document.getElementById("option4").textContent="Red meat";
        document.getElementById("option1").value="2";
    }
    if (level == 8){
        document.getElementById("Prompt").textContent="In order to fuel Billy’s body cells so he can stay in tip-top shape, what macronutrient should he take?";
        document.getElementById("option1").textContent="Carbohydrates";
        document.getElementById("option1").value="4";
        document.getElementById("option2").textContent="Fats";
        document.getElementById("option1").value="1";
        document.getElementById("option3").textContent="Proteins";
        document.getElementById("option1").value="1";
        document.getElementById("option4").textContent="Water";
        document.getElementById("option1").value="1";
    }
    if (level == 9){
        document.getElementById("Prompt").textContent="Which of the following foods should Billy take to get the most protein?";
        document.getElementById("option1").textContent="Black Beans";
        document.getElementById("option1").value="4";
        document.getElementById("option2").textContent="Brussel Sprouts";
        document.getElementById("option1").value="1";
        document.getElementById("option3").textContent="Chips";
        document.getElementById("option1").value="2";
        document.getElementById("option4").textContent="Eggs";
        document.getElementById("option1").value="4";
    }
    if (level == 10){
        document.getElementById("Prompt").textContent="Which of the following nutrients should Billy take to give his strong and muscular body the energy it deserves?";
        document.getElementById("option1").textContent="Carbohydrates and fat";
        document.getElementById("option1").value="4";
        document.getElementById("option2").textContent="Vitamins and minerals";
        document.getElementById("option1").value="1";
        document.getElementById("option3").textContent="Water and fats";
        document.getElementById("option1").value="2";
        document.getElementById("option4").textContent="Proteins and vitamins";
        document.getElementById("option1").value="3";
    }
    if (level == 11){
        document.getElementById("Prompt").textContent="To maintain constant body temperature, what should Billy take?";
        document.getElementById("option1").textContent="Water";
        document.getElementById("option1").value="4";
        document.getElementById("option2").textContent="Vitamins";
        document.getElementById("option1").value="1";
        document.getElementById("option3").textContent="Minerals";
        document.getElementById("option1").value="1";
        document.getElementById("option4").textContent="Carbohydrates";
        document.getElementById("option1").value="1";
    }
    if (level == 12){
        document.getElementById("Prompt").textContent="For Billy to receive his recommended fats to become a healthy chubby little bunny, what type of fats should he take?";
        document.getElementById("option1").textContent="Saturated fats";
        document.getElementById("option1").value="0";
        document.getElementById("option2").textContent="Trans Fats";
        document.getElementById("option1").value="0";
        document.getElementById("option3").textContent="Monounsaturated fats";
        document.getElementById("option1").value="4";
        document.getElementById("option4").textContent="Polyunsaturated fats";
        document.getElementById("option1").value="4";
    }
    if (level == 13){
        document.getElementById("Prompt").textContent="Which Macromineral would you choose as your Connor McGregor to fight off infections?";
        document.getElementById("option1").textContent="Carbohydrates";
        document.getElementById("option1").value="1";
        document.getElementById("option2").textContent="Proteins";
        document.getElementById("option1").value="4";
        document.getElementById("option3").textContent="Fats";
        document.getElementById("option1").value="1";
        document.getElementById("option4").textContent="Water";
        document.getElementById("option1").value="1";
    }
    if (level == 14){
        document.getElementById("Prompt").textContent="Which of the following vitamins should Billy take so they can be absorbed by the body and not get flushed out when he goes to the washroom?";
        document.getElementById("option1").textContent="Vitamin B1";
        document.getElementById("option1").value="0";
        document.getElementById("option2").textContent="Vitamin B9";
        document.getElementById("option1").value="0";
        document.getElementById("option3").textContent="Vitamin C";
        document.getElementById("option1").value="0";
        document.getElementById("option4").textContent="Vitamin E";
        document.getElementById("option1").value="4";
    }
    if (level == 15){
        document.getElementById("Prompt").textContent="Which of the following foods should Billy take to get the most amount of vitamins?";
        document.getElementById("option1").textContent="Broccoli";
        document.getElementById("option1").value="4";
        document.getElementById("option2").textContent="Beef";
        document.getElementById("option1").value="4";
        document.getElementById("option3").textContent="Chips";
        document.getElementById("option1").value="1";
        document.getElementById("option4").textContent="Fruit Loops";
        document.getElementById("option1").value="1";
    }
    if (level == 16){
        document.getElementById("Prompt").textContent="OMG it’s so bright outside! Billy’s skin doesn’t feel too good? What vitamin should Billy take to protect his skin from the harsh sunlight?";
        document.getElementById("option1").textContent="Vitamin B5";
        document.getElementById("option1").value="0";
        document.getElementById("option2").textContent="Vitamin C";
        document.getElementById("option1").value="0";
        document.getElementById("option3").textContent="Vitamin D";
        document.getElementById("option1").value="4";
        document.getElementById("option4").textContent="Vitamin K";
        document.getElementById("option1").value="0";
    }
    if (level == 17){
        document.getElementById("Prompt").textContent="How many different types of water-soluble vitamins should Billy have to reach peak performance?";
        document.getElementById("option1").textContent="6";
        document.getElementById("option1").value="2";
        document.getElementById("option2").textContent="7";
        document.getElementById("option1").value="3";
        document.getElementById("option3").textContent="9";
        document.getElementById("option1").value="4";
        document.getElementById("option4").textContent="11";
        document.getElementById("option1").value="3";
    }
    if (level == 18){
        document.getElementById("Prompt").textContent="To prevent Billy from going blind, which fat-soluble vitamin is he recommended to take?";
        document.getElementById("option1").textContent="Vitamin A";
        document.getElementById("option1").value="4";
        document.getElementById("option2").textContent="Vitamin D";
        document.getElementById("option1").value="0";
        document.getElementById("option3").textContent="Vitamin E";
        document.getElementById("option1").value="0";
        document.getElementById("option4").textContent="Vitamin K";
        document.getElementById("option1").value="0";
    }
    if (level == 19){
        document.getElementById("Prompt").textContent="Which of the following minerals should Billy take to get his needed macrominerals?";
        document.getElementById("option1").textContent="Sodium";
        document.getElementById("option1").value="4";
        document.getElementById("option2").textContent="Phosphorus";
        document.getElementById("option1").value="4";
        document.getElementById("option3").textContent="Selenium";
        document.getElementById("option1").value="0";
        document.getElementById("option4").textContent="Zinc";
        document.getElementById("option1").value="0";
    }
    if (level == 20){
        document.getElementById("Prompt").textContent="In order for Billy to maintain strong and healthy bones and not become a skeleton (Osteoporosis), which mineral should he take?";
        document.getElementById("option1").textContent="Phosphorus";
        document.getElementById("option1").value="1";
        document.getElementById("option2").textContent="Magnesium";
        document.getElementById("option1").value="5";
        document.getElementById("option3").textContent="Calcium";
        document.getElementById("option1").value="4";
        document.getElementById("option4").textContent="Zinc";
        document.getElementById("option1").value="1";
    }
    if (level == 21){
        document.getElementById("Prompt").textContent="Which of the following should Billy take to obtain high amounts of minerals";
        document.getElementById("option1").textContent="Nuts";
        document.getElementById("option1").value="4";
        document.getElementById("option2").textContent="Leafy Greens";
        document.getElementById("option1").value="4";
        document.getElementById("option3").textContent="Cereal";
        document.getElementById("option1").value="3";
        document.getElementById("option4").textContent="Cake";
        document.getElementById("option1").value="0";
    }
    if (level == 22){
        document.getElementById("Prompt").textContent="Oh no! Billy has gotten anemia which is a deficiency of which mineral?";
        document.getElementById("option1").textContent="Iron";
        document.getElementById("option1").value="4";
        document.getElementById("option2").textContent="Sulphide";
        document.getElementById("option1").value="0";
        document.getElementById("option3").textContent="Chloride";
        document.getElementById("option1").value="0";
        document.getElementById("option4").textContent="Sodium";
        document.getElementById("option1").value="0";
    }
    if (level == 23){
        document.getElementById("Prompt").textContent="Billy has trouble with blood clotting, which fat-soluble vitamin should he take to help with his blood clotting?";
        document.getElementById("option1").textContent="Vitamin A";
        document.getElementById("option1").value="0";
        document.getElementById("option2").textContent="Vitamin D";
        document.getElementById("option1").value="0";
        document.getElementById("option3").textContent="Vitamin E";
        document.getElementById("option1").value="0";
        document.getElementById("option4").textContent="Vitamin K";
        document.getElementById("option1").value="4";
    }
    if (level == 24){
        document.getElementById("Prompt").textContent="You're DONE!";
        document.getElementById("option1").textContent="Vitamin A";
        document.getElementById("option1").value="0";
        document.getElementById("option2").textContent="Vitamin D";
        document.getElementById("option1").value="0";
        document.getElementById("option3").textContent="Vitamin E";
        document.getElementById("option1").value="0";
        document.getElementById("option4").textContent="Vitamin K";
        document.getElementById("option1").value="4";
    }
}

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.rect(0, 0, 200, 200);
        ctx.fillStyle = "white";
        ctx.fill();
        if ((doretHealth/level) < 2){
            //Extreme Sadness
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circles
            ctx.moveTo(110, 105);
            ctx.arc(75, 105, 35, 0, Math.PI, true);  // Mouth (clockwise)
            ctx.lineTo(110,105);
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
            ctx.stroke();
        } else if ((doretHealth/level) < 3){
            //Sadness
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            ctx.moveTo(110, 105);
            ctx.arc(75, 105, 35, 0, Math.PI, true);  // Mouth (clockwise)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
            ctx.moveTo(95, 65); 
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
            ctx.stroke();
        } else if ((doretHealth/level) < 3.5){
            //APATHY
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            ctx.moveTo(95, 100);
            ctx.lineTo(55, 100);  // Mouth (clockwise)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
            ctx.stroke();
        } else if ((doretHealth/level) < 3.75){
            //SMILE
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
            ctx.stroke();
        } else {
            //SUPER SMILE
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
            ctx.lineTo(110,75);
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
            ctx.stroke();
        }   
  }
}