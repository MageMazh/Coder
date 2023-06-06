const nameOperator = ["penjumlahan", "pengurangan", "perkalian", "pembagian"]
const operators = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b,
];

let higherValue = 0;
let operator;

for (let i = 0; i < operators.length; i++) {
    const result = operators[i](1,2);
    if (result > higherValue) {
        higherValue = result;
        operator = nameOperator[i]
    }
}
console.log("Hasil nilai terbesar adalah", higherValue, "pada operasi", operator);