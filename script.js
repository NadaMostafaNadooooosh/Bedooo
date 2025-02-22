document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-dark-mode");
    const body = document.body;

    // ✅ استرجاع الوضع المحفوظ ✅
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️"; // أيقونة الشمس
    }

    // ✅ عند الضغط على زر التبديل ✅
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // ✅ حفظ الاختيار ✅
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.textContent = "☀️"; // أيقونة الشمس
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.textContent = "🌙"; // أيقونة القمر
        }
    });
});
