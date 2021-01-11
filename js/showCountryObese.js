$(document).ready(function () {
    $("#idCountry").change(function () {
        var country = $(this).val();
        alert("You have selected - " + country);
        $.ajax({
            type: "GET",
            url: "getCountryDetails.php",
            data: "id=" + country,
            cache: false,
            dataType: "JSON",
            success: function (response) {
                var message = "<tbody><tr><td>" + response.population + "</td><td>" + response.obese + "</td></tr></tbody>"; 
                $("#obeseTable").append(message);
            },
            error: function (obj, textStatus, errorThrown) {
                alert("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
});
