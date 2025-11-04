// Initialize EmailJS
      emailjs.init('pvt9LdEkuVrjF4NBK'); // Replace with your EmailJS user ID

      // Listen for form submission
      document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form refresh

        // Show loading spinner
        document.getElementById("loading-spinner").style.display = "flex";

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send email using EmailJS
        emailjs.send('service_wzpeo7c', 'template_h3bj9th', {
          name: name,
          email: email,
          message: message
        }).then(function(response) {
          // Hide loading spinner and show success message
          document.getElementById("loading-spinner").style.display = "none";
          alert("Your message has been sent successfully!");
          document.getElementById("contact-form").reset(); // Reset form after submission
        }, function(error) {
          // Hide loading spinner and show error message
          document.getElementById("loading-spinner").style.display = "none";
          alert("Failed to send message. Please try again.");
        });
      });