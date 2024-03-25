
// Constants
const KRA_TAX_RATES = [ 
    { Boundary: 0, rate: 0 },          
    { Boundary: 24000, rate: 0.1 },   
    { Boundary: 32333, rate: 0.25 },
    { Boundary: 500000, rate: 0.3 },
    { Boundary: 800000, rate: 0.325 },
    { Boundary: Infinity, rate: 0.35 }
  ];
  
  const NHIF_RATES = [ 
    { Boundary: 0, rate: 0 },
    { Boundary: 5999, rate: 150 }, 
    { Boundary: 7999, rate: 300 }, 
    { Boundary: 11999, rate: 400 },
    { Boundary: 14999, rate: 500 },
    { Boundary: 19999, rate: 600 },
    { Boundary: 24999, rate: 750 },
    { Boundary: 29999, rate: 850 },
    { Boundary: 34999, rate: 900 },
    { Boundary: 39999, rate: 950 },
    { Boundary: 44999, rate: 1000 },
    { Boundary: 49999, rate: 1100 },
    { Boundary: 59999, rate: 1200 },
    { Boundary: 69999, rate: 1300 },
    { Boundary: 79999, rate: 1400 },
    { Boundary: 89999, rate: 1500 },
    { Boundary: 99999, rate: 1600 },
    { Boundary: Infinity, rate: 1700 }
  ];
  
  const NSSF_RATE = 0.06; 
  
  // calculating Gross Tax
  function calculateTax(basicSalary, benefits) {
    let taxableSalary = basicSalary + benefits;
    let tax = 0; 
  
    for (let i = 0; i < KRA_TAX_RATES.length; i++) { 
      const rate = KRA_TAX_RATES[i];                    
  
      if (taxableSalary <= rate.Boundary) {
        break;
      }
  
      tax += (rate.Boundary - (i > 0 ? KRA_TAX_RATES[i - 1].Boundary : 0)) * rate.rate;
    }
  
    tax += (taxableSalary - tax) * KRA_TAX_RATES[KRA_TAX_RATES.length - 1].rate;
  
    return tax;
  }
  
  // calculating NHIF deductions
  function calculateNHIFDeductions(basicSalary) {
    let rate = 0; 
  
    for (let i = 0; i < NHIF_RATES.length; i++) {   
      const nhifRate = NHIF_RATES[i];
  
      if (basicSalary <= nhifRate.Boundary) {
        rate = nhifRate.rate;
        break;
      }
    }
  
    return rate;
  }
  
  // calculating NSSF deductions
  function calculateNSSFDeductions(basicSalary) {  
    return basicSalary * NSSF_RATE;
  }
  
  // calculating Gross Salary => Gross Salary = Basic Salary + Allowances(Benefits)
  function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
  }
  
  // THIS IS THE MAIN FUNCTION OF THE PROGRAM between.
  // calculating Net Salary => NS = GS - (Rate + Tax + NSSF)
  function calculateNetSalary() {
    const prompt = require("prompt-sync")({sigint:true});
    const basicSalaryString = prompt("Enter your basic salary:");  
    const basicSalary = parseFloat(basicSalaryString);
    const benefitsString = prompt("Enter your total Allowances:"); 
    const benefits = parseFloat(benefitsString);

    if (isNaN(basicSalary) || isNaN(benefits)) {
      console.log("Invalid input. Please enter a number."); 
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
  