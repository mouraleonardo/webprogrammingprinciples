// fetchUser.js
// This module fetches user data from the GitHub API and demonstrates destructuring assignment

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
    try {
        // Fetching user data
        const response = await fetch(`https://api.github.com/users/${username}`);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('User not found');
        }

        // Extract JSON data from response
        const userData = await response.json();

        // Destructure relevant properties from userData
        const { login, name, bio, avatar_url: avatarUrl } = userData;

        // Return the destructured user data
        return { login, name, bio, avatarUrl };
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Re-throw error for handling in the HTML file
    }
};

// Function to display user information in the HTML
export const displayUser = ({ login, name, bio, avatarUrl }) => {
    // Select the output div to display user information
    const outputDiv = document.getElementById('userOutput');
    outputDiv.innerHTML = ''; // Clear previous output

    // Create and append user information to the output div
    const userInfo = `
        <h3>${name} (${login})</h3>
        <p>${bio || 'No bio available'}</p>
        <img src="${avatarUrl}" alt="${name}'s avatar" width="100" height="100">
    `;
    outputDiv.innerHTML = userInfo; // Set inner HTML of output div
};
