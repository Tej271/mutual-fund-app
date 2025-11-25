
// Used when searching funds: /mf/search?q=axis
export interface MutualFundSearchResult {
    schemeCode: number;
    schemeName: string;
}

// Fund list item from /mf
export interface MutualFundListItem {
    schemeCode: number;
    schemeName: string;
}

// NAV entry inside the data array
export interface NavDataPoint {
    date: string;      
    nav: string;
}

// Main mutual fund details response: /mf/:schemeCode
export interface MutualFundDetails {
    meta: {
        fund_house: string;
        scheme_type: string;
        scheme_category: string;
        scheme_code: number;
        scheme_name: string;
    };

    data: NavDataPoint[];
}
