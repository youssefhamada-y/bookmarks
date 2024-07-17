let nameinput = document.querySelector(".nameinput")
let urlinput = document.querySelector(".urlinput")
let submitbutton = document.querySelector(".submitbutton")
let tablebody = document.getElementById("tablebody")
let bookmarks;
if(localStorage.getItem("bookmarks")==null){
bookmarks=[];
}else{
    bookmarks=JSON.parse( localStorage.getItem("bookmarks"))
    displaydata()
}
submitbutton.addEventListener("click", function () {
    let bookmark = {
        name: nameinput.value,
        url: urlinput.value,
    }
    bookmarks.push(bookmark)
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    displaydata()
})
function displaydata() {
    let container = ``
    for (let i = 0; i < bookmarks.length; i++) {
        container += `
     <tr>
                    <td class="px-5 fontsize">${[i+1]}</td>
                    <td class="px-5 fontsize">${bookmarks[i].name}</td>
                    <td>
                    <button onclick="visitwebsite('${bookmarks[i].url}')" class="btn buttongreen text-white px-3 btn-outline-primary border-0 ">
                        <i class="fa-solid fa-eye"></i>
                        <span>Visit</span>
                    </button>
                    </td>
                    <td>
                     <button onclick="deletebookmarks(${i})" class="btn buttonred text-white px-3 btn-outline-dark border border-0">
                        <i class="fa-solid fa-trash"></i>
                        <span>Delete</span>
                    </button></td>
                </tr>
    `
    }
    tablebody.innerHTML=container
}
function deletebookmarks (index) {
    bookmarks.splice(index,1)
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    displaydata()
}
function visitwebsite(url){
window.open(url)
}