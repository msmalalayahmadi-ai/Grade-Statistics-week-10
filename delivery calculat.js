// Functions for Tip and Delivery Calculators
// Homework Week 10


// Calculate Tip
function calculateTip(bill, percent) {
    return bill * percent / 100;
}

// Call calculateTip three times with different values
console.log(calculateTip(100, 15));
console.log(calculateTip(200, 10));
console.log(calculateTip(500, 20));


// Get Delivery Fee
function getDeliveryFee(total, city) {

    if (city === "Kabul") {
        return 50;
    } else if (city === "Herat") {
        return 70;
    } else if (city === "Mazar") {
        return 60;
    } else {
        return 100;
    }
}

// Call getDeliveryFee three times with different values
console.log(getDeliveryFee(100, "Kabul"));
console.log(getDeliveryFee(250, "Herat"));
console.log(getDeliveryFee(500, "Mazar"));