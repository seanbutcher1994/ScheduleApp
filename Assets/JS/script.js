
var time = moment();
var currentTime = $('#currentTime');
var displayContainer = $('.container');


 // create element for a timeblock (input element)

 function dispayTime(){
    var rightNow = moment().format('[Today is] dddd, MMM Do, YYYY');
    currentTime.text(rightNow);
    
     // create 9 of said element between 9&5
    for (let i = 9; i < 18; i++) {
        var timeRow = $('<div class="row align-items-center time-row">');
        var colTime = $('<div class="col-2 d-flex justify-content-center time-col-time">').text(i + ':00');
        var colTextArea = $('<div class="col-8 time-col-textarea">');
        var textArea = $(`<textarea cols="80" rows="2" name="" class="text col-12" data-time="${i}:00" cols="30" rows="2">`);
        var colSaveBtn = $('<div class=" col-2 time-col-button ">');
        var saveBtn = $('<button type="submit" class="submitBtn saveBtn btn btn-primary">').text('Save');

        displayContainer.append(
            timeRow.append(
                colTime,
                colTextArea.append(textArea),
                colSaveBtn.append(saveBtn),
            ),
            
            
            );
            
        var now = Number(time.format("H"));
        console.log(now);
        var timeBlock = i;
        console.log(timeBlock);
        // define variable for what past/present/future is
        // if time is before the future
        isFuture = (now < timeBlock);
        isPast = (now > timeBlock);
        isPresent = (now == timeBlock);
            // logic below applys classes based on the above variable definitions
            if(isPast){
                textArea.addClass("past");
            }
           
            if(isFuture){
                textArea.addClass("future");
            } 
            
            if(isPresent){
                textArea.addClass("present");
            }

            
        
    }
    console.log(time);
 
    
}

dispayTime();

let contents = [];
function saveInput(event){
    // console.log(event.target.parentNode.parentNode.children[0].textContent);
    event.preventDefault();
    const savedData = JSON.parse(localStorage.getItem("myContent"));

    let content = {
        id: event.target.parentNode.parentNode.children[0].textContent,
        input: event.target.parentNode.parentNode.children[1].children[0].value
    }

    if (savedData) {
        for (let i=0; i<savedData.length; i++) {
            if (savedData[i].id === content.id) {
                savedData[i].input = content.input;
                localStorage.setItem('myContent', JSON.stringify(savedData));
                return;
            }
        }
        savedData.push(content);
        localStorage.setItem('myContent', JSON.stringify(savedData));
    } else {
        contents.push(content);
        localStorage.setItem('myContent', JSON.stringify(contents));
    }
}

const submitButtons = document.querySelectorAll('.submitBtn');

submitButtons.forEach((button) => {
    button.addEventListener("click", saveInput);
})

const displaySavedItems = () => {
    // get the local storage object
    const data = JSON.parse(localStorage.getItem("myContent"));

    const inputBoxes = document.querySelectorAll("[data-time]");
    for (let i=0; i<data.length; i++) {
        for (let j=0; j<inputBoxes.length; j++) {
           if (data[i].id === inputBoxes[j].getAttribute("data-time")) {
            inputBoxes[j].value = data[i].input;
           } 
        }
    }
}


displaySavedItems();