let weight = parseFloat(prompt("Enter your weight"));
let height = parseFloat(prompt("Enter your height"));
let bmi = parseFloat(weight/(height*height));
if (bmi < 18)
    document.write("Underweight");
else if (bmi < 25.0)
    document.write("Normal");
else if (bmi < 30.0)
    document.write("Overweight");
else
    document.write("Obese");
