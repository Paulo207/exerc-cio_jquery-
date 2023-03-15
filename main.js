$(document).ready(function() {
  $("#taskForm").submit(function(event) {
    event.preventDefault();
    var taskName = $("#taskInput").val();
    if (taskName !== "") {
      $("#taskList").append("<li>" + taskName + "</li>");
      $("#taskInput").val("");
    }
  });
  $(document).on("click", "#taskList li", function() {
    $(this).toggleClass("completed");
  });
});