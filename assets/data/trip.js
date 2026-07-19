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
    { name: "Aeri de Montserrat", url: "https://aeridemontserrat.com/en/timetables-and-fares/" },
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
      meal("11:30", "점심 식사", "Mercat de Sant Antoni", "Mercat de Sant Antoni, Barcelona", "walking", "시장 안에서 Jamon, Bocadillo, Fresh Juice 중 가볍게 선택"),
      stop("13:00", "숙소 휴식", "Urgell Barcelona", "lodging", "walking", guide("숙소는 13:00부터 체크인 가능하므로 이때 들어가 휴식을 시작합니다.", "샤워, 낮잠, 보조배터리 충전, 저녁 축제용 가벼운 가방 정리까지 끝내고 첫날 체력을 아끼는 것이 핵심입니다.")),
      stop("18:30", "Vila de Gracia", "Vila de Gracia Barcelona", "gracia", "transit", guide("Festa Major de Gracia 분위기를 가볍게 맛보는 저녁 산책입니다.", "공식 프로그램과 장식 거리는 당일 변동될 수 있으니 현장에서 사람이 지나치게 몰리는 골목은 짧게 보고, 밝고 넓은 길을 기준으로 움직입니다."), "https://festamajordegracia.cat/"),
      meal("19:30", "저녁 식사", "Carrer de Verdi 식당가", "Carrer de Verdi, Gracia, Barcelona", "walking", "Gracia 축제를 보면서 현장에서 자유롭게 선택"),
      stop("22:00", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", guide("첫날은 늦게 버티지 않는 것이 다음 날 만족도를 좌우합니다.", "숙소에 돌아오면 Sagrada Familia 티켓 QR, 여권 보관, 물, 편한 신발을 바로 준비하고 잠드는 흐름으로 마무리합니다."))
    ]),
    day(2, "08.21", "Fri", "Park Guell · Bunkers · Sagrada Familia · Sant Pau", "Gaudi main day", "Carmel 언덕권을 오전에 한 번만 처리하고, 점심 후 Sagrada Familia의 오후 빛과 Sant Pau를 이어 봅니다. 마지막은 El Born으로 내려가 하루를 마무리합니다.", [
      meal("08:45", "브런치", "Sant Antoni Brunch", "Sant Antoni Barcelona brunch", "walking", "Park Guell 전 가볍게 커피와 브런치"),
      stop("10:00", "Park Guell", "Park Guell Barcelona", "parkguell", "taxi", guide("Park Guell은 Eusebi Guell이 Gaudi에게 의뢰한 전원 주거지 계획에서 출발했지만, 지금은 바르셀로나를 내려다보는 공공 공원으로 사랑받는 장소입니다.", "오전 첫 관람으로 잡아 언덕 이동과 입장 대기 변수를 줄이고, 브런치 후에는 지하철·버스 환승보다 택시로 바로 올라가 체력을 아끼는 편이 좋습니다.", "Monumental Zone을 먼저 보고 El Drac, Sala Hipostila, 타일 벤치와 전망 구간을 본 뒤 같은 Carmel 언덕권인 Bunkers로 이어가면 오후에 다시 언덕을 오르지 않아도 됩니다."), "https://parkguell.barcelona/en/buy-tickets"),
      stop("11:45", "Bunkers del Carmel", "MUHBA Turo de la Rovira Barcelona", "bunkers", "taxi", guide("Bunkers del Carmel은 Turo de la Rovira 언덕의 옛 방공포대 자리로, 바르셀로나 전경을 넓게 내려다볼 수 있는 전망 지점입니다.", "선셋 감성은 줄어들지만 Park Guell과 같은 언덕권에서 바로 처리하면 하루 전체 동선이 훨씬 자연스럽고, Sagrada와 Sant Pau 이후 다시 올라가는 피로를 없앨 수 있습니다.", "8월 한낮 햇빛이 강하므로 오래 머물지 말고 전망 사진만 짧게 남긴 뒤 Sagrada Familia 권역으로 내려갑니다.")),
      meal("13:00", "점심 식사", "La Paradeta Sagrada Familia", "La Paradeta Sagrada Familia, Passatge de Simo, 18, Barcelona", "taxi", "Catalan Seafood: Garlic Shrimp, Mussels, Squid"),
      stop("14:30", "Sagrada Familia", "Sagrada Familia Barcelona", "sagrada", "walking", guide("Sagrada Familia는 1882년에 시작되어 Antoni Gaudi가 생애 후반을 바친 바르셀로나의 상징적인 성당입니다.", "오후 입장은 스테인드글라스 색이 내부에 깊게 들어오는 시간이어서 중앙 네이브에서 천장 구조와 빛의 방향을 먼저 보는 흐름이 좋습니다.", "탑 입장이 있다면 엘리베이터와 하산 동선을 우선 확인하고, 관람 후에는 Avinguda de Gaudi로 자연스럽게 빠져나갑니다."), "https://sagradafamilia.org/en/tickets"),
      stop("16:15", "Avinguda de Gaudi", "Avinguda de Gaudi Barcelona", "avinguda", "walking", guide("Sagrada Familia와 Sant Pau를 잇는 보행축이라 이동 자체가 쉬는 시간입니다.", "그늘이 있는 쪽으로 천천히 걷고, 뒤돌아보면 성당 파사드가 길 끝에 걸리는 장면이 좋아 사진을 짧게 남기기 좋습니다.")),
      stop("16:50", "Sant Pau", "Recinte Modernista de Sant Pau Barcelona", "santpau", "walking", guide("Sant Pau는 Lluís Domenech i Montaner가 설계한 옛 병원 단지로, 치료 공간을 빛·정원·예술과 연결하려 했던 모더니스타 건축의 대표 사례입니다.", "Sagrada Familia에서 Avinguda de Gaudi를 따라 그대로 이어지므로 역주행 없이 관람할 수 있습니다.", "중앙 정원과 파빌리온 외관을 먼저 보고, 마감 시간이 가까워지면 내부 전시보다 핵심 외관과 복도 동선에 집중합니다."), "https://santpaubarcelona.org/en/visita/visita-lliure/"),
      meal("18:30", "저녁 식사", "Avinguda de Gaudi 식당가", "Avinguda de Gaudi, Barcelona", "walking", "Sant Pau 관람 후 같은 축에서 현장 선택"),
      stop("21:00", "Dr. Stravinsky Cocktail Bar", "Dr. Stravinsky, Carrer dels Mirallers, 5, Barcelona", "born", "taxi", guide("Dr. Stravinsky는 El Born의 대표적인 칵테일 바로, 실험실 같은 분위기와 향·허브·인퓨전 기반의 시그니처 칵테일이 강점입니다.", "Sant Pau 권역에서 저녁을 먹고 바로 El Born으로 내려가면 Gracia 쪽으로 되돌아가는 움직임이 사라져 밤 동선이 단순해집니다.", "만석이면 가까운 Paradiso나 Collage Cocktail Bar를 백업으로 두고, 늦게 무리하지 않습니다."), "https://drstravinsky.cat/en/"),
      stop("22:50", "숙소 복귀", "Urgell Barcelona", "lodging", "taxi", guide("가우디 메인 데이를 무사히 닫는 복귀 구간입니다.", "사진 백업, 다음 날 해변용 준비물, 수건이나 얇은 겉옷을 정리하고 발 피로가 있으면 바로 쉬는 편이 좋습니다."))
    ]),
    day(3, "08.22", "Sat", "Sant Antoni · Barceloneta · Sants", "Sea and festival", "낮에는 바다, 밤에는 Sants 축제입니다. 해변과 식사를 분리해 너무 오래 땡볕 아래 있지 않게 합니다.", [
      stop("10:15", "Sant Antoni Brunch", "Sant Antoni Barcelona brunch", "lodging", "walking", guide("느린 브런치로 시작해 전날 피로를 풀어주는 구간입니다.", "오늘은 햇빛 노출이 많으니 식사 때 물을 충분히 마시고, 해변으로 가기 전 가방을 최대한 가볍게 만듭니다.")),
      stop("11:45", "Barceloneta", "Barceloneta Barcelona", "barceloneta", "transit", guide("바다로 들어가기 전 Barceloneta 동네의 골목과 해변 방향을 잡습니다.", "소매치기와 호객이 섞이는 구간이라 휴대폰은 손에 오래 들고 있지 말고, 큰 짐은 몸 앞쪽에 둡니다.")),
      stop("12:00", "Barceloneta Beach", "Barceloneta Beach Barcelona", "barceloneta", "walking", guide("수영보다 바다 분위기와 사진, 짧은 휴식을 목표로 잡는 해변 구간입니다.", "8월 한낮 햇빛이 강하니 그늘과 음료 보충을 우선하고, 귀중품을 두고 둘이 동시에 물가로 들어가지는 않습니다.")),
      meal("14:30", "점심 식사", "Can Sole", "Can Sole, Carrer de Sant Carles, 4, Barcelona", "walking", "Seafood Paella, Fideua"),
      stop("16:30", "Port Vell", "Port Vell Barcelona", "portvell", "walking", guide("Rambla de Mar와 항구 풍경을 가볍게 걷는 구간입니다.", "햇빛이 강하면 쇼핑몰이나 그늘을 끼고 짧게 보고, 사진은 항구와 보행교가 함께 보이는 지점에서 빠르게 남깁니다.")),
      stop("18:00", "숙소 휴식", "Urgell Barcelona", "lodging", "transit", guide("저녁 축제 전에 샤워와 신발 교체를 하는 회복 시간입니다.", "Sants는 밤에 사람이 많으므로 지갑, 휴대폰, 교통카드 위치를 고정하고 필요 없는 물건은 숙소에 둡니다.")),
      meal("20:10", "저녁 식사", "Carrer de Valladolid · Sants 식당가", "Carrer de Valladolid, Sants, Barcelona", "transit", "Festa Major de Sants 주변에서 가볍게 선택"),
      stop("20:45", "Festa Major de Sants", "Placa d'Osca Barcelona", "santsFestival", "walking", guide("Gracia보다 동네 축제의 현지감이 강한 밤 산책입니다.", "먼저 Sants 식당가에서 가볍게 먹고 Placa d'Osca와 장식 거리로 들어가면 축제 중간에 식사 때문에 끊기지 않습니다.", "공식 프로그램은 당일 다시 확인하고 너무 붐비면 다음 날 여지를 남깁니다."), "https://www.barcelona.cat/en/what-to-do-in-bcn/popular-festivals/festa-major-de-sants"),
      stop("23:30", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", guide("밤 복귀는 빠르고 단순한 경로가 우선입니다.", "대중교통 대기 시간이 길거나 피곤하면 택시로 전환하고, 다음 날 Sitges가 하이라이트이므로 귀가 후 바로 쉬는 편이 좋습니다."))
    ]),
    day(4, "08.23", "Sun", "Sitges Festa Major", "Trip highlight", "이번 여행의 하이라이트입니다. 낮부터 Sitges에 들어가 구시가지, 교회, 해변, La Fragata, 23시 불꽃까지 이어갑니다.", [
      stop("10:00", "숙소", "Urgell Barcelona", "lodging", "walking", guide("하이라이트 날이라 오전은 일부러 여유롭게 준비합니다.", "보조배터리, 얇은 겉옷, 물, 택시 호출 앱과 귀가 위치를 확인하고 불꽃 이후 바로 숙소로 돌아가는 흐름까지 한 번에 머릿속에 넣습니다.")),
      stop("13:15", "Barcelona Sants", "Barcelona Sants Station", "santsStation", "transit", guide("Sitges행 Rodalies 이동의 출발점입니다.", "열차 플랫폼과 배차를 공식 앱 또는 역 전광판으로 확인하고, 축제일에는 혼잡 가능성이 있어 무리하게 막차에 의존하지 않습니다."), "https://rodalies.gencat.cat/en/horaris/"),
      stop("14:00", "Sitges Station", "Sitges Station", "santsStation", "transit", guide("도착 직후 바로 해변으로 뛰지 말고 역 위치와 귀가 기준점을 먼저 기억합니다.", "밤에는 골목이 붐비므로 역 방향, 픽업 방향, 바다 방향을 구분해두면 불꽃 이후 훨씬 덜 헤맵니다.")),
      meal("14:20", "점심 식사", "El Cable", "El Cable, Carrer Barcelona, 1, Sitges", "walking", "Bomba, Pintxos"),
      stop("15:00", "Sitges Old Town", "Sitges Old Town", "sitgesOld", "walking", guide("Sitges Old Town은 흰 골목, 작은 광장, 바다로 열리는 언덕길이 이어지는 해안 마을의 오래된 중심부입니다.", "19세기 이후 예술가와 휴양객이 모이며 밝고 자유로운 분위기가 강해졌고, 오늘은 Festa Major 전의 들뜬 공기까지 겹쳐 마을 전체가 무대처럼 느껴집니다.", "좁은 길에서는 사람 흐름을 거슬러 오래 멈추지 말고, 교회 방향을 기준점으로 삼아 천천히 내려갑니다.")),
      stop("16:00", "Sant Bartomeu Church", "Church of Sant Bartomeu and Santa Tecla Sitges", "sitgesOld", "walking", guide("Sant Bartomeu Church는 바다 위로 솟은 Sitges의 대표 실루엣이자, 마을 수호성인 축제의 중심이 되는 교회입니다.", "바로 이 주변이 Festa Major의 상징적인 장면과 밤 불꽃의 기준점이 되므로, 낮에 계단, 광장, 바다 쪽 시야를 미리 봐두면 밤에 자리를 잡기 쉽습니다.")),
      stop("17:00", "Passeig Maritim", "Passeig Maritim Sitges", "sitgesBeach", "walking", guide("해변 산책로를 따라 축제 전 분위기를 천천히 느끼는 시간입니다.", "불꽃 전 체력 보존이 중요하니 오래 서 있지 말고, 바다를 보며 쉬는 카페나 벤치를 중간에 끼워 넣습니다.")),
      meal("19:30", "저녁 식사", "Passeig de la Ribera 식당가", "Passeig de la Ribera, Sitges", "walking", "해변을 보면서 현장에서 식당 선택"),
      stop("21:00", "La Fragata", "La Fragata Sitges", "sitgesWait", "walking", guide("불꽃 전 대기와 자리 잡기의 핵심 지점입니다.", "교회와 바다가 함께 보이는 시야를 확보하고, 끝난 뒤 빠져나갈 방향을 둘이 미리 정해둡니다.")),
      stop("23:00", "Festa Major Fireworks", "La Fragata Sitges", "sitgesFireworks", "walking", guide("Sitges Festa Major의 가장 강한 장면입니다.", "촬영은 짧게만 하고 실제 감상 시간을 충분히 남기며, 시작 전후 인파가 크게 움직이니 서로 떨어지지 않는 것이 우선입니다."), "https://www.sitgesanytime.com/en/explore/festivals-of-interest/pln355/sitges-festa-major-1"),
      stop("23:45", "택시 픽업 큰길 이동", "Passeig de Vilafranca Sitges", "sitgesWait", "walking", guide("불꽃이 끝나면 La Fragata 바로 앞에서 택시를 잡으려 하지 말고, 사람이 조금 빠지는 큰길 쪽으로 걸어 나갑니다.", "해변 앞 인파와 통제가 풀리는 시간을 기다리기보다 Passeig de Vilafranca처럼 차량 접근이 쉬운 지점을 기준으로 움직이고, 둘이 떨어지지 않는 것이 우선입니다.")),
      stop("00:10", "택시로 숙소 이동", "Passeig de Vilafranca Sitges", "sitgesWait", "taxi", guide("큰길에서 택시를 잡아 바로 바르셀로나 숙소로 이동합니다.", "기사에게 Urgell 숙소 위치를 정확히 공유하고, 피곤하면 중간 정차 없이 바로 숙소까지 가는 흐름으로 마무리합니다.")),
      stop("01:05", "숙소 복귀", "Urgell Barcelona", "lodging", "taxi", guide("Sitges 하이라이트를 끝내고 바로 쉬는 귀가 구간입니다.", "숙소에 도착하면 씻고 바로 쉬며, 다음 날은 회복형 도심 산책이라 늦은 아침까지 무리하지 않아도 됩니다."))
    ]),
    day(5, "08.24", "Mon", "Gothic Quarter · El Born", "Recovery city walk", "Sitges 다음 날이라 천천히 시작합니다. Placa Catalunya 우회를 빼고 Granja Viader에서 Cathedral로 바로 들어가 Gothic과 Born을 회복감 있게 걷고, 밤에는 Sants까지 왕복하지 않습니다.", [
      stop("12:00", "숙소", "Urgell Barcelona", "lodging", "walking", guide("전날 Sitges 불꽃과 새벽 귀가의 여운을 회복하는 느린 출발입니다.", "컨디션을 먼저 확인하고, 오늘은 체크리스트를 채우기보다 Gothic Quarter와 El Born의 골목 분위기를 부드럽게 즐기는 날로 잡습니다.")),
      meal("13:00", "점심 식사", "Carrer del Parlament 식당가", "Carrer del Parlament, Barcelona", "walking", "숙소 인근 Sant Antoni에서 현장 선택"),
      meal("14:05", "오후 간식", "Granja M. Viader", "Granja M. Viader, Carrer d'en Xucla, 4-6, Barcelona", "walking", "Churros, Hot Chocolate"),
      stop("14:35", "Barcelona Cathedral", "Barcelona Cathedral", "gothic", "walking", guide("Barcelona Cathedral은 13~15세기에 세워진 도시의 주교좌성당으로, 성 십자가와 바르셀로나의 수호성녀 Santa Eulalia에게 바쳐진 고딕 지구의 중심축입니다.", "Granja Viader에서 바로 Cathedral 쪽으로 들어가면 Placa Catalunya를 돌아가는 동선을 줄일 수 있습니다.", "로마와 중세 도시의 층 위에 자리한 성당이라 외관, 회랑, 광장 주변 골목을 함께 보면 Barcelona가 항구도시에서 중세 도시로 커진 흐름이 보입니다.")),
      stop("15:45", "Placa del Rei", "Placa del Rei Barcelona", "gothic", "walking", guide("Placa del Rei는 Palau Reial Major가 둘러싼 중세 바르셀로나 권력의 중심으로, 왕궁의 안뜰처럼 쓰이던 공간입니다.", "돌벽과 계단, Santa Agata 예배당 주변을 보면 로마 Barcino의 흔적 위에 중세 왕궁과 도시 행정이 쌓인 장소라는 느낌이 강하게 남습니다.", "소리가 울리는 조용한 공간이라 잠깐 멈춰 분위기를 느끼고, 다음 골목으로 자연스럽게 이어갑니다.")),
      stop("16:25", "Gothic Quarter", "Gothic Quarter Barcelona", "gothic", "walking", guide("Gothic Quarter는 로마 식민도시 Barcino에서 시작해 중세 Barcelona의 궁전, 성당, 길드 건물이 겹겹이 남은 역사 중심부입니다.", "Pont del Bisbe와 좁은 골목을 천천히 보면 관광지 한 구역이라기보다 2천 년 가까운 도시의 골격을 그대로 걷는 느낌이 납니다.", "길을 조금 잃어도 괜찮지만 어두운 골목이나 지나치게 붐비는 길은 피하고, 피곤하면 바로 Born 방향으로 넘어갑니다.")),
      stop("17:20", "Santa Maria del Mar", "Santa Maria del Mar Barcelona", "born", "walking", guide("Santa Maria del Mar는 14세기 La Ribera와 Born의 상인·선원·주민들이 함께 세운 Catalan Gothic 성당입니다.", "Barcelona Cathedral이 도시 권위의 느낌이라면 이곳은 바다와 무역으로 성장한 시민들의 성당에 가까워, 넓고 단정한 내부와 높은 기둥에서 훨씬 담백한 힘이 느껴집니다.", "내부가 열려 있으면 잠깐 들어가 빛의 느낌을 보고, 닫혀 있으면 외관과 광장 분위기만 봐도 충분합니다.")),
      stop("18:20", "El Born", "El Born Barcelona", "born", "walking", guide("편집숍, 카페, 작은 골목이 이어지는 저녁 산책 구간입니다.", "쇼핑보다 분위기와 휴식을 우선하고, 발이 피곤하면 카페를 하나 정해 오래 앉아도 일정이 무너지지 않습니다.")),
      meal("19:00", "저녁 식사", "Passeig del Born 식당가", "Passeig del Born, Barcelona", "walking", "El Born에서 타파스 식당 현장 선택"),
      stop("21:00", "숙소 복귀", "Urgell Barcelona", "lodging", "taxi", guide("Recovery Day를 그대로 살리기 위해 El Born 저녁 후 바로 숙소로 돌아갑니다.", "이미 다른 날 Sants Festival을 충분히 보므로 오늘은 동쪽 Born에서 서쪽 Sants로 왕복하지 않고, 다음 날 Montserrat 출발을 위해 물, 모자, 편한 신발과 교통 동선을 미리 준비합니다."))
    ]),
    day(6, "08.25", "Tue", "Montserrat · Optional Rooftop", "Mountain day", "FGC R5와 Aeri de Montserrat Cable Car로 수도원에 올라가 Sant Joan 전망을 보는 날입니다. 저녁에는 숙소 근처에서 회복하고, 컨디션이 좋을 때만 접근성 좋은 루프탑으로 야경을 짧게 봅니다.", [
      stop("07:30", "숙소 출발", "Urgell Barcelona", "lodging", "walking", guide("Montserrat는 아침 출발의 정확도가 전체 만족도를 좌우합니다.", "물, 모자, 선크림, 간식, 교통권 또는 예매 화면을 확인하고 불필요한 짐은 숙소에 둡니다.")),
      stop("08:00", "Placa d'Espanya FGC", "Placa Espanya FGC Barcelona", "montserrat", "walking", guide("FGC R5를 타고 Aeri de Montserrat Station으로 가는 출발점입니다.", "역 내부 동선이 넓으니 전광판에서 R5 Manresa 방향과 플랫폼을 먼저 확인하고, 여유가 있으면 화장실을 다녀오는 편이 좋습니다."), "https://www.fgc.cat/en/"),
      stop("08:15", "FGC R5 출발", "Placa Espanya FGC Barcelona", "montserrat", "transit", guide("FGC R5로 Aeri de Montserrat Station까지 이동하는 구간입니다.", "하차역은 Aeri de Montserrat이며, 케이블카 역이 바로 이어지므로 열차 안에서 다음 환승 방향을 미리 확인해둡니다.")),
      stop("09:20", "Aeri de Montserrat Station", "Aeri de Montserrat Station", "montserrat", "transit", guide("FGC R5에서 내려 Aeri de Montserrat Cable Car로 갈아타는 지점입니다.", "케이블카는 별도 운영이라 표와 운행 간격을 현장에서 다시 확인하고, 혼잡하면 다음 편을 기다려도 일정이 크게 흔들리지 않습니다."), "https://aeridemontserrat.com/en/timetables-and-fares/"),
      stop("09:30", "Aeri de Montserrat Cable Car", "Aeri de Montserrat Cable Car", "montserrat", "walking", guide("Aeri de Montserrat Cable Car는 산 아래 역에서 수도원까지 약 5분 만에 올라가는 가장 인상적인 접근 방식입니다.", "케이블카가 절벽과 계곡 위를 지나며 Montserrat 산세가 바로 가까워지므로, 창가 쪽에서 짧게 풍경을 보고 휴대폰은 손에서 놓치지 않게 잡습니다."), "https://aeridemontserrat.com/en/"),
      stop("09:35", "Montserrat Monastery", "Montserrat Monastery", "montserrat", "cablecar", guide("Montserrat Monastery는 톱니 모양 산세 안에 자리한 Benedictine 수도원으로, Catalonia의 신앙과 정체성을 상징하는 순례지입니다.", "성당 안의 Black Madonna, La Moreneta는 오랫동안 많은 순례객이 찾은 상징이라 시간이 허락하면 보되, 이곳의 감동은 수도원 건물과 거대한 바위산이 한 장면으로 맞물리는 데서도 충분히 옵니다.", "Aeri 도착 후에는 수도원 광장, 성당, 산세의 방향을 먼저 파악하고, 관람은 대기 길이와 혼잡도에 맞춰 조정합니다."), "https://abadiamontserrat.cat/en/"),
      meal("12:00", "점심 식사", "Montserrat Monastery 식당 구역", "Restaurant Montserrat, Montserrat Monastery", "walking", "수도원 내부 또는 인접 식당에서 현장 선택"),
      stop("13:00", "Sant Joan Funicular", "Funicular de Sant Joan Montserrat", "montserrat", "walking", guide("Sant Joan Funicular는 수도원 위쪽 능선으로 올라가 Montserrat의 바위 봉우리와 평야를 한눈에 보게 해주는 산악 철도입니다.", "예전 은둔처와 산길로 이어지는 방향이라 수도원만 볼 때보다 이 산이 왜 Catalonia 사람들에게 특별한 풍경인지 훨씬 선명하게 느껴집니다.", "위쪽은 그늘이 적고 바람이 강할 수 있으니 물과 모자를 챙기고, 컨디션이 애매하면 짧은 전망 루트만 보고 내려옵니다.")),
      stop("15:30", "수도원 복귀", "Montserrat Monastery", "montserrat", "transit", guide("하산 교통 시간에 맞춰 여유 있게 수도원 쪽으로 돌아옵니다.", "기념품이나 카페는 남은 시간으로만 보고, Aeri de Montserrat Cable Car와 FGC R5 연결이 꼬이지 않게 출발 시간을 먼저 확인합니다.")),
      stop("16:00", "Aeri de Montserrat Cable Car 하산", "Aeri de Montserrat Cable Car", "montserrat", "cablecar", guide("Montserrat에서 Aeri de Montserrat Cable Car를 타고 산 아래 역으로 내려갑니다.", "하산도 약 5분이지만 대기 줄이 생길 수 있으므로, FGC R5 시간에 너무 딱 맞추지 않고 여유 있게 내려가는 편이 좋습니다."), "https://aeridemontserrat.com/en/"),
      stop("16:10", "Aeri de Montserrat Station", "Aeri de Montserrat Station", "montserrat", "walking", guide("케이블카 하부역에서 FGC R5로 다시 연결하는 구간입니다.", "Barcelona 방향 열차 플랫폼과 다음 출발 시간을 확인하고, 물을 보충한 뒤 무리 없이 돌아갑니다.")),
      stop("16:20", "FGC R5 Barcelona 방향", "Aeri de Montserrat Station", "montserrat", "walking", guide("Aeri de Montserrat Station에서 FGC R5를 타고 Plaça d'Espanya로 돌아갑니다.", "산에서 내려온 뒤 피로가 크게 올 수 있으니 열차 안에서는 쉬고, 저녁 욕심은 줄이는 흐름으로 생각합니다.")),
      stop("17:20", "Placa d'Espanya 귀환", "Placa Espanya Barcelona", "montserrat", "transit", guide("FGC R5로 바르셀로나에 돌아오는 구간입니다.", "도착 후 바로 숙소 방향으로 이동하면 저녁 전 회복 시간이 충분히 남습니다.")),
      stop("18:30", "숙소 인근", "Urgell Barcelona", "lodging", "walking", guide("샤워와 휴식 후 숙소 근처에서 가볍게 저녁을 먹습니다.", "오늘은 산악 이동이 많았으므로 저녁 식사는 멀리 나가지 말고, 루프탑은 컨디션이 괜찮을 때만 짧게 다녀오는 흐름이 좋습니다.")),
      meal("19:00", "저녁 식사", "Carrer del Parlament 식당가", "Carrer del Parlament, Barcelona", "walking", "바르셀로나 복귀 후 숙소 근처에서 선택"),
      stop("21:00", "La Isabela Rooftop (Optional)", "La Isabela Hotel 1898 Barcelona", "gothic", "walking", guide("La Isabela는 Hotel 1898의 루프탑 테라스로, La Rambla 중심에서 바르셀로나 지붕선과 저녁 야경을 보기 좋은 곳입니다.", "Montserrat는 이동과 계단 피로가 큰 날이라 이 일정은 필수가 아니라 컨디션이 남았을 때만 짧게 다녀오는 Optional로 둡니다.", "만석이거나 다리가 무겁거나 다음 날 컨디션이 걱정되면 루프탑을 건너뛰고 숙소에서 쉬는 쪽이 전체 여행 만족도에 더 좋습니다."), "https://www.hotel1898.com/en/terrace-la-isabela"),
      stop("22:30", "숙소 복귀", "Urgell Barcelona", "lodging", "walking", guide("산악 데이를 차분히 닫는 마무리입니다.", "루프탑을 다녀왔든 건너뛰었든 사진 백업과 신발 정리만 하고, 다음 날 쇼핑과 밤 공연을 위해 잠을 충분히 확보합니다."))
    ]),
    day(7, "08.26", "Wed", "Shopping · Casa Batllo", "Couple highlight", "낮에는 쇼핑, 밤에는 Casa Batllo Magical Nights입니다. 시간을 충분히 비우고 옷을 갈아입는 여유를 둡니다.", [
      stop("10:30", "Placa Universitat", "Placa Universitat Barcelona", "shopping", "walking", guide("쇼핑 동선으로 들어가기 전 기준점입니다.", "오늘은 많이 걸을 수 있으니 처음부터 속도를 올리지 말고, 사고 싶은 품목과 쉬는 지점을 간단히 정하고 시작합니다.")),
      stop("11:30", "Rambla de Catalunya", "Rambla de Catalunya Barcelona", "shopping", "walking", guide("가로수와 카페가 좋아 쇼핑 사이 휴식이 쉬운 거리입니다.", "매장을 계속 이어가기보다 마음에 드는 카페를 하나 끼워 넣어 오후 피로를 줄이는 방식으로 움직입니다.")),
      stop("12:00", "Passeig de Gracia", "Passeig de Gracia Barcelona", "shopping", "walking", guide("쇼핑과 모더니스타 건축이 겹치는 바르셀로나의 대표 거리입니다.", "Casa Mila와 주요 쇼윈도를 보며 걷되, 밤에 Casa Batllo 내부를 볼 예정이므로 낮에는 외관 중심으로 가볍게 봅니다.")),
      meal("13:30", "점심 식사", "Ciutat Comtal", "Ciutat Comtal, Rambla de Catalunya, Barcelona", "walking", "Pintxos, Grilled Squid"),
      stop("15:30", "숙소 휴식", "Urgell Barcelona", "lodging", "walking", guide("Magical Nights 전에 옷을 갈아입고 쉬는 핵심 구간입니다.", "QR, 예약 시간, 배터리, 가벼운 겉옷을 확인하고 쇼핑한 물건은 숙소에 두어 밤 동선을 가볍게 만듭니다.")),
      stop("19:30", "Casa Batllo", "Casa Batllo Barcelona", "batllo", "walking", guide("Casa Batllo는 섬유 사업가 Josep Batllo의 집을 Gaudi가 1904~1906년에 완전히 새롭게 바꾼 Passeig de Gracia의 대표 모더니스타 건축입니다.", "뼈처럼 보이는 발코니, 물결치는 파사드, 용의 등처럼 읽히는 지붕 때문에 동화적인 외관으로 유명하지만 실제로는 빛과 환기, 생활 동선까지 세밀하게 설계된 집입니다.", "입장 전 Passeig de Gracia의 저녁빛에서 파사드를 먼저 보고, 입장 줄과 티켓 확인 위치를 파악해 공연 전 흐름을 안정시킵니다.")),
      stop("20:00", "Casa Batllo Visit", "Casa Batllo Barcelona", "batllo", "walking", guide("Casa Batllo 내부 관람은 Gaudi가 장식가가 아니라 생활 전체를 설계한 건축가였다는 점을 보는 시간입니다.", "Main Floor의 곡선형 창, 파란빛이 깊어지는 lightwell, 고래 뼈처럼 이어지는 attic, 용의 등처럼 펼쳐지는 rooftop을 순서대로 보면 집 안에서 빛과 공기가 어떻게 움직이는지 자연스럽게 이해됩니다.", "옥상에서는 공연 이동 시간을 의식해 너무 늦게 머물지 않습니다."), "https://www.casabatllo.es/en/online-tickets/visit-magic-nights/"),
      stop("21:00", "Magical Nights", "Casa Batllo Barcelona", "batllo", "walking", guide("옥상 콘서트와 야간 분위기를 즐기는 하이라이트입니다.", "공연 전후 이동 동선이 좁아질 수 있으니 서두르지 말고, 사진보다 둘이 앉아 있는 시간을 충분히 남기는 편이 좋습니다."), "https://www.casabatllo.es/en/online-tickets/visit-magic-nights/"),
      meal("22:15", "저녁 식사", "Rambla de Catalunya 식당가", "Rambla de Catalunya, Barcelona", "walking", "Casa Batllo Magical Nights 종료 후 현장 선택"),
      stop("23:30", "숙소 복귀", "Urgell Barcelona", "lodging", "walking", guide("다음 날 Girona 출발이 빠르므로 바로 정리하는 복귀입니다.", "기차 예매 화면, 신분증, 보조배터리를 한곳에 두고 알람을 이중으로 맞춰둡니다."))
    ]),
    day(8, "08.27", "Thu", "Girona Day Trip", "Medieval photo day", "고속열차로 Girona를 다녀오는 날입니다. 강변에서 시작해 구시가지 언덕을 한 번만 오른 뒤, 성벽에서 Rambla와 Onyar 쪽으로 내려오는 흐름으로 걷습니다.", [
      stop("08:00", "숙소 출발", "Urgell Barcelona", "lodging", "walking", guide("기차 시간 기준으로 움직이는 아침입니다.", "신분증, 예매 화면, 물을 확인하고 Sants 역에서 플랫폼을 찾을 시간을 남겨 조급하지 않게 출발합니다.")),
      stop("08:30", "Barcelona Sants", "Barcelona Sants Station", "santsStation", "transit", guide("Girona행 열차 탑승을 준비합니다.", "Renfe 고속열차는 플랫폼과 열차 번호 확인이 중요하므로 전광판을 먼저 보고, 탑승구가 열리면 바로 이동합니다."), "https://www.renfe.com/es/en"),
      stop("09:00", "Girona행 고속열차", "Girona Station", "santsStation", "transit", guide("바르셀로나에서 Girona로 빠르게 이동하는 구간입니다.", "도착 후 바로 구시가지로 들어가므로 열차 안에서 첫 목적지 방향을 미리 확인해둡니다.")),
      stop("10:00", "Pont de les Peixateries Velles", "Pont de les Peixateries Velles Girona", "girona", "walking", guide("Pont de les Peixateries Velles는 Eiffel 회사가 만든 붉은 철교로, Girona 구시가지와 Onyar 강변 컬러 하우스를 가장 선명하게 연결해주는 첫 장면입니다.", "역에서 구시가지로 들어가는 길에 강변 사진을 먼저 짧게 남기고, 이후 언덕 방향으로 한 번만 올라가면 동선이 깔끔합니다.", "다리 위에서 오래 멈추기보다 양쪽 강변을 번갈아 보며 사진을 짧게 남기면 동선이 매끄럽습니다.")),
      stop("10:35", "Girona Old Town", "Girona Old Town", "girona", "walking", guide("Girona Old Town은 로마 시대 Gerunda에서 시작해 중세 성벽, 유대인 지구 Call, 대성당 주변 언덕길이 겹쳐 남은 역사 도시입니다.", "좁은 골목과 계단이 많은 이유도 방어와 종교, 생활 공간이 오랜 시간 한 언덕에 쌓였기 때문이라, 천천히 올라갈수록 도시의 깊이가 더 잘 느껴집니다.", "골목 분위기와 작은 광장을 보며 Cathedral 방향으로 자연스럽게 이어갑니다.")),
      stop("11:35", "Girona Cathedral", "Girona Cathedral", "girona", "walking", guide("Girona Cathedral은 Romanesque 회랑과 탑, Gothic 본당, Baroque 파사드가 한 건물 안에 겹친 Girona의 가장 상징적인 성당입니다.", "특히 넓은 Gothic 본당과 대계단이 유명해, 외부에서는 도시를 압도하는 무대처럼 보이고 내부에서는 긴 시간에 걸쳐 쌓인 양식의 변화가 느껴집니다.", "성벽으로 이어가기 전 가장 높은 구간을 한 번에 처리하면 오후에 다시 언덕을 오르지 않아도 됩니다."), "https://www.catedraldegirona.cat/"),
      stop("12:45", "Passeig de la Muralla", "Passeig de la Muralla Girona", "girona", "walking", guide("Passeig de la Muralla는 Girona를 지키던 옛 성벽 위를 걸으며 구시가지와 주변 산세를 내려다보는 산책로입니다.", "Cathedral 관람 직후 같은 높이에서 이어가면 점심 뒤에 다시 언덕을 오르는 비효율이 사라집니다.", "성벽은 무리해서 왕복하지 말고 가능한 구간만 걸은 뒤 Rambla de la Llibertat 방향으로 내려오면, 오후 동선이 강변과 역 방향으로 자연스럽게 이어집니다.")),
      meal("14:10", "점심 식사", "Rambla de la Llibertat 식당가", "Rambla de la Llibertat, Girona", "walking", "성벽에서 내려온 뒤 구시가지 중심 식당가에서 현장 선택"),
      stop("15:50", "Onyar 강변 카페", "Onyar River Girona cafes", "girona", "walking", guide("기차 전 회복과 사진 정리를 겸하는 구간입니다.", "점심 후에는 다시 언덕으로 올라가지 않고 강변 낮은 쪽에 머물며 컬러 하우스를 보며 쉬는 흐름이 가장 편합니다.", "Barcelona 복귀 열차 시간을 기준으로 Rambla와 Pont de Pedra 쪽을 거쳐 여유 있게 역으로 이동합니다.")),
      stop("18:00", "Girona Station", "Girona Station", "girona", "walking", guide("바르셀로나 복귀 열차를 잡는 구간입니다.", "플랫폼과 열차 번호를 확인하고, 당일 지연 가능성에 대비해 물과 간단한 간식을 미리 준비합니다.")),
      stop("19:00", "Barcelona Sants", "Barcelona Sants Station", "santsStation", "transit", guide("바르셀로나에 돌아와 숙소로 바로 이동합니다.", "역 주변에서 오래 머물기보다 피로를 줄이는 경로를 택하고, 저녁은 숙소 근처로 단순하게 잡는 편이 좋습니다.")),
      stop("20:00", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", guide("긴 걷기 데이를 마무리하는 시간입니다.", "발 피로를 풀고 사진을 백업한 뒤, 마지막 풀데이인 Sailing과 7 Portes 일정을 위해 일찍 쉬어갑니다.")),
      meal("20:30", "저녁 식사", "Carrer del Parlament 식당가", "Carrer del Parlament, Barcelona", "walking", "Girona에서 돌아온 뒤 숙소 근처에서 자유 식사")
    ]),
    day(9, "08.28", "Fri", "Sailing · 7 Portes · Boadas", "Last full day", "마지막 완전한 하루입니다. 낮에는 바다, 밤에는 7 Portes와 클래식 칵테일 바로 이어가 동쪽과 서쪽을 왕복하지 않게 정리합니다.", [
      meal("10:30", "브런치", "Rambla del Poblenou 식당가", "Rambla del Poblenou, Barcelona", "walking", "Port Olimpic과 요트 일정 전 브런치"),
      stop("11:45", "Port Olimpic", "Port Olimpic Barcelona", "sailing", "transit", guide("세일링 미팅 포인트를 찾는 구간입니다.", "항구는 비슷한 선착장이 많으니 업체가 보낸 정확한 위치와 보트 이름을 확인하고, 늦지 않게 도착합니다.")),
      stop("12:00", "Barcelona Sailing", "Port Olimpic Barcelona", "sailing", "walking", guide("바다에서 바르셀로나를 보는 마지막 큰 장면입니다.", "바람과 파도에 따라 코스가 달라질 수 있으니 선장 안내를 우선하고, 휴대폰은 스트랩이나 가방 안에 안전하게 둡니다.")),
      meal("14:30", "점심 식사", "Port Olimpic 식당가", "Port Olimpic, Barcelona", "walking", "요트 투어 종료 후 해변 인근에서 가벼운 점심"),
      stop("16:00", "숙소 복귀", "Urgell Barcelona", "lodging", "transit", guide("마지막 저녁 전 휴식과 짐 정리를 겸합니다.", "귀국 준비를 조금 해두면 밤을 더 편하게 즐길 수 있고, 7 Portes와 Boadas를 이어가는 밤 동선이 훨씬 가벼워집니다.")),
      meal("19:30", "저녁 식사", "7 Portes", "7 Portes, Passeig d'Isabel II, 14, Barcelona", "transit", "Paella Parellada, Crema Catalana"),
      stop("21:45", "Boadas Cocktails", "Boadas Cocktails, Carrer dels Tallers, 1, Barcelona", "gothic", "walking", guide("Boadas Cocktails는 1930년대부터 이어진 바르셀로나의 클래식 칵테일 바로, 마지막 밤을 조용하고 성숙하게 마무리하기 좋습니다.", "7 Portes에서 Gothic 방향으로 이어가면 Sants를 왕복하지 않아 이동 피로가 크게 줄고, 숙소 Urgell 방향 복귀도 단순해집니다.", "시끄러운 클럽 분위기를 원하지 않는 날에 잘 맞고, 복장은 너무 해변 차림보다 단정하게 정리하는 편이 좋습니다.")),
      stop("23:10", "숙소 복귀", "Urgell Barcelona", "lodging", "walking", guide("귀국 전 마지막 밤 복귀입니다.", "여권, 항공권, 충전기, 기념품, 짐 무게를 확인하고 공항 이동 가방을 따로 정리합니다."))
    ]),
    day(10, "08.29", "Sat", "Departure", "Clean departure", "출국일은 관광을 무리하지 않고 숙소 주변과 공항 이동에 집중합니다.", [
      stop("09:00", "숙소", "Urgell Barcelona", "lodging", "walking", guide("짐을 정리하고 빠진 물건을 확인하는 아침입니다.", "여권, 지갑, 항공권, 충전기, 기념품을 한 번에 체크하고 액체류와 배터리 위치를 정리합니다.")),
      meal("10:30", "브런치", "Mercat de Sant Antoni", "Mercat de Sant Antoni, Barcelona", "walking", "출국 전 간단한 식사"),
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

function meal(time, label, title, place, travelMode, mealNote) {
  return {
    type: "stop",
    time,
    title,
    place,
    imageKey: mealImageKey(title),
    travelMode,
    guide: "",
    official: "",
    mealLabel: label,
    mealNote,
    mealPoint: mealPointText(title, mealNote)
  };
}

function mealImageKey(title) {
  if (title.includes("Can Sole")) return "mealPaella";
  if (title.includes("La Paradeta")) return "mealSeafood";
  if (title.includes("El Cable")) return "mealBomba";
  if (title.includes("Granja")) return "mealChurros";
  if (title.includes("Ciutat Comtal")) return "mealTapas";
  if (title.includes("Mercat")) return "mealMarket";
  if (title.includes("Verdi") || title.includes("Gracia")) return "mealGracia";
  if (title.includes("Valladolid") || title.includes("Sants")) return "mealSants";
  if (title.includes("Ribera")) return "mealSitges";
  if (title.includes("Parlament")) return "mealParlament";
  if (title.includes("Montserrat")) return "mealMontserrat";
  if (title.includes("Rambla de Catalunya")) return "mealRambla";
  if (title.includes("Llibertat")) return "mealGirona";
  if (title.includes("Poblenou")) return "mealPoblenou";
  if (title.includes("Port Olimpic")) return "mealPort";
  if (title.includes("7 Portes")) return "mealSeafood";
  if (title.includes("Isabel")) return "mealSeafood";
  return "mealTapas";
}

function mealPointText(title, mealNote) {
  if (title.includes("Can Sole")) return "Barceloneta에서 오래 사랑받는 해산물 식사 포인트입니다. 꼭 먹으면 좋은 건 Seafood Paella와 Fideua이고, 둘 다 바다 일정 뒤에 잘 맞는 스페인식 해산물 메인입니다.";
  if (title.includes("La Paradeta")) return "해산물을 고르고 조리해 먹는 캐주얼 seafood 스타일입니다. Garlic Shrimp, Mussels, Squid처럼 재료 맛이 바로 느껴지는 메뉴가 좋고, Sagrada Familia 근처 점심으로 부담이 적습니다.";
  if (title.includes("El Cable")) return "Sitges에서 Bomba로 유명한 타파스 바입니다. Bomba는 감자 크로켓에 소스가 올라가는 바르셀로나식 전통 타파스라 꼭 하나는 먹어보면 좋습니다.";
  if (title.includes("Granja")) return "오래된 바르셀로나식 카페 문화인 granja 분위기를 느끼는 간식 Stop입니다. 진한 Hot Chocolate에 Churros를 찍어 먹는 조합이 핵심입니다.";
  if (title.includes("Ciutat Comtal")) return "Passeig de Gracia 쇼핑 동선에서 들르기 좋은 인기 타파스 식당입니다. Pintxos와 Grilled Squid처럼 한두 접시씩 나눠 먹기 좋은 메뉴를 우선하면 좋습니다.";
  if (title.includes("Mercat")) return "시장 안에서 가볍게 고르는 첫 식사입니다. Jamon, Bocadillo, Fresh Juice처럼 바로 먹기 쉬운 조합을 고르면 도착일 컨디션을 크게 쓰지 않습니다.";
  if (title.includes("Montserrat")) return "산 위 식사는 선택지가 많지 않아 빠르고 든든한 메뉴가 우선입니다. 너무 오래 기다리기보다 간단한 샌드위치나 따뜻한 접시 하나로 Sant Joan 이동 전 에너지를 채웁니다.";
  if (title.includes("Ribera")) return "Sitges 해변 저녁은 맛보다 자리와 퇴장 동선이 중요합니다. 바다를 볼 수 있고 La Fragata로 이동하기 쉬운 곳을 고르면 불꽃 대기 흐름이 편합니다.";
  if (title.includes("7 Portes")) return "Barcelona의 클래식 레스토랑 중 하나로 마지막 저녁 분위기를 잡기 좋습니다. Paella Parellada처럼 먹기 편한 쌀요리와 Crema Catalana를 나눠 먹으면 전통적인 마무리감이 좋습니다.";
  if (title.includes("Isabel")) return "마지막 저녁은 Port Vell과 El Born 사이에서 분위기를 잡는 식사입니다. 해산물, 쌀요리, 타파스 중 컨디션에 맞춰 고르고 Sants 이동 여부를 식사 중 결정하면 좋습니다.";
  if (title.includes("Valladolid") || title.includes("Sants")) return "Sants 축제 주변 식당가는 오래 앉기보다 가볍게 먹는 것이 좋습니다. 붐비는 골목을 피해 회전이 빠른 타파스나 간단한 접시 위주로 고르세요.";
  if (title.includes("Poblenou")) return "요트 일정 전 브런치라 과하게 무겁지 않게 먹는 것이 좋습니다. 빵, 계란, 커피처럼 속이 편한 메뉴를 고르면 바다 위에서도 부담이 적습니다.";
  if (title.includes("Port Olimpic")) return "세일링 후 바로 회복하는 점심입니다. 물과 염분 보충이 우선이고, 해산물이나 샐러드처럼 가볍게 끝낼 수 있는 메뉴가 좋습니다.";
  return `${mealNote}. 식당가 Stop은 별도 예약보다 현장 분위기와 대기 시간을 보고 고르는 것이 좋습니다. 사람이 과하게 몰리는 곳보다 밝고 이동하기 쉬운 곳을 우선하세요.`;
}

function guide(...lines) {
  return lines.join(" ");
}
