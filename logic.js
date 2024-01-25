const MaintenanceRequests = [];


function MaintenanceRequest(Name,Apartment,Email,Number,Issue,status){
    this.Name = Name;
    this.Apartment = Apartment;
    this.Email = Email;
    this.Number = Number;
    this.Issue = Issue;
    this.status = status;
}

function addMaintenanceRequest(newRequest){
    MaintenanceRequests.push(newRequest);
}

//var m1 = new MaintenanceRequest("John Smith",301,"JohnSmith@yahoo.com",123-456-789,"broken Sink","open")
//var m2 = new MaintenanceRequest("John Smith",301,"JohnSmith@yahoo.com",123-456-789,"broken Sink","open")
//var m3 = new MaintenanceRequest("John Smith",301,"JohnSmith@yahoo.com",123-456-789,"broken Sink","open")
//var m4 = new MaintenanceRequest("John Smith",301,"JohnSmith@yahoo.com",123-456-789,"broken Sink","open")

//addMaintenanceRequest(m1);
//addMaintenanceRequest(m2);
//addMaintenanceRequest(m3);
//addMaintenanceRequest(m4);


function showRequests(){
    const RequestsContainer = document.getElementById("Requests-Container");
    RequestsContainer.innerHTML = '';
    MaintenanceRequests.forEach((MaintenanceRequest, index) => {
        const RequestCard = document.createElement('div');
        RequestsContainer.style.display = "flex";
        RequestsContainer.style.flexWrap = "wrap";
        RequestCard.innerHTML = `
        <p>Name:${MaintenanceRequest.Name}</p>
        <p>Apartment:${MaintenanceRequest.Apartment}</p>
        <p>Email:${MaintenanceRequest.Email}</p>
        <p>Issue:${MaintenanceRequest.Issue}</p>
        <p>status:${MaintenanceRequest.status}</p>
        `;
        RequestCard.style.display = "flex";
        RequestCard.style.flexDirection = "column";
        RequestCard.style.border = "1px solid linear-gradient(#9418fd,#571094)";
        RequestCard.style.fontSize = "30px";
        RequestCard.style.color = "white";
        RequestCard.style.margin = "10px";
        RequestCard.style.padding = "40px";
        RequestCard.style.fontFamily = "Poppins";
        RequestCard.style.background = "linear-gradient(#9418fd,#571094)";
        RequestCard.style.borderRadius = "40px";

        RequestsContainer.appendChild(RequestCard);
        });
}


function CreateRequest(){
    const Name = prompt("Enter Name:");
    const Apartment = prompt("Enter Apartment:");
    const Email = prompt("Enter Email:");
    const Number = prompt("Enter Phone Number:");
    const Issue = prompt("Enter Issue:");
    const status = prompt("Enter Status (open/closed):");

    const newRequest = new MaintenanceRequest(Name, Apartment, Email, Number, Issue, status);
    addMaintenanceRequest(newRequest);
    showRequests();

}