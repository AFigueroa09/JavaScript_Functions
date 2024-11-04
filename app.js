console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(limit) {
    let count = 0;
    if (limit > 0) {
        for(var i = 1; i <= limit; i++) {
            if (i % 2 != 0) {
                count++;
            }
        }
    } else {
        for (var i = -1; i >= limit; i--) {
            if (i % 2 != 0) {
                count++;
            }
        }
    }
    console.log("Ammount of ODDS: ", count);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge (userName, age) {
    if (!userName || !age || userName == "") {
        console.log("Method paramaters are missing, please try again.");
        return;
    }
    aboveSixteen = "Congrats " + userName + ", you can drive!";
    belowSixteen = "Sorry " + userName + ", but you need to wait until you're 16.";

    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
    var result = "";

    if (x == 0) {
        console.log("(" + x + ", " + y + ") is on the x axis");
    } else if (y == 0) {
        console.log("(" + x + ", " + y + ") is on the y axis");
    } else if (x > 0 && y > 0) {
        console.log("(" + x + ", " + y + ")  is in Quadrant 1");
    } else if (x < 0 && y > 0) {
        console.log("(" + x + ", " + y + ")  is in Quadrant 2");
    } else if (x < 0 && y < 0) {
        console.log("(" + x + ", " + y + ")  is in Quadrant 3");
    }  else if (x > 0 && y < 0) {
        console.log("(" + x + ", " + y + ")  is in Quadrant 4");
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isValidTriangle(a,b,c) {
    var isValid = true;
    if (a + b < c || a + c < b || b + c < a) {
        isValid = false;
    }
    return isValid;
};

function getTriangleType(a,b,c) {
    if (isValidTriangle(a,b,c)) {
        if (a == b && b == c) {
            console.log("equilateral");
        } else if (a == b || b == c || a == c) {
            console.log("isosceles");
        } else {
            console.log("scalene");
        }
    } else {
        console.log("Triangle is not valid");
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");


// TESTS
printOdds(100);
printOdds(50);
printOdds(-50);

checkAge("Tony");
checkAge(null, 23);
checkAge("", 23);
checkAge("Tony", 14);
checkAge("Kim", 23);

whichQuadrant(0,5);
whichQuadrant(5,0);
whichQuadrant(1,5);
whichQuadrant(-1,5);
whichQuadrant(-1,-5);
whichQuadrant(1,-5);

getTriangleType(3,3,3);
getTriangleType(3,3,2);
getTriangleType(2,3,4);

getTriangleType(1,3,5);
getTriangleType(0,3,2);
getTriangleType(3,1,5);
getTriangleType(3,5,1);
