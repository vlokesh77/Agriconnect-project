/* =====================================
   AGRIFRIEND AUTHENTICATION
===================================== */


/* =====================================
   CREATE DEFAULT ADMIN
===================================== */

function createDefaultAdmin() {

    let users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];


    const adminExists =
        users.some(
            user =>
                user.email ===
                "admin@gmail.com"
        );


    if (!adminExists) {

        const admin = {

            name: "Administrator",

            email: "admin@gmail.com",

            password: "admin123",

            phone: "9999999999",

            role: "admin"

        };


        users.push(admin);


        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );
    }
}


/* Run admin creation */

createDefaultAdmin();


/* =====================================
   SIGNUP
===================================== */

const signupForm =
    document.getElementById(
        "signupForm"
    );


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                .getElementById("name")
                .value
                .trim();


            const email =
                document
                .getElementById("email")
                .value
                .trim()
                .toLowerCase();


            const password =
                document
                .getElementById("password")
                .value;


            const phone =
                document
                .getElementById("phone")
                .value
                .trim();


            let users =
                JSON.parse(
                    localStorage.getItem(
                        "users"
                    )
                ) || [];


            /* Check existing email */

            const existingUser =
                users.find(
                    user =>
                        user.email === email
                );


            if (existingUser) {

                document.getElementById(
                    "message"
                ).innerText =
                    "Email already registered!";

                document.getElementById(
                    "message"
                ).style.color = "red";

                return;
            }


            /* Create farmer */

            const newUser = {

                name: name,

                email: email,

                password: password,

                phone: phone,

                role: "farmer"

            };


            users.push(newUser);


            localStorage.setItem(
                "users",
                JSON.stringify(users)
            );


            document.getElementById(
                "message"
            ).innerText =
                "Signup successful! Redirecting...";


            document.getElementById(
                "message"
            ).style.color = "green";


            signupForm.reset();


            setTimeout(
                function() {

                    window.location.href =
                        "login.html";

                },
                1200
            );

        }
    );
}


/* =====================================
   LOGIN
===================================== */

const loginForm =
    document.getElementById(
        "loginForm"
    );


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document
                .getElementById(
                    "loginEmail"
                )
                .value
                .trim()
                .toLowerCase();


            const password =
                document
                .getElementById(
                    "loginPassword"
                )
                .value;


            const users =
                JSON.parse(
                    localStorage.getItem(
                        "users"
                    )
                ) || [];


            const user =
                users.find(
                    u =>
                        u.email === email &&
                        u.password === password
                );


            if (!user) {

                const message =
                    document.getElementById(
                        "loginMessage"
                    );

                message.innerText =
                    "Invalid email or password.";

                message.style.color = "red";

                return;
            }


            /* Save current user */

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );


            /* Role-based redirection */

            if (user.role === "admin") {

                window.location.href =
                    "admin/dashboard.html";

            } else {

                window.location.href =
                    "farmer/dashboard.html";

            }

        }
    );
}