/* header.js */

import $ from "jquery";

console.log('Init header');
// Function to add logo and H1 title to the header
function addHeaderContent() {
  // Append the logo
  const logo = $('<img>').attr('src', '../../assets/holberton-logo.jpg').attr('alt', 'Logo');
  $('.header').append(logo);
  
  // Create and append the H1 title
  const title = $('<h1>').text('Holberton Dashboard');
  $('.header').append(title);
}
