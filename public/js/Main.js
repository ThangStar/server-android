//url = http://localhost:3000/get-all-user
const API = 'http://localhost:3000'
var dataBody = ""
fetch(`${API}/get-all-user`)
     .then(response => response.json())
     .then(data => {
          data.forEach((it, index) => {
               var colorBgPermission = "bg-primary"
               if (it.permission == "admin") {
                    colorBgPermission = "bg-danger"
               }
               dataBody +=
                    ` <tr>
          <th scope="row">${++index}</th>
          <td>
               <img class="imageUser" src="${API}/images/${it.avatar}" alt="">
          </td>
          <td>${it.fullname}</td>
          <td>${it.email}</td>
          <td class="">
               <b class="${colorBgPermission} text-white p-2 fw-bold rounded ">${it.permission}</b>
          </td>
          <td>
               <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
               data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Sửa</button>
               <button type="button" class="btn btn-outline-danger">Xóa</button>
          </td>
     </tr>`
          });
          document.querySelector(".table-group-divider").innerHTML = dataBody
          document.querySelector('#countUser').innerHTML = data.length

     });

const elementAdd = document.querySelector('#addUser')
elementAdd.addEventListener('click', () => {
     const data =
          fetch("/add-user", {
               method: "POST",
               body: JSON.stringify(data)
          }).then(res => {
               console.log("Request complete! response:", res);
          });
})

//set value drop down clicked!
document.querySelectorAll('.itemAuth').forEach((item, index) => {
     item.addEventListener('click', e => {
          document.querySelector('#btnAuth').innerHTML = item.innerHTML
          document.querySelector('#ipAuth').value = item.innerHTML
     })
})

//add user
// document.querySelector('#btnAddUser').addEventListener('click', e => {
//      const data = {
//           email: document.querySelector('#emailAdd').value,
//           fullname: document.querySelector('#fullnameAdd').value,
//           password: document.querySelector('#passwordAdd').value,
//           gender: document.querySelector('#emailAdd').value,
//           permission: document.querySelector('#btnAuth').innerHTML
//      }
//      console.log(data);
//      fetch("/add-user", {
//           method: "POST",
//           body: JSON.stringify(data)
//      }).then(res => {
//           console.log("Request complete! response:", res);
//      });
// })

Highcharts.chart('container', {
     chart: {
       zoomType: 'xy'
     },
     title: {
       text: 'Thống kê số lượng user và tin nhắn đã được gửi đi (năm)',
       align: 'left'
     },
     subtitle: {
       text: 'Số lượng (tin nhắn)'
     },
     xAxis: [{
       categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
         'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
       crosshair: true
     }],
     yAxis: [{ // Primary yAxis
       labels: {
         format: '{value} tin nhắn',
         style: {
           color: Highcharts.getOptions().colors[1]
         }
       },
       title: {
         text: '',
       }
     }, { // Secondary yAxis
       title: {
         text: '',
       },
       labels: {
         format: '{value} ',
         style: {
           color: Highcharts.getOptions().colors[0]
         }
       },
       opposite: true
     }],
     tooltip: {
       shared: true
     },
     legend: {
       align: 'left',
       x: 80,
       verticalAlign: 'top',
       y: 80,
       floating: true,
       backgroundColor:
         Highcharts.defaultOptions.legend.backgroundColor || // theme
         'rgba(255,255,255,0.25)'
     },
     series: [{
       name: 'Người',
       type: 'column',
       yAxis: 1,
       data: [27, 28, 21, 34, 29, 28, 45, 51, 39,
         60, 28, 32],
       tooltip: {
         valueSuffix: ' tin nhắn'
       }
   
     }, {
       name: 'Tin nhắn',
       type: 'spline',
       data: [1, 2, 8, 7, 3, 13, 14, 10, 5,
         7, 11, 16],
       tooltip: {
         valueSuffix: ' người'
       }
     }]
   });