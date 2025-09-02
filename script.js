// Practising JavaScript basics

console.log("JavaScript file loaded!");

// Variables and conditionals and stuff

let userName = "";
let userAge = 0;

function checkUserInfo() {
    console.log("Checking user info...");
    
    // Get the values from the inputs
    userName = document.getElementById("userName").value;
    userAge = parseInt(document.getElementById("userAge").value);
    
    console.log("Name:", userName);
    console.log("Age:", userAge);
    
    // Check if they actually entered stuff
    if (userName === "" || userName.trim() === "") {
        showResult("userResult", "Hey, you need to enter your name!", true);
        return;
    }
    
    if (isNaN(userAge) || userAge <= 0) {
        showResult("userResult", "Please enter a real age!", true);
        return;
    }
    
    // Figure out what category they are
    let category;
    let message;
    
    if (userAge < 13) {
        category = "kid";
        message = "Hi " + userName + "! You're just a " + category + ". Keep having fun! 🎮";
    } else if (userAge < 20) {
        category = "teenager";
        message = "What's up " + userName + "! You're a " + category + ". Perfect age to learn coding! 💻";
    } else if (userAge < 65) {
        category = "adult";
        message = "Hello " + userName + "! You're an " + category + ". Great time to master programming! 🚀";
    } else {
        category = "senior";
        message = "Nice to meet you " + userName + "! You're a wise " + category + ". Never too late to learn! 🌟";
    }
    
    console.log("Category:", category);
    showResult("userResult", message, false);
}

// Helper function to show results
function showResult(elementId, message, isError) {
    let resultDiv = document.getElementById(elementId);
    resultDiv.innerHTML = message;
    resultDiv.style.display = "block";
    
    if (isError) {
        resultDiv.className = "result-box error show";
    } else {
        resultDiv.className = "result-box show";
    }
}

// Making some reusable functions

// Function 1: Calculator function
function calculateStuff(number1, number2, operation) {
    console.log("Doing math:", number1, operation, number2);
    
    let answer;
    
    if (operation === "add") {
        answer = number1 + number2;
    } else if (operation === "subtract") {
        answer = number1 - number2;
    } else if (operation === "multiply") {
        answer = number1 * number2;
    } else if (operation === "divide") {
        if (number2 === 0) {
            return "Can't divide by zero!";
        }
        answer = number1 / number2;
    }
    
    console.log("Answer:", answer);
    return answer;
}

function doMath(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        showResult("calcResult", "You need to enter numbers!", true);
        return;
    }
    
    let result = calculateStuff(num1, num2, operation);
    
    let operationText;
    if (operation === "add") {
        operationText = "+";
    } else if (operation === "subtract") {
        operationText = "-";
    } else if (operation === "multiply") {
        operationText = "×";
    } else if (operation === "divide") {
        operationText = "÷";
    }
    
    let resultText = num1 + " " + operationText + " " + num2 + " = " + result;
    showResult("calcResult", resultText, false);
}

// Function 2: Text manipulation function
function modifyText(text, type) {
    console.log("Modifying text:", text, "type:", type);
    
    let result;
    
    if (type === "upper") {
        result = text.toUpperCase();
    } else if (type === "lower") {
        result = text.toLowerCase();
    } else if (type === "title") {
        // This was tricky to figure out!
        result = text.split(" ").map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(" ");
    } else if (type === "backwards") {
        result = text.split("").reverse().join("");
    }
    
    console.log("Modified text:", result);
    return result;
}

function changeText(type) {
    let text = document.getElementById("textInput").value;
    
    if (text === "") {
        showResult("textResult", "Type something first!", true);
        return;
    }
    
    let modifiedText = modifyText(text, type);
    showResult("textResult", "Changed text: " + modifiedText, false);
}

// Different kinds of loops

function makePattern() {
    console.log("Making a pattern...");
    
    let num = parseInt(document.getElementById("patternNum").value);
    
    if (isNaN(num) || num < 1 || num > 10) {
        showResult("patternResult", "Pick a number between 1 and 10!", true);
        return;
    }
    
    let pattern = "Times table for " + num + ":<br>";
    
    // For loop to make times table
    console.log("Making times table for", num);
    for (let i = 1; i <= 5; i++) {
        let answer = num * i;
        pattern += num + " × " + i + " = " + answer + "<br>";
        console.log(num, "×", i, "=", answer);
    }
    
    pattern += "<br>Countdown from " + num + ":<br>";
    
    // Another for loop for countdown
    console.log("Making countdown from", num);
    for (let count = num; count > 0; count--) {
        pattern += count + "... ";
        console.log("Count:", count);
    }
    pattern += "Done! 🎉";
    
    showResult("patternResult", pattern, false);
}

// Array for my programming languages
let myLanguages = ["HTML", "CSS", "JavaScript", "Python"];

function showMyLanguages() {
    console.log("Showing my languages...");
    console.log("Languages array:", myLanguages);
    
    let languageText = "Languages I'm learning:<br>";
    
    // forEach loop to go through the array
    myLanguages.forEach(function(language, index) {
        languageText += (index + 1) + ". " + language + "<br>";
        console.log("Language", index + 1 + ":", language);
    });
    
    languageText += "<br>Total: " + myLanguages.length + " languages";
    
    showResult("languagesResult", languageText, false);
}

function addNewLanguage() {
    console.log("Adding new language...");
    
    let newLang = prompt("What programming language do you want to add?");
    
    // While loop to make sure they entered something
    while (newLang !== null && (newLang === "" || newLang.trim() === "")) {
        console.log("Empty input, asking again...");
        newLang = prompt("Please enter a language name:");
    }
    
    if (newLang === null) {
        console.log("User cancelled");
        return;
    }
    
    // Check if it's already in the list
    let alreadyExists = false;
    for (let i = 0; i < myLanguages.length; i++) {
        if (myLanguages[i].toLowerCase() === newLang.toLowerCase()) {
            alreadyExists = true;
            break;
        }
    }
    
    if (alreadyExists) {
        showResult("languagesResult", newLang + " is already in your list!", true);
        console.log("Language already exists:", newLang);
    } else {
        myLanguages.push(newLang);
        showResult("languagesResult", "Added " + newLang + "! Click 'Show My List' to see it.", false);
        console.log("Added new language:", newLang);
        console.log("Updated array:", myLanguages);
    }
}

// Making the page interactive!

function switchColor(color) {
    console.log("Switching color to:", color);
    
    let colorBox = document.getElementById("colorBox");
    
    if (color === "random") {
        // Pick a random color
        let colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dda0dd"];
        color = colors[Math.floor(Math.random() * colors.length)];
        console.log("Random color picked:", color);
    }
    
    colorBox.style.backgroundColor = color;
    
    // Change text color based on background
    if (color === "red" || color === "blue" || color === "purple") {
        colorBox.style.color = "white";
    } else {
        colorBox.style.color = "black";
    }
    
    colorBox.innerHTML = "<p>Now I'm " + color + "! 🎨</p>";
    
    console.log("Color changed to:", color);
}

function addItem() {
    console.log("Adding item to list...");
    
    let input = document.getElementById("listItem");
    let list = document.getElementById("myList");
    
    let itemText = input.value.trim();
    
    if (itemText === "") {
        alert("You need to type something!");
        return;
    }
    
    // Create a new list item
    let newItem = document.createElement("li");
    newItem.textContent = itemText;
    
    // Add click event to remove the item
    newItem.addEventListener("click", function() {
        console.log("Removing item:", itemText);
        newItem.remove();
    });
    
    newItem.style.cursor = "pointer";
    newItem.title = "Click to remove";
    
    list.appendChild(newItem);
    
    input.value = "";
    
    console.log("Added item:", itemText);
    console.log("Total items:", list.children.length);
}

function clearAllItems() {
    console.log("Clearing all items...");
    
    let list = document.getElementById("myList");
    let itemCount = list.children.length;
    
    list.innerHTML = "";
    
    console.log("Cleared", itemCount, "items");
}

function toggleStuff() {
    console.log("Toggling hidden content...");
    
    let hiddenDiv = document.getElementById("hiddenStuff");
    
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
        hiddenDiv.style.display = "block";
        console.log("Content is now visible");
    } else {
        hiddenDiv.style.display = "none";
        console.log("Content is now hidden");
    }
}

// Set up some event listeners when the page loads
document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded, setting up event listeners...");
    
    // Let people press Enter to submit stuff
    document.getElementById("userName").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            checkUserInfo();
        }
    });
    
    document.getElementById("userAge").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            checkUserInfo();
        }
    });
    
    document.getElementById("listItem").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addItem();
        }
    });
    
    console.log("All set up! Ready to go!");
    
    // Log what this assignment covers
    console.log("=== Assignment 5 Features ===");
    console.log("✓ Variables and conditionals");
    console.log("✓ Custom functions");
    console.log("✓ For loops and while loops");
    console.log("✓ DOM manipulation");
    console.log("✓ Event handling");
    console.log("✓ Array manipulation");
    
    let now = new Date();
    console.log("Loaded on:", now.toLocaleString());
});
