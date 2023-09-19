document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    let currentOpenModal = null; // To keep track of the currently open modal

    cards.forEach(card => {
        // Set the background image for each card
        const imagePath = card.dataset.card;
        card.style.backgroundImage = `url('${imagePath}')`;

        // Create an overlay for each modal
        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        // Get the modal specific to this card and append the overlay to it
        const modal = card.querySelector('.my-modal');
        modal.appendChild(overlay);

        // Event listener to open the modal when the card is clicked
        card.addEventListener('click', (event) => {
            modal.showModal();
            currentOpenModal = modal; // Set the current opened modal
            event.stopPropagation();
        });

        // Event listener to close the modal when the overlay is clicked
        overlay.addEventListener('click', function() {
            if (currentOpenModal) {
                currentOpenModal.close();
            }
        });
    });
});
