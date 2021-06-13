function preLoader() {
var loader = document.getElementById('loader');
loader.style.display ='none';
}

function myFunction() {
var menu_list = document.querySelector(".menu_list");
var hamburger = document.getElementById("h").children;
var left = document.querySelector(".left");

      if(menu_list.style.display === "none"){
        menu_list.style.display = 'block';
        left.style.width = '100%';
        left.style.background = "#F2F2F2";
        hamburger[0].style.transform = 'translateY(18px) rotate(47deg)';
        hamburger[0].style.background = "#282C2F";
        hamburger[1].style.opacity = '0';
        hamburger[2].style.transform = 'translateY(-4px) rotate(-48deg)';
        hamburger[2].style.background = "#282C2F";
    }
    else {
        menu_list.style.display = 'none';    
        left.style.width = '10%';
        left.style.background = 'transparent';
        hamburger[0].style.transform = 'translateY(0px) rotate(0deg)';
        hamburger[0].style.background = "#F2F2F2";
        hamburger[1].style.opacity = '1';
        hamburger[2].style.transform = 'translateY(0px) rotate(0deg)';
        hamburger[2].style.background = "#F2F2F2";
    }
}



//about header text hover function
var h_text_1 = document.getElementById('h_text_1');
h_text_1.addEventListener("mouseout", function() {
    h_text_1.textContent = "harsh";
    h_text_1.style.color = "#F2F2F2";
})
h_text_1.addEventListener("mouseover", function() {
    h_text_1.textContent = "About";
    h_text_1.style.color = "#FF565D";
})

var h_text_2 = document.getElementById('h_text_2')
h_text_2.addEventListener("mouseout", function() {
    h_text_2.textContent = "thakur";
    h_text_2.style.color = "#F2F2F2";
})
h_text_2.addEventListener("mouseover", function() {
    h_text_2.textContent = "contact";
    h_text_2.style.color = "#FF565D";
})


