
let age1 = 25
let age2 = 10

if (age1 > 18 || age2 > 18) { console.log("age1 est majeur et age2 est majeur") }


else if (age1 > 18 || age2 < 18) { console.log("age1 est majeur et age2 est mineur") }


else if (age1 < 18 || age2 < 18) { console.log("age1 est mineur et age2 est mineur") }


else if (age1 < 18 || age2 > 18) { console.log("age1 est mineur et age2 est majeur") }

else { console.log("veuillez entrer un chiffre") }

