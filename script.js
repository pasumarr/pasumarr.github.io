/* Premium Typography & Neutral Color Scales */
:root {
    --bg-color: #fafafa;
    --text-color: #111111;
    --text-muted: #666666;
    --border-color: #e5e5e5;
    --link-hover: #000000;
}

[data-theme="dark"] {
    --bg-color: #0b0f17;
    --text-color: #f5f5f7;
    --text-muted: #94a3b8;
    --border-color: #222938;
    --link-hover: #ffffff;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    /* Modern minimalist system font stack */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    letter-spacing: -0.01em;
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Navigation Layout */
nav {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    background-color: rgba(250, 250, 250, 0.8);
    backdrop-filter: blur(8px);
    z-index: 100;
}

[data-theme="dark"] nav {
    background-color: rgba(11, 15, 23, 0.8);
}

.nav-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 2rem;
}

.nav-logo {
    font-weight: 700;
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.1rem;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s;
}

.nav-links a:hover, .nav-links a.active {
    color: var(--text-color);
}

#theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.2rem;
    opacity: 0.7;
    transition: opacity 0.2s;
}

#theme-toggle:hover {
    opacity: 1;
}

/* Centered Reading Layout Wrapper */
.content-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

/* Minimal Hero Section */
.hero-section {
    margin-bottom: 3.5rem;
}

.hero-section h1 {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.03em;
}

/* Blinking Terminal Cursor Animation */
.cursor {
    font-weight: 300;
    color: var(--text-muted);
    animation: blink 1s infinite;
    margin-left: 2px;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

/* Symmetric Profile Two-Column Grid */
.profile-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
}

@media (max-width: 650px) {
    .profile-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
}

.profile-column h2 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1.2rem;
}

.profile-list {
    list-style: none;
}

.profile-list li {
    font-size: 1.05rem;
    margin-bottom: 1.2rem;
    color: var(--text-color);
}

.profile-list li strong {
    font-weight: 600;
}

.item-desc {
    font-size: 0.95rem;
    color: var(--text-muted);
    margin-top: 0.2rem;
}

/* Call to Action Footer Link */
.cta-section {
    border-top: 1px solid var(--border-color);
    padding-top: 2rem;
}

.cta-link {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: var(--text-muted);
    font-weight: 500;
    font-size: 1.05rem;
    transition: color 0.2s;
}

.cta-link:hover {
    color: var(--link-hover);
}

.cta-link .arrow {
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
}

.cta-link:hover .arrow {
    transform: translateX(4px);
}
