menu_list_array=["Paneer Cottage cheese pizza","Chicken Cheese Chizled pizza","Chicken Tandoori pizza","BBQ Chicken Pizza","Tawa pizza"];
function getmenu(){
    var html_data;
    html_data="<ol class='menuList'>";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        html_data=html_data+'<li>'+menu_list_array[i]+'</li>';
    }
    html_data=html_data+"</ol>";
    document.getElementById("display_menu").innerHTML=html_data;
}

function add_item(){
    var html_data;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    html_data="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        html_data=html_data+'<div class="card"'+'<img src="images/pizzaImg.png">'+menu_list_array[i]+'</div>';}
html_data=html_data+"</section>";
document.getElementById("display_addedmenu").innerHTML=html_data;
}