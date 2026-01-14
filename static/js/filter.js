(function() {
    const STORAGE_KEY = 'notes-filter';
    const POSTS_PER_PAGE = 5;

    function getFilterState() {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'all' ? 'all' : 'passable';
    }

    function setFilterState(state) {
        localStorage.setItem(STORAGE_KEY, state);
    }

    function applyFilter(state, page) {
        page = page || 1;

        // Try different selectors to debug
        const test1 = document.querySelectorAll('article');
        const test2 = document.querySelectorAll('article.post');
        const test3 = document.querySelectorAll('[data-passable]');
        console.log('filter.js: article=' + test1.length + ', article.post=' + test2.length + ', [data-passable]=' + test3.length);

        const allArticles = Array.from(document.querySelectorAll('article.post[data-passable]'));
        const separators = Array.from(document.querySelectorAll('hr.post-separator'));

        console.log('filter.js: found ' + allArticles.length + ' articles');

        if (allArticles.length === 0) return;

        // Get visible articles based on filter
        const visibleArticles = state === 'all'
            ? allArticles
            : allArticles.filter(a => a.dataset.passable === 'true');

        console.log('filter.js: ' + visibleArticles.length + ' passable, showing page ' + page);

        const totalPages = Math.max(1, Math.ceil(visibleArticles.length / POSTS_PER_PAGE));
        const currentPage = Math.min(Math.max(1, page), totalPages);
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;
        const pageArticles = visibleArticles.slice(startIndex, endIndex);

        console.log('filter.js: showing ' + pageArticles.length + ' articles on this page');

        // Hide all articles and separators first
        allArticles.forEach((article, i) => {
            article.style.display = 'none';
            if (separators[i]) separators[i].style.display = 'none';
        });

        // Show articles for this page, with separators between them
        pageArticles.forEach((article, i) => {
            article.style.display = '';
            // Show separator after this article if there's another one following
            if (i < pageArticles.length - 1) {
                const domIndex = allArticles.indexOf(article);
                if (separators[domIndex]) {
                    separators[domIndex].style.display = '';
                }
            }
        });

        // Update toggle button
        const toggle = document.getElementById('filter-toggle');
        if (toggle) {
            toggle.textContent = state === 'all' ? 'show passable' : 'show all';
        }

        // Update pagination
        updatePagination(currentPage, totalPages, state);
    }

    function updatePagination(currentPage, totalPages, state) {
        const nav = document.querySelector('.pagination');
        if (!nav) return;

        nav.innerHTML = '';

        if (totalPages <= 1) {
            nav.style.display = 'none';
            return;
        }
        nav.style.display = '';

        if (currentPage > 1) {
            const prev = document.createElement('a');
            prev.href = '#';
            prev.className = 'previous';
            prev.textContent = '‹ Previous';
            prev.onclick = function(e) {
                e.preventDefault();
                applyFilter(state, currentPage - 1);
                window.scrollTo(0, 0);
            };
            nav.appendChild(prev);
        }

        const span = document.createElement('span');
        span.className = 'page-number';
        span.textContent = 'Page ' + currentPage + ' of ' + totalPages;
        nav.appendChild(span);

        if (currentPage < totalPages) {
            const next = document.createElement('a');
            next.href = '#';
            next.className = 'next';
            next.textContent = 'Next ›';
            next.onclick = function(e) {
                e.preventDefault();
                applyFilter(state, currentPage + 1);
                window.scrollTo(0, 0);
            };
            nav.appendChild(next);
        }
    }

    function init() {
        var toggle = document.getElementById('filter-toggle');
        if (!toggle) {
            console.log('filter.js: toggle not found');
            return;
        }

        var state = getFilterState();
        console.log('filter.js: init with state=' + state);
        applyFilter(state, 1);

        toggle.onclick = function(e) {
            e.preventDefault();
            var currentState = getFilterState();
            var newState = currentState === 'all' ? 'passable' : 'all';
            setFilterState(newState);
            applyFilter(newState, 1);
        };
    }

    // Script is at end of body, so DOM is ready
    init();
})();
