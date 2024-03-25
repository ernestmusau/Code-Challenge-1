# Code-Challenge-1

#### Date, 2024/03/24

### By Ernest Fonseca Musau 

# Description
Three distinct challenges are included in the series, all geared toward assessing the material presented this week. These are the challenges:
## Challenge 1:
### Question
Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

### Solution
Two prompt routines are used by this program: one asks the user to enter the student's name, and the other requests the student's mark. The computer checks to see if the markers input ranges from 0 to 100 before starting the grading process; if it does, the procedure moves forward. Should the user enter a mark that is invalid, an output indicating such will be displayed. At last, it prints the student's name, mark, and grade after computing their grade using the grading scheme specified in the question.
Simply invoke the main function to begin using the software. The user will be prompted to enter the student's name and grades, and the grade, marks, and student name will be output to the console.

## Challenge 2:
### Question
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

### Solution
'Speed' is the only argument that this program's function takes. Conditions are used to test the various car speeds. There is a 70 km/h speed restriction. "Ok" is printed when the speed is less than or equal to the speed limit. The application will figure out how many demerit points are earned for every 5 km/s over the speed limit and print that figure after the speed restriction is exceeded. The application writes "License cancelled" if the demerit points surpass 12, which is equivalent to a speed of at least 135 km/s.
Simply use the calculateDemeritPoints method to begin using the application. This function computes demerit points and exceeding speed and outputs the number of points based on speed, excess speed, and penalty based on point total to the console.

## Challenge 3:
### Question
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

### Solution
Using an individual's base pay and benefits—basically, allowances—this tool determines their net compensation. The program's primary function is to calculate gross tax, NHIF and NSSF deductions, gross salary, and net salary. These functions are divided into multiple parts. The program's initial constants are taken from the URLs provided in the question. To traverse through the arrays and obtain the right values required for calculation, loops are employed. 
Call the calculateNetSalary function to begin using the application. It will ask the user to enter their base pay and benefits before displaying the net salary on the console.


## Installation:
- Create a repository in your own Github account
- Git clone to be able to download the documents in the github

## Expected:
- Javascript used to write the code for this challenge
- Solution to be pushed to the created repository once complete
- The repository link to be submitted for grading
- All the three challenges to be completed
- A README.md file should be present

# Live link
https://github.com/ernestmusau/Code-Challenge-1

## Contact Details
https://github.com/ernestmusau

### License
The content of this site is licensed under the MIT license
Copyright (c) 2024.


