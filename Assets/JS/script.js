/* <div class="row align-items-center time-row">
<div class="col-2 d-flex justify-content-center time-col-time">9am</div>
<div class="col-8 time-col-textarea">
  <textarea name="" id="" cols="30" rows="2"></textarea>
</div>
<div class="col-2">
  <button type="submit" class="btn btn-primary">Save</button>
</div>
</div> */

function createTimeBlock(time, content =""){

    const timeRow = $('<div class="row align-items-center time-row">');

    const colTime = $('<div class="col-2 d-flex justify-content-center time-col-time">').text(time + ":00")

    const colTextArea = $('<div class="col-8 time-col-textarea">');
    const textArea = $(' <textarea cols="30" rows="2">').val(content)


    colTextArea.append(textArea);

    const colButton = $('<div class="col-2">')
    const button = $('<button type="submit" class="btn btn-primary">').text("Save")
    colButton.append(button);

    return timeRow.append(colTime, colTextArea, colButton);
}

// Function for User to be able to see current date and time
$(function(){
    const currentTime = $('#currentTime');
    const container = $(".container")
    function startTimer(){
        setInterval(function(){
            currentTime.text(moment().format('MMM, Do, YYYY HH:mm:ss'));
        }, 1000);
    }
    startTimer();
    
    
    for (let index = 9; index < 18; index++) {

        const previousNotes = "";
        const timeBlock = createTimeBlock(index, previousNotes);
    
        container.append(timeBlock);
        
    }
})

// When user lands on this app
    // should see 9am-5pm blocks with colour blocks (past, present and future)
    // with all the previous notes

// When user click on submit button
    // should get the note written on the target timeblock
    // save the note to local storage (based on the time)


// scenarios
    // can the user edit past timeblocks
    // can the user edit current timeblock