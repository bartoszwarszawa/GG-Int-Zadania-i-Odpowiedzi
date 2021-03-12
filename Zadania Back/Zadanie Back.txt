public function getLotteryTickets() {
    return function (String $slug, Carbon $specifiedMonth = null) {
        $lotteryTickets = Lottery::where('slug', $slug)
            ->firstOrFail()
            ->lotteryTickets
            ->where('created_at', '>=', $specifiedMonth ? $specifiedMonth : Carbon::now()->subMonth()) 
            ->all();
        return $lotteryTickets;
    };
}

Myślę, że ze względu na to, że nie ma dodatkowego parametru, który mógłby wpłynąć na rezultach closure taka implementacja
nie ma większego sensu. Funkcja przeze mnie nazwana getLotteryTickets mogłaby sama zwracać wszystkie 
dane i zwracanie closure jest tak naprawdę zbędne.
Jeżeli implementacja by się trochę zmieniła i istniałby parametr dodatkowy, który wpływałby na zawartość closure to wtedy 
widziałbym w takim zapisie większy sens. 