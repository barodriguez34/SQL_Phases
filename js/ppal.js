$(document).ready(function () {
    // drawChart();
    calcular();

})

function calcular() {
    $('.tableroControl').keyup(function () {
        var elementoa = $(this).attr('data-ppal');
        var elementores = $(this).attr('data-result');
        var elementograp = $(this).attr('data-graph');
        drawChart(elementoa, this.id, elementores, elementograp);
    })
}
google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart(campoa, campob, campores, campograph) {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['%', 0]
    ]);

    var options = {
        width: 400, height: 120,
        redFrom: 1, redTo: 89,
        greenFrom: 90, greenTo: 100,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById(campograph));

    chart.draw(data, options);

    var inputValue = document.getElementById(campoa).value;
    var inputValues = document.getElementById(campob).value;

    setInterval(function () {

        data.setValue(0, 1, t);
        chart.draw(data, options);
    }, 1300);

    var a = Number(inputValue);
    var b = Number(inputValues);
    var t = Math.round((a * 100) / b);
    if (t === Number.NaN) {
        document.getElementById(campores).innerHTML = '0 %';
    } else {
        document.getElementById(campores).innerHTML = t + ' %';
    }
}