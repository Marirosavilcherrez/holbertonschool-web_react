/* dashboard_main.js */
/* Manipulation DOM */
import $ from "jquery";
import debounce from "lodash/debounce";

$(document).ready(function () {
    var count = 0;
    // Create and append three different paragraphs to the page body
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').html('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    $('button').click(debounce(function updateCounter(){
        count++;
      $('#count').text(`${count} clicks on the button`);
    }, 500)); 
});