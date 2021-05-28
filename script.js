var mealCost = 25.99;
Number(prompt("How much was your meal?"));

var tip = 0.18;
Number(prompt("Tip Percentage?"));

var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;

var numOfPeople = 2;
Number(prompt("How many people are eating? (Min 1)"));

console.log(
  `Your meal cost is $${mealCost}, and with the tip, it comes to $${total.toFixed(
    2
  )}.  Your share is $${(total / numOfPeople).toFixed(
    2
  )}. Hope it was delicious!`
);
