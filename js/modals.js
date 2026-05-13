// Modal management logic
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // A11y: Trap focus inside modal (basic version)
        const closeBtn = modal.querySelector('.close');
        if (closeBtn) closeBtn.focus();
        
        // Set aria-hidden
        modal.setAttribute('aria-hidden', 'false');
    }
}

function closeModalByElement(modalElement) {
    if (modalElement) {
        modalElement.style.display = 'none';
        document.body.style.overflow = 'auto';
        modalElement.setAttribute('aria-hidden', 'true');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Setup generic modal attributes
    document.querySelectorAll('.modal').forEach(modal => {
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
    });

    // Handle clicks outside of modal content and close buttons
    document.addEventListener('click', function(event) {
        // Click on X button
        if (event.target.classList.contains('close-modal') || event.target.classList.contains('close')) {
            event.preventDefault();
            event.stopPropagation();
            const modal = event.target.closest('.modal');
            if (modal) closeModalByElement(modal);
            return false;
        }
        
        // Click outside modal content
        if (event.target.classList.contains('modal')) {
            event.stopPropagation();
            closeModalByElement(event.target);
            return false;
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const openModals = Array.from(document.querySelectorAll('.modal')).filter(m => window.getComputedStyle(m).display !== 'none');
            if (openModals.length > 0) {
                closeModalByElement(openModals[0]);
            }
        }
    });

    // Handle card clicks
    document.querySelectorAll('.card[data-modal]').forEach(card => {
        const modalId = card.getAttribute('data-modal');
        
        // Make card clickable
        card.style.cursor = 'pointer';
        
        // A11y attributes
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-controls', modalId);
        
        card.addEventListener('click', function(event) {
            // Do nothing if clicked on a button inside
            if (event.target.closest('.card-btn')) return;
            openModal(modalId);
        });
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(modalId);
            }
        });
        
        // Setup internal button
        const button = card.querySelector('.card-btn');
        if (button) {
            button.addEventListener('click', function(event) {
                event.stopPropagation();
                openModal(modalId);
            });
        }
    });
});
