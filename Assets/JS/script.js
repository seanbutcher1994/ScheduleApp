/* <div class="row align-items-center time-row">
<div class="col-2 d-flex justify-content-center time-col-time">9am</div>
<div class="col-8 time-col-textarea">
  <textarea name="" id="" cols="30" rows="2"></textarea>
</div>
<div class="col-2">
  <button type="submit" class="btn btn-primary">Save</button>
</div>
</div> */

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