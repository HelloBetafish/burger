// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-state").on("click", function(event) {
    var id = $(this).data("id");
    var newState = $(this).data("newstate");
    console.log(id);
    console.log(newState);

    var newDevState = {
      devoured: newState
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevState
    }).then(
      function() {
        console.log("Burger has been devoured!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bg").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
