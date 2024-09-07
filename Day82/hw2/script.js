const saxeli = window.prompt("Write element name here")

if(saxeli){
    const newelement = document.createElement(name)

    newelement.textContent = "this is new element"
    newelement.id = "newelement"
    document.body.appendChild(newelement)
}else{
    console.log("please enter correct name")
}