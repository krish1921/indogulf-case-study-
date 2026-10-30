// All financial data verified from the Research Dossier (Indogulf_7_Slides_Executive_Brief.docx)
// Source: Company FY25 Annual Report data as cited in the research dossier

export const financialData = {
  fy24: {
    year: 'FY 2023–24',
    revenueIndia: 496.57,
    revenueExports: 75.33,
    totalRevenue: 571.90,
    profit: 28.47,
  },
  fy25: {
    year: 'FY 2024–25',
    revenueIndia: 555.29,
    revenueExports: 65.86,
    totalRevenue: 621.15,
    profit: 32.09,
  },
  growthMetrics: {
    totalRevenueGrowth: 8.6,
    domesticGrowth: 11.8,
    exportDecline: -12.7,
    profitGrowth: 12.7,
  },
};

export const revenueChartData = [
  { year: 'FY24', india: 496.57, exports: 75.33, total: 571.90, profit: 28.47 },
  { year: 'FY25', india: 555.29, exports: 65.86, total: 621.15, profit: 32.09 },
];

// Projected (proposed strategy targets, NOT audited)
export const projectionData = [
  { year: 'FY25 (Actual)', revenue: 621.1, ebitda: 9.36, pat: 28.9, pe: 13, cap: 375 },
  { year: 'FY27E', revenue: 711.2, ebitda: 9.91, pat: 37.4, pe: 15, cap: 560 },
  { year: 'FY28E', revenue: 821.2, ebitda: 12.32, pat: 60.0, pe: 18, cap: 1080 },
  { year: 'FY29E', revenue: 961.2, ebitda: 13.90, pat: 83.5, pe: 22, cap: 1837 },
];
