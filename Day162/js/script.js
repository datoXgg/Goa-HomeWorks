document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-container button');
    const searchInput = document.querySelector('.search-container input');
    
    searchBtn.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            window.location.href = `recipes.html?search=${encodeURIComponent(searchInput.value)}`;
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            window.location.href = `recipes.html?search=${encodeURIComponent(searchInput.value)}`;
        }
    });
    
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (email && validateEmail(email)) {
                alert(`Thank you for subscribing with: ${email}`);
                this.reset();
            } else {
                alert('Please enter a valid email address');
            }
        });
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.btn') && !e.target.closest('a')) {
                const recipeLink = this.querySelector('a.btn');
                if (recipeLink) {
                    window.location.href = recipeLink.href;
                }
            }
        });
    });

    const filterControls = document.querySelectorAll('.filter-controls select, .filter-controls input');
    filterControls.forEach(control => {
        control.addEventListener('change', function() {
            applyFilters();
        });
    });
    
    function applyFilters() {
        const categoryFilter = document.querySelector('.filter-controls select:first-child').value;
        const difficultyFilter = document.querySelector('.filter-controls select:last-child').value;
        const searchFilter = document.querySelector('.filter-controls input').value.toLowerCase();
        
        console.log(`Applying filters - Category: ${categoryFilter}, Difficulty: ${difficultyFilter}, Search: ${searchFilter}`);
    }
    
    function initFiltersFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('search');
        const categoryParam = urlParams.get('category');
        const difficultyParam = urlParams.get('difficulty');
        
        if (searchParam) {
            const searchInput = document.querySelector('.filter-controls input');
            if (searchInput) searchInput.value = searchParam;
        }
        
        if (searchParam || categoryParam || difficultyParam) {
            applyFilters();
        }
    }
    
    initFiltersFromURL();
});