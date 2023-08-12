// Fetch the JSON data from GitHub Pages
fetch('https://breakneckbrands.github.io/medication-data/data.json')
    .then(response => response.json())
    .then(data => {
        const catheterSelect = document.getElementById('catheterDiameter');
        for (const gauge in data.catheters) {
            const option = document.createElement('option');
            option.value = data.catheters[gauge];
            option.textContent = `${gauge} (${data.catheters[gauge]} mm)`;
            catheterSelect.appendChild(option);
        }
    })
    .catch(error => {
        console.error("There was an error fetching or processing the JSON:", error);
    });

document.getElementById('medicationCalculator').addEventListener('submit', function(e) {
    e.preventDefault();

    const tubingLength = parseFloat(document.getElementById('tubingLength').value);
    const catheterDiameter = parseFloat(document.getElementById('catheterDiameter').value);
    const flowRate = parseFloat(document.getElementById('flowRate').value);

    const computedTime = (tubingLength / catheterDiameter) + flowRate;
    document.getElementById('computedTime').textContent = computedTime.toFixed(2); 
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('computedTime').textContent = '';
});
