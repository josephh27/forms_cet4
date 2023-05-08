import {provinces, countries} from './data.js'

let inputContainers = document.querySelectorAll(".input");
let gender = document.querySelector("select[name='gender']");
let otherGender = document.querySelector(".other-gender");
let religion = document.querySelector("select[name='religion']");
let otherReligion = document.querySelector(".other-religion");
let work = document.querySelector("select[name='work-type']");
let otherWork = document.querySelector(".other-work");

const checkEmpty = (inputBox) => {
    let inputField = inputBox.querySelector(".input__field");
    if (inputField) {
        inputField.addEventListener('focusout', () => {
            if (inputField.value == null || inputField.value == ""){
                inputBox.classList.remove('input--filled')
            } else {
                inputBox.classList.add('input--filled');
            }
        })   
    }
}

inputContainers.forEach(elem => {
    checkEmpty(elem);
})

const otherDisplay = (elem, other) => {
    elem.addEventListener("change", () => {
        if (elem.value === "others") {
            other.style.display = "inline-block";
        } else {
            other.style.display = "none";
        }
    })
}

otherDisplay(gender, otherGender);
otherDisplay(religion, otherReligion);
otherDisplay(work, otherWork);


/* For the dropdown options in the addresses */




let countrySelection = document.querySelector("#present-country");
let provinceSelection = document.querySelector("#present-province");
let municipalitySelection = document.querySelector("#present-municipality");
let barangaySelection = document.querySelector("#present-barangay");
let permCountrySelection = document.querySelector("#permanent-country");
let permProvinceSelection = document.querySelector("#permanent-province");
let permMunicipalitySelection = document.querySelector("#permanent-municipality");
let permBarangaySelection = document.querySelector("#permanent-barangay");


const generateProvinces = () => {
    for (let prop in provinces) {
        if (Object.prototype.hasOwnProperty.call(provinces, prop)){
            let newOpt = document.createElement('option');
            newOpt.textContent = prop;
            newOpt.value = nameConverter(prop);
            const clone = newOpt.cloneNode(true);
            provinceSelection.appendChild(newOpt);
            permProvinceSelection.appendChild(clone);
        }
    }
}

const generateMunicipalities = (province) => {
    removeOptions(municipalitySelection);
    let value = nameReverter(province.value);
    if (value in provinces) {
        provinces[value].forEach((municipality) => {
            let newOpt = document.createElement('option');
            newOpt.textContent = municipality;
            newOpt.value = nameConverter(municipality);
            municipalitySelection.appendChild(newOpt);
            }
        )
    }
	findProvince();
}

const generatePermMunicipalities = (province) => {
    removeOptions(permMunicipalitySelection);
    let value = nameReverter(province.value);
    if (value in provinces) {
        provinces[value].forEach((municipality) => {
            let newOpt = document.createElement('option');
            newOpt.textContent = municipality;
            newOpt.value = nameConverter(municipality);
            permMunicipalitySelection.appendChild(newOpt);
            }
        )
    }
	findPermProvince();
}



async function findBarangay(municipalityCode) {
	const response = await fetch(`https://psgc.gitlab.io/api/cities-municipalities/${municipalityCode}/barangays.json`);
	const barangays = await response.json();
	removeOptions(barangaySelection);
	for (let i = 0; i < barangays.length; i++) {
		let newOpt = document.createElement('option');
		newOpt.textContent = barangays[i]['name'];
		newOpt.value = nameConverter(barangays[i]['name']);
		barangaySelection.appendChild(newOpt);
	}
}

async function permFindBarangay(municipalityCode) {
	const response = await fetch(`https://psgc.gitlab.io/api/cities-municipalities/${municipalityCode}/barangays.json`);
	const barangays = await response.json();
	removeOptions(permBarangaySelection);
	for (let i = 0; i < barangays.length; i++) {
		let newOpt = document.createElement('option');
		newOpt.textContent = barangays[i]['name'];
		newOpt.value = nameConverter(barangays[i]['name']);
		permBarangaySelection.appendChild(newOpt);
	}
}

async function findMunicipality(provinceCode) {
	const response = await fetch(`https://psgc.gitlab.io/api/provinces/${provinceCode}/municipalities.json`);
	const municipalities = await response.json();
	for (let i = 0; i < municipalities.length; i++) {
		if (municipalities[i]['name'] === nameReverter(municipalitySelection.value)) {
			findBarangay(municipalities[i]['code'])
			break
		}
	}
}

async function permFindMunicipality(provinceCode) {
	const response = await fetch(`https://psgc.gitlab.io/api/provinces/${provinceCode}/municipalities.json`);
	const municipalities = await response.json();
	for (let i = 0; i < municipalities.length; i++) {
		if (municipalities[i]['name'] === nameReverter(permMunicipalitySelection.value)) {
			permFindBarangay(municipalities[i]['code'])
			break
		}
	}
}

async function findProvince() {
	const response = await fetch(`https://psgc.gitlab.io/api/provinces.json`);
	const provinces = await response.json();

	for (let i = 0; i < provinces.length; i++) {
		if (provinces[i]['name'] === nameReverter(provinceSelection.value)) {
			findMunicipality(provinces[i]['code'])
			break
		}
	}
}

async function findPermProvince() {
	const response = await fetch(`https://psgc.gitlab.io/api/provinces.json`);
	const provinces = await response.json();

	for (let i = 0; i < provinces.length; i++) {
		if (provinces[i]['name'] === nameReverter(permProvinceSelection.value)) {
			permFindMunicipality(provinces[i]['code'])
			break
		}
	}
}

const generateCountries = () => {
    countries.forEach(country => {
        let newOpt = document.createElement('option');
        newOpt.textContent = country;
        newOpt.value = country;
        const clone = newOpt.cloneNode(true);
        countrySelection.appendChild(newOpt);
        permCountrySelection.appendChild(clone);
    })
}

//To retain the naming convention in value attribute
const nameConverter = (name) => {
    name = name.toLowerCase().replaceAll(' ', '-');
    return name;
}


//To revert naming convention to fit into the province keys
const nameReverter = (name) => {
    let words = name.split("-");
    words.forEach((word, index, array) => {
         array[index] = word.charAt(0).toUpperCase() + word.slice(1);
    })
    return words.join(" ");
}

generateCountries();
generateProvinces();

provinceSelection.addEventListener('change', () => generateMunicipalities(provinceSelection));
permProvinceSelection.addEventListener('change', () => generatePermMunicipalities(permProvinceSelection));

municipalitySelection.addEventListener('change', (() => findProvince()));
permMunicipalitySelection.addEventListener('change', (() => findPermProvince()));

let event = new Event('change');
provinceSelection.dispatchEvent(event);
permProvinceSelection.dispatchEvent(event);

function removeOptions(selection) {
    var i, L = selection.options.length - 1;
    for(i = L; i >= 0; i--) {
       selection.remove(i);
    }
 }
 


 //Input Validations
 const form = document.querySelector(".main-form");
 const firstName = document.querySelector("#first-name");
 const middleName = document.querySelector("#middle-name");
 const familyName = document.querySelector("#family-name");
 const phoneNum = document.querySelector("#phone-num");
 const email = document.querySelector("#email");
 const birthday = document.querySelector("#birthday");
 const inputBoxes = [firstName, middleName, familyName, phoneNum, email, birthday] ;
 const nameBoxes = [firstName, middleName, familyName]; 



const checkEmptyValid = (elem) => {
	return elem.value.trim().length === 0;
}

const checkNameLength = (elem) => {
	return elem.value.trim().length <= 50; 
}

const containsNaN = (elem) => {
	return /^\d+$/.test(elem.value.trim());
}

const containsAt = (elem) => {
	return elem.value.trim().includes('@');
}

const getAge = (elem) => {
	let today = new Date();
	let birthDate = new Date(elem.value);
	let age = today.getFullYear() - birthDate.getFullYear();
	let m = today.getMonth() - birthDate.getMonth();
	if ((m < 0) || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--
	}
	return age
}
 
const validateInputs = () => {
	nameBoxes.forEach(elem => {
		if (checkEmptyValid(elem)) {
			setError(elem, 'Must not be empty')
		} else if (!checkNameLength(elem)) {
			setError(elem, 'Must be less than 51 characters')
		} else {
			setSuccess(elem, 'Valid Input')
		}
	})

	if (checkEmptyValid(phoneNum)) {
		setError(phoneNum, 'Must not be empty')
	} else if (!containsNaN(phoneNum)) {
		setError(phoneNum, 'Only numbers are allowed');
	} else {
		setSuccess(phoneNum, 'Valid Input')
	}

	if (checkEmptyValid(email)) {
		setError(email, 'Must not be empty')
	} else if (!containsAt(email)) {
		setError(email, 'Must contain @ symbol');
	} else {
		setSuccess(email, 'Valid Input')
	}
	if  (checkEmptyValid(birthday)) {
		setError(birthday, 'Must not be empty')
	} else if (getAge(birthday) < 18) {
		setError(birthday, 'Must be aged 18 or older')
	} else {
		setSuccess(birthday, 'Valid input');
	}
}

const setError = (element, message) => {
	const inputContainer = element.parentElement;
	const errorDisplay = inputContainer.querySelector('.error-con');

	errorDisplay.textContent = message;
	errorDisplay.classList.add('error');
	errorDisplay.classList.remove('success');
}

const setSuccess = (element, message) => {
	const inputContainer = element.parentElement;
	const errorDisplay = inputContainer.querySelector('.error-con');

	errorDisplay.textContent = message;
	errorDisplay.classList.add('success');
	errorDisplay.classList.remove('error');
}

inputBoxes.forEach((elem) => {
	elem.addEventListener('focusout', () => {
		validateInputs();
	})
})

form.addEventListener('submit', e => {
	const errorBoxes = document.querySelectorAll('.error');
	validateInputs();
	if (errorBoxes.length > 0) {
		e.preventDefault();
	}
})


