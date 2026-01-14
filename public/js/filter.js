(function() {
    const STORAGE_KEY = 'notes-filter';

    function getFilterState() {
        const stored = localStorage.getItem(STORAGE_KEY);
        // Default to 'good' if not set
        return stored === 'all' ? 'all' : 'good';
    }

    function setFilterState(state) {
        localStorage.setItem(STORAGE_KEY, state);
    }

    function applyFilter(state) {
        const articles = document.querySelectorAll('article.post[data-good]');
        const separators = document.querySelectorAll('hr.post-separator');

        let visibleCount = 0;
        articles.forEach((article, index) => {
            const isGood = article.dataset.good === 'true';
            const show = state === 'all' || isGood;
            article.style.display = show ? '' : 'none';
            if (show) visibleCount++;
        });

        // Hide separators after hidden articles
        separators.forEach((hr, index) => {
            const prevArticle = articles[index];
            const nextArticle = articles[index + 1];
            if (prevArticle && nextArticle) {
                const prevVisible = prevArticle.style.display !== 'none';
                const nextVisible = nextArticle.style.display !== 'none';
                hr.style.display = (prevVisible && nextVisible) ? '' : 'none';
            }
        });

        // Update toggle button text
        const toggle = document.getElementById('filter-toggle');
        if (toggle) {
            toggle.textContent = state === 'all' ? 'show good' : 'show all';
        }
    }

    function init() {
        const toggle = document.getElementById('filter-toggle');
        if (!toggle) return;

        const state = getFilterState();
        applyFilter(state);

        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const currentState = getFilterState();
            const newState = currentState === 'all' ? 'good' : 'all';
            setFilterState(newState);
            applyFilter(newState);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
