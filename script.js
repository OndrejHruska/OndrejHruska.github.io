function toggleSection(id) {
    const content = document.getElementById(id);
    const isExpanded = content.classList.contains("expand");

    // Toggle 'expand' class to control visibility
    content.classList.toggle("expand", !isExpanded);

    // Update button text
    const button = content.previousElementSibling;
    button.textContent = isExpanded ? "Expand" : "Collapse";
}