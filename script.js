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

   if (NoakhaliInput > 0 && NoakhaliInput<myTaka && typeof NoakhaliInput === 'number'){
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

    noakhali (NoakhaliInput);

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

    if (feniInput > 0 && feniInput<myTaka && typeof feniInput === 'number'){
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

     feni (feniInput);

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
    if (quotaInput > 0 && quotaInput<myTaka && typeof quotaInput === 'number'){
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

     quota (quotaInput);


    }
    else{
        alert ("Can't Donate. Please enter valid amount.");
    }
});


// History Setup

function noakhali (NoakhaliInput){

   

   let p = document.createElement('p');

   p.innerText = `${NoakhaliInput} taka is Donated for Donate for Flood at Noakhali, Bangladesh`;

   console.log(p);
   

   document.getElementById('show-history').appendChild(p);

    p.style.display = 'flex';
    p.style.justifyContent = 'center';

   return p;

}


function feni (feniInput){

   

    let p = document.createElement('p');
 
    p.innerText = `${feniInput} taka is Donated for Donate for Flood at Feni, Bangladesh`;
 
    console.log(p);
    
 
    document.getElementById('show-history').appendChild(p);
 
    p.style.display = 'flex';
    p.style.justifyContent = 'center';
 
    return p;
 
 }


 function quota (quotaInput){

   

    let p = document.createElement('p');
 
    p.innerText = `${quotaInput} taka is Donated for Donate for Injured in the Quota Movement.`;
 
    console.log(p);
    
 
    document.getElementById('show-history').appendChild(p);
 
    p.style.display = 'flex';
    p.style.justifyContent = 'center';
 
    return p;
 
 }




