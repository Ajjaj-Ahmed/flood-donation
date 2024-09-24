// donation for nowakhali

document.getElementById('donate-nowakhali-btn').addEventListener('click', function () {

    const donationAmount = parseFloat(document.getElementById('donation-amount').innerText);
    const balance = parseFloat(document.getElementById('balance-amount').innerText);
    const donation = giveDonation('donation-input');

    if (isNaN(donation) || donation < 0 || donation > balance) {
        alert('type a valid donation');
        document.getElementById('donation-input').value = '';
        return
    }


    const area = document.getElementById('donate-nowakhali').innerText;
    // increase the donation
    const totaldonation = donation + donationAmount;
    document.getElementById('donation-amount').innerText = totaldonation;
    // decrease from self balance
    const newBalance = balance - donation;
    document.getElementById('balance-amount').innerText = newBalance;


    // create element for history
    donationHistory(donation, area)

    // modal code
    const modal = document.getElementById('modal-section')
    modal.classList.remove('hidden')
    my_modal_4.showModal()

    // empty the input
    document.getElementById('donation-input').value = '';
})




// donation in feni
document.getElementById('donate-feni-btn').addEventListener('click', function () {
    const donation = giveDonation('donation-input-feni');
    const donationAmount = parseFloat(document.getElementById('donation-amount-feni').innerText);
    const balance = parseFloat(document.getElementById('balance-amount').innerText);

    if (isNaN(donation) || donation < 0 || donation > balance) {
        alert('type a valid donation')
        document.getElementById('donation-input-feni').value = '';
        return
    }
    const area = document.getElementById('donate-feni').innerText

    // increase the donation
    const totaldonation = donation + donationAmount;
    document.getElementById('donation-amount-feni').innerText = totaldonation;
    // decrease from self balance
    const newBalance = balance - donation;
    document.getElementById('balance-amount').innerText = newBalance;


    // create element for history
    donationHistory(donation, area)

    // modal code
    const modal = document.getElementById('modal-section')
    modal.classList.remove('hidden')
    my_modal_4.showModal()


    // empty the input
    document.getElementById('donation-input-feni').value = '';
})



// donation for student
document.getElementById('donate-student-btn').addEventListener('click', function () {

    const donation = giveDonation('donation-input-student');
    const donationAmount = parseFloat(document.getElementById('donation-amount-student').innerText);
    const balance = parseFloat(document.getElementById('balance-amount').innerText);

    if (isNaN(donation) || donation < 0 || donation > balance) {
        alert('type a valid donation');
        document.getElementById('donation-input-student').value = '';
        return
    }

    const area = document.getElementById('donation-student').innerText

    // increase the donation
    const totaldonation = donation + donationAmount;
    document.getElementById('donation-amount-student').innerText = totaldonation;
    // decrease from self balance
    const newBalance = balance - donation;
    document.getElementById('balance-amount').innerText = newBalance;

    // create element for history
    donationHistory(donation, area)

    // modal code
    const modal = document.getElementById('modal-section');
    modal.classList.remove('hidden');
    my_modal_4.showModal()


    // empty the input
    document.getElementById('donation-input-student').value = '';
})


// history btn
document.getElementById('history-btn').addEventListener('click', function () {
    // remove bg from donation
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.add('border-gray-200');

    // add bg to history btn
    document.getElementById('history-btn').classList.add('bg-[#B4F461]')

    // document.getElementById('donation-container').setAttribute('class', 'hidden');
    const donationcontainer = document.getElementById('donation-container');
    donationcontainer.classList.add('hidden')

    document.getElementById('history-section').classList.remove('hidden')
})

// donation btn
document.getElementById('donation-btn').addEventListener('click', function () {
    // remove bg from history
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');

    // again add bg to donation
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]')


    // document.getElementById('donation-container').removeAttribute('class', 'hidden');
    const donationcontainer = document.getElementById('donation-container');
    donationcontainer.classList.remove('hidden')

    document.getElementById('history-section').classList.add('hidden')
})

// modal remove after confirmation
document.getElementById('modal-btn').addEventListener('click', function () {
    const modal = document.getElementById('modal-section');
    modal.classList.add('hidden')
})


// scroll bar 

window.addEventListener('scroll', function () {
    const headerSection = document.getElementById('header-section')
    if (window.scrollY > 50) {
        headerSection.classList.add('bg-white/30','backdrop-invert','backdrop-opacity-40')
    } else {
        headerSection.classList.remove('bg-white/30')
    }
})