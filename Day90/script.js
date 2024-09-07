// Pirveli 
const person = {
    name: '',
    age: 0,
    address: {
        street: '',
        city: '',
        zipCode: ''
    }
};

// Meore 
person.name = 'Dato';
person.age = 15;
person.address.street = 'tbel abuseridze';
person.address.city = 'Batumi';
person.address.zipCode = '12345';
person.gender = 'Male';
person.phoneNumber = '555-1234';

// Mesame
const newAddress = {
    houseName: 'magnolia',
    street: 'sherif ximshiashvili',
    city: 'Batumi',
    zipCode: '6000'
};

Object.assign(person.address, newAddress);

// Meotxe 
const { name, age, address, gender, phoneNumber } = person;
const { houseName, street, city, zipCode } = address;

// Mexute 
const array = [1, 2, 3, 4, 5];
