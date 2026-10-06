/* =====================================
   AGRIFRIEND APPLICATION
===================================== */


/* =====================================
   GET LOGGED-IN USER
===================================== */

function getLoggedInUser() {

    return JSON.parse(
        localStorage.getItem(
            "loggedInUser"
        )
    );

}


/* =====================================
   ADMIN ACCESS
===================================== */

function checkAdmin() {

    const user =
        getLoggedInUser();


    if (
        !user ||
        user.role !== "admin"
    ) {

        alert(
            "Admin login required!"
        );

        window.location.href =
            "../login.html";

    }

}


/* =====================================
   FARMER ACCESS
===================================== */

function checkFarmer() {

    const user =
        getLoggedInUser();


    if (
        !user ||
        user.role !== "farmer"
    ) {

        alert(
            "Farmer login required!"
        );

        window.location.href =
            "../login.html";

    }

}


/* =====================================
   LOGOUT
===================================== */

function logout() {

    localStorage.removeItem(
        "loggedInUser"
    );


    window.location.href =
        "../login.html";

}


/* =====================================
   DEFAULT CROPS
===================================== */

function createDefaultCrops() {

    let crops =
        JSON.parse(
            localStorage.getItem(
                "crops"
            )
        );


    if (!crops) {

        crops = [

            {
                id: 1,

                name: "Rice",

                season: "Kharif",

                soil: "Clay Soil",

                description:
                    "Rice requires sufficient water and warm conditions."
            },


            {
                id: 2,

                name: "Wheat",

                season: "Rabi",

                soil: "Loamy Soil",

                description:
                    "Wheat grows well in cool and dry conditions."
            },


            {
                id: 3,

                name: "Cotton",

                season: "Kharif",

                soil: "Black Soil",

                description:
                    "Cotton requires warm climate and well-drained soil."
            },


            {
                id: 4,

                name: "Chilli",

                season: "Kharif",

                soil: "Loamy Soil",

                description:
                    "Chilli requires warm conditions and suitable irrigation."
            }

        ];


        localStorage.setItem(
            "crops",
            JSON.stringify(crops)
        );

    }

}


/* Create default crops */

createDefaultCrops();


/* =====================================
   DEFAULT PRICES
===================================== */

function createDefaultPrices() {

    let prices =
        JSON.parse(
            localStorage.getItem(
                "prices"
            )
        );


    if (!prices) {

        prices = [

            {
                id: 1,
                crop: "Rice",
                price: "₹2500",
                unit: "Quintal"
            },

            {
                id: 2,
                crop: "Wheat",
                price: "₹2300",
                unit: "Quintal"
            },

            {
                id: 3,
                crop: "Cotton",
                price: "₹7000",
                unit: "Quintal"
            },

            {
                id: 4,
                crop: "Chilli",
                price: "₹8000",
                unit: "Quintal"
            }

        ];


        localStorage.setItem(
            "prices",
            JSON.stringify(prices)
        );

    }

}

createDefaultPrices();


/* =====================================
   DEFAULT TIPS
===================================== */

function createDefaultTips() {

    let tips =
        JSON.parse(
            localStorage.getItem(
                "tips"
            )
        );


    if (!tips) {

        tips = [

            {
                id: 1,

                title: "Proper Irrigation",

                description:
                    "Provide water according to crop requirements and avoid unnecessary water usage."
            },

            {
                id: 2,

                title: "Soil Testing",

                description:
                    "Test soil regularly to understand nutrient requirements."
            },

            {
                id: 3,

                title: "Pest Management",

                description:
                    "Regularly monitor crops for pests and diseases."
            },

            {
                id: 4,

                title: "Crop Rotation",

                description:
                    "Crop rotation can help maintain soil health."
            },

            {
                id: 5,

                title: "Weather Awareness",

                description:
                    "Consider weather conditions before major field activities."
            },

            {
                id: 6,

                title: "Organic Practices",

                description:
                    "Use suitable organic farming practices where appropriate."
            }

        ];


        localStorage.setItem(
            "tips",
            JSON.stringify(tips)
        );

    }

}

createDefaultTips();


/* =====================================
   DEFAULT SCHEMES
===================================== */

function createDefaultSchemes() {

    let schemes =
        JSON.parse(
            localStorage.getItem(
                "schemes"
            )
        );


    if (!schemes) {

        schemes = [

            {
                id: 1,

                title: "PM-KISAN",

                description:
                    "Information about PM-KISAN can be displayed here."
            },

            {
                id: 2,

                title: "Irrigation Support",

                description:
                    "Information about suitable irrigation support programmes."
            },

            {
                id: 3,

                title: "Soil Health",

                description:
                    "Information related to soil health programmes."
            },

            {
                id: 4,

                title: "Farmer Support",

                description:
                    "Relevant farmer support information."
            }

        ];


        localStorage.setItem(
            "schemes",
            JSON.stringify(schemes)
        );

    }

}

createDefaultSchemes();