// Sample data: Websites and their associated keywords
const websites = [
    {
        name: "Flower Search | Apps",
        url: "https://floweryt6.github.io/apps/Flower%20Search.html",
        keywords: ["search", "engine", "internet", "f", "l", "o", "w", "e", "er", "flower", "flower search"]
    },
    {
        name: "Flower_r4sr0 Github Website",
        url: "https://floweryt6.github.io",
        keywords: ["programming", "coding","f", "l", "o", "w", "e", "er", "flower", "github", "Flower_r4sr0", "website"]
    },
    {
        name: "Links | Flower_r4sr0 Github Website",
        url: "https://floweryt6.github.com/links",
        keywords: ["programming", "coding","f", "l", "o", "w", "e", "er", "flower", "github"]
    },
    {
        name: "Wikis | Flower_r4sr0 Github Website",
        url: "https://floweryt6.github.com/wiki",
        keywords: ["programming", "coding","f", "l", "o", "w", "e", "er", "flower", "github", "wiki"]
    },
    {
        name: "Stack Overflow",
        url: "https://floweryt6.github.com/wiki/create.html",
        keywords: ["programming", "coding","f", "l", "o", "w", "e", "er", "flower", "github", "wiki", "create"]
    },
    {
        name: "Flower_r4sr0 on YouTube",
        url: "https://youtube.com/@Flower_r4sr0",
        keywords: ["youtube","f", "l", "o", "w", "e", "er", "flower"]
    },
    {
        name: "Bitly",
        url: "https://bit.ly/m/Flower_r4sr0",
        keywords: ["bitly","f", "l", "o", "w", "e", "er", "flower"]
    },
    {
        name: "Flower_r4sr0 - Topic on YouTube",
        url: "https://youtube.com/@Flower_r4sr0-Topic",
        keywords: ["youtube","f", "l", "o", "w", "e", "er", "flower"]
    },
    {
        name: "Flower_r4sr0 on Discord [SEARCH NOTICE: Url is Not Found In search.js]",
        url: "https://floweryt6.github.io/apps/Flower%20Search/404",
        keywords: ["discord","f", "l", "o", "w", "e", "er", "flower"]
    },
]

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const query = document.getElementById('searchQuery').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    
    if (query.length === 0) {
        resultsDiv.innerHTML = 'Please enter a search term.';
        return;
    }
    
    // Filter websites based on matching keywords
    const results = websites.filter(site => 
        site.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );

    // Display the results
    if (results.length > 0) {
        resultsDiv.innerHTML = '<ul>' + results.map(site => 
            `<li><a href="${site.url}" target="_blank">${site.name}</a></li>`
        ).join('') + '</ul>';
    } else {
        resultsDiv.innerHTML = 'No matching websites found.';
    }
});