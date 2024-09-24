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
    let myCurentMoney = myTaka - NoakhaliInput;

    document.getElementById('my-taka').innerText = myCurentMoney;

    // Noakhali donation calculation

    let currentNoakhaliAmount = noakhaliAmount + NoakhaliInput;

    document.getElementById('noakhali-amount').innerText = currentNoakhaliAmount;

});

// For Feni 

document.getElementById('feni-btn').addEventListener('click', function(event){
    event.preventDefault();

    let myTaka = parseFloat(document.getElementById('my-taka').innerText);

    let feniAmount = parseFloat(document.getElementById('feni-amount').innerText);

    let feniInput = parseFloat(document.getElementById('feni-input').value);
    // My Money calculation
    let myCurentMoney = myTaka - feniInput;

    document.getElementById('my-taka').innerText = myCurentMoney;

    // Feni donation calculation

    let currentFeniAmount = feniAmount + feniInput;

    document.getElementById('feni-amount').innerText = currentFeniAmount;

});

// For Quota

document.getElementById('quota-btn').addEventListener('click', function(event){
    event.preventDefault();

    let myTaka = parseFloat(document.getElementById('my-taka').innerText);

    let quotaAmount = parseFloat(document.getElementById('quota-amount').innerText);

    let quotaInput = parseFloat(document.getElementById('quota-input').value);
    // My Money calculation
    let myCurentMoney = myTaka - quotaInput;

    document.getElementById('my-taka').innerText = myCurentMoney;

    // Feni donation calculation

    let currentquotaAmount = quotaAmount + quotaInput;

    document.getElementById('quota-amount').innerText = currentquotaAmount;

});
