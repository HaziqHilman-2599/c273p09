$(document).ready(function () {
    var data = Array();
    var labels = Array();
    $.ajax({
        type: "GET",
        url: "getStatistics.php",
        cache: false,
        dataType: "JSON",
        success: function (response) {
            for (i = 0; i < response.length; i++) {
                data.push(parseInt(response[i].population));
                labels.push(response[i].country);
            }
            alert(data);
            alert(labels);
            var barChart = new Chart($("#barChart"), {
                type: 'horizontalBar',
                data: {
                    datasets: [{
                            data: data,
                            backgroundColor: "lightblue",
                            label: 'Population'
                        }],
                    labels: labels
                },
                options: {
                    responsive: true
                }
            });
        },

        error: function (obj, textStatus, errorThrown) {
            alert("Error " + textStatus + ": " + errorThrown);
        }
    });



});
