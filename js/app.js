// console.log('clicked');
const fetchPhonesApi = (phone) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`)
    .then(res => res.json())
    .then(phone => displayPhones(phone.data));
}

const displayPhones = (phones) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    for(const phone of phones) {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <p class="card-text">${phone.phone_name}</p>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    }
}

document.getElementById('search-btn').addEventListener('click', () => {
    const phoneInputText = document.getElementById('phone-input');
    const phoneInputValue = phoneInputText.value;
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    if(phoneInputValue === '') {
        console.log('no phone found');
    }
    else {
        fetchPhonesApi(phoneInputValue);
    }
    //clear input field
    phoneInputText.value = '';
})