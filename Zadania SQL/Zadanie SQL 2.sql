SELECT timezone, count(timezone) count
FROM lotteries 
GROUP BY timezone