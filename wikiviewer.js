$(document).ready(function() {

    $("#search").click(function() {

        var searchTerm = $("#searchTerm").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data) {
                // heading console.log(data[1][0]);
                // description console.log(data[2][0]);
                // link console.log(data[3][0]);
                $("#output").html('');
                for (var i = 0; i < data[1].length; i++) {
                    $("#output").prepend("<div class='btn-primary'><h2><a style='color:black' href=" + data[3][i] + " target='blank'></h2>" + data[1][i] + "</a><p>" + data[2][i] + "</p></div>");
                }
            },
            error: function(errorMessage) {
                alert("error");
            }

        });

    });
    $("#searchTerm").keypress(function(e) {
        if (e.which == 13) {
            $("#search").click();
        }
    });

});
