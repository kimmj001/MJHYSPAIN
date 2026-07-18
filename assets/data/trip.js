window.TRIP_DATA = {
  version: "V9.5",
  travelers: "명이미와 하여니공주",
  dates: "2026.08.20 - 2026.08.29",
  homeBase: "Urgell Barcelona",
  updatedAt: "2026-07-19",
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
    { name: "Montserrat mountain transport", url: "https://turistren.cat/en/trains/montserrat-rack-railway-and-funiculars/" }
  ],
  photoCredit: "관광지 사진은 AI 생성 이미지가 아니라 실제 장소 사진을 로컬 assets/images 폴더에 저장해 사용합니다.",
  flight: [
    "CA124  2026.08.19 13:05 서울 -> 14:15 베이징",
    "CA845  2026.08.20 02:50 베이징 -> 08:15 바르셀로나",
    "CA572  2026.08.29 18:55 바르셀로나 -> 2026.08.30 12:10 베이징",
    "CA709  2026.08.30 18:50 베이징 -> 22:00 서울"
  ],
  days: [
    day(1, "08.20", "Thu", "도착 · Sant Antoni · Gracia", "Arrival light day", "첫날은 무리하지 않고 공항 이동, 숙소 주변 적응, Sant Antoni 시장, Gracia 축제 산책으로만 구성합니다.", [
      stop("08:15", "Barcelona Airport", "Barcelona El Prat Airport Terminal 1", "airport", "driving", "입국 후 수하물, eSIM, 택시 승차 위치를 먼저 정리합니다. 장거리 비행 직후라 공항에서 오래 머물지 말고 숙소 방향으로 바로 이동하는 날입니다.", "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat.html"),
      stop("10:20", "Urgell 숙소 인근", "Urgell Barcelona", "lodging", "driving", "체크인 전 동네 감각을 잡는 구간입니다. 물, 간단한 간식, 교통카드 상태를 확인하고 큰 짐은 숙소 정책에 맞춰 맡깁니다."),
      stop("11:00", "Mercat de Sant Antoni", "Mercat de Sant Antoni Barcelona", "lodging", "walking", "첫 식사와 동네 적응용 시장입니다. 실내 시장이라 더위를 피하기 좋고, 숙소 인근 생활권을 익히는 데 좋습니다."),
      stop("14:00", "숙소 휴식", "Urgell Barcelona", "lodging", "walking", "숙소 체크인 가능 시간 이후 휴식입니다. 샤워, 낮잠, 보조배터리 충전, 저녁 축제 전 현금 소액 준비를 끝냅니다."),
      stop("18:30", "Vila de Gracia", "Vila de Gracia Barcelona", "gracia", "transit", "Festa Major de Gracia 분위기를 가볍게 보는 저녁입니다. 공식 프로그램은 현장 전날까지 바뀔 수 있으므로 사람이 몰리는 골목은 짧게 보고 빠집니다.", "https://festamajordegracia.cat/"),
      stop("22:00", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", "첫날은 늦게 버티지 않는 것이 핵심입니다. 다음 날 Sagrada Familia 입장에 맞춰 물, 티켓 QR, 신발을 준비합니다.")
    ]),
    day(2, "08.21", "Fri", "Sagrada Familia · Sant Pau · Park Guell", "Gaudi main day", "가우디와 모더니스타 핵심을 보는 메인 데이입니다. 한낮에는 숙소 휴식을 넣어 Park Guell까지 체력을 남깁니다.", [
      stop("08:35", "숙소 출발", "Urgell Barcelona", "lodging", "walking", "예약 시간보다 여유 있게 출발합니다. Sagrada Familia는 보안검색과 입장 대기가 있으므로 QR, 여권명, 가방 크기를 확인합니다."),
      stop("09:30", "Sagrada Familia", "Sagrada Familia Barcelona", "sagrada", "transit", "외관보다 내부 빛이 핵심입니다. 입장 후 중앙 네이브, 천장, 스테인드글라스 방향으로 천천히 이동하고, 탑 입장이 있으면 엘리베이터 시간을 우선합니다.", "https://sagradafamilia.org/en/tickets"),
      stop("11:30", "Avinguda de Gaudi", "Avinguda de Gaudi Barcelona", "avinguda", "walking", "Sagrada Familia와 Sant Pau를 연결하는 보행축입니다. 이동 자체가 쉬는 구간이므로 그늘 쪽으로 걷고 카페 휴식을 짧게 넣습니다."),
      stop("12:00", "Sant Pau", "Recinte Modernista de Sant Pau Barcelona", "santpau", "walking", "관광객 밀도가 낮아 사진과 관람을 차분하게 하기 좋습니다. 중앙 정원과 파빌리온 동선을 먼저 보고, 더우면 실내 전시 위주로 줄입니다.", "https://santpaubarcelona.org/en/visita/visita-lliure/"),
      stop("13:15", "점심", "Restaurants near Recinte Modernista de Sant Pau Barcelona", "avinguda", "walking", "Sant Pau 주변에서 가까운 식사를 합니다. Park Guell 저녁 입장이 있으므로 과식보다 수분 보충과 휴식이 중요합니다."),
      stop("15:00", "숙소 휴식", "Urgell Barcelona", "lodging", "transit", "한낮 더위를 피하는 핵심 구간입니다. 샤워, 낮잠, 티켓 재확인 후 Park Guell 언덕 이동에 대비합니다."),
      stop("17:20", "Park Guell", "Park Guell Barcelona", "parkguell", "transit", "예약 시간에 맞춰 Monumental Zone을 봅니다. El Drac, Sala Hipostila, 테라스 벤치 순서로 보면 동선이 자연스럽습니다.", "https://parkguell.barcelona/en/buy-tickets"),
      stop("20:00", "Gracia 저녁", "Vila de Gracia Barcelona restaurants", "gracia", "transit", "Park Guell 이후 Gracia 쪽으로 내려와 저녁을 먹습니다. 피로하면 식사만 하고 축제 골목은 생략해도 됩니다."),
      stop("22:15", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", "다음 날 해변 일정 전 발 상태를 확인합니다. 물, 선크림, 수건 준비를 해둡니다.")
    ]),
    day(3, "08.22", "Sat", "Sant Antoni · Barceloneta · Sants", "Sea and festival", "낮은 바다, 밤은 Sants 축제입니다. 해변과 식사를 분리해 너무 오래 햇빛 아래 있지 않게 합니다.", [
      stop("10:15", "Sant Antoni Brunch", "Sant Antoni Barcelona brunch", "lodging", "walking", "느린 브런치로 시작합니다. 전날 메인 데이 피로가 있으면 출발을 늦춰도 되는 회복형 구간입니다."),
      stop("11:45", "Barceloneta", "Barceloneta Barcelona", "barceloneta", "transit", "바다로 들어가기 전 동네 골목과 해변 방향을 잡습니다. 소지품은 최소화하고 귀중품은 몸 앞쪽에 둡니다."),
      stop("12:00", "Barceloneta Beach", "Barceloneta Beach Barcelona", "barceloneta", "walking", "해변 산책 위주입니다. 수영보다 분위기와 사진, 짧은 휴식이 목적이며 8월 한낮 자외선은 강합니다."),
      stop("14:30", "Can Sole", "Can Sole Barcelona", "barceloneta", "walking", "Barceloneta의 클래식한 식사 포인트입니다. 예약이 가능하면 예약 우선, 늦어지면 Port Vell 일정은 줄입니다."),
      stop("16:30", "Port Vell", "Port Vell Barcelona", "portvell", "walking", "Rambla de Mar와 항구를 가볍게 걷습니다. 해가 강하면 실내/그늘 위주로 짧게 봅니다."),
      stop("18:00", "숙소 휴식", "Urgell Barcelona", "lodging", "transit", "저녁 축제 전 샤워와 신발 교체를 합니다. Sants는 밤에 사람이 많으므로 지갑과 휴대폰 위치를 정합니다."),
      stop("20:45", "Festa Major de Sants", "Placa d'Osca Barcelona", "santsFestival", "transit", "Gracia보다 동네 축제 느낌이 강한 밤입니다. 장식 거리와 Placa d'Osca 주변을 중심으로 보되, 공식 프로그램은 당일 확인합니다.", "https://www.barcelona.cat/en/what-to-do-in-bcn/popular-festivals/festa-major-de-sants"),
      stop("23:30", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", "늦은 복귀입니다. 막차와 야간 교통 상태를 확인하고 무리하면 택시로 전환합니다.")
    ]),
    day(4, "08.23", "Sun", "Sitges Festa Major", "Trip highlight", "이번 여행의 하이라이트입니다. 낮부터 Sitges에 들어가 구시가지, 교회, 해변, La Fragata, 23시 불꽃까지 이어갑니다.", [
      stop("10:00", "숙소", "Urgell Barcelona", "lodging", "walking", "늦은 귀가를 전제로 준비합니다. 보조배터리, 얇은 겉옷, 물, 사전 예약 차량 연락처를 확인합니다."),
      stop("13:15", "Barcelona Sants", "Barcelona Sants Station", "santsStation", "transit", "Sitges행 Rodalies 이동 전 플랫폼과 귀가 대안을 확인합니다. 축제일이라 역과 열차 혼잡 가능성이 있습니다.", "https://rodalies.gencat.cat/en/horaris/"),
      stop("14:00", "Sitges Station", "Sitges Station", "santsStation", "transit", "역 도착 후 바로 해변으로 가지 말고 귀가 픽업/역 위치를 머릿속에 넣어둡니다."),
      stop("15:00", "Sitges Old Town", "Sitges Old Town", "sitgesOld", "walking", "흰 골목과 바다 방향을 천천히 잇습니다. 골목이 좁아 사람이 몰리면 교회 방향으로 빠지는 것이 좋습니다."),
      stop("16:00", "Sant Bartomeu Church", "Church of Sant Bartomeu and Santa Tecla Sitges", "sitgesOld", "walking", "Sitges의 대표 실루엣입니다. 불꽃 때도 기준점이 되는 장소이므로 낮에 미리 위치와 시야를 봅니다."),
      stop("17:00", "Passeig Maritim", "Passeig Maritim Sitges", "sitgesBeach", "walking", "해변 산책로를 따라 쉬엄쉬엄 걷습니다. 불꽃 전 체력 보존이 중요해 오래 서 있지 않습니다."),
      stop("19:00", "해변가 디너", "Restaurants near Platja de la Fragata Sitges", "sitgesBeach", "walking", "La Fragata 근처에서 저녁을 먹고 이후 자리 잡기로 자연스럽게 이어갑니다. 음식보다 위치와 화장실 접근성이 중요합니다."),
      stop("21:00", "La Fragata", "La Fragata Sitges", "sitgesWait", "walking", "불꽃 전 대기 구간입니다. 교회와 바다가 함께 보이는 시야를 잡고, 끝난 뒤 이동할 방향을 미리 정합니다."),
      stop("23:00", "Festa Major Fireworks", "La Fragata Sitges", "sitgesFireworks", "walking", "Sitges 관광청이 안내하는 Festa Major의 핵심 장면입니다. 촬영은 짧게, 실제 감상 시간을 충분히 남깁니다.", "https://www.sitgesanytime.com/en/explore/festivals-of-interest/pln355/sitges-festa-major-1"),
      stop("00:20", "사전 예약 차량", "La Fragata Sitges", "sitgesWait", "driving", "불꽃 후 인파가 한꺼번에 움직입니다. 차량 기사와 정확한 픽업 지점을 공유하고, 역 방향 혼잡을 피합니다."),
      stop("01:15", "숙소 복귀", "Urgell Barcelona", "lodging", "driving", "긴 하루 종료입니다. 다음 날은 회복형 도시 산책이므로 바로 씻고 수면을 우선합니다.")
    ]),
    day(5, "08.24", "Mon", "Gothic Quarter · El Born", "Recovery city walk", "Sitges 다음 날이라 늦게 시작합니다. Gothic과 Born을 촘촘히 보되 카페 휴식 여지를 둡니다.", [
      stop("11:00", "숙소", "Urgell Barcelona", "lodging", "walking", "전날 늦은 귀가 후 회복 출발입니다. 무리하지 말고 점심부터 시작합니다."),
      stop("12:30", "Sant Antoni Lunch", "Sant Antoni Barcelona lunch", "lodging", "walking", "숙소 생활권에서 점심을 먹고 도심으로 이동합니다."),
      stop("14:00", "Placa Catalunya", "Placa Catalunya Barcelona", "gothic", "transit", "Gothic 진입 전 기준점입니다. 인파와 소매치기 밀도가 높아 가방을 앞으로 둡니다."),
      stop("14:30", "Barcelona Cathedral", "Barcelona Cathedral", "gothic", "walking", "Gothic Quarter의 중심입니다. 외관, 광장, 주변 골목을 짧게 보고 다음 포인트로 이어갑니다."),
      stop("15:45", "Placa del Rei", "Placa del Rei Barcelona", "gothic", "walking", "중세 도시감이 가장 잘 남는 광장입니다. 소리가 울리는 공간이라 잠깐 멈춰 분위기를 느끼기 좋습니다."),
      stop("16:30", "Gothic Quarter", "Gothic Quarter Barcelona", "gothic", "walking", "Pont del Bisbe와 좁은 골목을 잇습니다. 길을 잃어도 큰 문제 없는 구간이지만, 피곤하면 Born으로 바로 넘어갑니다."),
      stop("17:30", "Santa Maria del Mar", "Santa Maria del Mar Barcelona", "born", "walking", "Born의 핵심 성당입니다. 내부가 열려 있으면 짧게 들어가 빛과 기둥감을 봅니다."),
      stop("18:30", "El Born", "El Born Barcelona", "born", "walking", "편집숍, 카페, 작은 골목을 보며 저녁 전 분위기를 즐깁니다."),
      stop("21:30", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", "회복일이므로 너무 늦기 전에 복귀합니다.")
    ]),
    day(6, "08.25", "Tue", "Montserrat", "Mountain day", "산악 교통과 수도원, Sant Joan 전망을 보는 날입니다. 출발이 빠르므로 전날 밤 준비가 중요합니다.", [
      stop("07:30", "숙소 출발", "Urgell Barcelona", "lodging", "walking", "물, 모자, 선크림, 간식, 교통권을 확인하고 출발합니다."),
      stop("08:00", "Placa d'Espanya FGC", "Placa Espanya FGC Barcelona", "montserrat", "transit", "FGC R5 플랫폼을 찾고 Cremallera 연결 동선을 확인합니다.", "https://www.fgc.cat/en/"),
      stop("08:15", "FGC R5", "Placa Espanya FGC Barcelona", "montserrat", "transit", "Montserrat 방향 열차 탑승 구간입니다. Monistrol de Montserrat 연결을 놓치지 않게 하차역을 확인합니다."),
      stop("09:35", "Cremallera", "Monistrol de Montserrat", "montserrat", "transit", "산악열차로 올라가는 구간입니다. 창밖 산세가 좋아 사진은 이때부터 시작됩니다.", "https://turistren.cat/en/trains/montserrat-rack-railway-and-funiculars/"),
      stop("10:00", "Montserrat Monastery", "Montserrat Monastery", "montserrat", "transit", "수도원 광장, 성당, 산세를 먼저 봅니다. Black Madonna 동선은 대기가 있으면 상황에 맞춰 줄입니다.", "https://abadiamontserrat.cat/en/"),
      stop("12:00", "Montserrat Lunch", "Montserrat Monastery restaurants", "montserrat", "walking", "산 위 점심은 선택지가 제한적입니다. 복잡하면 간단히 먹고 Sant Joan으로 넘어갑니다."),
      stop("13:00", "Sant Joan Funicular", "Funicular de Sant Joan Montserrat", "montserrat", "walking", "전망이 좋은 핵심 구간입니다. 그늘이 부족하므로 물을 충분히 챙깁니다."),
      stop("15:30", "수도원 복귀", "Montserrat Monastery", "montserrat", "transit", "하산 교통 시간을 확인하고 여유 있게 이동합니다."),
      stop("16:30", "Barcelona 귀환", "Placa Espanya Barcelona", "montserrat", "transit", "FGC로 바르셀로나 복귀합니다. 저녁은 숙소 인근으로 낮춥니다."),
      stop("18:30", "숙소 인근", "Urgell Barcelona", "lodging", "transit", "샤워와 휴식 후 근처에서 가볍게 식사합니다."),
      stop("21:00", "숙소 복귀", "Urgell Barcelona", "lodging", "walking", "산행일 종료입니다. 다음 날 Casa Batllo 밤 일정 준비를 합니다.")
    ]),
    day(7, "08.26", "Wed", "Shopping · Casa Batllo", "Couple highlight", "낮은 쇼핑, 밤은 Casa Batllo Magical Nights입니다. 저녁 전 충분히 쉬고 옷을 갈아입는 흐름입니다.", [
      stop("10:30", "Placa Universitat", "Placa Universitat Barcelona", "shopping", "walking", "도심 쇼핑 진입점입니다. 너무 일찍 많이 걷지 않게 합니다."),
      stop("11:30", "Rambla de Catalunya", "Rambla de Catalunya Barcelona", "shopping", "walking", "가로수와 카페가 좋은 거리입니다. 쉬운 쇼핑과 카페 휴식을 섞습니다."),
      stop("12:00", "Passeig de Gracia", "Passeig de Gracia Barcelona", "shopping", "walking", "쇼핑과 모더니스타 건축이 겹치는 구간입니다. Casa Mila 외관도 이 구간에서 자연스럽게 봅니다."),
      stop("14:00", "점심", "El Nacional Barcelona", "shopping", "walking", "쇼핑 중간에 쉬는 점심입니다. 밤 일정이 있으므로 과하게 오래 끌지 않습니다."),
      stop("15:30", "숙소 휴식", "Urgell Barcelona", "lodging", "transit", "Magical Nights 전 옷 갈아입기, QR 확인, 휴식 구간입니다."),
      stop("19:30", "Casa Batllo", "Casa Batllo Barcelona", "batllo", "transit", "입장 전 외관과 동선을 확인합니다. 밤 파사드가 아름다워 도착 시간을 여유 있게 둡니다."),
      stop("20:00", "Casa Batllo Visit", "Casa Batllo Barcelona", "batllo", "walking", "공식 방문 구간입니다. Main Floor, lightwell, attic, rooftop 순서로 흐름을 잡습니다.", "https://www.casabatllo.es/en/online-tickets/visit-magic-nights/"),
      stop("21:00", "Magical Nights", "Casa Batllo Barcelona", "batllo", "walking", "옥상 콘서트 구간입니다. 공연 전후 이동 동선을 줄이고 분위기를 충분히 즐깁니다.", "https://www.casabatllo.es/en/online-tickets/visit-magic-nights/"),
      stop("22:15", "Rambla de Catalunya", "Rambla de Catalunya Barcelona", "shopping", "walking", "공연 후 산책과 가벼운 음료 구간입니다. 피곤하면 바로 복귀합니다."),
      stop("23:30", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", "늦은 복귀입니다. 다음 날 Girona 출발이 빠르므로 바로 정리합니다.")
    ]),
    day(8, "08.27", "Thu", "Girona Day Trip", "Medieval photo day", "고속열차로 Girona를 다녀오는 날입니다. 성벽 산책까지 있어 걷는 양이 많습니다.", [
      stop("08:00", "숙소 출발", "Urgell Barcelona", "lodging", "walking", "기차 시간을 기준으로 움직입니다. 신분증과 티켓을 확인합니다."),
      stop("08:30", "Barcelona Sants", "Barcelona Sants Station", "santsStation", "transit", "출발 플랫폼과 열차 번호를 확인합니다.", "https://www.renfe.com/es/en"),
      stop("09:00", "Girona행 고속열차", "Barcelona Sants Station", "santsStation", "transit", "고속열차 이동 구간입니다. Girona 도착 후 바로 강변으로 이동합니다."),
      stop("10:00", "Pont de les Peixateries Velles", "Pont de les Peixateries Velles Girona", "girona", "transit", "Onyar 강 컬러하우스와 Eiffel Bridge를 함께 보는 첫 장면입니다."),
      stop("10:45", "Girona Old Town", "Girona Old Town", "girona", "walking", "구시가지 골목을 천천히 걷습니다. 계단과 돌길이 많으니 속도를 낮춥니다."),
      stop("11:45", "Girona Cathedral", "Girona Cathedral", "girona", "walking", "대계단과 대성당이 핵심입니다. 내부 관람은 시간과 체력에 맞춰 결정합니다.", "https://www.catedraldegirona.cat/"),
      stop("13:15", "구시가지 점심", "Girona Old Town restaurants", "girona", "walking", "성벽 산책 전 식사와 물 보충을 합니다."),
      stop("15:15", "Passeig de la Muralla", "Passeig de la Muralla Girona", "girona", "walking", "Girona 성벽 산책입니다. 그늘이 적고 계단이 있어 컨디션이 나쁘면 짧게 줄입니다."),
      stop("16:45", "Onyar 강변 카페", "Onyar River Girona cafes", "girona", "walking", "기차 전 회복 구간입니다. 강변 컬러하우스 사진을 다시 보기 좋습니다."),
      stop("18:00", "Girona Station", "Girona Station", "girona", "walking", "Barcelona 복귀 열차를 탑니다."),
      stop("19:00", "Barcelona Sants", "Barcelona Sants Station", "santsStation", "transit", "도착 후 바로 숙소로 이동합니다."),
      stop("20:00", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", "긴 근교일 종료입니다. 저녁은 가볍게 처리합니다.")
    ]),
    day(9, "08.28", "Fri", "Sailing · 7 Portes · Sants", "Last full day", "마지막 온전한 하루입니다. 낮에는 바다, 밤에는 7 Portes와 Sants 축제로 마무리합니다.", [
      stop("10:30", "숙소 인근", "Urgell Barcelona", "lodging", "walking", "늦은 아침과 짐 일부 정리를 합니다. Sailing은 날씨 확인이 필요합니다."),
      stop("11:45", "Port Olimpic", "Port Olimpic Barcelona", "sailing", "transit", "항해 출발 전 항구 위치와 업체 미팅포인트를 확인합니다."),
      stop("12:00", "Barcelona Sailing", "Port Olimpic Barcelona", "sailing", "walking", "바다에서 도시를 보는 일정입니다. 바람과 파도에 따라 변동될 수 있으므로 전날/당일 확인합니다."),
      stop("14:30", "해변 점심", "Restaurants near Port Olimpic Barcelona", "barceloneta", "walking", "항해 후 바로 가까운 곳에서 식사합니다."),
      stop("16:00", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", "마지막 저녁 전 휴식과 짐 정리 구간입니다."),
      stop("19:30", "7 Portes", "7 Portes Barcelona", "portvell", "transit", "마지막 저녁 식사입니다. 예약이 있으면 시간 엄수, 식사 후 Sants 이동 여부는 체력에 맞춥니다."),
      stop("22:00", "Festa Major de Sants", "Festa Major de Sants Barcelona", "santsFestival", "transit", "마지막 축제 밤입니다. 오래 머물기보다 분위기만 보고 복귀합니다.", "https://www.barcelona.cat/en/what-to-do-in-bcn/popular-festivals/festa-major-de-sants"),
      stop("23:30", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", "출국 전날입니다. 여권, 항공권, 짐 무게를 다시 확인합니다.")
    ]),
    day(10, "08.29", "Sat", "Departure", "Clean departure", "출국일은 관광을 늘리지 않고 숙소 주변과 공항 이동에 집중합니다.", [
      stop("09:00", "숙소", "Urgell Barcelona", "lodging", "walking", "짐을 정리하고 빠진 물건을 확인합니다."),
      stop("10:30", "Sant Antoni", "Sant Antoni Barcelona", "lodging", "walking", "마지막 동네 산책과 가벼운 식사 구간입니다."),
      stop("12:00", "Placa Universitat", "Placa Universitat Barcelona", "shopping", "walking", "마지막 짧은 도심 산책입니다. 쇼핑을 늘리지 않습니다."),
      stop("13:20", "숙소", "Urgell Barcelona", "lodging", "transit", "짐 픽업과 최종 정리입니다. 여권, 지갑, 충전기, 액체류를 확인합니다."),
      stop("14:15", "Aerobus 정류장", "Aerobus Placa Universitat Barcelona", "airport", "walking", "공항 이동 시작입니다. 짐이 많거나 더우면 택시로 전환해도 됩니다."),
      stop("15:15", "Barcelona Airport", "Barcelona El Prat Airport Terminal 1", "airport", "transit", "출국 3시간 40분 전 도착 목표입니다. 택스리펀드, 체크인, 보안검색 순서로 진행합니다.", "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat.html"),
      stop("18:55", "CA572 출발", "Barcelona El Prat Airport Terminal 1", "airport", "walking", "Barcelona 출발. 베이징 환승편과 다음 항공편 게이트를 확인합니다.")
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
