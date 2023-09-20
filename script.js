let name = document.querySelector("#name");
let email = document.querySelector("#email");
let age = document.querySelector("#age");
let contact = document.querySelector("#contact");

let submitBtn = document.querySelector("button");
let tbody = document.querySelector("tbody");

let users = [];

submitBtn.addEventListener("click",()=>{
    if (!name.value || !email.value || !age.value || !contact.value){
        alert("Please enter all the details");
        return;
    }
    let userData = {
        name:name.value,
        email:email.value,
        age:age.value,
        contact:contact.value
    }
    users.push(userData);
    displayData();
    name.value = "";
    email.value = "";
    age.value = "";
    contact.value = "";

})

function displayData(){
    tbody.innerHTML = "";
    users.forEach((user)=>{
        let tr = document.createElement("tr");
        let nameData = document.createElement("td");
        let emailData = document.createElement("td");
        let ageData = document.createElement("td");
        let contactData = document.createElement("td");

        nameData.innerHTML = user.name;
        emailData.innerHTML = user.email;
        ageData.innerHTML = user.age;
        contactData.innerHTML = user.contact;

        tr.append(nameData);
        tr.append(emailData);
        tr.append(ageData);
        tr.append(contactData);
        tbody.append(tr);
    });

}


