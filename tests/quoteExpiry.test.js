const dayjs = require('dayjs');

function isExpired(createdAt, days = 14) {
  return dayjs().isAfter(dayjs(createdAt).add(days, 'day'));
}

describe('Quote Expiry Logic', () => {
  it('should mark quote as expired after 14 days', () => {
    const oldDate = dayjs().subtract(15, 'day').toISOString();
    expect(isExpired(oldDate)).toBe(true);
  });

  it('should not mark quote as expired within 14 days', () => {
    const recentDate = dayjs().subtract(10, 'day').toISOString();
    expect(isExpired(recentDate)).toBe(false);
  });
});
