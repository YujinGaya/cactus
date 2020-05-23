const data: [string, number, string, string][][] = [
  [
    ['큰통 치킨', 4500, '식비', '카카오뱅크'],
    ['죽동 피제리아 D216', 14000, '식비', '카카오뱅크'],
    ['용돈', 130000, '카카오뱅크', '기타수익'],
    ['육쌈냉면', 6000, '식비', '갚을 돈'],
    ['큰통 치킨', 4500, '식비', '카카오뱅크'],
  ],
  [
    ['서브웨이', 4800, '식비', '카카오뱅크'],
    ['닭가슴살', 25000, '식비', '카카오뱅크'],
    ['택시 (둔산 -> 카이스트)', 7000, '교통비', '카카오뱅크'],
    ['북측식당', 6000, '갚을 돈', '카카오뱅크'],
  ],
  [
    ['자유적금', 30000, '카카오적금', '카카오뱅크'],
    ['이자', 2167, '카카오뱅크', '기타수익'],
    ['넷플릭스', 3625, '취미', '카카오뱅크'],
    ['북측식당', 6000, '식비', '카카오뱅크'],
  ],
];

export default {
  transactions: data.map((transactions, i) => ({
    date: 18400 - i,
    transactions: transactions.map((tx) => ({
      name: tx[0],
      amount: tx[1],
      credit: tx[2],
      debit: tx[3],
    })),
  })),
};

// data.transactions.forEach(({ date, transactions: txs }) => {
//   txs.forEach((tx) => {
//     console.log({ date, ...tx });
//     addTransaction({ date, ...tx });
//   });
// });
