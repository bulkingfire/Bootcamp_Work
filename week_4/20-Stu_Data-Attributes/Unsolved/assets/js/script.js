var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

    if(element.matches("box")) {
    // Get the current value of the image's data-state attribute
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = "visible";
      element.setAttribute("data-state", "visible");

      // Update the image's source to the string being stored in the data-animate attribute
      element.setAttribute("src", element.dataset.visible);
     } 
    }
  // TODO: Complete function
  
});
