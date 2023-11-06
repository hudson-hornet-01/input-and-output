function displayInformation() {
    var name = document.getElementById("name").value;
    localStorage.setItem("namevalue",name);
    var email = document.getElementById("email").value;
    localStorage.setItem("emailvalue",email);
    var hobby = document.getElementById("hobby").value;
    localStorage.setItem("hobbyvalue",hobby);
    var university = document.getElementById("university").value;
    localStorage.setItem("universityvalue",university);
    var college = document.getElementById("college").value;
    localStorage.setItem("collegevalue",college);
    var qualification = document.getElementById("qualification").value;
    localStorage.setItem("qualificationvalue",qualification);
    var plans = document.getElementById("plans").value;
    localStorage.setItem("plansvalue",plans);
    return false;
}
document.getElementById("output-name").innerHTML=localStorage.getItem("namevalue");
document.getElementById("output-email").innerHTML=localStorage.getItem("emailvalue");
document.getElementById("output-hobby").innerHTML=localStorage.getItem("hobbyvalue");
document.getElementById("output-university").innerHTML=localStorage.getItem("universityvalue");
document.getElementById("output-college").innerHTML=localStorage.getItem("collegevalue");
document.getElementById("output-qualification").innerHTML=localStorage.getItem("qualificationvalue");    
document.getElementById("output-plans").innerHTML=localStorage.getItem("plansvalue");