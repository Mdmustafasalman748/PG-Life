// =========================
// PROPERTY DATA
// =========================

const properties = [

    {
        id: 1,
        name: "Maple Student Residence",
        city: "Ottawa",
        location: "Downtown Ottawa",
        price: 750,
        roomType: "Private",
        available: true,
        imageClass: "property-one"
    },

    {
        id: 2,
        name: "Downtown Student House",
        city: "Toronto",
        location: "North York, Toronto",
        price: 900,
        roomType: "Shared",
        available: true,
        imageClass: "property-two"
    },

    {
        id: 3,
        name: "Lakeside Student Living",
        city: "Mississauga",
        location: "City Centre, Mississauga",
        price: 800,
        roomType: "Private",
        available: true,
        imageClass: "property-three"
    },

    {
        id: 4,
        name: "University Heights Residence",
        city: "Toronto",
        location: "Scarborough, Toronto",
        price: 850,
        roomType: "Private",
        available: true,
        imageClass: "property-four"
    },

    {
        id: 5,
        name: "Capital Student Homes",
        city: "Ottawa",
        location: "Centretown, Ottawa",
        price: 700,
        roomType: "Shared",
        available: true,
        imageClass: "property-one"
    },

    {
        id: 6,
        name: "Square One Student Living",
        city: "Mississauga",
        location: "Square One, Mississauga",
        price: 825,
        roomType: "Shared",
        available: true,
        imageClass: "property-three"
    }

];


// =========================
// GET HTML ELEMENTS
// =========================

const citySearch =
    document.getElementById("citySearch");

const searchButton =
    document.getElementById("searchButton");

const searchMessage =
    document.getElementById("searchMessage");

const propertyContainer =
    document.getElementById("propertyContainer");


// =========================
// DISPLAY PROPERTIES
// =========================

function displayProperties(propertyList) {

    propertyContainer.innerHTML = "";


    if (propertyList.length === 0) {

        propertyContainer.innerHTML = `
            <div class="col-12">

                <div class="alert alert-warning">
                    No properties found.
                </div>

            </div>
        `;

        return;
    }


    propertyList.forEach(function (property) {

        const propertyCard = `

            <div class="col-md-6 col-lg-4">

                <div class="property-card">

                    <div
                        class="property-image ${property.imageClass}">

                        <span class="property-badge">

                            ${
                                property.available
                                ? "Available"
                                : "Not Available"
                            }

                        </span>

                    </div>


                    <div class="p-4">

                        <h5 class="fw-bold">

                            ${property.name}

                        </h5>


                        <p class="text-muted">

                            📍 ${property.location}

                        </p>


                        <div
                            class="d-flex justify-content-between">

                            <div>

                                <small class="text-muted">
                                    Starting from
                                </small>

                                <div class="price">

                                    $${property.price}/month

                                </div>

                            </div>


                            <div class="text-end">

                                <small class="text-muted">
                                    Room
                                </small>

                                <div>

                                    ${property.roomType}

                                </div>

                            </div>

                        </div>


                        <button
                            class="btn btn-outline-primary w-100 mt-3"
                            onclick="viewProperty(${property.id})">

                            View Property

                        </button>

                    </div>

                </div>

            </div>

        `;


        propertyContainer.innerHTML += propertyCard;

    });

}


// =========================
// SEARCH
// =========================

searchButton.addEventListener(
    "click",
    function () {

        const city =
            citySearch.value.trim();


        if (city === "") {

            searchMessage.textContent =
                "Please enter a city or location.";

            displayProperties(properties);

            return;
        }


        const matchingProperties =
            properties.filter(function (property) {

                return (
                    property.city.toLowerCase()
                    === city.toLowerCase()
                );

            });


        if (matchingProperties.length === 0) {

            searchMessage.textContent =
                `No properties found in ${city}.`;

        } else {

            searchMessage.textContent =
                `Found ${matchingProperties.length} properties in ${city}.`;

        }


        displayProperties(matchingProperties);


        // Scroll to properties

        document
            .getElementById("properties")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// =========================
// VIEW PROPERTY
// =========================

function viewProperty(propertyId) {

    const property =
        properties.find(function (property) {

            return property.id === propertyId;

        });


    if (!property) {
        return;
    }


    alert(
        `${property.name}\n\n` +
        `Location: ${property.location}\n` +
        `Price: $${property.price}/month\n` +
        `Room: ${property.roomType}`
    );

}


// =========================
// CITY CARD CLICK
// =========================

const cityCards =
    document.querySelectorAll(".city-card");


cityCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const city =
                card.dataset.city;


            citySearch.value = city;


            searchButton.click();

        }
    );

});


// =========================
// INITIAL PAGE LOAD
// =========================

displayProperties(properties);
