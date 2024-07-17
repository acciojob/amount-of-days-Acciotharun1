function daysOfAYear(year) {
  // Check if the year is a leap year
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
  // Return 366 days for leap years, otherwise 365 days
  return isLeapYear ? 366 : 365;
}

// Examples
console.log(daysOfAYear(2022)); // Output: 365
console.log(daysOfAYear(2024)); // Output: 366
