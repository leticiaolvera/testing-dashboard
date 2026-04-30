export const testResults = {
  passed: 312,
  failed: 18,
  skipped: 9,
};

export const coverage = [
  { module: 'Authentication', percent: 92 },
  { module: 'Payments', percent: 87 },
  { module: 'Reporting', percent: 74 },
  { module: 'User Management', percent: 68 },
  { module: 'Notifications', percent: 55 },
  { module: 'Search', percent: 83 },
  { module: 'Integrations', percent: 48 },
  { module: 'Dashboard', percent: 91 },
];

export const uat = [
  { feature: 'User Login & SSO', owner: 'Alice Mokoena', status: 'Approved', signOffDate: '2026-04-22' },
  { feature: 'Payment Gateway v2', owner: 'Brian Dlamini', status: 'Approved', signOffDate: '2026-04-25' },
  { feature: 'Automated Reports', owner: 'Celia Nkosi', status: 'In Review', signOffDate: null },
  { feature: 'Role-Based Access', owner: 'David Sithole', status: 'Approved', signOffDate: '2026-04-28' },
  { feature: 'Email Notifications', owner: 'Eva Botha', status: 'Pending', signOffDate: null },
  { feature: 'Bulk Data Import', owner: 'Frank Zulu', status: 'In Review', signOffDate: null },
  { feature: 'API Rate Limiting', owner: 'Grace Naidoo', status: 'Approved', signOffDate: '2026-04-29' },
  { feature: 'Audit Trail Logging', owner: 'Hugo Pretorius', status: 'Pending', signOffDate: null },
];

export const defects = [
  { severity: 'Critical', open: 2,  inProgress: 1, resolved: 5  },
  { severity: 'High',     open: 6,  inProgress: 4, resolved: 21 },
  { severity: 'Medium',   open: 11, inProgress: 7, resolved: 38 },
  { severity: 'Low',      open: 9,  inProgress: 3, resolved: 44 },
];
