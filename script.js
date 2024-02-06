console.log('Hello');

const pricing = [
    {
        plan: "Basic",
        timeframes: {
            weekly: 9.99,
            monthly: 19.99,
            annually: 199.99
        }
    },
    {
        plan: "Professional",
        timeframes: {
            weekly: 12.99,
            monthly: 24.99,
            annually: 249.99
        }
    },
    {
        plan: "Master",
        timeframes: {
            weekly: 20.99,
            monthly: 39.99,
            annually: 399.99
        }
    }
]

const radioButtons = document.querySelectorAll('input[type="radio"]');
const annualBtn = document.getElementById('annually');
const monthBtn = document.getElementById('monthly');
const switcher = document.getElementsByClassName('switcher')[0];

const basicSpan = document.getElementById('basic-span');
const proSpan = document.getElementById('pro-span');
const masterSpan = document.getElementById('master-span');

function getPrice(timeframe) {
    basicSpan.textContent = pricing[0].timeframes[timeframe];
    proSpan.textContent = pricing[1].timeframes[timeframe];
    masterSpan.textContent = pricing[2].timeframes[timeframe];
}

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', () => {
        if (annualBtn.checked) {
            switcher.style.left = '0.1rem';
            getPrice("annually")
        } else if (monthBtn.checked) {
            switcher.style.left = '1.5rem';
            getPrice("monthly");
        } else {
            switcher.style.left = '2.9rem';
            getPrice("weekly")
        }
    })
}

const sections = document.querySelectorAll('section');

function removeSelected() {
    const selectedSection = [...sections].find((section) => section.classList.contains('selected'));
    selectedSection.classList.remove('selected')
}

for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', () => {
        removeSelected();
        sections[i].classList.add('selected');
    })
}