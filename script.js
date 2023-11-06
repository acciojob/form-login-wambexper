function getFormvalue() {
    // Get the form elements by their name attributes
    const firstName = document.forms["form1"]["fname"].value;
    const lastName = document.forms["form1"]["lname"].value;
    
    // Format the alert message to match the expected format
    alert(firstName + ' ' + lastName);

    // Prevent the form from submitting and refreshing the page
    return false;
}
