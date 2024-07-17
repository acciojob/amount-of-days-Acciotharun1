//your JS code here. If required.
function daysOfAYear(year) {
  // Check if the year is a leap year
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
  // Return 366 days for leap years, otherwise 365 days
  return isLeapYear ? 366 : 365;
}

// Prompt the user for input
let year = prompt("Enter a year:");

// Convert the input to a number (if necessary)
year = parseInt(year);

// Display the result
if (!isNaN(year)) {
  let days = daysOfAYear(year);
  alert(`Number of days in ${year}: ${days}`);
} else {
  alert("Invalid input. Please enter a valid year.");
}
