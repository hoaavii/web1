new Chart(document.getElementById("x-chart"), {
    type: 'pie',
    data: {
      labels: ["Indoor" , "Outdoor"],
      datasets: [{
        label: "Unit(products)",
        backgroundColor: ["#ffdecd", "#424530"],
        data: [15,29]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Business Statistic'
      }
    }
});


// function showTotalList(){
//   if(localStorage.getItem("orderList") === null){
//     return false;
//   }

//   var TotalList = JSON.parse(localStorage.getItem('orderList'));
//   var tableDashboard = `
//   <tr>

//                   <th></th>
//                   <th>Indoor</th>
//                   <th>Outdoor</th>
//                   <th>All</th>
                  
//                 </tr>
//   `
//   for (let i = 0 ; i < TotalList.length; i++){
//     tableDashboard += 
//     `
//     <tr>
//                   <td>Cost</td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                 </tr>
//     `
//   }
// }

// window.onload = function () {
//   showTotalList() ;
// }