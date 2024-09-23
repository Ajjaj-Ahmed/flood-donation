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