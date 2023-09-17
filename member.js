function skillsMember() {
    // Get the skills
    var skills = document.getElementById("skills").value;
    // Check if the skills are empty
    if (skills == "") {
        // If the skills are empty, display an error message
        document.getElementById("skillsError").innerHTML = "Please enter your skills";
        // Return false
        return false;
    }
    // If the skills are not empty, display a success message
    document.getElementById("skillsError").innerHTML = "Skills added successfully";
    // Return true
    return true;
}
