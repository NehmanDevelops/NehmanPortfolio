// Helper to get the correct base path for assets
export const getBasePath = () => {
    return process.env.NODE_ENV === 'production' ? '/NehmanPortfolio' : '';
};

// Helper to prefix asset paths with basePath
export const assetPath = (path) => {
    const basePath = getBasePath();
    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${normalizedPath}`;
};
