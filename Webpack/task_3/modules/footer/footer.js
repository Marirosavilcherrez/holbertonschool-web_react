/* footer.js */

import $ from "jquery";
import _ from 'lodash';

$(document).ready(function () {

  // Create and append the p text
  const paragraph = $('<p>').text('Dashboard data for the students');
  $('.footer').append(paragraph);
});
