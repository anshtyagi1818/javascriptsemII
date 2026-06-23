function createInputs() {
    const n = document.getElementById('n').value;
    
    if (!n || n <= 0) {
        alert('Please enter a valid number');
        return;
    }
    
    const container = document.getElementById('numbersContainer');
    container.innerHTML = '';
    
    for (let i = 1; i <= n; i++) {
        const div = document.createElement('div');
        div.className = 'form-group';
        div.innerHTML = `
            <label for="num${i}">Number ${i}:</label>
            <input type="number" id="num${i}" placeholder="Enter number">
        `;
        container.appendChild(div);
    }
}

function calculateSum() {
    const n = document.getElementById('n').value;
    
    if (!n) {
        alert('Please enter N first');
        return;
    }
    
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
        const num = parseFloat(document.getElementById(`num${i}`).value) || 0;
        sum += num;
    }
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Sum of ${n} numbers: ${sum}`;
}