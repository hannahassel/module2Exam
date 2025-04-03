function calculateTotal() {
    var roomRate = document.getElementById('room-type').value;
    var nights = document.getElementById('nights').value; //I fixed this bug by changing innerHTML to value 

    nights = parseInt(nights);
    if (isNaN(nights) || nights <= 0) {
        alert('Please enter a valid number of nights.');
        return;
    }

    if (roomRate === "") {
        alert('Please select a room type.');
        return;
    }

    var total = parseInt(roomRate.replace("$", "")) * nights;  //used replace so that it can calculate the price without a string 
  
    
    document.getElementById('total-cost').innerText = total.toFixed(2);  //i fixed the typo here in getElementById so that it works now 
}

function confirmBooking() {
    var total = document.getElementById('total-cost').innerText;
    if (parseFloat(total) === 0) { // added the parsefloat so that the comparison will work 
        alert('Please calculate the total before confirming.');
        return;
    }

    document.getElementById('confirmation-msg').innerText = `Your booking is confirmed. Total cost: $${total}`;
}

function resetForm() {
    document.getElementById('room-type').selectedIndex = 0;
    document.getElementById('nights').value = 0; 
    document.getElementById('total-cost').innerText = '0.00'; //added this to the reset form so that it will go back to 0 instead of not reseting the total cost 
    document.getElementById('confirmation-msg').innerText = '';
}