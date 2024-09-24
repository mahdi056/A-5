document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('show-donation').classList.add('hidden');

    document.getElementById('show-history').classList.remove('hidden');

    document.getElementById('history-btn').classList.add('bg-primary-color');

    document.getElementById('donate-btn').classList.remove('bg-primary-color');
});


document.getElementById('donate-btn').addEventListener('click',function(){
    document.getElementById('show-history').classList.add('hidden');

    document.getElementById('show-donation').classList.remove('hidden');

    document.getElementById('donate-btn').classList.add('bg-primary-color');

    document.getElementById('history-btn').classList.remove('bg-primary-color');


});

// For noakhali
document.getElementById('noakhali-btn').addEventListener('click', function(event){
    event.preventDefault();

    let myTaka = parseFloat(document.getElementById('my-taka').innerText);

    let noakhaliAmount = parseFloat(document.getElementById('noakhali-amount').innerText);

    let NoakhaliInput = parseFloat(document.getElementById('noakhali-input').value);
    // My Money calculation

   if (NoakhaliInput>0 && typeof NoakhaliInput === 'number'){
    let myCurentMoney = myTaka - NoakhaliInput;

    document.getElementById('my-taka').innerText = myCurentMoney;

    // Noakhali donation calculation

    let currentNoakhaliAmount = noakhaliAmount + NoakhaliInput;

    document.getElementById('noakhali-amount').innerText = currentNoakhaliAmount;

    // Modal setup

    document.getElementById('modal').classList.remove('hidden');

    document.getElementById('close-modal-btn')
        .addEventListener('click',function(){

            document.getElementById('modal').classList.add('hidden');
    });


   }
   else{
        alert("Can't Donate. Please enter valid amount.")
   }

});

// For Feni 

document.getElementById('feni-btn').addEventListener('click', function(event){
    event.preventDefault();

    let myTaka = parseFloat(document.getElementById('my-taka').innerText);

    let feniAmount = parseFloat(document.getElementById('feni-amount').innerText);

    let feniInput = parseFloat(document.getElementById('feni-input').value);
    // My Money calculation

    if (feniInput > 0 && typeof feniInput === 'number'){
        let myCurentMoney = myTaka - feniInput;

    document.getElementById('my-taka').innerText = myCurentMoney;

    // Feni donation calculation

    let currentFeniAmount = feniAmount + feniInput;

    document.getElementById('feni-amount').innerText = currentFeniAmount;

     // Modal setup

     document.getElementById('modal').classList.remove('hidden');

     document.getElementById('close-modal-btn')
         .addEventListener('click',function(){
 
             document.getElementById('modal').classList.add('hidden');
     });
    }

    else{
        alert("Can't Donate. Please enter valid amount.");
    }

});

// For Quota

document.getElementById('quota-btn').addEventListener('click', function(event){
    event.preventDefault();

    let myTaka = parseFloat(document.getElementById('my-taka').innerText);

    let quotaAmount = parseFloat(document.getElementById('quota-amount').innerText);

    let quotaInput = parseFloat(document.getElementById('quota-input').value);
    // My Money calculation
    if (quotaInput > 0 && typeof quotaInput === 'number'){
        let myCurentMoney = myTaka - quotaInput;

    document.getElementById('my-taka').innerText = myCurentMoney;

    // Feni donation calculation

    let currentquotaAmount = quotaAmount + quotaInput;

    document.getElementById('quota-amount').innerText = currentquotaAmount;

     // Modal setup

     document.getElementById('modal').classList.remove('hidden');

     document.getElementById('close-modal-btn')
         .addEventListener('click',function(){
 
             document.getElementById('modal').classList.add('hidden');
     });

    }
    else{
        alert ("Can't Donate. Please enter valid amount.");
    }
});


// History Setup

function formatDateTime() {
    const now = new Date();

    const day = now.getDate();                  // Day of the month (1-31)
    const month = now.toLocaleString('default', { month: 'long' }); // Full month name
    const year = now.getFullYear();             // Full year (e.g., 2024)
    const time = now.toLocaleTimeString();      // Local time (e.g., 10:45:23 AM)

    return `${day} ${month} ${year}, ${time}`;  // Format: '24 September 2024, 10:45:23 AM'
}

// Function to record and display transactions
function recordTransaction(amount, cause) {
    const transactionLog = document.getElementById('transaction-log');

    const currentTime = formatDateTime(); // Get formatted date and time
    const transactionMessage = `${amount} BDT was donated for ${cause}.`;
    const timeMessage = `Transaction time: ${currentTime}`;

    // Create a new div for each transaction
    const transactionDiv = document.createElement('div');
    transactionDiv.className = 'my-4 p-2 border-b';

    // Create and append transaction message
    const transactionP = document.createElement('p');
    transactionP.textContent = transactionMessage;
    transactionDiv.appendChild(transactionP);

    // Create and append time message
    const timeP = document.createElement('p');
    timeP.textContent = timeMessage;
    transactionDiv.appendChild(timeP);

    // Append the transaction log to the main log area
    transactionLog.appendChild(transactionDiv);
}

// Handling donations for Noakhali
document.getElementById('noakhali-btn').addEventListener('click', function() {
    const amount = document.getElementById('noakhali-input').value;
    if (amount) {
        recordTransaction(amount, 'Donate for Flood at Noakhali, Bangladesh');
        document.getElementById('noakhali-amount').textContent = amount; // Update the amount shown on the card
    }
});

// Handling donations for Feni
document.getElementById('feni-btn').addEventListener('click', function() {
    const amount = document.getElementById('feni-input').value;
    if (amount) {
        recordTransaction(amount, 'Donate for Flood Relief in Feni, Bangladesh');
        document.getElementById('feni-amount').textContent = amount; // Update the amount shown on the card
    }
});

// Handling donations for Quota Movement
document.getElementById('quota-btn').addEventListener('click', function() {
    const amount = document.getElementById('quota-input').value;
    if (amount) {
        recordTransaction(amount, 'Aid for Injured in the Quota Movement');
        document.getElementById('quota-amount').textContent = amount; // Update the amount shown on the card
    }
});



