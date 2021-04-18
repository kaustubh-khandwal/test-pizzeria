menu_list_array = ["Chicken tandoori pizza","Veg supreme pizza","paneer tikka pizza","Deluxe veggie pizza","Veg extravaganza pizza"]

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menu_list'>"
    menu_list_array.sort();
    for (let i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata+'<li>' + menu_list_array[i] + '<li>';
        
    }
htmldata = htmldata +"<ol>"
document.getElementById("display_menu").innerHTML= htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item)
    menu_list_array.sort()
    htmldata="<section class='cards'>"
    for (let i = 0; i < menu_list_array.length; i++) {
        htmldata=htmldata+"<div class='cards'>"+"<img src='images/pizzaImg.png'/>"+ menu_list_array[i]+"</div>";

        
    }
    htmldata=htmldata+"<section/>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}