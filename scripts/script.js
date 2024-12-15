$(document).ready(function() {
  // Function to display dynamic greeting
  function getGreeting() {
      var currentHour = new Date().getHours();
      var greeting;

      if (currentHour < 12) {
          greeting = "Good Morning";
      } else if (currentHour < 18) {
          greeting = "Good Afternoon";
      } else {
          greeting = "Good Evening";
      }

      $('#greeting').html(greeting+"! <br> I'm Hemanth."); // Set the dynamic greeting
  }

  getGreeting(); // Call the function to update the greeting when the page loads

  // Animate fade-in effect for elements on page load
  $('.fade-in').each(function(index) {
      $(this).delay(index * 500).fadeIn(1000);
  });
});
