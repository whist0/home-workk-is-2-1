const addService = () => {
    let serviceName = document.getElementById("serviceName").value;
    let servicePrice = document.getElementById("servicePrice").value;
    let serviceDuration = document.getElementById("serviceDuration").value;
    let serviceDescription = document.getElementById("serviceDescription").value;
    let serviceImage = document.getElementById("serviceImage").value;

    const servicesContainer = document.getElementById("servicesContainer");

    const serviceCard = document.createElement("div");
    serviceCard.classList.add("serviceCard");

    const serviceCardContent = `
    <h2>${serviceName}</h2>
    <p><strong>Цена:</strong> ${servicePrice}</p>
    <p><strong>Продолжительность:</strong> ${serviceDuration}</p>
    <p><strong>Описание:</strong> ${serviceDescription}</p>
    <img class="serviceImage" src="${serviceImage}" alt="${serviceName}">
    `;

    serviceCard.innerHTML = serviceCardContent;
    servicesContainer.appendChild(serviceCard);

    document.getElementById("serviceName").value = "";
    document.getElementById("servicePrice").value = "";
    document.getElementById("serviceDuration").value = "";
    document.getElementById("serviceDescription").value = "";
    document.getElementById("serviceImage").value = "";
}