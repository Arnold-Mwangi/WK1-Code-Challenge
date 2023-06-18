const nhifDeductions = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: 109999, deduction: 1700 },
    { min: 110000, max: 119999, deduction: 1800 },
    { min: 120000, max: 129999, deduction: 1900 },
    { min: 130000, max: 139999, deduction: 2000 },
    { min: 140000, max: 149999, deduction: 2100 },
    { min: 150000, max: 159999, deduction: 2200 },
    { min: 160000, max: 169999, deduction: 2300 },
    { min: 170000, max: 179999, deduction: 2400 },
    { min: 180000, max: 189999, deduction: 2500 },
    { min: 190000, max: 199999, deduction: 2600 },
    { min: 200000, max: Infinity, deduction: 2700 }
  ];
  const taxRates = [
    { min: 0, max: 24000, rate: 10 },
    { min: 24001, max: 40667, rate: 15 },
    { min: 40668, max: 57333, rate: 20 },
    { min: 57334, max: 74000, rate: 25 },
    { min: 74001, max: Infinity, rate: 30 }
  ];
  
  const nssfDeduction = 200;
  const basicSalary = parseInt(prompt("please Enter your Basic Salary"));
  const benefits = parseInt(prompt("Please Enter your total benefits"));

  // calc user netSalary
  function calcNetSalary(basicSalary, benefits){
    //calc gross salary
    const grossSalary = basicSalary + benefits;
    //calculate taxable income
    const taxableIncome = grossSalary - nssfDeduction;
    //calculate tax
    const tax = calculateTax(taxableIncome);
    // calculate nhif Deductions
    const nhifDeduction = calcNhifDeduction(grossSalary);
    // calc net salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    return{
        grossSalary,
        taxableIncome,
        tax,
        nhifDeduction,
        nssfDeduction,
        netSalary
    };
  }

  // calculate tax from taxable income
  function calculateTax(taxableIncome){
    let tax = 0;
    for(let rate of taxRates){
        if(taxableIncome >= rate.min && taxableIncome <= rate.max){
            tax +=(taxableIncome - rate.min )*(rate.rate/ 100);
            break;
        }else if(taxableIncome > rate.max){
            tax +=(rate.max-rate.min ) * (rate.rate /100);
            
        }
    }
    return tax;
  }


//calculate nhif deductions from grosssalary
function calcNhifDeduction(grossSalary){
    let nhifDeduction = 0;
    for(let deduction of nhifDeductions){
        if(grossSalary > deduction.max){
            nhifDeduction += deduction.deduction;
        }else if(grossSalary >= deduction.min){
            nhifDeduction += deduction.deduction;
            break;
        }
    }
    return nhifDeduction;
}

const summary = calcNetSalary(basicSalary, benefits);

window.alert(`Your gross salary is : ${summary.grossSalary}`)

window.alert(`You wre taxed ${summary.tax}`)

window.alert(`
NHIF Deductions summed to: ${summary.nhifDeduction}\n
`)
window.alert(`NSSF Deduction summed to : ${summary.nssfDeduction}`)
window.alert(`Your net salary is ${summary.netSalary}`)