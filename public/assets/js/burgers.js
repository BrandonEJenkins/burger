$(".submit").on("click", function (event) {
    event.preventDefault();

    var burger_name = {
        burger_name: $("#burger").val().trim(),
    };

    $.ajax("/burger", {
        type: "POST",
        data: burger_name
    }).then(
        function() {
            console.log("created a new burger");
            location.reload();
        }
    );
});

$('.devourBurger').click(function() {
    let id = $(this).data('id');
    let isDevoured = {
        devoured: true
    }

    $.ajax('/burgers/${id}', {
        method: "PUT",
        data: isDevoured
    }).then(function(data) {
        console.log("YUMMY YUM YUM")
        location.reload();
    })
});