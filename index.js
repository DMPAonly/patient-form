document.addEventListener("DOMContentLoaded", handleLoadedContent);

function handleLoadedContent() {
    let form1 = document.getElementById("patient-form");
    if(form1){
        const dateInput = document.getElementById("doa");
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;

        if (sessionStorage.getItem("fname")){
            form1.elements['fname'].value = sessionStorage.getItem("fname");
        } 
        if (sessionStorage.getItem("mname")){
            form1.elements['mname'].value = sessionStorage.getItem("mname");
        } 
        if (sessionStorage.getItem("lname")){
            form1.elements['lname'].value = sessionStorage.getItem("lname");
        } 
        if (sessionStorage.getItem("age")){
            form1.elements['age'].value = sessionStorage.getItem("age");
        } 
        if (sessionStorage.getItem("email")){
            form1.elements['mail'].value = sessionStorage.getItem("email");
        } 
        if (sessionStorage.getItem("dateOfAppointment")){
            form1.elements['doa'].value = sessionStorage.getItem("dateOfAppointment");
        } 
        if (sessionStorage.getItem("reason")){
            form1.elements['reason'].value = sessionStorage.getItem("reason");
        } 
        if (sessionStorage.getItem("extraNotes")){
            form1.elements['extra'].value = sessionStorage.getItem("extraNotes");
        } 
        form1.addEventListener("submit", validateForm, false);
    } else{
        console.log("Form1 is not loaded");
    }

    let form2 = document.getElementById("confirmation-form");
    if(form2){
        if(sessionStorage.getItem("mname")){
            document.getElementById("name").textContent = sessionStorage.getItem("fname") + " " + sessionStorage.getItem("mname") + " " + sessionStorage.getItem("lname");
        } else{
            document.getElementById("name").textContent = sessionStorage.getItem("fname") + " " + sessionStorage.getItem("lname");
        }
        document.getElementById("age").textContent = sessionStorage.getItem("age");
        document.getElementById("mail").textContent = sessionStorage.getItem("email");
        document.getElementById("doa").textContent = sessionStorage.getItem("dateOfAppointment");
        document.getElementById("roa").textContent = sessionStorage.getItem("reason");
        document.getElementById("extra").textContent = sessionStorage.getItem("extraNotes");
    } else{
        console.log("Form2 is not loaded");
    }

    let editBtn = document.getElementById("edit-btn");
    if(editBtn){
        editBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    let submitBtn = document.getElementById("submit-btn");
    if(submitBtn){
        submitBtn.addEventListener("click", (event) => {
            event.preventDefault();

            //add code to send form data to the Backend

            const ModalEle = document.getElementById("staticBackdrop");
            const Modal = new bootstrap.Modal(ModalEle);
            if(Modal){
                Modal.show();
                const homeBtn = document.getElementById("ok-btn");
                homeBtn.addEventListener("click", () => {
                    sessionStorage.clear();
                    window.location.href = "index.html";
                })
            }
        });
    }
}

function validateForm(event) {
    let form1 = event.target;
    form1.classList.add('was-validated');
    const selectedDate = new Date(form1.elements["doa"].value);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (selectedDate < currentDate) {
    event.preventDefault();
    form1.elements["doa"].classList.add("is-invalid");
    }

    if (!form1.checkValidity()) {
      event.preventDefault();
    } else{
        event.preventDefault();
        sessionStorage.setItem("fname", form1.elements['fname'].value.trim());
        sessionStorage.setItem("mname", form1.elements['mname'].value.trim());
        sessionStorage.setItem("lname", form1.elements['lname'].value.trim());
        sessionStorage.setItem("age", form1.elements['age'].value.trim());
        sessionStorage.setItem("email", form1.elements['mail'].value.trim());
        sessionStorage.setItem("dateOfAppointment", form1.elements['doa'].value.trim());
        sessionStorage.setItem("reason", form1.elements['reason'].value.trim());
        sessionStorage.setItem("extraNotes", form1.elements['extra'].value.trim());
        window.location.href = "confirmation.html";
    }
}

