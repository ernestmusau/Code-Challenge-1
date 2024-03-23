// Function to calculate the grade based on mark ranges
function calculateGrade(mark) {
  if (mark > 79) {
    return "A";
  } else if (mark >= 60 && mark <= 79) {
    return "B";
  } else if (mark >= 50 && mark <= 59) {
    return "C";
  } else if (mark >= 40 && mark <= 49) {
    return "D";
  } else {
    return "E";
  }
}

// Main function to prompt for input and display the grade
function main() {
    // Prompt for input
    let marks = parseFloat(prompt("Enter student marks (0-100): "));
    // Check if the input is a valid number and within the range of 0 to 100
    if (isNaN(marks) && marks >= 0 && marks <= 100) {
       // Calculate the grade based on the marks provided
       let grade = calculateGrade(marks);
       // Display the grade calculated
       console.log("Grade", grade);
    } else {
        // Display an error message if input is invalid
        console.log("Marks should be between 0 and 100");
    }
}

// Call the main function to start the program
main()
