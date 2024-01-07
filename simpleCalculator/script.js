var global_value = 0, global_operator, current_value = 0, final_result = 0;

function listenUserEvents(){

    console.log("event triggered");

    let buttonElements = document.getElementById("main-division").getElementsByTagName("button");

    let buttonCount = buttonElements.length;

    for(let i = 0; i < buttonCount; i++){

            console.log(buttonElements[i].textContent);

            buttonElements[i].addEventListener("click", () => {
                console.log(`user clicked ${buttonElements[i].textContent}`);
                addElementToHtml(buttonElements[i].textContent);
            });

    }
}

function addElementToHtml(data){

    switch(data){

        case "CLR":
            document.getElementById("current-output").textContent = document.getElementById("current-output").textContent.toString().slice(0, -1);
            break

        case "AC":
            clearAll();
            break

        case "=":
            calculateValue(global_operator);
            break;

        
        case "+":
            global_operator = "+"
            StoreValue(document.getElementById("current-output").textContent);
            document.getElementById("current-output").textContent = null;
            break;


        case "-":
            global_operator = "-";
            StoreValue(document.getElementById("current-output").textContent);
            document.getElementById("current-output").textContent = null;
            break;
            

        case "*":
            global_operator = "*";
            StoreValue(document.getElementById("current-output").textContent);
            document.getElementById("current-output").textContent = null;
            break;

        case "/":
            global_operator = "/"
            StoreValue(document.getElementById("current-output").textContent);
            document.getElementById("current-output").textContent = null;
            break;

        case ".": 
           if (document.getElementById("current-output").textContent.includes(".")) return; 
            StoreValue(document.getElementById("current-output").textContent);

        default:
            document.getElementById("current-output").textContent += data;
            break;
        
    }
}


function StoreValue(value){
    console.log("storeValue", value);
    value != "" ? global_value = value : 0
    console.log("---------", global_value);
}


function clearAll(){
    document.getElementById("current-output").textContent = null;
    document.getElementById("main-output").textContent = null;
    global_operator = null;
    global_result = 0;
    global_value = 0;
    current_value = 0;
    final_result = 0;
}

function calculateValue(opperator){
    current_value = document.getElementById("current-output").textContent
    console.log(`current_value - ${current_value}, global_value - ${global_value}`);
    switch (opperator){

        case "+":
            updateValue(final_result == 0 ? (parseFloat(global_value) + parseFloat(current_value)) : final_result + (parseFloat(current_value)));
            document.getElementById("current-output").textContent = null;
            break;

        case "-":
            updateValue(final_result == 0 ? (parseFloat(global_value) - parseFloat(current_value)) : final_result - (parseFloat(current_value)));
            document.getElementById("current-output").textContent = null;
            break;

        case "*":
            updateValue(final_result == 0 ? (parseFloat(global_value) * parseFloat(current_value)) : final_result * (parseFloat(current_value)));
            document.getElementById("current-output").textContent = null;
            break;

        case "/":
            updateValue(final_result == 0 ? (parseFloat(global_value) / parseFloat(current_value)) : final_result / (parseFloat(current_value)));
            document.getElementById("current-output").textContent = null;
            break;

    }
    global_value = 0;
}

function updateValue(value){
    console.log(isNaN(value));
    document.getElementById("main-output").textContent = (isNaN(value)) ? 0 : value
    final_result = value;
}

listenUserEvents();