const MaintenanceRequests = [];


function MaintenanceRequest(FirstName,LastName,Apartment,Email,PhoneNumber,Issue){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Apartment = Apartment;
    this.Email = Email;
    this.PhoneNumber = PhoneNumber;
    this.Issue = Issue;
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

function RemoveRequest(index){
    MaintenanceRequests.splice(index,1);
    showRequests();
}
function showRequests(){
    const RequestsContainer = document.getElementById("Requests-Container");
    RequestsContainer.innerHTML = '';
    MaintenanceRequests.forEach((MaintenanceRequest, index) => {
        const RequestCard = document.createElement('div');
        RequestsContainer.style.display = "flex";
        RequestsContainer.style.flexWrap = "wrap";
        RequestCard.innerHTML = `
        <p>FirstName:${MaintenanceRequest.FirstName}</p>
        <p>LastName:${MaintenanceRequest.LastName}</p>
        <p>Apartment:${MaintenanceRequest.Apartment}</p>
        <p>Email:${MaintenanceRequest.Email}</p>
        <p>Phone Number:${MaintenanceRequest.PhoneNumber}</p>
        <p>Issue:${MaintenanceRequest.Issue}</p>
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
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove Request';
        removeButton.addEventListener('click', () => {
            RemoveRequest(index);
        });
        removeButton.style.color = "white";
        removeButton.style.alignContent;
        RequestCard.appendChild(removeButton);

        RequestsContainer.appendChild(RequestCard);
        });
}


function CreateRequest(){
    const FirstName = prompt("Enter FirstName:");
    const LastName = prompt("Enter LastName");
    const Apartment = prompt("Enter Apartment:");
    const Email = prompt("Enter Email:");
    const Number = prompt("Enter Phone Number:");
    const Issue = prompt("Enter Issue:");
    const newRequest = new MaintenanceRequest(FirstName,LastName, Apartment, Email, Number, Issue);
    addMaintenanceRequest(newRequest);
    showRequests();

}