const tablinks = document.getElementsByClassName('tab-links'),
    tabcontens = document.getElementsByClassName('tab-contents'),
    MenuTurn = document.getElementById('sideMenu')

function opentab(tabname,i){
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontens) {
        tabcontent.classList.remove("active-tab")
    }
    tablinks[i].classList.add('active-link')
    tabcontens[i].classList.add('active-tab')
}
function CloseMenu() {
    MenuTurn.style.right = '-200px'
}
function OpenMenu() {
    MenuTurn.style.right = '-50px'
}
