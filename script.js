// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var row1 = 9;
var row2 = 10;
var row3 = 11;
var row4 = 12;
var row5 = 13;
var row6 = 14;
var row7 = 15;
var row8 = 16;
var row9 = 17;
var row10 = 18;
var class1 = document.getElementById('hour-9');
var class2 = document.getElementById('hour-10');
var class3 = document.getElementById('hour-11');
var class4 = document.getElementById('hour-12');
var class5 = document.getElementById('hour-13');
var class6 = document.getElementById('hour-14');
var class7 = document.getElementById('hour-15');
var class8 = document.getElementById('hour-16');
var class9 = document.getElementById('hour-17');
var class10 = document.getElementById('hour-18');
var button1 = document.getElementById('buttonHour9')
var button2 = document.getElementById('buttonHour10')
var button3 = document.getElementById('buttonHour11')
var button4 = document.getElementById('buttonHour12')
var button5 = document.getElementById('buttonHour13')
var button6 = document.getElementById('buttonHour14')
var button7 = document.getElementById('buttonHour15')
var button8 = document.getElementById('buttonHour16')
var button9 = document.getElementById('buttonHour17')
var button10 = document.getElementById('buttonHour18')
var textArea1 = document.getElementById('textArea9');
var textArea2 = document.getElementById('textArea10');
var textArea3 = document.getElementById('textArea11');
var textArea4 = document.getElementById('textArea12');
var textArea5 = document.getElementById('textArea13');
var textArea6 = document.getElementById('textArea14');
var textArea7 = document.getElementById('textArea15');
var textArea8 = document.getElementById('textArea16');
var textArea9 = document.getElementById('textArea17');
var textArea10 = document.getElementById('textArea18');
var dateText = document.getElementById('currentDay')
var date = dayjs().day();


if (date = 0){
  endDate = "Sunday";
} else if (date = 1) {
  endDate = "Monday";
} else if (date = 2) {
  endDate = "Tuesday";
} else if (date = 3) {
  endDate = "Wednesday";
} else if (date = 4) {
  endDate = "Thursday";
} else if (date = 5) {
  endDate = "Friday";
} else if (date = 6) {
  endDate = "Saturday";
}
dateText.textContent = endDate;







var hour = dayjs().hour();
console.log(hour);
//change row 1 color based on time
if (row1 === hour) {
  class1.classList.add('present');
} else if (row1 > hour) {
  class1.classList.add('future');
} else if (row1 < hour) {
  class1.classList.add('past');
}

if (row2 === hour) {
  class2.classList.add('present');
} else if (row2 > hour) {
  class2.classList.add('future');
} else if (row2 < hour) {
  class2.classList.add('past');
}

if (row3 === hour) {
  class3.classList.add('present');
} else if (row3 > hour) {
  class3.classList.add('future');
} else if (row3 < hour) {
  class3.classList.add('past');
}
if (row4 === hour) {
  class4.classList.add('present');
} else if (row4 > hour) {
  class4.classList.add('future');
} else if (row4 < hour) {
  class4.classList.add('past');
}
if (row5 === hour) {
  class5.classList.add('present');
} else if (row5 > hour) {
  class5.classList.add('future');
} else if (row5 < hour) {
  class5.classList.add('past');
}

if (row6 === hour) {
  class6.classList.add('present');
} else if (row6 > hour) {
  class6.classList.add('future');
} else if (row6 < hour) {
  class6.classList.add('past');
}

if (row7 === hour) {
  class7.classList.add('present');
} else if (row7 > hour) {
  class7.classList.add('future');
} else if (row7 < hour) {
  class7.classList.add('past');
}
if (row8 === hour) {
  class8.classList.add('present');
} else if (row8 > hour) {
  class8.classList.add('future');
} else if (row8 < hour) {
  class8.classList.add('past');
}
if (row9 === hour) {
  class9.classList.add('present');
} else if (row9 > hour) {
  class9.classList.add('future');
} else if (row9 < hour) {
  class9.classList.add('past');
}
if (row10 === hour) {
  class10.classList.add('present');
} else if (row10 > hour) {
  class10.classList.add('future');
} else if (row10 < hour) {
  class10.classList.add('past');
}


//Displays Saved Data.
displaySavedData();
function displaySavedData() {
  localArea1 = localStorage.getItem('localArea1');
  localArea2 = localStorage.getItem('localArea2');
  localArea3 = localStorage.getItem('localArea3');
  localArea4 = localStorage.getItem('localArea4');
  localArea5 = localStorage.getItem('localArea5');
  localArea6 = localStorage.getItem('localArea6');
  localArea7 = localStorage.getItem('localArea7');
  localArea8 = localStorage.getItem('localArea8');
  localArea9 = localStorage.getItem('localArea9');
  localArea10 = localStorage.getItem('localArea10');
  textArea1.textContent = localArea1;
  textArea2.textContent = localArea2;
  textArea3.textContent = localArea3;
  textArea4.textContent = localArea4;
  textArea5.textContent = localArea5;
  textArea6.textContent = localArea6;
  textArea7.textContent = localArea7;
  textArea8.textContent = localArea8;
  textArea9.textContent = localArea9;
  textArea10.textContent = localArea10;
}
//Adds events to buttons
button1.addEventListener('click', saveLocalData1);
function saveLocalData1() {
  localStorage.setItem("localArea1", textArea1.value);
}

button2.addEventListener('click', saveLocalData2);
function saveLocalData2() {
  localStorage.setItem("localArea2", textArea2.value);
}

button3.addEventListener('click', saveLocalData3);
function saveLocalData3() {
  localStorage.setItem("localArea3", textArea3.value);
}

button4.addEventListener('click', saveLocalData4);
function saveLocalData4() {
  localStorage.setItem("localArea4", textArea4.value);
}

button5.addEventListener('click', saveLocalData5);
function saveLocalData5() {
  localStorage.setItem("localArea5", textArea5.value);
}

button6.addEventListener('click', saveLocalData6);
function saveLocalData6() {
  localStorage.setItem("localArea6", textArea6.value);
}

button7.addEventListener('click', saveLocalData7);
function saveLocalData7() {
  localStorage.setItem("localArea7", textArea7.value);
}

button8.addEventListener('click', saveLocalData8);
function saveLocalData8() {
  localStorage.setItem("localArea8", textArea8.value);
}

button9.addEventListener('click', saveLocalData9);
function saveLocalData9() {
  localStorage.setItem("localArea9", textArea9.value);
}

button10.addEventListener('click', saveLocalData10);
function saveLocalData10() {
  localStorage.setItem("localArea10", textAreaTen.value);
}

$(function () {
    
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    // Done!
    
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    // Done!

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    
    // TODO: Add code to display the current date in the header of the page.
  });

  //something added
  