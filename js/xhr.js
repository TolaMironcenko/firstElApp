// const url = "https://timetable.tusur.ru/api/v2/raspisanie_vuzov"
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText)
    }
}

xhttp.open("GET", "https://timetable.tusur.ru/api/v2/raspisanie_vuzov", true);
xhttp.send();

function myFunction (data) {
    console.log(JSON.parse(data))
}