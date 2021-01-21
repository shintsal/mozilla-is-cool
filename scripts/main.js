console.log("ikonia klikattiin");

// change user
function changeUser()
{
    var myHeader = document.getElementById("otsikko");
    let myName = prompt("Please enter your name!");
    localStorage.setItem("name", myName)
    myHeader.textContent = "Mozilla is cool, " + myName;
}

// change logo
function changeLogo()
{
    var mozillaLogo = document.getElementById("img");
    mozillaLogo.src = "./images/bravelogo.png";
    var myHeader = document.getElementById("otsikko");
    myHeader.textContent = "Is Brave even Cooler?"
    var wrapper = document.getElementById("wrapper");
    wrapper.style.backgroundColor = "white";
}

