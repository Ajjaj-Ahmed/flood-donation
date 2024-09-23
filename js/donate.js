// donation for nowakhali

document.getElementById('donate-nowakhali-btn').addEventListener('click',function(){
    const donation = giveDonation('donation-input');
    const donationAmount = parseFloat(document.getElementById('donation-amount').innerText);
    const balance = parseFloat(document.getElementById('balance-amount').innerText);
    // increase the donation
    const totaldonation = donation+donationAmount;
    document.getElementById('donation-amount').innerText=totaldonation;
    // decrease from self balance
    const newBalance = balance-donation;
    document.getElementById('balance-amount').innerText=newBalance;
      // empty the input
      document.getElementById('donation-input').value ='';
})



// donation in feni
document.getElementById('donate-feni-btn').addEventListener('click',function(){
    const donation = giveDonation('donation-input-feni');
    const donationAmount = parseFloat(document.getElementById('donation-amount-feni').innerText);
    const balance = parseFloat(document.getElementById('balance-amount').innerText);
    // increase the donation
    const totaldonation = donation+donationAmount;
    document.getElementById('donation-amount-feni').innerText=totaldonation;
    // decrease from self balance
    const newBalance = balance-donation;
    document.getElementById('balance-amount').innerText=newBalance;

      // empty the input
      document.getElementById('donation-input-feni').value ='';
})
// donation for student
document.getElementById('donate-student-btn').addEventListener('click',function(){
    const donation = giveDonation('donation-input-student');
    const donationAmount = parseFloat(document.getElementById('donation-amount-student').innerText);
    const balance = parseFloat(document.getElementById('balance-amount').innerText);
    // increase the donation
    const totaldonation = donation+donationAmount;
    document.getElementById('donation-amount-student').innerText=totaldonation;
    // decrease from self balance
    const newBalance = balance-donation;
    document.getElementById('balance-amount').innerText=newBalance;

    // empty the input
    document.getElementById('donation-input-student').value ='';
})


// history btn
document.getElementById('history-btn').addEventListener('click',function(){
    // remove bg from donation
    document.getElementById('donation-btn').classList.remove('bg-green-500');
    document.getElementById('donation-btn').classList.add('border-gray-200');

    // add bg to history btn
    document.getElementById('history-btn').classList.add('bg-green-500')

    document.getElementById('donation-container').setAttribute('class','hidden');
    
})
// donation btn
document.getElementById('donation-btn').addEventListener('click',function(){
    // remove bg from history
    document.getElementById('history-btn').classList.remove('bg-green-500');
    
    // again add bg to donation
    document.getElementById('donation-btn').classList.add('bg-green-500')

    //
    document.getElementById('donation-container').removeAttribute('class','hidden');
})