function switchnames(){
    const name1 = document.getElementById("name1").textContent;
    const name2 = document.getElementById("name2").textContent;
    const name3 = document.getElementById("name3").textContent;

    document.getElementById("name1").textContent = name2;
    document.getElementById("name2").textContent = name3;
    document.getElementById("name3").textContent = name1;
}
