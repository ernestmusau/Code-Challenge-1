// Constants
const KRA_TAX_RATES = [ 
    { threshold: 0, rate: 0 },          // Each object has a threshold property representing the upper limit of the income bracket, and a 
    { threshold: 24000, rate: 0.1 },    // Rate property representing the tax rates for each income brkt
    { threshold: 32333, rate: 0.25 },
    { threshold: 500000, rate: 0.3 },
    { threshold: 800000, rate: 0.325 },
    { threshold: Infinity, rate: 0.35 }
  ];
  
  const NHIF_RATES = [ // Also an array for the NHIF rates which will account to deductions during the calculation
    { threshold: 0, rate: 0 },
    { threshold: 5999, rate: 150 }, // Each object has a threshold property representing the lower limit of the income bracket, and a 
    { threshold: 7999, rate: 300 }, // Rate property representing the NHIF deduction rate for that bracket.
    { threshold: 11999, rate: 400 },
    { threshold: 14999, rate: 500 },
    { threshold: 19999, rate: 600 },
    { threshold: 24999, rate: 750 },
    { threshold: 29999, rate: 850 },
    { threshold: 34999, rate: 900 },
    { threshold: 39999, rate: 950 },
    { threshold: 44999, rate: 1000 },
    { threshold: 49999, rate: 1100 },
    { threshold: 59999, rate: 1200 },
    { threshold: 69999, rate: 1300 },
    { threshold: 79999, rate: 1400 },
    { threshold: 89999, rate: 1500 },
    { threshold: 99999, rate: 1600 },
    { threshold: Infinity, rate: 1700 }
  ];
  
  const NSSF_RATE = 0.06; // A deduction during calculation
  
  // calculate Gross Tax
  function calculateTax(basicSalary, benefits) {
    let taxableSalary = basicSalary + benefits;
    let tax = 0; //This is simply assigning storage space for the tax
  
    for (let i = 0; i < KRA_TAX_RATES.length; i++) { // since an array was used to mean multiple variables exist, a loop is needed to determine in which slab an individual's salary falls
      const rate = KRA_TAX_RATES[i];                       // The loop starts from 0
  
      if (taxableSalary <= rate.threshold) {
        break;
      }
  
      tax += (rate.threshold - (i > 0 ? KRA_TAX_RATES[i - 1].threshold : 0)) * rate.rate;
    }
  
    tax += (taxableSalary - tax) * KRA_TAX_RATES[KRA_TAX_RATES.length - 1].rate;
  
    return tax;
  }
  
  // calculate NHIF deductions
  function calculateNHIFDeductions(basicSalary) {
    let rate = 0; //This is simply assigning storage space for the rate
  
    for (let i = 0; i < NHIF_RATES.length; i++) {    //The loop starts from zero initially
      const nhifRate = NHIF_RATES[i];
  
      if (basicSalary <= nhifRate.threshold) {
        rate = nhifRate.rate;
        break;
      }
    }
  
    return rate;
  }
  
  // calculate NSSF deductions
  function calculateNSSFDeductions(basicSalary) {  // There is zero need for a loop here because the NSSF has only one variable
    return basicSalary * NSSF_RATE;
  }
  
  // calculate Gross Salary => Gross Salary = Basic Salary + Allowances(Benefits)
  function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
  }
  
  // THIS IS THE MAIN FUNCTION OF THE PROGRAM btw
  // calculate Net Salary => NS = GS - (Rate + Tax + NSSF)
  function calculateNetSalary() {
    const prompt = require("prompt-sync")({sigint:true});
    const basicSalaryString = prompt("Enter your basic salary:"); // Propmts the user to enter 
    const basicSalary = parseFloat(basicSalaryString);
    const benefitsString = prompt("Enter your total Allowances:"); // Propmts the user to enter 
    const benefits = parseFloat(benefitsString);

    if (isNaN(basicSalary) || isNaN(benefits)) {
      console.log("Invalid input. Please enter a number."); // Displayed when a something other than a number is input
      return;
    }
  
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const tax = calculateTax(grossSalary, 0);
    const nhifDeductions = calculateNHIFDeductions(basicSalary);
    const nssfDeductions = calculateNSSFDeductions(basicSalary);
  
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
    console.log(`The net salary for a Gross Salary of ${grossSalary} is ${netSalary}`);
  }
  
  // To use the program, call the function:
  calculateNetSalary();
  