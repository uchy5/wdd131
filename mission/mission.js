document.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.querySelector("#theme-selector");
    
    function changeTheme() {
        const isDarkMode = themeSelector.value === "dark";
        
        document.body.classList.toggle("dark", isDarkMode);
        
        const logo = document.querySelector(".logo");
        console.log(`Logo image should be: ${logo.src}`);
    }
    
    themeSelector.addEventListener("change", changeTheme);
});
