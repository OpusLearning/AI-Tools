const tools = [
    {
        name: "Hotshot.co",
        description: "Create video content quickly with AI.",
        image: "images/hotshot.png",  // Add images for each tool
        link: "https://hotshot.co"
    },
    {
        name: "Luma Dream",
        description: "AI-powered video creation tool.",
        image: "images/luma_dream.png",
        link: "https://luma.ai"
    },
    {
        name: "Machine",
        description: "Advanced AI video creation.",
        image: "images/machine.png",
        link: "https://machine.ai"
    },
    // Add more tools in the same format
];

const contentDiv = document.getElementById("content");

// Function to render the tool cards
function renderTools(tools) {
    contentDiv.innerHTML = '';
    tools.forEach(tool => {
        const card = document.createElement("div");
        card.className = "tool-card";
        card.innerHTML = `
            <img src="${tool.image}" alt="${tool.name}">
            <div class="tool-card-content">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <a href="${tool.link}" target="_blank">Visit Site</a>
            </div>
        `;
        contentDiv.appendChild(card);
    });
}

// Initial render
renderTools(tools);

// Search Functionality
document.getElementById("search-bar").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTools = tools.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm) || 
        tool.description.toLowerCase().includes(searchTerm)
    );
    renderTools(filteredTools);
});
