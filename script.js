function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

const navItems = document.querySelectorAll("#navList a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");
    });
});

function copyToClipboard() {
    const text = document.getElementById("textToCopy");
    text.select(); // Select the text
    text.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy"); // Copy the text
    alert("Copied: " + text.value); // Notify the user
}