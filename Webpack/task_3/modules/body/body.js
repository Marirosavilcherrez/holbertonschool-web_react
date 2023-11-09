/* body.js */

import $ from "jquery";
import _ from 'lodash';

$(document).ready(function () {
    var count = 0;
    // Create and append three different paragraphs to the page body
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');

    $('button').click(_.debounce(function updateCounter(){
        count++;
      $('#count').text(`${count} clicks on the button`);
    }, 500)); 
});