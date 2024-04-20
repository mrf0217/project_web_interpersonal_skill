// JavaScript code to claim rewards on button click

// Select all claim buttons
const claimButtons = document.querySelectorAll('.hadiah button');

// Function to handle reward claim
function claimReward(event) {
    // Prevent default link behavior
    event.preventDefault();

    // Get the parent container of the clicked button
    const rewardContainer = event.target.closest('.reward-description');

    // Assuming there's a backend function to handle reward claiming,
    // here we can send a request to claim the reward based on the container's content
    // For demonstration purposes, let's log the reward name
    const rewardName = rewardContainer.querySelector('h5').innerText;
    console.log(`Claiming ${rewardName}...`);

    // Add any logic here to actually claim the reward

    // For now, let's simulate a successful claim by changing the button text
    event.target.innerText = 'Claimed';
    // Disable the button to prevent multiple claims
    event.target.disabled = true;

    // Show a notification when the reward is claimed
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.style.color = 'lime'; // Change text color to white
    notification.style.fontStyle='bold';
    notification.innerText = `Congratulations! You have claimed the ${rewardName} for today. You can try to claim the next reward again tomorrow`;
    document.body.insertBefore(notification, document.body.firstChild); // Insert notification at the beginning of the body

    // Remove the notification after a certain time period
    setTimeout(() => {
        notification.remove();
    }, 3000); // Notification will disappear after 3 seconds

    // Disable all claim buttons until the next day
    claimButtons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabled'); // Add disabled class
    });

    // Enable claim buttons again after 24 hours
    setTimeout(() => {
        claimButtons.forEach(button => {
            button.disabled = false;
            button.classList.remove('disabled'); // Remove disabled class
        });
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
}

// Add click event listener to each claim button
claimButtons.forEach(button => {
    button.addEventListener('click', claimReward);
});
