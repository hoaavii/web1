const $ = document.querySelector.bind(document);

var login = $(".option-login");
var validation1 = $("#form-1");
var validation2 = $("#form-2");
var logout = $(".option-logout");


function redirect() {
    var url = window.location.href;//cac href hien co tren trang 
    var id = url.split('?');//truot den ?
    id = id[1];
    console.log = (id);
    switch (id) {
        case "plants":
            {
                document.getElementById('plant').style.display = "block";
                document.getElementById('change').style.display = "none";
                break;
            }
        case "contactus":
            {
                document.getElementById('change').innerHTML = '<div>contactus</div>';
                break;
            }
        case "plantcare":
            {
                document.getElementById('change').style.display = 'none';
                document.getElementById('takecare').style.display = 'flex';
                break;
            }
        case "cart":
            {

                document.getElementById('change').style.display = 'none';
                document.getElementById('cart').style.display = 'block';
                break;
            }
    }
}
window.onload = function ()//chuyen huong trang web
{
    redirect();
}
function home_redirect(){
    // alert('Home');
   window.location="index.html";//chuyen huong den trang chu
//    window.location="http://127.0.0.1:5500/doan/html/index.html"; 
}
function pr_redirect(){
    window.location="index.html?plants"
}
function redirect_admin() {
    window.location.href = "admin.html";
}
function Subscribe_redirect() {
    alert('Subscribed!');
}

