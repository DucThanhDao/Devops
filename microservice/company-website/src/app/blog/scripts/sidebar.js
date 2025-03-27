'use client';

export function initSidebarScroll() {
    const sidebar = document.getElementById('blogSidebar');
    const content = document.querySelector('.blog-content');
    const header = document.querySelector('.blog-post-hero');
    
    if (!sidebar || !content || !header) return;

    // Store the initial width
    const parentWidth = sidebar.parentElement.offsetWidth;
    sidebar.style.width = parentWidth + 'px';

    function updateSidebar() {
        const contentRect = content.getBoundingClientRect();
        const contentTop = contentRect.top;
        const contentBottom = contentRect.bottom;
        const viewportHeight = window.innerHeight;

        if (contentTop <= 0) {
            if (contentBottom <= viewportHeight) {
                // At bottom of content
                sidebar.style.position = 'absolute';
                sidebar.style.bottom = '0';
                sidebar.style.top = 'auto';
            } else {
                // While scrolling content
                sidebar.style.position = 'fixed';
                sidebar.style.top = '32px';
            }
        } else {
            // Above content
            sidebar.style.position = 'static';
            sidebar.style.top = 'auto';
            sidebar.style.bottom = 'auto';
        }
    }

    // Update width on resize
    window.addEventListener('resize', () => {
        const newWidth = sidebar.parentElement.offsetWidth;
        sidebar.style.width = newWidth + 'px';
    });

    window.addEventListener('scroll', updateSidebar);
    window.addEventListener('resize', updateSidebar);

    // Initial position
    updateSidebar();

    // Cleanup
    return () => {
        window.removeEventListener('scroll', updateSidebar);
        window.removeEventListener('resize', updateSidebar);
    };
}