SELECT lottery_tickets.*
FROM lotteries 
INNER JOIN lottery_tickets ON lotteries.id = lottery_tickets.lottery_id
WHERE lotteries.slug='2uofShZuX9J6mWi519Vw'
AND lottery_tickets.created_at <= '2020-08-20';