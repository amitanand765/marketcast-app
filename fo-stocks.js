const FO_INSTRUMENTS = [
  // ── INDICES ──────────────────────────────────────────────────────────────────
  {label:'NIFTY',      name:'Nifty 50',               price:22587, atm:22600, lot:50,   type:'index'},
  {label:'BANKNIFTY',  name:'Bank Nifty',              price:48234, atm:48200, lot:15,   type:'index'},
  {label:'FINNIFTY',   name:'Fin Nifty',               price:21456, atm:21500, lot:40,   type:'index'},
  {label:'MIDCPNIFTY', name:'Midcap Nifty',            price:10234, atm:10250, lot:75,   type:'index'},
  {label:'SENSEX',     name:'BSE Sensex',              price:74339, atm:74400, lot:10,   type:'index'},

  // ── BANKING ──────────────────────────────────────────────────────────────────
  {label:'HDFCBANK',   name:'HDFC Bank',               price:1634,  atm:1650,  lot:550,  type:'stock'},
  {label:'ICICIBANK',  name:'ICICI Bank',              price:1087,  atm:1100,  lot:700,  type:'stock'},
  {label:'SBIN',       name:'State Bank of India',     price:734,   atm:735,   lot:1500, type:'stock'},
  {label:'KOTAKBANK',  name:'Kotak Mahindra Bank',     price:1789,  atm:1800,  lot:400,  type:'stock'},
  {label:'AXISBANK',   name:'Axis Bank',               price:1123,  atm:1125,  lot:625,  type:'stock'},
  {label:'INDUSINDBK', name:'IndusInd Bank',           price:1456,  atm:1450,  lot:500,  type:'stock'},
  {label:'BANKBARODA', name:'Bank of Baroda',          price:234,   atm:235,   lot:2700, type:'stock'},
  {label:'PNB',        name:'Punjab National Bank',    price:98,    atm:100,   lot:8000, type:'stock'},
  {label:'CANBK',      name:'Canara Bank',             price:98,    atm:100,   lot:5000, type:'stock'},
  {label:'FEDERALBNK', name:'Federal Bank',            price:187,   atm:188,   lot:5000, type:'stock'},
  {label:'IDFCFIRSTB', name:'IDFC First Bank',         price:78,    atm:80,    lot:10000,type:'stock'},
  {label:'YESBANK',    name:'Yes Bank',                price:23,    atm:23,    lot:40000,type:'stock'},
  {label:'RBLBANK',    name:'RBL Bank',                price:187,   atm:188,   lot:5000, type:'stock'},
  {label:'BANDHANBNK', name:'Bandhan Bank',            price:187,   atm:188,   lot:5000, type:'stock'},
  {label:'AUBANK',     name:'AU Small Finance Bank',   price:598,   atm:600,   lot:1000, type:'stock'},

  // ── IT ───────────────────────────────────────────────────────────────────────
  {label:'TCS',        name:'Tata Consultancy Services',price:3892, atm:3900,  lot:150,  type:'stock'},
  {label:'INFY',       name:'Infosys',                 price:1456,  atm:1450,  lot:400,  type:'stock'},
  {label:'WIPRO',      name:'Wipro',                   price:456,   atm:460,   lot:1500, type:'stock'},
  {label:'HCLTECH',    name:'HCL Technologies',        price:1456,  atm:1450,  lot:350,  type:'stock'},
  {label:'TECHM',      name:'Tech Mahindra',           price:1289,  atm:1300,  lot:500,  type:'stock'},
  {label:'LTIM',       name:'LTIMindtree',             price:5234,  atm:5250,  lot:150,  type:'stock'},
  {label:'MPHASIS',    name:'Mphasis',                 price:2345,  atm:2350,  lot:300,  type:'stock'},
  {label:'COFORGE',    name:'Coforge',                 price:6789,  atm:6800,  lot:100,  type:'stock'},
  {label:'PERSISTENT', name:'Persistent Systems',      price:4567,  atm:4600,  lot:150,  type:'stock'},
  {label:'KPITTECH',   name:'KPIT Technologies',       price:1678,  atm:1700,  lot:400,  type:'stock'},

  // ── ENERGY & OIL ─────────────────────────────────────────────────────────────
  {label:'RELIANCE',   name:'Reliance Industries',     price:2847,  atm:2850,  lot:250,  type:'stock'},
  {label:'ONGC',       name:'ONGC',                    price:234,   atm:235,   lot:3850, type:'stock'},
  {label:'BPCL',       name:'BPCL',                    price:356,   atm:360,   lot:1800, type:'stock'},
  {label:'IOC',        name:'Indian Oil Corporation',  price:178,   atm:180,   lot:4500, type:'stock'},
  {label:'HPCL',       name:'HPCL',                    price:456,   atm:460,   lot:1700, type:'stock'},
  {label:'OIL',        name:'Oil India',               price:456,   atm:460,   lot:1200, type:'stock'},
  {label:'PETRONET',   name:'Petronet LNG',            price:298,   atm:300,   lot:3000, type:'stock'},
  {label:'IGL',        name:'Indraprastha Gas',        price:456,   atm:460,   lot:1375, type:'stock'},
  {label:'GUJGASLTD',  name:'Gujarat Gas',             price:567,   atm:570,   lot:1250, type:'stock'},
  {label:'ATGL',       name:'Adani Total Gas',         price:789,   atm:800,   lot:750,  type:'stock'},

  // ── TELECOM ───────────────────────────────────────────────────────────────────
  {label:'BHARTIARTL', name:'Bharti Airtel',           price:1287,  atm:1300,  lot:475,  type:'stock'},
  {label:'IDEA',       name:'Vodafone Idea',           price:12,    atm:12,    lot:70000,type:'stock'},

  // ── AUTO ─────────────────────────────────────────────────────────────────────
  {label:'MARUTI',     name:'Maruti Suzuki',           price:12345, atm:12400, lot:50,   type:'stock'},
  {label:'TATAMOTORS', name:'Tata Motors',             price:876,   atm:880,   lot:550,  type:'stock'},
  {label:'M&M',        name:'Mahindra & Mahindra',     price:1987,  atm:2000,  lot:350,  type:'stock'},
  {label:'HEROMOTOCO', name:'Hero MotoCorp',           price:4567,  atm:4600,  lot:150,  type:'stock'},
  {label:'BAJAJ-AUTO', name:'Bajaj Auto',              price:8765,  atm:8800,  lot:75,   type:'stock'},
  {label:'EICHERMOT',  name:'Eicher Motors',           price:4234,  atm:4250,  lot:175,  type:'stock'},
  {label:'TVSMOTOR',   name:'TVS Motor',               price:2345,  atm:2350,  lot:350,  type:'stock'},
  {label:'ASHOKLEY',   name:'Ashok Leyland',           price:234,   atm:235,   lot:3000, type:'stock'},
  {label:'APOLLOTYRE', name:'Apollo Tyres',            price:456,   atm:460,   lot:1375, type:'stock'},
  {label:'MRF',        name:'MRF',                     price:123456,atm:124000,lot:10,   type:'stock'},
  {label:'MOTHERSON',  name:'Motherson Wiring',        price:178,   atm:180,   lot:4500, type:'stock'},
  {label:'BOSCHLTD',   name:'Bosch',                   price:34567, atm:34600, lot:25,   type:'stock'},

  // ── FMCG ─────────────────────────────────────────────────────────────────────
  {label:'HINDUNILVR', name:'Hindustan Unilever',      price:2456,  atm:2450,  lot:300,  type:'stock'},
  {label:'ITC',        name:'ITC',                     price:456,   atm:460,   lot:1600, type:'stock'},
  {label:'NESTLEIND',  name:'Nestle India',            price:23456, atm:23500, lot:40,   type:'stock'},
  {label:'BRITANNIA',  name:'Britannia Industries',    price:5678,  atm:5700,  lot:125,  type:'stock'},
  {label:'DABUR',      name:'Dabur India',             price:567,   atm:570,   lot:1250, type:'stock'},
  {label:'GODREJCP',   name:'Godrej Consumer Products',price:1234,  atm:1250,  lot:500,  type:'stock'},
  {label:'MARICO',     name:'Marico',                  price:567,   atm:570,   lot:1200, type:'stock'},
  {label:'COLPAL',     name:'Colgate Palmolive',       price:2789,  atm:2800,  lot:250,  type:'stock'},
  {label:'TATACONSUM', name:'Tata Consumer Products',  price:1123,  atm:1125,  lot:533,  type:'stock'},
  {label:'VBL',        name:'Varun Beverages',         price:1567,  atm:1550,  lot:500,  type:'stock'},
  {label:'ASIANPAINT', name:'Asian Paints',            price:2876,  atm:2900,  lot:200,  type:'stock'},

  // ── PHARMA ───────────────────────────────────────────────────────────────────
  {label:'SUNPHARMA',  name:'Sun Pharmaceutical',      price:1567,  atm:1550,  lot:350,  type:'stock'},
  {label:'DRREDDY',    name:'Dr Reddys Laboratories',  price:5678,  atm:5700,  lot:125,  type:'stock'},
  {label:'CIPLA',      name:'Cipla',                   price:1234,  atm:1250,  lot:650,  type:'stock'},
  {label:'DIVISLAB',   name:'Divis Laboratories',      price:3987,  atm:4000,  lot:150,  type:'stock'},
  {label:'AUROPHARMA', name:'Aurobindo Pharma',        price:1234,  atm:1250,  lot:500,  type:'stock'},
  {label:'TORNTPHARM', name:'Torrent Pharmaceuticals', price:3456,  atm:3450,  lot:150,  type:'stock'},
  {label:'LUPIN',      name:'Lupin',                   price:1789,  atm:1800,  lot:400,  type:'stock'},
  {label:'BIOCON',     name:'Biocon',                  price:345,   atm:345,   lot:2800, type:'stock'},
  {label:'ALKEM',      name:'Alkem Laboratories',      price:5678,  atm:5700,  lot:100,  type:'stock'},
  {label:'GLENMARK',   name:'Glenmark Pharmaceuticals',price:1234,  atm:1250,  lot:500,  type:'stock'},
  {label:'IPCALAB',    name:'IPCA Laboratories',       price:1678,  atm:1700,  lot:400,  type:'stock'},
  {label:'ABBOTINDIA', name:'Abbott India',            price:28765, atm:29000, lot:25,   type:'stock'},

  // ── NBFC & INSURANCE ─────────────────────────────────────────────────────────
  {label:'BAJFINANCE', name:'Bajaj Finance',           price:7123,  atm:7100,  lot:125,  type:'stock'},
  {label:'BAJAJFINSV', name:'Bajaj Finserv',           price:1678,  atm:1700,  lot:500,  type:'stock'},
  {label:'CHOLAFIN',   name:'Cholamandalam Finance',   price:1234,  atm:1250,  lot:500,  type:'stock'},
  {label:'MUTHOOTFIN', name:'Muthoot Finance',         price:1789,  atm:1800,  lot:400,  type:'stock'},
  {label:'SBICARD',    name:'SBI Cards',               price:789,   atm:800,   lot:800,  type:'stock'},
  {label:'HDFCLIFE',   name:'HDFC Life Insurance',     price:678,   atm:680,   lot:1100, type:'stock'},
  {label:'SBILIFE',    name:'SBI Life Insurance',      price:1567,  atm:1550,  lot:375,  type:'stock'},
  {label:'ICICIPRULI', name:'ICICI Prudential Life',   price:678,   atm:680,   lot:1100, type:'stock'},
  {label:'LICI',       name:'LIC of India',            price:987,   atm:1000,  lot:700,  type:'stock'},
  {label:'ICICIGI',    name:'ICICI Lombard General',   price:1789,  atm:1800,  lot:350,  type:'stock'},
  {label:'SHRIRAMFIN', name:'Shriram Finance',         price:2345,  atm:2350,  lot:300,  type:'stock'},
  {label:'PFC',        name:'Power Finance Corp',      price:456,   atm:460,   lot:1500, type:'stock'},
  {label:'RECLTD',     name:'REC Limited',             price:567,   atm:570,   lot:1100, type:'stock'},
  {label:'IRFC',       name:'Indian Railway Finance',  price:189,   atm:190,   lot:4000, type:'stock'},

  // ── INFRA & CONSTRUCTION ─────────────────────────────────────────────────────
  {label:'LT',         name:'Larsen & Toubro',         price:3234,  atm:3250,  lot:150,  type:'stock'},
  {label:'ADANIPORTS', name:'Adani Ports & SEZ',       price:1234,  atm:1250,  lot:400,  type:'stock'},
  {label:'ADANIENT',   name:'Adani Enterprises',       price:2987,  atm:3000,  lot:250,  type:'stock'},
  {label:'ADANIGREEN', name:'Adani Green Energy',      price:1789,  atm:1800,  lot:350,  type:'stock'},
  {label:'ADANIPOWER', name:'Adani Power',             price:567,   atm:570,   lot:1250, type:'stock'},
  {label:'GMRINFRA',   name:'GMR Airports Infra',      price:98,    atm:100,   lot:7500, type:'stock'},
  {label:'RVNL',       name:'Rail Vikas Nigam',        price:456,   atm:460,   lot:1500, type:'stock'},
  {label:'IRCON',      name:'IRCON International',     price:234,   atm:235,   lot:2700, type:'stock'},
  {label:'NCC',        name:'NCC Limited',             price:234,   atm:235,   lot:3200, type:'stock'},

  // ── UTILITIES & POWER ────────────────────────────────────────────────────────
  {label:'POWERGRID',  name:'Power Grid Corporation',  price:298,   atm:300,   lot:2700, type:'stock'},
  {label:'NTPC',       name:'NTPC',                    price:356,   atm:355,   lot:2250, type:'stock'},
  {label:'TATAPOWER',  name:'Tata Power Company',      price:456,   atm:460,   lot:1350, type:'stock'},
  {label:'JSWENERGY',  name:'JSW Energy',              price:567,   atm:570,   lot:1100, type:'stock'},
  {label:'TORNTPOWER', name:'Torrent Power',           price:1234,  atm:1250,  lot:500,  type:'stock'},
  {label:'CESC',       name:'CESC Limited',            price:178,   atm:180,   lot:4000, type:'stock'},

  // ── METALS & MINING ──────────────────────────────────────────────────────────
  {label:'TATASTEEL',  name:'Tata Steel',              price:145,   atm:146,   lot:5500, type:'stock'},
  {label:'JSWSTEEL',   name:'JSW Steel',               price:867,   atm:870,   lot:675,  type:'stock'},
  {label:'HINDALCO',   name:'Hindalco Industries',     price:678,   atm:680,   lot:1075, type:'stock'},
  {label:'VEDL',       name:'Vedanta',                 price:456,   atm:460,   lot:1500, type:'stock'},
  {label:'COALINDIA',  name:'Coal India',              price:456,   atm:460,   lot:1400, type:'stock'},
  {label:'NMDC',       name:'NMDC',                    price:234,   atm:235,   lot:3500, type:'stock'},
  {label:'SAIL',       name:'Steel Authority of India',price:145,   atm:146,   lot:5500, type:'stock'},
  {label:'NATIONALUM', name:'National Aluminium Co',   price:234,   atm:235,   lot:2700, type:'stock'},
  {label:'HINDCOPPER', name:'Hindustan Copper',        price:345,   atm:345,   lot:2300, type:'stock'},

  // ── CONSUMER & RETAIL ────────────────────────────────────────────────────────
  {label:'TITAN',      name:'Titan Company',           price:3456,  atm:3450,  lot:175,  type:'stock'},
  {label:'DMART',      name:'Avenue Supermarts (DMart)',price:4123, atm:4150,  lot:150,  type:'stock'},
  {label:'TRENT',      name:'Trent',                   price:5678,  atm:5700,  lot:125,  type:'stock'},
  {label:'JUBLFOOD',   name:'Jubilant Foodworks',      price:678,   atm:680,   lot:1250, type:'stock'},
  {label:'BATAINDIA',  name:'Bata India',              price:1456,  atm:1450,  lot:500,  type:'stock'},
  {label:'KALYANKJIL', name:'Kalyan Jewellers',        price:456,   atm:460,   lot:1375, type:'stock'},
  {label:'MANYAVAR',   name:'Vedant Fashions',         price:1234,  atm:1250,  lot:500,  type:'stock'},

  // ── HEALTHCARE ───────────────────────────────────────────────────────────────
  {label:'APOLLOHOSP', name:'Apollo Hospitals',        price:6789,  atm:6800,  lot:125,  type:'stock'},
  {label:'FORTIS',     name:'Fortis Healthcare',       price:567,   atm:570,   lot:1100, type:'stock'},
  {label:'MAXHEALTH',  name:'Max Healthcare',          price:789,   atm:800,   lot:800,  type:'stock'},

  // ── CEMENT ───────────────────────────────────────────────────────────────────
  {label:'ULTRACEMCO', name:'UltraTech Cement',        price:9876,  atm:9900,  lot:100,  type:'stock'},
  {label:'SHREECEM',   name:'Shree Cement',            price:27890, atm:28000, lot:25,   type:'stock'},
  {label:'AMBUJACEM',  name:'Ambuja Cements',          price:678,   atm:680,   lot:1000, type:'stock'},
  {label:'ACC',        name:'ACC',                     price:2345,  atm:2350,  lot:300,  type:'stock'},
  {label:'DALBHARAT',  name:'Dalmia Bharat',           price:1789,  atm:1800,  lot:350,  type:'stock'},
  {label:'JKCEMENT',   name:'JK Cement',               price:4567,  atm:4600,  lot:150,  type:'stock'},

  // ── DEFENCE ──────────────────────────────────────────────────────────────────
  {label:'HAL',        name:'Hindustan Aeronautics',   price:3456,  atm:3450,  lot:150,  type:'stock'},
  {label:'BEL',        name:'Bharat Electronics',      price:234,   atm:235,   lot:4500, type:'stock'},
  {label:'BHEL',       name:'Bharat Heavy Electricals',price:234,   atm:235,   lot:3500, type:'stock'},
  {label:'MAZDOCK',    name:'Mazagon Dock Shipbuilders',price:4567, atm:4600,  lot:150,  type:'stock'},
  {label:'GRSE',       name:'Garden Reach Shipbuilders',price:1789, atm:1800,  lot:350,  type:'stock'},
  {label:'COCHINSHIP', name:'Cochin Shipyard',         price:1789,  atm:1800,  lot:350,  type:'stock'},
  {label:'DATAPATTNS', name:'Data Patterns',           price:2345,  atm:2350,  lot:300,  type:'stock'},

  // ── NEW AGE TECH ─────────────────────────────────────────────────────────────
  {label:'ZOMATO',     name:'Zomato',                  price:178,   atm:180,   lot:4500, type:'stock'},
  {label:'PAYTM',      name:'One97 Communications',    price:456,   atm:460,   lot:1700, type:'stock'},
  {label:'NYKAA',      name:'FSN E-Commerce (Nykaa)',  price:189,   atm:190,   lot:3750, type:'stock'},
  {label:'POLICYBZR',  name:'PB Fintech (Policybazaar)',price:1234, atm:1250,  lot:500,  type:'stock'},
  {label:'IRCTC',      name:'IRCTC',                   price:789,   atm:800,   lot:875,  type:'stock'},
  {label:'DELHIVERY',  name:'Delhivery',               price:456,   atm:460,   lot:1700, type:'stock'},

  // ── CHEMICALS ────────────────────────────────────────────────────────────────
  {label:'PIDILITIND', name:'Pidilite Industries',     price:2987,  atm:3000,  lot:250,  type:'stock'},
  {label:'SRF',        name:'SRF',                     price:2345,  atm:2350,  lot:300,  type:'stock'},
  {label:'DEEPAKNTR',  name:'Deepak Nitrite',          price:2345,  atm:2350,  lot:300,  type:'stock'},
  {label:'NAVINFLUOR', name:'Navin Fluorine',          price:3456,  atm:3450,  lot:175,  type:'stock'},
  {label:'AARTIIND',   name:'Aarti Industries',        price:678,   atm:680,   lot:1000, type:'stock'},
  {label:'TATACHEM',   name:'Tata Chemicals',          price:1123,  atm:1125,  lot:500,  type:'stock'},

  // ── REAL ESTATE ──────────────────────────────────────────────────────────────
  {label:'DLF',        name:'DLF',                     price:789,   atm:800,   lot:825,  type:'stock'},
  {label:'GODREJPROP', name:'Godrej Properties',       price:2345,  atm:2350,  lot:275,  type:'stock'},
  {label:'PRESTIGE',   name:'Prestige Estates',        price:1789,  atm:1800,  lot:350,  type:'stock'},
  {label:'OBEROIRLTY', name:'Oberoi Realty',           price:1789,  atm:1800,  lot:350,  type:'stock'},
  {label:'BRIGADE',    name:'Brigade Enterprises',     price:1234,  atm:1250,  lot:500,  type:'stock'},

  // ── DIVERSIFIED ──────────────────────────────────────────────────────────────
  {label:'GRASIM',     name:'Grasim Industries',       price:2234,  atm:2250,  lot:275,  type:'stock'},
  {label:'UPL',        name:'UPL',                     price:567,   atm:570,   lot:1300, type:'stock'},
  {label:'PIIND',      name:'PI Industries',           price:3456,  atm:3450,  lot:175,  type:'stock'},
  {label:'COROMANDEL', name:'Coromandel International',price:1234,  atm:1250,  lot:500,  type:'stock'},
];
