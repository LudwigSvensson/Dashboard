const notesTextarea = document.getElementById("textArea");

        notesTextarea.value = localStorage.getItem("notes") || "";

        notesTextarea.addEventListener("input", function() {
            const notesContent = notesTextarea.value;
            localStorage.setItem("notes", notesContent);
        });

        const editableTitle = document.getElementById("edit-title");

// Ladda in tidigare sparad titel vid sidans laddning
editableTitle.textContent = localStorage.getItem("dashboardTitle") || "Ludwigs Dashboard";

// Lyssna på inmatningsevenemang och spara titeln i Local Storage
editableTitle.addEventListener("input", function() {
    const titleContent = editableTitle.textContent;
    localStorage.setItem("dashboardTitle", titleContent);
});       