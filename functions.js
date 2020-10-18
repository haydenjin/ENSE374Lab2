function createNew(event) {

    // Getting the text input
    var textInput = document.getElementById("input").value;

    // Making the div element
    var task = document.createElement("div");

    // Making the text input
    var box = document.createElement("div");
    box.className = "input-group mb-3";
    box.id = "newBox";

    // Making the text input
    var casing = document.createElement("div");
    casing.className = "input-group-prepend";

    var casing2 = document.createElement("div");
    casing2.className = "input-group-text";

    // Making the checkbox
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = ("yes");

    // Making the text input
    var text = document.createElement("INPUT");
    text.className = "form-control";
    text.style.width = "auto";
    text.disabled = true;
    text.value = textInput;

    // Appending all the elements
    task.append(box);
    box.append(casing);
    casing.append(casing2);
    casing2.append(checkbox);
    box.append(text);


    var list = document.getElementById("taskBody");
    list.insertBefore(task, list.childNodes[0]);
}

function checkmark(event) {

    var parent = document.getElementsByClassName("input-group-text");
    var checkBox = document.getElementsByClassName("yes");
    var text = document.getElementsByClassName("form-control");

    for(var i = 0; i < parent.length; i++) {
        if(checkBox[i].checked == true) {
            text[i].style = "text-decoration: line-through";
        }
        else if(checkBox[i].checked == false) {
            text[i].style = "text-decoration: none";
        }
    }
}

function removeBox(event) {

    var arrayCheckBoxes = document.getElementsByClassName("yes");
    for (var i = 0; i < arrayCheckBoxes.length; i++) {
        for (var checkbox of arrayCheckBoxes) {
            if(checkbox.checked == true) {
                console.log("Hello");
                checkbox.parentNode.parentNode.parentNode.remove();
                if (checkbox.checked == true) {
                    removeBox()
                }
            }
        }
    }
}

function changeColor(event) {

    document.body.style.backgroundImage = "none";
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

function complete(event) {

    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('thumbs.jpg')";
}
