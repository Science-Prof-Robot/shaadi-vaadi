function sendOtp() {
    const phone = document.getElementById('phone').value;
    // Placeholder for API URL to send OTP
    const apiUrl = 'https://api.example.com/send-otp';
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone })
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert('OTP sent successfully!');
        } else {
            alert('Failed to send OTP. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}