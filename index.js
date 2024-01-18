document.getElementById('square-calculator').addEventListener('submit', function(event) {
    event.preventDefault();

    var choice = document.getElementById('choice').value;
    var side = parseFloat(document.getElementById('side').value);

    if (choice === 'area') {
        var result = side * side ;
        document.getElementById('result').textContent = "Luas persegi adalah: " + result  ;
    } else if (choice === 'perimeter') {
        var result = 4 * side;
        document.getElementById('result').textContent = "Keliling persegi adalah: " + result;
    } else {
        document.getElementById('result').textContent = "Invalid choice. Please choose either 'Luas' or 'Keliling'.";
    }
});

