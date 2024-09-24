
    document.getElementById('userInfoForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(this);
        const userInfo = {};
        
        // Convert FormData to a plain object
        formData.forEach((value, key) => {
            userInfo[key] = value;
        });

        // Display submitted data in the console (you can change this to any desired action)
        console.log(userInfo);

        // Show an alert with the submitted information
        alert("Form submitted successfully!\n" +
              "Name: " + userInfo.firstName + " " + userInfo.lastName + "\n" +
              "Contact: " + userInfo.phone + ", " + userInfo.address + "\n" +
              "Email: " + userInfo.email + "\n" +
              "Age: " + userInfo.age + "\n" +
              "Income: $" + userInfo.income);

        // Optionally, reset the form after submission
        this.reset();
    };

