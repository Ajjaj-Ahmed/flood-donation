// donation for nowakhali

document.getElementById('donate-nowakhali-btn').addEventListener('click', function () {
    const modals = document.getElementById('modal')
    const donation = giveDonation('donation-input');
    if (isNaN(donation) || donation < 0) {
        alert('type a valid donation');
        document.getElementById('donation-input').value = '';
        return
    }
    const donationAmount = parseFloat(document.getElementById('donation-amount').innerText);
    const balance = parseFloat(document.getElementById('balance-amount').innerText);
    // increase the donation
    const totaldonation = donation + donationAmount;
    document.getElementById('donation-amount').innerText = totaldonation;
    // decrease from self balance
    const newBalance = balance - donation;
    document.getElementById('balance-amount').innerText = newBalance;

    // create element for history
    let currentDate = new Date();
    const historyElement = document.getElementById('history-section')
    const div = document.createElement('div')
    // div.setAttribute('class','p-6')
    div.innerHTML = `
    <div class="border-2 border-gray-300 p-4 mb-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">${donation} Taka Donate for Flood at Noakhali, Bangladesh</h2> 
    <h2 class="text-xl font-bold">Date : ${currentDate}</h2>
    </div>
    `
    historyElement.appendChild(div)
    // empty the input
    document.getElementById('donation-input').value = '';
})



// donation in feni
document.getElementById('donate-feni-btn').addEventListener('click', function () {
    const donation = giveDonation('donation-input-feni');
    if (isNaN(donation) || donation < 0) {
        alert('type a valid donation')
        document.getElementById('donation-input-feni').value = '';
        return
    }
    const donationAmount = parseFloat(document.getElementById('donation-amount-feni').innerText);
    const balance = parseFloat(document.getElementById('balance-amount').innerText);
    // increase the donation
    const totaldonation = donation + donationAmount;
    document.getElementById('donation-amount-feni').innerText = totaldonation;
    // decrease from self balance
    const newBalance = balance - donation;
    document.getElementById('balance-amount').innerText = newBalance;

    // create element for history
    let currentDate = new Date();
    const historyElement = document.getElementById('history-section')
    const div = document.createElement('div')
    // div.setAttribute('class','p-6')
    div.innerHTML = `
    <div class="border-2 border-gray-300 p-4 mb-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">${donation} Taka Donate for Flood Relief in Feni,Bangladesh</h2> 
    <h2 class="text-xl font-bold">Date : ${currentDate}</h2>
    </div>
    `
    historyElement.appendChild(div)

    // empty the input
    document.getElementById('donation-input-feni').value = '';
})

// donation for student
document.getElementById('donate-student-btn').addEventListener('click', function () {
    const donation = giveDonation('donation-input-student');
    if (isNaN(donation) || donation < 0) {  
        alert('type a valid donation');
        document.getElementById('donation-input-student').value = '';
        return
    }
    const donationAmount = parseFloat(document.getElementById('donation-amount-student').innerText);
    const balance = parseFloat(document.getElementById('balance-amount').innerText);
    // increase the donation
    const totaldonation = donation + donationAmount;
    document.getElementById('donation-amount-student').innerText = totaldonation;
    // decrease from self balance
    const newBalance = balance - donation;
    document.getElementById('balance-amount').innerText = newBalance;

        // create element for history
        let currentDate = new Date();
        const historyElement = document.getElementById('history-section')
        const div = document.createElement('div')
        // div.setAttribute('class','p-6')
        div.innerHTML = `
        <div class="border-2 border-gray-300 p-4 mb-4 rounded-lg">
        <h2 class="text-xl font-bold mb-2">${donation} Taka Aid for Injured in the Quota Movement</h2> 
        <h2 class="text-xl font-bold">Date : ${currentDate}</h2>
        </div>
        `
        historyElement.appendChild(div)
    // empty the input
    document.getElementById('donation-input-student').value = '';
})


// history btn
document.getElementById('history-btn').addEventListener('click', function () {
    // remove bg from donation
    document.getElementById('donation-btn').classList.remove('bg-green-500');
    document.getElementById('donation-btn').classList.add('border-gray-200');

    // add bg to history btn
    document.getElementById('history-btn').classList.add('bg-green-500')

    // document.getElementById('donation-container').setAttribute('class', 'hidden');
    const donationcontainer = document.getElementById('donation-container');
    donationcontainer.classList.add('hidden')

    document.getElementById('history-section').classList.remove('hidden')
})

// donation btn
document.getElementById('donation-btn').addEventListener('click', function () {
    // remove bg from history
    document.getElementById('history-btn').classList.remove('bg-green-500');

    // again add bg to donation
    document.getElementById('donation-btn').classList.add('bg-green-500')

    //
    // document.getElementById('donation-container').removeAttribute('class', 'hidden');
    const donationcontainer = document.getElementById('donation-container');
    donationcontainer.classList.remove('hidden')

    document.getElementById('history-section').classList.add('hidden')
})
