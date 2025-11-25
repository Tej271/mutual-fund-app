import { API_CONFIG } from "./config";

export interface MutualFundScheme {
  schemeCode: string | number;
  schemeName: string;
}

export interface NAVData {
  date: string;
  nav: string;
}

export interface FundDetails {
  meta: {
    fund_house: string;
    scheme_type: string;
    scheme_category: string;
    scheme_code: string | number;
    scheme_name: string;
  };
  data: NAVData[];
}

export interface SearchResult {
  schemeCode: string;
  schemeName: string;
}

class MutualFundAPI {
  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Mutual Fund API Error: ${response.statusText}`);
    }
    return response.json();
  }

  async searchFunds(query: string): Promise<SearchResult[]> {
    if (!query.trim()) return [];

    const url = API_CONFIG.ENDPOINTS.SEARCH(query);
    const response = await this.fetchData<MutualFundScheme[]>(`${API_CONFIG.BASE_URL}${url}`);

    return response.map((scheme) => ({
      schemeCode: String(scheme.schemeCode),
      schemeName: scheme.schemeName,
    }));
  }

  async getFundDetails(schemeCode: string | number): Promise<FundDetails> {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DETAILS(schemeCode)}`;
    return this.fetchData<FundDetails>(url);
  }

  async getLatestNAV(schemeCode: string | number): Promise<{ nav: string; date: string }> {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DETAILS(schemeCode)}/latest`;
    const data = await this.fetchData<{ data: NAVData[] }>(url);

    if (!data.data || data.data.length === 0) {
      throw new Error("No NAV data available");
    }

    const latest = data.data[0];
    return {
      nav: latest.nav,
      date: latest.date,
    };
  }

  async getNAVHistory(schemeCode: string | number, count: number = 10): Promise<NAVData[]> {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DETAILS(schemeCode)}`;
    const data = await this.fetchData<{ data: NAVData[] }>(url);

    if (!data.data || data.data.length === 0) {
      throw new Error("No NAV history available");
    }

    // Return the most recent NAVs, limited by count
    return data.data.slice(0, count);
  }
}

export const mutualFundAPI = new MutualFundAPI();
