// Design Shots Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    
    // Get all design shot cards
    const designShotCards = document.querySelectorAll('.design-shot-card');
    
    // Function to open modal
    function openModal(imageSrc, caption) {
        modalImage.src = imageSrc;
        modalImage.alt = caption;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    // Function to close modal
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    // Add click event listeners to design shot cards
    designShotCards.forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imageSrc = img.src;
            const caption = img.alt;
            openModal(imageSrc, caption);
        });
    });
    
    // Close modal when clicking the close button
    modalClose.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Prevent modal from closing when clicking on the image
    modalImage.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(event) {
        if (modal.classList.contains('show')) {
            if (event.key === 'ArrowLeft') {
                // Navigate to previous image
                navigateImage(-1);
            } else if (event.key === 'ArrowRight') {
                // Navigate to next image
                navigateImage(1);
            }
        }
    });
    
    // Function to navigate between images
    function navigateImage(direction) {
        const currentImageSrc = modalImage.src;
        const currentIndex = Array.from(designShotCards).findIndex(card => {
            const img = card.querySelector('img');
            return img && img.src === currentImageSrc;
        });
        
        if (currentIndex !== -1) {
            let newIndex = currentIndex + direction;
            
            // Wrap around to the end if going before the first image
            if (newIndex < 0) {
                newIndex = designShotCards.length - 1;
            }
            // Wrap around to the beginning if going after the last image
            else if (newIndex >= designShotCards.length) {
                newIndex = 0;
            }
            
            const newCard = designShotCards[newIndex];
            const newImg = newCard.querySelector('img');
            const newImageSrc = newImg.src;
            const newCaption = newImg.alt;
            
            openModal(newImageSrc, newCaption);
        }
    }
    
    // Add touch/swipe support for mobile
    let startX = 0;
    let startY = 0;
    
    modal.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    });
    
    modal.addEventListener('touchend', function(event) {
        if (!modal.classList.contains('show')) return;
        
        const endX = event.changedTouches[0].clientX;
        const endY = event.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Check if it's a horizontal swipe (not vertical)
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Swipe left - next image
                navigateImage(1);
            } else {
                // Swipe right - previous image
                navigateImage(-1);
            }
        }
    });
});
