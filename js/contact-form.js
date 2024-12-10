export const initializeContactForm = () => {
    const form = document.getElementById("contact_form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const button = document.getElementById("send-button");
        
        button.style.transition = "all 0.3s ease";
        button.style.transform = "scale(1.1)";
        button.style.background = "linear-gradient(to top right, #34d399, #10b981)";
        button.value = "Sent!";

        setTimeout(() => {
            button.style.transform = "scale(1)";
            button.style.background = "linear-gradient(to top right, #dbc1fe 10%, #baa4eb 55.52%, #181890 100%)";
            button.value = "Send";
        }, 1500);
    });

    const sendButton = document.getElementById("send-button");
    if (sendButton) {
        sendButton.addEventListener("click", function(e) {
            form.dispatchEvent(new Event("submit"));
        });
    }
};