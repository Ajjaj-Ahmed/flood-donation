function giveDonation(id){
    const donationElement = document.getElementById(id).value;
    const donation = parseFloat(donationElement);
    return donation
}


function donationHistory(donation,area){
    const historyElement = document.getElementById('history-section')
    let currentDate = new Date();
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="border-2 border-gray-300 p-4 mb-4 rounded-lg">
    <h2 class="text-xl font-bold mb-2">${donation} Taka is donate for ${area}</h2> 
    <h2 class="text-xl font-bold">Date : ${currentDate}</h2>
    </div>
    `
    historyElement.appendChild(div)
}

