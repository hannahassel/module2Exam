function calculateTotal() {
    var roomRate = document.getElementById('room-type').value;
    var nights = document.getElementById('nights').innerHTML; //There is a problem here on line 3 it is not supposed to be innerHTML but value because it is an input element not an element with text content

    nights = parseInt(nights);
    if (isNaN(nights) || nights <= 0) {
        alert('Please enter a valid number of nights.');
        return;
    }

    if (roomRate === "") {
        alert('Please select a room type.');
        return;
    }

    var total = parseInt(roomRate) * nights; //there is a problem here on line 16: in the function that roomRate is in (calculate total) the dropdown menu stored with a dollar sign a string so that when calucating the price it may fail for it to work we have to remove the dollar sign (this from the dropdown menu in the html)
    
    document.getElementByID('total-cost').innerText = total.toFixed(2);  //there is a problem here in line 18: it is supposed to be getElementById, the typo does so that the code does not understand
}

function confirmBooking() {
    var total = document.getElementById('total-cost').innerText;
    if (total === 0) { //there is a problem here on line 23: in this function confirmBooking the total cost is checked with this total but total cost contains string and then as happened before it does not work to calculate so we have to convert it into a number before calculating
        alert('Please calculate the total before confirming.');
        return;
    }
    
    document.getElementById('confirmation-msg').innerText = `Your booking is confirmed. Total cost: $${total}`;
}

//there is a problem here in the resetform when you run it with live server and try it the total cost does not go away when you press the reset form button so we have to add a line so that the total resets 
function resetForm() {
    document.getElementById('room-type').selectedIndex = 0;
    document.getElementById('nights').value = 0; 
    document.getElementById('confirmation-msg').innerText = '';
}