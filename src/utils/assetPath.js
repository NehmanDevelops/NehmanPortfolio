// Helper to get the correct base path for assets
// Detects GitHub Pages vs Vercel at runtime
export const getBasePath = () => {
    // Server-side or build-time: use the env variable
    if (typeof window === 'undefined') {
        return process.env.NEXT_PUBLIC_BASE_PATH || '';
    }
    // Client-side: detect GitHub Pages by hostname
    if (window.location.hostname.includes('github.io')) {
        return '/NehmanPortfolio';
    }
    // Vercel or localhost: use root path
    return '';
};

// Helper to prefix asset paths with basePath
export const assetPath = (path) => {
    const basePath = getBasePath();
    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${normalizedPath}`;
};

