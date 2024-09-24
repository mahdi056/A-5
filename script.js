document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('show-donation').classList.add('hidden');

    document.getElementById('show-history').classList.remove('hidden');
});


document.getElementById('donate-btn').addEventListener('click',function(){
    document.getElementById('show-history').classList.add('hidden');

    document.getElementById('show-donation').classList.remove('hidden');
});


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