
var time = moment();
var currentTime = $('#currentTime');
var displayContainer = $('.container');



 // create element for a timeblock (input element)
function dispayTime(content=""){
    var rightNow = moment().format('[Today is] dddd, MMM Do, YYYY');
    currentTime.text(rightNow);
    
     // create 9 of said element between 9&5
    for (let i = 9; i < 18; i++) {
        var timeRow = $('<div class="row align-items-center time-row">');
        var colTime = $('<div class="col-2 d-flex justify-content-center time-col-time">').text(i + ':00');
        var colTextArea = $('<div class="col-8 time-col-textarea">');
        var textArea = $('<textarea name="" id="text" cols="30" rows="2">').val(content);
        var colSaveBtn = $('<div class="col-2 time-col-button">');
        var saveBtn = $('<button type="submit" id="submitBtn" class="saveBtn btn btn-primary">').text('Save')

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


// when i press the save button, the text saves to local storage
    // add save button to html
    // activate the save button
    // get text content - let toave =  $('#input1').text 
    // format it - .JSON
    // save it local storage - setLocalStorage
let contents = [];
function saveInput(event){
    event.preventDefault();
    let content = {
        id: Date.now(),
        input: document.getElementById('text').value
    }
    contents.push(content);

    console.log('added', {contents});
    let pre = document.querySelector('#text');
    pre.textContent = JSON.stringify(contents);

    localStorage.setItem('myContent', JSON.stringify(contents));
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('submitBtn').addEventListener('click', saveInput);
})







//TODO:
    
// when I refresh the page, the saved events stay.
    // getLocalStorage

    // when first loading page, we need to check localstorage first. *** 


    dispayTime();