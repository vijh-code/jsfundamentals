let length;
let width;
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
let area = length * width;
document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

}

function calculateGroceryTotal(amount1, amount2, amount3) {
    const totalAmount = amount1 + amount2 + amount3;
    return totalAmount;
}

function showGroceryTotal() {
    const grocery1 = Number(document.getElementById("grocery1").value);
    const grocery2 = Number(document.getElementById("grocery2").value);
    const grocery3 = Number(document.getElementById("grocery3").value);

    const total = calculateGroceryTotal(
        grocery1,
        grocery2,
        grocery3
    );

    document.getElementById("total").textContent =
        `Total grocery expenditure: £${total.toFixed(2)}`;
}