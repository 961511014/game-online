// Main JavaScript file for Game Online website

document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if(searchBar && searchButton) {
        searchButton.addEventListener('click', function() {
            performSearch(searchBar.value);
        });
        
        searchBar.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') {
                performSearch(searchBar.value);
            }
        });
    }
    
    // Game hover effect for mobile devices
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            const gameName = this.querySelector('.game-name');
            if(gameName) {
                gameName.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Fullscreen button for game pages
    const fullscreenButton = document.getElementById('fullscreen-btn');
    const gameIframe = document.querySelector('.game-iframe-container iframe');
    
    if(fullscreenButton && gameIframe) {
        fullscreenButton.addEventListener('click', function() {
            if(gameIframe.requestFullscreen) {
                gameIframe.requestFullscreen();
            } else if(gameIframe.mozRequestFullScreen) { // Firefox
                gameIframe.mozRequestFullScreen();
            } else if(gameIframe.webkitRequestFullscreen) { // Chrome, Safari & Opera
                gameIframe.webkitRequestFullscreen();
            } else if(gameIframe.msRequestFullscreen) { // IE/Edge
                gameIframe.msRequestFullscreen();
            }
        });
    }
    
    // Like button functionality
    const likeButton = document.getElementById('like-btn');
    
    if(likeButton) {
        likeButton.addEventListener('click', function() {
            this.classList.toggle('liked');
            const likeCount = this.querySelector('span');
            
            if(this.classList.contains('liked')) {
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
            } else {
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
            }
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.footer-newsletter form');
    
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if(emailInput && emailInput.value) {
                // Here you would normally send this to a server
                alert('感谢您的订阅！');
                emailInput.value = '';
            }
        });
    }
});

// Search function
function performSearch(query) {
    if(query.trim() === '') return;
    
    // In a real application, you would redirect to a search results page
    // For now, we'll just redirect to a dummy search page
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
}

// Game rating function
function rateGame(stars) {
    const allStars = document.querySelectorAll('.rating .star');
    const ratingValue = document.getElementById('rating-value');
    
    if(allStars.length > 0 && ratingValue) {
        // Reset all stars
        allStars.forEach(star => {
            star.classList.remove('active');
        });
        
        // Activate stars up to the selected one
        for(let i = 0; i < stars; i++) {
            allStars[i].classList.add('active');
        }
        
        // Update rating value
        ratingValue.textContent = stars;
        
        // Here you would normally send this rating to a server
    }
}

// Add game to favorites
function addToFavorites(gameId) {
    // In a real application, you would store this in a database or local storage
    alert('游戏已添加到收藏夹！');
    
    const favButton = document.getElementById('fav-btn');
    if(favButton) {
        favButton.innerHTML = '<i class="fas fa-heart"></i> 已收藏';
        favButton.classList.add('favorited');
    }
}

// Report game issues
function reportIssue() {
    const issueModal = document.getElementById('issue-modal');
    if(issueModal) {
        issueModal.style.display = 'block';
    }
}

// Close modal
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Submit issue report
function submitIssue() {
    const issueText = document.getElementById('issue-text');
    
    if(issueText && issueText.value.trim() !== '') {
        // Here you would normally send this to a server
        alert('感谢您的反馈！我们会尽快处理。');
        closeModal();
        issueText.value = '';
    } else {
        alert('请描述问题');
    }
}
