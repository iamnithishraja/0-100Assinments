// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function formatTime(hours, mins, seconds) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMins = mins < 10 ? `0${mins}` : mins;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedHours}:${formattedMins}:${formattedSeconds} ${ampm}`;
}

function printTime() {
    const today = new Date();
    const hours = today.getHours();
    const mins = today.getMinutes();
    const seconds = today.getSeconds();
    // without using formatt
    const formattedTime = formatTime(hours, mins, seconds);
    console.log(formattedTime);
    setTimeout(() => printTime(), 1000);
}


printTime();

