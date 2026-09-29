if (sessionStorage.getItem("mediaPortalDemo") !== "true") {
    window.location.href = "index.html";
}

const username =
    sessionStorage.getItem("mediaPortalUser") || "Member";

const userName = document.getElementById("userName");

if (userName) {
    userName.textContent = username;
}

function logout() {

    sessionStorage.removeItem("mediaPortalDemo");
    sessionStorage.removeItem("mediaPortalUser");

    window.location.href = "index.html";

}
