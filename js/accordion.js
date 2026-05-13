// Accordion and Accessibility logic
document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.solution-toggle');
    
    // Add accessibility attributes to accordions dynamically
    document.querySelectorAll('.solution-category').forEach((category, index) => {
        const toggle = category.querySelector('.solution-toggle');
        const content = category.querySelector('.solution-content');
        
        if (toggle && content) {
            const contentId = `solution-content-${index}`;
            const toggleId = `solution-toggle-${index}`;
            
            content.id = contentId;
            toggle.id = toggleId;
            
            toggle.setAttribute('aria-expanded', category.classList.contains('active') ? 'true' : 'false');
            toggle.setAttribute('aria-controls', contentId);
            content.setAttribute('aria-labelledby', toggleId);
            content.setAttribute('role', 'region');
        }
    });

    // Function to update toggle icons and ARIA based on active state
    function updateToggleStates() {
        document.querySelectorAll('.solution-category').forEach(category => {
            const toggleIcon = category.querySelector('.toggle-icon');
            const toggleBtn = category.querySelector('.solution-toggle');
            const isActive = category.classList.contains('active');
            
            if (toggleIcon) {
                toggleIcon.textContent = isActive ? '−' : '+';
                toggleIcon.style.transform = 'rotate(0deg)';
            }
            if (toggleBtn) {
                toggleBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            }
        });
    }
    
    // Handle click on toggle elements
    function handleToggleClick(toggle) {
        const category = toggle.parentElement;
        const wasActive = category.classList.contains('active');
        
        // Close all sections first
        document.querySelectorAll('.solution-category').forEach(cat => {
            cat.classList.remove('active');
        });
        
        // Toggle the clicked section if it wasn't active
        if (!wasActive) {
            category.classList.add('active');
        }
        
        // Update states
        updateToggleStates();
        
        // Save the active section to localStorage
        if (!wasActive) {
            const sectionId = toggle.textContent.trim();
            localStorage.setItem('lastActiveSolution', sectionId);
        } else {
            localStorage.removeItem('lastActiveSolution');
        }
    }
    
    // Initialize toggles
    toggles.forEach(toggle => {
        // Add click event to toggle sections
        toggle.addEventListener('click', function() {
            handleToggleClick(this);
        });
        
        // Add keyboard accessibility
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleToggleClick(this);
            }
        });
        
        // Add hover effect
        toggle.addEventListener('mouseenter', function() {
            if (!this.parentElement.classList.contains('active')) {
                const icon = this.querySelector('.toggle-icon');
                if(icon) icon.style.transform = 'scale(1.2)';
            }
        });
        
        toggle.addEventListener('mouseleave', function() {
            if (!this.parentElement.classList.contains('active')) {
                const icon = this.querySelector('.toggle-icon');
                if(icon) icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Initialize first section as open by default or restore last active section
    const lastActiveSection = localStorage.getItem('lastActiveSolution');
    if (lastActiveSection) {
        toggles.forEach(toggle => {
            if (toggle.textContent.trim() === lastActiveSection) {
                handleToggleClick(toggle);
            }
        });
    } else if (toggles.length > 0) {
        handleToggleClick(toggles[0]);
    }
});
