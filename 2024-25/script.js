function calculateIncome() {
    const basicPay = parseFloat(document.getElementById('basicPay').value);
    const da = parseFloat(document.getElementById('da').value) / 100;
    const hra = parseFloat(document.getElementById('hra').value) / 100;
    const raa = parseFloat(document.getElementById('raa').value) / 100;
    const mba = parseFloat(document.getElementById('mba').value);
    const meda = parseFloat(document.getElementById('meda').value);
    const ga = parseFloat(document.getElementById('ga').value);
    const sda = parseFloat(document.getElementById('sda').value);

    const monthlyIncome = basicPay * (1 + da + hra + raa) + mba + meda;
    const annualIncome = monthlyIncome * 12;
    const standardDeductionAllowed=sda;
    const taxableIncome=annualIncome-standardDeductionAllowed;
        
    const basicPayScale=basicPay;
    const gradePay=ga;
    const dearness_a=basicPay*da;
    const rural_a=basicPay*raa;
    const house_r=basicPay*hra;
    const mobile_Allowance=mba;
    const medical_Allowance=meda;
    const totalMPay=basicPayScale+dearness_a+rural_a+house_r+mobile_Allowance+medical_Allowance;
   
    
    let annualTax = 0;

    if (taxableIncome > 1000000) {
        annualTax = (taxableIncome - 1000000) * 0.30 + (500000 * 0.20) + (250000 * 0.05);
    } else if (taxableIncome > 500000) {
        annualTax = (taxableIncome - 500000) * 0.20 + (250000 * 0.05);
    } else if (taxableIncome > 250000) {
        annualTax = (taxableIncome - 250000) * 0.05;
    }
    else if(taxableIncome<250000){
        annualTax=(taxableIncome)*0.0;
    }

    const monthlyTax = annualTax / 12;
    const eduCess=annualTax*0.04;
    const netTax=annualTax+eduCess;
    document.getElementById('monthlyIncome').innerText = `Monthly Income: ₹${monthlyIncome.toFixed(2)}`;
    document.getElementById('annualIncome').innerText = `Annual Income: ₹${annualIncome.toFixed(2)}`;
    document.getElementById('monthlyTax').innerText = `Monthly Income Tax: ₹${monthlyTax.toFixed(2)}`;
    document.getElementById('annualTax').innerText = `Annual Income Tax: ₹${annualTax.toFixed(2)}`;
    document.getElementById('eduCess').innerText = `Education Cess: ₹${eduCess.toFixed(2)}`;
    document.getElementById('netTax').innerText = `Net Income Tax: ₹${netTax.toFixed(2)}`;

    document.getElementById('basicPayScale').innerText = `Basic Income: ₹${basicPayScale.toFixed(2)}`;
    document.getElementById('dearness_a').innerText = `Dearness Allowance: ₹${dearness_a.toFixed(2)}`;
    document.getElementById('house_r').innerText = `House Rent: ₹${house_r.toFixed(2)}`;
    document.getElementById('rural_a').innerText = `Rural Area Allownce: ₹${rural_a.toFixed(2)}`;
    document.getElementById('gradePay').innerText = `Grade Pay: ₹${gradePay.toFixed(2)}`;
    document.getElementById('mobile_Allowance').innerText = `Mobile Allowance: ₹${mobile_Allowance.toFixed(2)}`;
    document.getElementById('medical_Allowance').innerText = `Medical Allowance: ₹${medical_Allowance.toFixed(2)}`;
    document.getElementById('totalMPay').innerText = `Total Monthly Pay: ₹${totalMPay.toFixed(2)}`;
    
    
    
    
    
        
}
