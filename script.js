function validateForm() {
    // Get the form
    const form = document.forms["myForm"];
    // Get the fields
    const fields = [
        {
            name: "fname",
            value: form["fname"].value,
            minLength: 5,
            errorMsg: "Name must not be less than 5 characters",
        },
        {
            name: "email",
            value: form["email"].value,
            validator: (val) => val.includes("@"),
            errorMsg: "Please Enter a valid email address",
        },
        {
            name: "phnumnber",
            value: form["phnumnber"].value,
            validator: (val) => val.length === 10 && val !== "1234567890",
            errorMsg:
                "Please enter a valid 10-digit phone number. '1234567890' is not allowed.",
        },
    ];

    // Validate the fields
    for (let field of fields) {
        if (field.minLength && field.value.length < field.minLength) {
            alert(field.errorMsg);
            return false;
        }
        if (field.validator && !field.validator(field.value)) {
            alert(field.errorMsg);
            return false;
        }
    }

    // Validate the password
    const password = form["password"].value;
    const confirmPassword = form["confirmPassword"].value;
    const name = form["fname"].value;

    // Password conditions
    const passwordConditions = [
        {
            condition: password.length < 8,
            errorMsg: "Password must be at least 8 characters long",
        },
        {
            condition: password.toLowerCase() === "password",
            errorMsg: "Password cannot be 'password'",
        },
        {
            condition: password.toLowerCase() === name.toLowerCase(),
            errorMsg: "Password cannot be the same as your name",
        },
    ];

    // Check if any of the conditions are true
    for (let condition of passwordConditions) {
        if (condition.condition) {
            alert(condition.errorMsg);
            return false;
        }
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // If all validations pass, return true
    return true;
}
