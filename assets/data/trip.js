window.TRIP_DATA = {
  travelers: "명명이와 하여니공주",
  dates: "2026.08.20 - 2026.08.29",
  homeBase: "Urgell Barcelona",
  heroImage: "assets/images/hero/hero-01.jpg",
  sources: [
    { name: "Sagrada Familia 공식", url: "https://sagradafamilia.org/en/tickets" },
    { name: "Park Guell 공식", url: "https://parkguell.barcelona/en/buy-tickets" },
    { name: "Sant Pau 공식", url: "https://santpaubarcelona.org/en/visita/visita-lliure/" },
    { name: "Casa Batllo Magical Nights", url: "https://www.casabatllo.es/en/online-tickets/visit-magic-nights/" },
    { name: "Sitges Festa Major", url: "https://www.sitgesanytime.com/en/explore/festivals-of-interest/pln355/sitges-festa-major-1" },
    { name: "Rodalies Catalunya", url: "https://rodalies.gencat.cat/en/horaris/" },
    { name: "Renfe", url: "https://www.renfe.com/es/en" },
    { name: "FGC", url: "https://www.fgc.cat/en/" },
    { name: "Montserrat mountain transport", url: "https://turistren.cat/en/trains/montserrat-rack-railway-and-funiculars/" },
    { name: "Barcelona Airport", url: "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat.html" }
  ],
  photoCredit: "각 장소마다 대표 장면이 겹치지 않도록 실제 관광지 사진을 골라 넣었습니다.",
  flight: [
    "CA124  2026.08.19 13:05 서울 -> 14:15 베이징",
    "CA845  2026.08.20 02:50 베이징 -> 08:15 바르셀로나",
    "CA572  2026.08.29 18:55 바르셀로나 -> 2026.08.30 12:10 베이징",
    "CA709  2026.08.30 18:50 베이징 -> 22:00 서울"
  ],
  days: [
    day(1, "08.20", "Thu", "도착 · Sant Antoni · Gracia", "Arrival light day", "첫날은 무리하지 않고 공항 이동, 숙소 주변 적응, Sant Antoni 시장, Gracia 축제 산책으로만 구성합니다.", [
      stop("08:15", "Barcelona Airport", "Barcelona El Prat Airport Terminal 1", "airport", "driving", guide("입국 후에는 수하물, eSIM 연결, 택시 또는 차량 승차 위치를 먼저 정리합니다.", "장거리 비행 직후라 공항에서 오래 머물지 말고 물만 챙긴 뒤 숙소 방향으로 바로 이동하는 흐름이 좋습니다."), "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat.html"),
      stop("10:20", "Urgell 숙소 인근", "Urgell Barcelona", "lodging", "driving", guide("체크인 전 동네 감각을 잡는 구간입니다.", "큰 짐을 맡길 수 있는지 확인하고, 가까운 카페나 마트 위치, 물 구매 장소, 귀가 기준점이 될 큰 도로를 함께 기억해둡니다.")),
      stop("11:00", "Mercat de Sant Antoni", "Mercat de Sant Antoni Barcelona", "lodging", "walking", guide("첫 식사와 동네 적응을 겸하는 실내 시장입니다.", "시장 외관을 한 바퀴 보고 안쪽에서 가볍게 먹은 뒤, 숙소까지 돌아가는 길을 일부러 걸어보면 이후 일정이 훨씬 편해집니다.")),
      stop("13:00", "숙소 휴식", "Urgell Barcelona", "lodging", "walking", guide("숙소는 13:00부터 체크인 가능하므로 이때 들어가 휴식을 시작합니다.", "샤워, 낮잠, 보조배터리 충전, 저녁 축제용 가벼운 가방 정리까지 끝내고 첫날 체력을 아끼는 것이 핵심입니다.")),
      stop("18:30", "Vila de Gracia", "Vila de Gracia Barcelona", "gracia", "transit", guide("Festa Major de Gracia 분위기를 가볍게 맛보는 저녁 산책입니다.", "공식 프로그램과 장식 거리는 당일 변동될 수 있으니 현장에서 사람이 지나치게 몰리는 골목은 짧게 보고, 밝고 넓은 길을 기준으로 움직입니다."), "https://festamajordegracia.cat/"),
      stop("22:00", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", guide("첫날은 늦게 버티지 않는 것이 다음 날 만족도를 좌우합니다.", "숙소에 돌아오면 Sagrada Familia 티켓 QR, 여권 보관, 물, 편한 신발을 바로 준비하고 잠드는 흐름으로 마무리합니다."))
    ]),
    day(2, "08.21", "Fri", "Sagrada Familia · Sant Pau · Park Guell", "Gaudi main day", "가우디와 모더니스타 핵심을 보는 메인 데이입니다. 한낮에는 숙소 휴식을 넣어 Park Guell까지 체력을 남깁니다.", [
      stop("08:35", "숙소 출발", "Urgell Barcelona", "lodging", "walking", guide("예약 시간보다 여유 있게 출발해 입장 대기와 보안검색 변수를 흡수합니다.", "QR, 여권명과 티켓명, 가방 크기를 확인하고 Sagrada Familia 앞에서는 사진보다 입장 동선을 먼저 잡습니다.")),
      stop("09:30", "Sagrada Familia", "Sagrada Familia Barcelona", "sagrada", "transit", guide("입장 직후에는 중앙 네이브에서 천장 구조와 빛의 방향을 먼저 봅니다.", "스테인드글라스 색이 바닥과 기둥에 어떻게 번지는지 천천히 따라가고, 탑 입장이 있다면 엘리베이터와 하산 동선을 우선 확인합니다."), "https://sagradafamilia.org/en/tickets"),
      stop("11:30", "Avinguda de Gaudi", "Avinguda de Gaudi Barcelona", "avinguda", "walking", guide("Sagrada Familia와 Sant Pau를 잇는 보행축이라 이동 자체가 쉬는 시간입니다.", "그늘이 있는 쪽으로 천천히 걷고, 뒤돌아보면 성당 파사드가 길 끝에 걸리는 장면이 좋아 사진을 짧게 남기기 좋습니다.")),
      stop("12:00", "Sant Pau", "Recinte Modernista de Sant Pau Barcelona", "santpau", "walking", guide("Sant Pau는 인파가 상대적으로 덜해 건축 디테일을 차분히 보기 좋은 곳입니다.", "중앙 정원과 파빌리온 외관을 먼저 보고, 더우면 내부 전시와 복도 동선을 섞어 체온을 낮추며 관람합니다."), "https://santpaubarcelona.org/en/visita/visita-lliure/"),
      stop("13:15", "점심", "Restaurants near Recinte Modernista de Sant Pau Barcelona", "avinguda", "walking", guide("점심은 맛집 욕심보다 오후 회복을 위한 속도와 위치가 중요합니다.", "Park Guell 입장 시간이 뒤에 있으므로 너무 무겁게 먹지 말고, 물과 당 보충을 함께 해두면 언덕 이동이 편합니다.")),
      stop("15:00", "숙소 휴식", "Urgell Barcelona", "lodging", "transit", guide("한낮 더위를 끊어주는 핵심 회복 구간입니다.", "샤워와 낮잠을 짧게 하고 Park Guell 티켓, 이동 경로, 물, 모자만 다시 확인해서 저녁 일정의 체력을 남깁니다.")),
      stop("17:20", "Park Guell", "Park Guell Barcelona", "parkguell", "taxi", guide("예약 시간에 맞춰 Monumental Zone 중심으로 봅니다.", "El Drac, Sala Hipostila, 타일 벤치와 전망 구간 순서로 보면 동선이 자연스럽고, 언덕길은 무리하지 말고 쉬엄쉬엄 끊어갑니다."), "https://parkguell.barcelona/en/buy-tickets"),
      stop("20:00", "Gracia 저녁", "Vila de Gracia Barcelona restaurants", "gracia", "walking", guide("Park Guell 이후에는 Gracia 쪽으로 내려와 저녁을 먹는 흐름이 좋습니다.", "축제까지 욕심내면 피곤해질 수 있으니 식사 만족도를 우선하고, 컨디션이 좋을 때만 짧게 골목 분위기를 봅니다.")),
      stop("22:15", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", guide("가우디 메인 데이를 무사히 닫는 복귀 구간입니다.", "사진 백업, 다음 날 해변용 준비물, 수건이나 얇은 겉옷을 정리하고 발 피로가 있으면 바로 쉬는 편이 좋습니다."))
    ]),
    day(3, "08.22", "Sat", "Sant Antoni · Barceloneta · Sants", "Sea and festival", "낮에는 바다, 밤에는 Sants 축제입니다. 해변과 식사를 분리해 너무 오래 땡볕 아래 있지 않게 합니다.", [
      stop("10:15", "Sant Antoni Brunch", "Sant Antoni Barcelona brunch", "lodging", "walking", guide("느린 브런치로 시작해 전날 피로를 풀어주는 구간입니다.", "오늘은 햇빛 노출이 많으니 식사 때 물을 충분히 마시고, 해변으로 가기 전 가방을 최대한 가볍게 만듭니다.")),
      stop("11:45", "Barceloneta", "Barceloneta Barcelona", "barceloneta", "transit", guide("바다로 들어가기 전 Barceloneta 동네의 골목과 해변 방향을 잡습니다.", "소매치기와 호객이 섞이는 구간이라 휴대폰은 손에 오래 들고 있지 말고, 큰 짐은 몸 앞쪽에 둡니다.")),
      stop("12:00", "Barceloneta Beach", "Barceloneta Beach Barcelona", "barceloneta", "walking", guide("수영보다 바다 분위기와 사진, 짧은 휴식을 목표로 잡는 해변 구간입니다.", "8월 한낮 햇빛이 강하니 그늘과 음료 보충을 우선하고, 귀중품을 두고 둘이 동시에 물가로 들어가지는 않습니다.")),
      stop("14:30", "Can Sole", "Can Sole Barcelona", "barceloneta", "walking", guide("Barceloneta의 클래식한 식사 포인트로 잡은 점심입니다.", "예약이 있다면 시간 엄수, 없다면 대기 시간을 보고 Port Vell 일정을 줄이는 식으로 전체 흐름을 지키는 것이 좋습니다.")),
      stop("16:30", "Port Vell", "Port Vell Barcelona", "portvell", "walking", guide("Rambla de Mar와 항구 풍경을 가볍게 걷는 구간입니다.", "햇빛이 강하면 쇼핑몰이나 그늘을 끼고 짧게 보고, 사진은 항구와 보행교가 함께 보이는 지점에서 빠르게 남깁니다.")),
      stop("18:00", "숙소 휴식", "Urgell Barcelona", "lodging", "transit", guide("저녁 축제 전에 샤워와 신발 교체를 하는 회복 시간입니다.", "Sants는 밤에 사람이 많으므로 지갑, 휴대폰, 교통카드 위치를 고정하고 필요 없는 물건은 숙소에 둡니다.")),
      stop("20:45", "Festa Major de Sants", "Placa d'Osca Barcelona", "santsFestival", "transit", guide("Gracia보다 동네 축제의 현지감이 강한 밤 산책입니다.", "장식 거리와 Placa d'Osca 주변을 중심으로 보되, 공식 프로그램은 당일 다시 확인하고 너무 붐비면 다음 날 여지를 남깁니다."), "https://www.barcelona.cat/en/what-to-do-in-bcn/popular-festivals/festa-major-de-sants"),
      stop("23:30", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", guide("밤 복귀는 빠르고 단순한 경로가 우선입니다.", "대중교통 대기 시간이 길거나 피곤하면 택시로 전환하고, 다음 날 Sitges가 하이라이트이므로 귀가 후 바로 쉬는 편이 좋습니다."))
    ]),
    day(4, "08.23", "Sun", "Sitges Festa Major", "Trip highlight", "이번 여행의 하이라이트입니다. 낮부터 Sitges에 들어가 구시가지, 교회, 해변, La Fragata, 23시 불꽃까지 이어갑니다.", [
      stop("10:00", "숙소", "Urgell Barcelona", "lodging", "walking", guide("하이라이트 날이라 오전은 일부러 여유롭게 준비합니다.", "보조배터리, 얇은 겉옷, 물, 예약 차량 연락처, 귀가 위치를 확인하고 불꽃 이후 이동까지 한 번에 머릿속에 넣습니다.")),
      stop("13:15", "Barcelona Sants", "Barcelona Sants Station", "santsStation", "transit", guide("Sitges행 Rodalies 이동의 출발점입니다.", "열차 플랫폼과 배차를 공식 앱 또는 역 전광판으로 확인하고, 축제일에는 혼잡 가능성이 있어 무리하게 막차에 의존하지 않습니다."), "https://rodalies.gencat.cat/en/horaris/"),
      stop("14:00", "Sitges Station", "Sitges Station", "santsStation", "transit", guide("도착 직후 바로 해변으로 뛰지 말고 역 위치와 귀가 기준점을 먼저 기억합니다.", "밤에는 골목이 붐비므로 역 방향, 픽업 방향, 바다 방향을 구분해두면 불꽃 이후 훨씬 덜 헤맵니다.")),
      stop("15:00", "Sitges Old Town", "Sitges Old Town", "sitgesOld", "walking", guide("흰 골목과 바다 방향이 이어지는 Sitges의 첫 인상 구간입니다.", "좁은 길에서는 사람 흐름을 거슬러 오래 멈추지 말고, 교회 방향을 기준점으로 삼아 천천히 내려갑니다.")),
      stop("16:00", "Sant Bartomeu Church", "Church of Sant Bartomeu and Santa Tecla Sitges", "sitgesOld", "walking", guide("Sitges의 대표 실루엣이 되는 교회입니다.", "불꽃 관람의 기준점이 되는 장소라 낮에 계단, 광장, 바다 쪽 시야를 미리 봐두면 밤에 자리를 잡기 쉽습니다.")),
      stop("17:00", "Passeig Maritim", "Passeig Maritim Sitges", "sitgesBeach", "walking", guide("해변 산책로를 따라 축제 전 분위기를 천천히 느끼는 시간입니다.", "불꽃 전 체력 보존이 중요하니 오래 서 있지 말고, 바다를 보며 쉬는 카페나 벤치를 중간에 끼워 넣습니다.")),
      stop("19:00", "해변가 디너", "Restaurants near Platja de la Fragata Sitges", "sitgesBeach", "walking", guide("La Fragata 근처에서 식사해 밤 동선이 끊기지 않게 합니다.", "음식보다 위치와 퇴장 동선이 중요한 저녁이므로, 계산을 너무 늦게 하지 않고 21시 전후 자리 잡을 여지를 남깁니다.")),
      stop("21:00", "La Fragata", "La Fragata Sitges", "sitgesWait", "walking", guide("불꽃 전 대기와 자리 잡기의 핵심 지점입니다.", "교회와 바다가 함께 보이는 시야를 확보하고, 끝난 뒤 빠져나갈 방향을 둘이 미리 정해둡니다.")),
      stop("23:00", "Festa Major Fireworks", "La Fragata Sitges", "sitgesFireworks", "walking", guide("Sitges Festa Major의 가장 강한 장면입니다.", "촬영은 짧게만 하고 실제 감상 시간을 충분히 남기며, 시작 전후 인파가 크게 움직이니 서로 떨어지지 않는 것이 우선입니다."), "https://www.sitgesanytime.com/en/explore/festivals-of-interest/pln355/sitges-festa-major-1"),
      stop("00:20", "사전 예약 차량", "La Fragata Sitges", "sitgesWait", "driving", guide("불꽃 후 인파가 빠지는 시간이라 픽업 지점 확인이 가장 중요합니다.", "기사에게 정확한 위치를 공유하고, 도로 통제나 접근 제한이 있으면 넓은 길 기준으로 만나도록 바로 조정합니다.")),
      stop("01:15", "숙소 복귀", "Urgell Barcelona", "lodging", "driving", guide("긴 하루를 끝내는 귀가 구간입니다.", "숙소에 도착하면 씻고 바로 쉬며, 다음 날은 회복형 도심 산책이라 늦은 아침까지 무리하지 않아도 됩니다."))
    ]),
    day(5, "08.24", "Mon", "Gothic Quarter · El Born", "Recovery city walk", "Sitges 다음 날이라 늦게 시작합니다. Gothic과 Born은 촘촘히 보되 카페 휴식 여지를 둡니다.", [
      stop("11:00", "숙소", "Urgell Barcelona", "lodging", "walking", guide("전날 Sitges 여운을 회복하는 느린 출발입니다.", "컨디션을 먼저 확인하고, 오늘은 체크리스트를 채우기보다 골목 분위기를 부드럽게 즐기는 날로 잡습니다.")),
      stop("12:30", "Sant Antoni Lunch", "Sant Antoni Barcelona lunch", "lodging", "walking", guide("숙소 생활권에서 점심을 먹고 도심으로 넘어갑니다.", "오후에 Gothic 골목을 걸어야 하므로 식사는 너무 무겁지 않게 하고, 물과 작은 간식을 챙겨둡니다.")),
      stop("14:00", "Placa Catalunya", "Placa Catalunya Barcelona", "gothic", "walking", guide("Gothic Quarter로 들어가기 전 기준점입니다.", "인파와 소매치기 밀도가 높은 곳이라 가방을 앞으로 두고, 사진은 짧게 찍은 뒤 바로 대성당 방향으로 이동합니다.")),
      stop("14:30", "Barcelona Cathedral", "Barcelona Cathedral", "gothic", "walking", guide("Gothic Quarter의 중심을 잡아주는 장소입니다.", "외관과 광장, 주변 골목의 방향감을 먼저 보고 내부 관람은 대기와 복장 기준을 현장에서 판단합니다.")),
      stop("15:45", "Placa del Rei", "Placa del Rei Barcelona", "gothic", "walking", guide("중세 도시의 분위기가 가장 잘 남는 광장 중 하나입니다.", "소리가 울리는 조용한 공간이라 오래 설명을 읽기보다 잠깐 멈춰 분위기를 느끼고, 다음 골목으로 자연스럽게 이어갑니다.")),
      stop("16:30", "Gothic Quarter", "Gothic Quarter Barcelona", "gothic", "walking", guide("Pont del Bisbe와 좁은 골목을 천천히 보는 구간입니다.", "길을 조금 잃어도 괜찮지만 어두운 골목이나 지나치게 붐비는 길은 피하고, 피곤하면 바로 Born 방향으로 넘어갑니다.")),
      stop("17:30", "Santa Maria del Mar", "Santa Maria del Mar Barcelona", "born", "walking", guide("El Born의 중심이 되는 고딕 성당입니다.", "내부가 열려 있으면 잠깐 들어가 높은 기둥과 빛의 느낌을 보고, 닫혀 있으면 외관과 광장 분위기만 봐도 충분합니다.")),
      stop("18:30", "El Born", "El Born Barcelona", "born", "walking", guide("편집숍, 카페, 작은 골목이 이어지는 저녁 산책 구간입니다.", "쇼핑보다 분위기와 휴식을 우선하고, 발이 피곤하면 카페를 하나 정해 오래 앉아도 일정이 무너지지 않습니다.")),
      stop("21:30", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", guide("회복형 도심 산책을 마치는 구간입니다.", "다음 날 Montserrat 출발이 매우 빠르므로 귀가 후 물, 모자, 편한 신발, 교통 동선을 미리 준비합니다."))
    ]),
    day(6, "08.25", "Tue", "Montserrat", "Mountain day", "산악 교통과 수도원, Sant Joan 전망을 보는 날입니다. 출발이 빠르므로 전날 밤 준비가 중요합니다.", [
      stop("07:30", "숙소 출발", "Urgell Barcelona", "lodging", "walking", guide("Montserrat는 아침 출발의 정확도가 전체 만족도를 좌우합니다.", "물, 모자, 선크림, 간식, 교통권 또는 예매 화면을 확인하고 불필요한 짐은 숙소에 둡니다.")),
      stop("08:00", "Placa d'Espanya FGC", "Placa Espanya FGC Barcelona", "montserrat", "walking", guide("FGC R5와 Cremallera 연결을 시작하는 역입니다.", "역 내부 동선이 넓으니 전광판에서 방향과 플랫폼을 먼저 확인하고, 여유가 있으면 화장실을 다녀오는 편이 좋습니다."), "https://www.fgc.cat/en/"),
      stop("08:15", "FGC R5", "Placa Espanya FGC Barcelona", "montserrat", "transit", guide("Montserrat 방향 열차 탑승 구간입니다.", "Monistrol de Montserrat 연결을 놓치지 않도록 하차역을 계속 확인하고, 창밖 풍경은 산에 가까워질수록 좋아집니다.")),
      stop("09:35", "Cremallera", "Monistrol de Montserrat", "montserrat", "transit", guide("산악열차로 올라가는 여행 자체가 관람 포인트입니다.", "오른쪽과 왼쪽 풍경이 구간마다 달라 사진 욕심이 생기지만, 짐과 휴대폰을 떨어뜨리지 않게 앉아서 여유롭게 봅니다."), "https://turistren.cat/en/trains/montserrat-rack-railway-and-funiculars/"),
      stop("10:00", "Montserrat Monastery", "Montserrat Monastery", "montserrat", "transit", guide("도착 후에는 수도원 광장, 성당, 산세의 방향을 먼저 파악합니다.", "Black Madonna 관람은 대기 길이에 따라 결정하고, 성당 내부가 혼잡하면 외부 전망과 광장을 먼저 보는 편이 좋습니다."), "https://abadiamontserrat.cat/en/"),
      stop("12:00", "Montserrat Lunch", "Montserrat Monastery restaurants", "montserrat", "walking", guide("산 위 점심은 선택지가 제한적이라 속도와 휴식이 중요합니다.", "너무 오래 줄 서기보다 가볍게 먹고, Sant Joan Funicular 전에 물을 다시 채우는 것을 우선합니다.")),
      stop("13:00", "Sant Joan Funicular", "Funicular de Sant Joan Montserrat", "montserrat", "walking", guide("Montserrat에서 가장 전망 만족도가 높은 구간입니다.", "위쪽은 그늘이 적고 바람이 강할 수 있으니 물과 모자를 챙기고, 컨디션이 애매하면 짧은 전망 루트만 보고 내려옵니다.")),
      stop("15:30", "수도원 복귀", "Montserrat Monastery", "montserrat", "transit", guide("하산 교통 시간에 맞춰 여유 있게 수도원 쪽으로 돌아옵니다.", "기념품이나 카페는 남은 시간으로만 보고, Cremallera와 FGC 연결이 꼬이지 않게 출발 시간을 먼저 확인합니다.")),
      stop("16:30", "Barcelona 귀환", "Placa Espanya Barcelona", "montserrat", "transit", guide("FGC로 바르셀로나에 돌아오는 구간입니다.", "산에서 내려온 뒤 피로가 크게 올 수 있으니 저녁 욕심은 줄이고, 숙소 근처에서 회복하는 흐름으로 생각합니다.")),
      stop("18:30", "숙소 인근", "Urgell Barcelona", "lodging", "walking", guide("샤워와 휴식 후 숙소 근처에서 가볍게 저녁을 먹습니다.", "오늘은 산악 이동이 많았으므로 멀리 나가지 말고, 다음 날 Casa Batllo 밤 일정까지 체력을 회복합니다.")),
      stop("21:00", "숙소 복귀", "Urgell Barcelona", "lodging", "walking", guide("산악 데이를 일찍 닫는 마무리입니다.", "사진 백업과 신발 정리만 하고, 다음 날 쇼핑과 밤 공연을 위해 잠을 충분히 확보합니다."))
    ]),
    day(7, "08.26", "Wed", "Shopping · Casa Batllo", "Couple highlight", "낮에는 쇼핑, 밤에는 Casa Batllo Magical Nights입니다. 시간을 충분히 비우고 옷을 갈아입는 여유를 둡니다.", [
      stop("10:30", "Placa Universitat", "Placa Universitat Barcelona", "shopping", "walking", guide("쇼핑 동선으로 들어가기 전 기준점입니다.", "오늘은 많이 걸을 수 있으니 처음부터 속도를 올리지 말고, 사고 싶은 품목과 쉬는 지점을 간단히 정하고 시작합니다.")),
      stop("11:30", "Rambla de Catalunya", "Rambla de Catalunya Barcelona", "shopping", "walking", guide("가로수와 카페가 좋아 쇼핑 사이 휴식이 쉬운 거리입니다.", "매장을 계속 이어가기보다 마음에 드는 카페를 하나 끼워 넣어 오후 피로를 줄이는 방식으로 움직입니다.")),
      stop("12:00", "Passeig de Gracia", "Passeig de Gracia Barcelona", "shopping", "walking", guide("쇼핑과 모더니스타 건축이 겹치는 바르셀로나의 대표 거리입니다.", "Casa Mila와 주요 쇼윈도를 보며 걷되, 밤에 Casa Batllo 내부를 볼 예정이므로 낮에는 외관 중심으로 가볍게 봅니다.")),
      stop("14:00", "점심", "El Nacional Barcelona", "shopping", "walking", guide("쇼핑 중간에 앉아서 리듬을 회복하는 점심입니다.", "밤 일정이 있으니 오래 끌지 말고, 이후 숙소 휴식까지 고려해 쇼핑 가방이 너무 무거워지지 않게 조절합니다.")),
      stop("15:30", "숙소 휴식", "Urgell Barcelona", "lodging", "walking", guide("Magical Nights 전에 옷을 갈아입고 쉬는 핵심 구간입니다.", "QR, 예약 시간, 배터리, 가벼운 겉옷을 확인하고 쇼핑한 물건은 숙소에 두어 밤 동선을 가볍게 만듭니다.")),
      stop("19:30", "Casa Batllo", "Casa Batllo Barcelona", "batllo", "walking", guide("입장 전 외관과 주변 분위기를 보는 시간입니다.", "Passeig de Gracia의 저녁빛에서 파사드를 먼저 보고, 입장 줄과 티켓 확인 위치를 파악해 공연 전 흐름을 안정시킵니다.")),
      stop("20:00", "Casa Batllo Visit", "Casa Batllo Barcelona", "batllo", "walking", guide("공식 방문 구간입니다.", "Main Floor, lightwell, attic, rooftop 순서로 흐름을 잡으면 공간의 변화가 자연스럽고, 옥상에서는 공연 이동 시간을 의식해 너무 늦게 머물지 않습니다."), "https://www.casabatllo.es/en/online-tickets/visit-magic-nights/"),
      stop("21:00", "Magical Nights", "Casa Batllo Barcelona", "batllo", "walking", guide("옥상 콘서트와 야간 분위기를 즐기는 하이라이트입니다.", "공연 전후 이동 동선이 좁아질 수 있으니 서두르지 말고, 사진보다 둘이 앉아 있는 시간을 충분히 남기는 편이 좋습니다."), "https://www.casabatllo.es/en/online-tickets/visit-magic-nights/"),
      stop("22:15", "Rambla de Catalunya", "Rambla de Catalunya Barcelona", "shopping", "walking", guide("공연 후 여운을 정리하는 짧은 산책 구간입니다.", "늦은 밤이라 무리해서 멀리 가지 말고, 사람이 있는 밝은 거리에서 가벼운 음료 정도만 즐깁니다.")),
      stop("23:30", "숙소 복귀", "Urgell Barcelona", "lodging", "walking", guide("다음 날 Girona 출발이 빠르므로 바로 정리하는 복귀입니다.", "기차 예매 화면, 신분증, 보조배터리를 한곳에 두고 알람을 이중으로 맞춰둡니다."))
    ]),
    day(8, "08.27", "Thu", "Girona Day Trip", "Medieval photo day", "고속열차로 Girona를 다녀오는 날입니다. 성벽 산책까지 있어 걷는 양이 많습니다.", [
      stop("08:00", "숙소 출발", "Urgell Barcelona", "lodging", "walking", guide("기차 시간 기준으로 움직이는 아침입니다.", "신분증, 예매 화면, 물을 확인하고 Sants 역에서 플랫폼을 찾을 시간을 남겨 조급하지 않게 출발합니다.")),
      stop("08:30", "Barcelona Sants", "Barcelona Sants Station", "santsStation", "transit", guide("Girona행 열차 탑승을 준비합니다.", "Renfe 고속열차는 플랫폼과 열차 번호 확인이 중요하므로 전광판을 먼저 보고, 탑승구가 열리면 바로 이동합니다."), "https://www.renfe.com/es/en"),
      stop("09:00", "Girona행 고속열차", "Girona Station", "santsStation", "transit", guide("바르셀로나에서 Girona로 빠르게 이동하는 구간입니다.", "도착 후 바로 구시가지로 들어가므로 열차 안에서 첫 목적지 방향을 미리 확인해둡니다.")),
      stop("10:00", "Pont de les Peixateries Velles", "Pont de les Peixateries Velles Girona", "girona", "walking", guide("Onyar 강의 컬러 하우스와 Eiffel Bridge를 함께 보는 첫 장면입니다.", "다리 위에서 오래 멈추기보다 양쪽 강변을 번갈아 보며 사진을 짧게 남기면 동선이 매끄럽습니다.")),
      stop("10:45", "Girona Old Town", "Girona Old Town", "girona", "walking", guide("구시가지 골목을 천천히 올라가는 시간입니다.", "계단과 돌길이 많으니 속도를 낮추고, 골목 분위기와 작은 광장을 보며 Cathedral 방향으로 자연스럽게 이어갑니다.")),
      stop("11:45", "Girona Cathedral", "Girona Cathedral", "girona", "walking", guide("대계단과 대성당이 Girona의 가장 강한 장면입니다.", "내부 관람은 시간과 체력에 맞춰 결정하고, 외부 계단에서는 아래쪽 광장과 함께 보는 구도가 좋습니다."), "https://www.catedraldegirona.cat/"),
      stop("13:15", "구시가지 점심", "Girona Old Town restaurants", "girona", "walking", guide("성벽 산책 전에 에너지를 회복하는 점심입니다.", "계단과 오르막이 남아 있으니 너무 무겁게 먹지 말고, 물을 충분히 마신 뒤 카페 시간을 짧게 둡니다.")),
      stop("15:15", "Passeig de la Muralla", "Passeig de la Muralla Girona", "girona", "walking", guide("Girona 성벽 위에서 도시와 산세를 보는 핵심 산책입니다.", "그늘이 적고 계단이 있으니 컨디션이 좋을 때만 길게 걷고, 힘들면 일부 구간만 보고 내려와도 충분합니다.")),
      stop("16:45", "Onyar 강변 카페", "Onyar River Girona cafes", "girona", "walking", guide("기차 전 회복과 사진 정리를 겸하는 구간입니다.", "강변 컬러 하우스를 다시 보며 앉아서 쉬고, Barcelona 복귀 열차 시간을 기준으로 여유 있게 역으로 이동합니다.")),
      stop("18:00", "Girona Station", "Girona Station", "girona", "walking", guide("바르셀로나 복귀 열차를 잡는 구간입니다.", "플랫폼과 열차 번호를 확인하고, 당일 지연 가능성에 대비해 물과 간단한 간식을 미리 준비합니다.")),
      stop("19:00", "Barcelona Sants", "Barcelona Sants Station", "santsStation", "transit", guide("바르셀로나에 돌아와 숙소로 바로 이동합니다.", "역 주변에서 오래 머물기보다 피로를 줄이는 경로를 택하고, 저녁은 숙소 근처로 단순하게 잡는 편이 좋습니다.")),
      stop("20:00", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", guide("긴 걷기 데이를 마무리하는 시간입니다.", "발 피로를 풀고 사진을 백업한 뒤, 마지막 풀데이인 Sailing과 7 Portes 일정을 위해 일찍 쉬어갑니다."))
    ]),
    day(9, "08.28", "Fri", "Sailing · 7 Portes · Sants", "Last full day", "마지막 완전한 하루입니다. 낮에는 바다, 밤에는 7 Portes와 Sants 축제로 마무리합니다.", [
      stop("10:30", "숙소 인근", "Urgell Barcelona", "lodging", "walking", guide("마지막 풀데이를 여유 있게 시작합니다.", "Sailing 업체 메시지, 출발 항구, 당일 바람 상태를 다시 확인하고 젖어도 되는 가벼운 준비로 나섭니다.")),
      stop("11:45", "Port Olimpic", "Port Olimpic Barcelona", "sailing", "transit", guide("세일링 미팅 포인트를 찾는 구간입니다.", "항구는 비슷한 선착장이 많으니 업체가 보낸 정확한 위치와 보트 이름을 확인하고, 늦지 않게 도착합니다.")),
      stop("12:00", "Barcelona Sailing", "Port Olimpic Barcelona", "sailing", "walking", guide("바다에서 바르셀로나를 보는 마지막 큰 장면입니다.", "바람과 파도에 따라 코스가 달라질 수 있으니 선장 안내를 우선하고, 휴대폰은 스트랩이나 가방 안에 안전하게 둡니다.")),
      stop("14:30", "해변 점심", "Restaurants near Port Olimpic Barcelona", "barceloneta", "walking", guide("세일링 후 바로 가까운 곳에서 회복하는 점심입니다.", "물과 염분을 보충하고, 숙소 복귀 전 몸이 식을 수 있으니 젖은 옷이나 바람 대비를 확인합니다.")),
      stop("16:00", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", guide("마지막 저녁 전 휴식과 짐 정리를 겸합니다.", "귀국 준비를 조금 해두면 밤을 더 편하게 즐길 수 있고, 7 Portes 예약 시간에 맞춰 옷을 갈아입습니다.")),
      stop("19:30", "7 Portes", "7 Portes Barcelona", "portvell", "transit", guide("바르셀로나 마지막 저녁 식사입니다.", "예약 시간이 있다면 여유 있게 도착하고, 식사 후 Sants 축제까지 갈지 여부는 체력과 귀국 준비 상태를 보고 결정합니다.")),
      stop("22:00", "Festa Major de Sants", "Festa Major de Sants Barcelona", "santsFestival", "transit", guide("여행의 마지막 축제 밤입니다.", "오래 머물기보다 분위기만 한 번 더 보고, 다음 날 공항 이동을 생각해 복귀 시간을 확실히 정해둡니다."), "https://www.barcelona.cat/en/what-to-do-in-bcn/popular-festivals/festa-major-de-sants"),
      stop("23:30", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", guide("귀국 전 마지막 밤 복귀입니다.", "여권, 항공권, 충전기, 기념품, 짐 무게를 확인하고 공항 이동 가방을 따로 정리합니다."))
    ]),
    day(10, "08.29", "Sat", "Departure", "Clean departure", "출국일은 관광을 무리하지 않고 숙소 주변과 공항 이동에 집중합니다.", [
      stop("09:00", "숙소", "Urgell Barcelona", "lodging", "walking", guide("짐을 정리하고 빠진 물건을 확인하는 아침입니다.", "여권, 지갑, 항공권, 충전기, 기념품을 한 번에 체크하고 액체류와 배터리 위치를 정리합니다.")),
      stop("10:30", "Sant Antoni", "Sant Antoni Barcelona", "lodging", "walking", guide("마지막 동네 산책과 가벼운 식사 구간입니다.", "멀리 가지 않고 숙소 생활권 안에서 마무리해, 짐 픽업과 공항 이동 시간이 흔들리지 않게 합니다.")),
      stop("12:00", "Placa Universitat", "Placa Universitat Barcelona", "shopping", "walking", guide("마지막 짧은 도심 산책입니다.", "추가 쇼핑은 작은 것만 하고, 시간이 늘어지면 바로 숙소로 돌아가 공항 이동 준비를 우선합니다.")),
      stop("13:20", "숙소", "Urgell Barcelona", "lodging", "walking", guide("짐 픽업과 최종 정리 시간입니다.", "여권과 지갑은 몸에 지니고, 보조배터리와 충전 케이블은 기내 가방으로 옮긴 뒤 숙소를 나섭니다.")),
      stop("14:15", "Aerobus 정류장", "Aerobus Placa Universitat Barcelona", "airport", "walking", guide("공항 이동을 시작하는 구간입니다.", "짐이 많거나 너무 덥거나 시간이 흔들리면 택시 전환도 괜찮고, Aerobus 이용 시 터미널 방향을 반드시 확인합니다.")),
      stop("15:15", "Barcelona Airport", "Barcelona El Prat Airport Terminal 1", "airport", "transit", guide("출국 3시간 40분 전 도착을 목표로 한 안정적인 공항 도착입니다.", "항공사 체크인, 수하물, 보안검색을 먼저 끝내고 남은 시간에 식사나 면세를 보는 순서가 좋습니다."), "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat.html"),
      stop("18:55", "CA572 출발", "Barcelona El Prat Airport Terminal 1", "airport", "walking", guide("바르셀로나 출발입니다.", "베이징 환승 게이트와 다음 항공편 시간을 확인하고, 여행 사진은 기내에서 천천히 정리하면 마지막 여운이 좋습니다."))
    ])
  ]
};

function day(id, date, weekday, title, mood, summary, stops) {
  return {
    id,
    date,
    weekday,
    title,
    mood,
    summary,
    warning: "길찾기는 Google Maps의 현재 교통/운영 상태를 기준으로 출발 직전에 다시 확인하세요.",
    stops
  };
}

function stop(time, title, place, imageKey, travelMode, guide, official = "") {
  return {
    type: "stop",
    time,
    title,
    place,
    imageKey,
    travelMode,
    guide,
    official
  };
}

function guide(...lines) {
  return lines.join(" ");
}
