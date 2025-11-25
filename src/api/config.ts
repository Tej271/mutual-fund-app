export const API_CONFIG = {
    BASE_URL: "https://api.mfapi.in",
    ENDPOINTS: {
        LIST: "/mf",
        DETAILS: (schemeCode: number | string) => `/mf/${schemeCode}`,
        SEARCH: (query: string) => `/mf/search?q=${encodeURIComponent(query)}`,
    }
};

