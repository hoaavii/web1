var cart = [
    {
        id: 16,
        title: "Philodendron Green",
        image: "img/philodendron1.jpg",
        img1: "img/philodendron1.jpg",
        img2: "img/philodendron2.jpg",
        img3: "img/philodendron3.jpg",
        img4: "img/philodendron4.jpg",
        describe: "Why is the Philodendron our most popular plant year after year? It could be its heart-shaped green leaves, easy-going nature, or quick-growing trailing vines. Snag this low-maintenance houseplant now to bring the outdoors in.",
        cost: 310000,
        category: "indoor",
        amount: 1,
    },
]
let cartList;
let purchase_his;

function showCart() {

    var html = '';
    cartList = JSON.parse(localStorage.getItem('cartList'));

    //console.dir(cartList);
    const carts = cartList.map((item, idx) => {
        html += `
        <tr>
            <td>
            <img src="${item.image}" style="width: 200px"></img>
            </td>
            <td>${item.title}</th>
            <td>${item.cost.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</th>
            <th><input class="cart-quantity-input" type="number" value="${item.amount}" data-idx="${idx}" min="1"></th>

            <td>
                <span data-idx="${idx}" class="delete-cart">
                    <i class="fa-solid fa-delete-left"></i>
                </span>
            </td>
        </tr>
        `;
    })

    document.getElementById("mycart").innerHTML = html;
    var quantityList = document.querySelectorAll(".cart-quantity-input");
    var priceTotal = document.querySelector(".price-total span");
    var deleteBtnList = document.querySelectorAll(".delete-cart");
    priceTotal.innerText = cartList.reduce((curr, acc) => acc.amount * acc.cost + curr, 0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

    quantityList.forEach((quantity) => {
        quantity.addEventListener("change", () => {
            var idx = Number(quantity.dataset.idx);
            cartList[idx].amount = Number(quantity.value);
            localStorage.setItem("cart", JSON.stringify(cartList));
            priceTotal.innerText = cartList.reduce((curr, acc) => acc.amount * acc.cost + curr, 0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        })
    })

    deleteBtnList.forEach((btn) => {
        btn.addEventListener("click", () => {
            var idx = Number(btn.dataset.idx);
            if (confirm('Are you sure you want to detele ?')) {
                cartList.splice(idx, 1);
            }
            //cartList.splice(idx, 1);
            localStorage.setItem("cartList", JSON.stringify(cartList));
            priceTotal.innerText = cartList.reduce((curr, acc) => acc.amount * acc.cost + curr, 0);
            showCart();
            console.dir(deleteBtnList)
        })
    })


}

showCart();

const checkout = document.querySelector(".btn-checkout");

checkout.addEventListener("click", (e) => {
    document.getElementById("information").style.display='block';
    document.getElementById("btn-checkout").style.display='none';
    e.preventDefault();

    const isLogin = JSON.parse(localStorage.getItem("isLogin"));

    if (!isLogin) {
        window.location.href = "/html/login.html";
        return;
    }

})

function showCountpr()
{
    document.getElementById("countpr").innerHTML=cartList.length;
}
showCountpr();

function agree() {
    var t = document.getElementById("infor").children;
    var fullname = t[0].children[1].children[0].value;
    // alert(fullname);
    var address = t[1].children[1].children[0].value;
    var phone = t[2].children[1].children[0].value;
    var email = t[3].children[1].children[0].value;
    var customer = new Array(fullname,address,phone,email);
    localStorage.setItem("customer", JSON.stringify(customer));
    console.dir(customer);
    showcustomer();

    const orderList = JSON.parse(localStorage.getItem("orderList"));

    const date = Date.now();
    const today = new Date(date);

    const userArray = JSON.parse(localStorage.getItem('userArr'));
    const priceTotal = cartList.reduce((curr, acc) => acc.amount * acc.cost + curr, 0);
    
    cartList.forEach((cart) => {
        orderList.push({
            ...cart,
            //User: idPerson,
            CustomerName: customer,
            PriceTotal: priceTotal,
            createdAt: today.toLocaleDateString(),
        })
    })


    localStorage.setItem("orderList", JSON.stringify(orderList));
    showCart();
    localStorage.setItem("cartList", JSON.stringify([]))

}

function showcustomer() {
    document.getElementById("rowmb").style.display='block';
    var customer = localStorage.getItem("customer");
    var t = JSON.parse(customer);
    var inf = 
    '<tr>'+
        '<td>Full Name</td>'+
        '<td>'+t[0]+'</td>'+
    '</tr>'+
    '<tr>'+
        '<td>Address</td>'+
        '<td>'+t[1]+'</td>'+
    '</tr>'+
    '<tr>'+
        '<td>Phone</td>'+
        '<td>'+t[2]+'</td>'+
    '</tr>'+
    '<tr>'+
        '<td>Email</td>'+
        '<td>'+t[3]+'</td>'+
    '</tr>';
    document.getElementById("infor").innerHTML = inf;
    document.getElementById("btn-checkout").style.display='none';
    document.getElementById("btn-agree").style.display='none';

    //let userArray = JSON.stringify(localStorage.getItem('userArr'));
    //localStorage.getItem("")

}
//let historyList;
// function historyList() {
    
//     historyList = cartList;
//     //var historyList = JSON.stringify(localStorage.getItem('cartList'));
//     localStorage.setItem("historyList", JSON.stringify(orderList));
//     const userArray = JSON.parse(localStorage.getItem('userArr'));
//     localStorage.setItem("historyList", JSON.stringify(userArray));
//     // orderList.forEach((cart) => {
//     //     userArray.push({
//     //         ...cart,
//     //         // CustomerName: customer,
//     //         // createdAt: today.toLocaleDateString(),
//     //     })
//     // })
//     // if (isLogin) {
//     //     localStorage.setItem("currentUser", JSON.stringify(userArray));
//     // }
// }
