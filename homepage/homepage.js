const getLocalStorage = localStorage.getItem("email");

if (getLocalStorage !== null) {
  const collection = document.getElementsByClassName("name-data");
  collection[0].innerHTML = `Hi ${getLocalStorage} nice to E-meet you!`;
}

var data = [
  
];

// menampilkan data ke dalam tabel
function showData() {
  var tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var row = "<tr>";
    row += "<td>" + data[i].name + "</td>";
    row += "<td>" + data[i].email + "</td>";
    row += "<td>" + data[i].mobile + "</td>";
    row +=
      "<td><button class='edit' type='button' onclick='editData(" +
      i +
      ")'>Edit</button>";
    row +=
      "<button class='delete' type='button' onclick='deleteData(" +
      i +
      ")'>Delete</button></td>";
    row += "</tr>";
    tableBody.innerHTML += row;
  }
}

// menambah data ke dalam objek data
function addData() {
  var name = document.querySelector("#addName").value;
  var email = document.querySelector("#addEmail").value;
  var mobile = document.querySelector("#addMobile").value;
  data.push({ name: name, email: email, mobile: mobile });
  showData();
}

// mengedit data dalam objek data
function editData(index) {
  var name = prompt("new name:", data[index].name);
  var email = prompt("Email:", data[index].email);
  var mobile = prompt("Mobile:", data[index].mobile);
  data[index] = { name: name, email: email, mobile: mobile};
  showData();
}

// menghapus data dari objek data
function deleteData(index) {
  data.splice(index, 1);
  showData();
}

// menampilkan data pada saat halaman web dimuat
window.onload = function () {
  showData();
};
