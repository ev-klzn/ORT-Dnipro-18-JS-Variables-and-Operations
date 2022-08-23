   
    let sum = +prompt('Ваш доход: (грн)');

    const incomeTaxRate = 18; // %
    const warTaxRate = 1.5;   // %

    console.log(`Доход: ${sum} грн.`);

    let incomeTaxSum = sum * incomeTaxRate / 100;

    console.log(`Подоходный налог: ${incomeTaxSum} грн.`);

    let warTaxSum = sum * warTaxRate / 100;

    console.log(`Военный сбор: ${warTaxSum} грн.`);

    let afterTax = sum - incomeTaxSum - warTaxSum;

    console.log(`Остаток: ${afterTax} грн.`);