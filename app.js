/////// Import all ID from HTML 
let form = document.querySelector("#form");
let nameInput = document.querySelector("#addInp");
let addBtn = document.querySelector("#addBtn");
let clearAll = document.querySelector("#clearAll");
let filter = document.querySelector("#filter");
let member = document.querySelector("#member"); 

/////// For not refresh page
form.addEventListener("submit", function (e) {
    e.preventDefault();
})

///////// add new item
addBtn.addEventListener("click", function () {
    if (nameInput.value === "") {
        alert("Please Input Member's Name")
    } else {

        let singleMember = document.createElement("p");
        let memberName = document.createElement("span");
        let memberRemove = document.createElement("span");

        singleMember.id = "singleMember"
        memberName.id = "memberName"
        memberRemove.id = "memberRemove";

        member.append(singleMember)
        singleMember.append(memberName)
        singleMember.append(memberRemove)
        memberName.append(nameInput.value)
        memberRemove.innerHTML = "&times;"
        memberRemove.addEventListener("click", function () {
            memberRemove.parentElement.remove();
        })

        nameInput.value = ''
    }
})

/////// For Filter
filter.addEventListener("keyup", function (e) {
    const fil = e.target.value.toLowerCase();

    document.querySelectorAll("#singleMember").forEach(function (filt) {
        let item = filt.firstChild.textContent;
        if (item.toLowerCase().indexOf(fil) != -1) {
            filt.style.display = "block"
        } else {
            filt.style.display = "none"
        }
    })
})

/////// Clear all input and items
clearAll.addEventListener("click", function () {
    member.innerHTML = ''
    filter.value=''
    addInp.value=''
})