document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const from = document.getElementById('from').value.trim();
    const to = document.getElementById('to').value.trim();
    const date = document.getElementById('date').value;
    const travelClass = document.getElementById('class').value;

    if (!from || !to || !date) {
        alert('Please fill all the fields.');
        return;
    }

    // Simulate booking process
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'block';
    }, 500);
});