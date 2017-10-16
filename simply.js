function processApplicationForm() {

	var firstName = document.applicationForm.firstname.value;
	var lastName = document.applicationForm.lastname.value; 
	var Department = document.applicationForm.Department.value;
 
	
	var applicantInfo = '<div>First Name: ' + firstName + '</div>'
    + '<div>Last Name: ' + lastName + '</div>' + '<div>Department: ' 
    +  Department + '</div>';
	

	document.getElementById("applicantInfo").innerHTML = applicantInfo;
}