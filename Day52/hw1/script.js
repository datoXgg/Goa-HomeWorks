function infoJoin(name, surname, age, location, interest) {
    var info = {
        name: name,
        surname: surname,
        age: age,
        location: location,
        interest: interest,
    };
    return info;
}

var myInfo = infoJoin("Dato", "Tskhomelidze", 15, "Batumi", Coding);
console.log(myInfo);