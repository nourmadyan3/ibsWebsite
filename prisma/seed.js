// eslint-disable-next-line
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Dummy data for grouped team members
const groupTeamMembers = [
  {
    groupTitle: "Management",
    members: [
      { name: "Nihad Katamish", imageUrl: "/images/mrs-nehad.jpg" },
      {
        name: "Eng. Abdelaty Kabeel",
        imageUrl: "/images/Eng.-Abdel-Aaty-Kabeel.jpg",
      },
      { name: "Mohamed Rady", imageUrl: "/images/Rady1.jpg" },
      { name: "Reem Reda", imageUrl: "/images/reem.jpg" },
      { name: "Maha Katamish", imageUrl: "/images/maha.jpg" },
    ],
  },
  {
    groupTitle: "Payroll",
    members: [
      { name: "Hisham Rashad", imageUrl: "/images/hisham-rashad.jpg" },
      { name: "Amira Makram", imageUrl: "/images/amira-makram.jpg" },
      { name: "Ehab Shawky", imageUrl: "/images/ehab-shawky.jpg" },
      { name: "Mariam Osman", imageUrl: "/images/mariam-osman.jpg" },
      { name: "hoda mohsen", imageUrl: "/images/hoda-mohsen.jpg" },
      { name: "ehab abdallah", imageUrl: "/images/ehab-abdallah.jpg" },
      { name: "Nermine Hamdy", imageUrl: "/images/Nermine.jpg" },
      { name: "Nourhan Atef", imageUrl: "/images/nourhan-atef.jpg" },
      { name: "Dina Tarek", imageUrl: "/images/Dina-Tarek.jpg" },
      { name: "Hala Eissa", imageUrl: "/images/Hala-Eissa.jpg" },
      { name: "Emad Kabeel", imageUrl: "/images/Emad-Kabeel-425x425.jpg" },
      { name: "Remon Kamal", imageUrl: "/images/Remon-Kamal-425x425.jpg" },
      {
        name: "Bassem Mohamed",
        imageUrl: "/images/Bassem-Mohamed-425x425-1.jpg",
      },
      { name: "Nouran Mousa", imageUrl: "/images/Nouran-Mousa.jpg" },
      { name: "Yehia Sayed", imageUrl: "/images/Yehia-Sayed-1.jpg" },
      { name: "Ahmed Fouad", imageUrl: "/images/Ahmed-Fouad-1.jpg" },
      {
        name: "Nourhan Osama",
        imageUrl: "/images/Nourhan-Osama-425x425-1.jpg",
      },
      { name: "Nourhan Ayman", imageUrl: "/images/Nourhan-Ayman-425x425.jpg" },
    ],
  },
  {
    groupTitle: "Payable",
    members: [
      { name: "Moustafa El Helw", imageUrl: "/images/Moustafa-El-Helw1.jpg" },
      { name: "Amr Said", imageUrl: "/images/Amr-Said1.jpg" },
      { name: "Nourhan Moustafa", imageUrl: "/images/Nourhan-Moustafa.jpg" },
    ],
  },
  {
    groupTitle: "Personnel",
    members: [
      { name: "Amr Fahmy", imageUrl: "/images/amr-fahmy.jpg" },
      { name: "Mohamed Adel", imageUrl: "/images/Mohamed-Adel1.jpg" },
      { name: "Hanan Helmy", imageUrl: "/images/hanan-helmy.jpg" },
      { name: "Haidy Mounir", imageUrl: "/images/haidy-monir.jpg" },
      { name: "Maged Abdelrahman", imageUrl: "/images/Maged-Arahman1.jpg" },
      {
        name: "Malak Ghoneim",
        imageUrl: "/images/Malak-Ghoneim-425x425-1.jpg",
      },
      { name: "nahla mahmoud", imageUrl: "/images/nahla-mahmoud.jpg" },
      { name: "Mohamed Saleh", imageUrl: "/images/Mohamed-Saleh1.jpg" },
      { name: "Amr Ibrahim", imageUrl: "/images/Amr-Abo-El-Enein1.jpg" },
      { name: "Marian Kadry", imageUrl: "/images/Marian-Kadry.jpg" },
      { name: "Ragia-Thabet", imageUrl: "/images/Ragia-Thabet.jpg" },
      { name: "Bassant-Mohamed", imageUrl: "/images/Bassant-Mohamed.jpg" },
      { name: "Seif ElLeithy", imageUrl: "/images/Seif-El-Leithy.jpg" },
      { name: "Mai Mohsen", imageUrl: "/images/Mai-Mohsen-1.jpg" },
      { name: "Aida Ashraf", imageUrl: "/images/Aida-Ashraf.jpg" },
      { name: "Omnia Mabrouk", imageUrl: "/images/Omnia-Mabrouk-425x425.jpg" },
      { name: "Omar ElAshmawy", imageUrl: "/images/Omar-Ashmawy.jpg" },
      { name: "Lama Mohamed", imageUrl: "/images/Lama-Mohamed.jpg" },
      { name: "Amira ElKady", imageUrl: "/images/Amira-El-Kady.jpg" },
      { name: "Mohamed Nabih", imageUrl: "/images/Mohamed-Nabih-1.jpg" },
      { name: "Shaymaa Hassan", imageUrl: "/images/Shaymaa-Hassan.jpg" },
      { name: "Ahmed Karam", imageUrl: "/images/Ahmed-Karam.jpg" },
      { name: "Ahmed Gabr", imageUrl: "/images/Ahmed-Gabr.jpg" },
    ],
  },
  {
    groupTitle: "Health Insurance & Benefits",
    members: [
      { name: "Mahmoud Fekry", imageUrl: "/images/Mahmoud-Fekry.jpg" },
      { name: "Ahmed ElBadawy", imageUrl: "/images/Ahmed-El-Badawy.jpg" },
      { name: "Hassanein Morsy", imageUrl: "/images/Hassanein1.jpg" },
      { name: "Amr ElKady", imageUrl: "/images/Amr-El-Kady.jpg" },
      {
        name: "Mohamed Abdellatif",
        imageUrl: "/images/Mohamed-Abdellatif.jpg",
      },
      { name: "Amer Ashour", imageUrl: "/images/Amer-Ashour.jpg" },
      { name: "Mohamed Hafez", imageUrl: "/images/Mohamed-Hafez.jpg" },
      { name: "Islam Shaaban", imageUrl: "/images/Islam-Shaaban.jpg" },
      { name: "Radwa Ibrahim", imageUrl: "/images/Radwa-Ibrahim-1.jpg" },
    ],
  },
  {
    groupTitle: "Operations",
    members: [
      { name: "Adel Rashidy", imageUrl: "/images/Adel-Rashidy.jpg" },
      { name: "Michael Abdalla", imageUrl: "/images/Michael-Abdalla1.jpg" },
      { name: "Mohamed Mahmoud", imageUrl: "/images/Mohamed-Mahmoud1.jpg" },
      { name: "Ahmed Galal", imageUrl: "/images/Ahmed-Galal3.jpg" },
      {
        name: "Mohamed Hashim",
        imageUrl: "/images/Mohamed-Hashim-425x425.jpg",
      },
      { name: "Mohamed Kamal", imageUrl: "/images/Mohamed-Kamal-425x425.jpg" },
    ],
  },
  {
    groupTitle: "Work Permits",
    members: [{ name: "Alaa ElAzab", imageUrl: "/images/Alaa1.jpg" }],
  },
  {
    groupTitle: "Recruitment",
    members: [{ name: "Nada Moustafa", imageUrl: "/images/Nada-Moustafa.jpg" }],
  },
  {
    groupTitle: "Vacation",
    members: [
      { name: "Basma Eid", imageUrl: "/images/Basma-Eid-425x425-copy.jpg" },
      { name: "Mariam Lotfy", imageUrl: "/images/Mariam-Lotfy-425x425.jpg" },
    ],
  },
  {
    groupTitle: "IT",
    members: [
      { name: "Islam Kamel", imageUrl: "/images/Islam-Kamel.jpg" },
      { name: "Ehab Wagdy", imageUrl: "/images/Ehab-Wagdy.jpg" },
      { name: "Abdel Rahman Taha", imageUrl: "/images/Abdel-Rahman.jpg" },
      { name: "Peter Adel", imageUrl: "/images/Peter-Adel-425x425.jpg" },
      { name: "Tarek Kamal", imageUrl: "/images/Tarek.jpg" },
      { name: "Salah Saeed", imageUrl: "/images/Salah-Saeed-425x425-1.jpg" },
    ],
  },
  {
    groupTitle: "Legal",
    members: [
      { name: "Hany-Hammad", imageUrl: "/images/Hany-Hammad.jpg" },
      { name: "Ahmed Raafat", imageUrl: "/images/Ahmed-Raafat-1.jpg" },
      { name: "Tamer Abo Zeid", imageUrl: "/images/Tamer-Abo-Zeid.jpg" },
    ],
  },
  {
    groupTitle: "Audit",
    members: [],
  },
  {
    groupTitle: "Bank Accounts",
    members: [
      { name: "Aya Emad", imageUrl: "/images/Aya-Emad-02-425x425.jpg" },
    ],
  },
  {
    groupTitle: "Front Desk",
    members: [
      { name: "Mohamed ElDeeb", imageUrl: "/images/Mohamed-El-Deeb.jpg" },
      { name: "Heba Waly", imageUrl: "/images/Heba-Waly.jpg" },
    ],
  },
  {
    groupTitle: "Customer Service",
    members: [
      { name: "Dina Abdalla", imageUrl: "/images/Dina-Abdalla.jpg" },
      { name: "Aya Gamal", imageUrl: "/images/Aya-Gamal-02-425x425-1.jpg" },
      {
        name: "Amira Abdel Moneim",
        imageUrl: "/images/Amira-Abdel-Moneim-02.jpg",
      },
      {
        name: "Dalia Fakhr ElDin",
        imageUrl: "/images/Dalia-Fakhr-El-Din-02-425x425.jpg",
      },
      { name: "Wafaa Hanafy", imageUrl: "/images/Wafaa-Hanafy-425x425.jpg" },
      {
        name: "Shaimaa Sobhy",
        imageUrl: "/images/Shaimaa-Sobhy-425x425-1.jpg",
      },
      { name: "Aya Shaher", imageUrl: "/images/Aya-Shaher.jpg" },
      { name: "Ashrakat Ibrahim", imageUrl: "/images/Ashrakat-Ibrahim-1.jpg" },
      { name: "Mariam Ismail", imageUrl: "/images/Mariam-Ismail.jpg" },
      { name: "Marwa Habib", imageUrl: "/images/Marwa-Habib-425x425.jpg" },
      { name: "Mohamed Medhat", imageUrl: "/images/Mohamed-Medhat1.jpg" },
      { name: "Moustafa Hassan", imageUrl: "/images/Moustafa-Hassan1.jpg" },
      { name: "Mohamed Gamal", imageUrl: "/images/Mohamed-Gamal2.jpg" },
      { name: "Maged Samir", imageUrl: "/images/Maged-Samir1.jpg" },
    ],
  },
  {
    groupTitle: "Facilities",
    members: [
      { name: "Hisham Nahas", imageUrl: "/images/Hisham-Nahas.jpg" },
      { name: "Christopher Eunie", imageUrl: "/images/Christopher-Eunie.jpg" },
      { name: "Mahmoud Hammad", imageUrl: "/images/Mahmoud-Hammad1.jpg" },
      { name: "Waleed ElSayed", imageUrl: "/images/Waleed-El-Sayed.jpg" },
      { name: "Abdalla Gomaa", imageUrl: "/images/Abdalla-Gomaa.jpg" },
      { name: "Marwa Ahmed", imageUrl: "/images/Marwa-Ahmed.jpg" },
      { name: "Abdel Salam Saady", imageUrl: "/images/Abdel-Salam-Saady.jpg" },
      { name: "Reda Hafez", imageUrl: "/images/Reda-Hafez.jpg" },
      {
        name: "Hamed Mokhtar",
        imageUrl: "/images/Hamed-Mokhtar-425x425-1.jpg",
      },
      { name: "Salem Saady", imageUrl: "/images/Salem-Saady-425x425.jpg" },
      {
        name: "Abdel Halim Khedry",
        imageUrl: "/images/Abdel-Halim-Khedry.jpg",
      },
    ],
  },
];

const clientIndusrtries = [
  {
    title: "Banking",
    clients: [
      { name: "Abu Dhabi Commercial Bank" },
      { name: "Abu Dhabi Islamic Bank (Adib)" },
      { name: "Agricultural Bank Of Egypt (S.A.E)" },
      { name: "Ahli United Bank" },
      { name: "Al Ahli Bank Of Kuwait – Egypt" },
      { name: "Arab African International Bank" },
      { name: "Arab Banking Corporation (Abc)" },
      { name: "Arab Investment Bank" },
      { name: "Attijariwafa Bank" },
      { name: "Banque Du Caire" },
      { name: "Commercial International Bank" },
      { name: "Credit Agircole Egypt" },
      { name: "Ebe Bank" },
      { name: "Emirates Nbd S.A.E" },
      { name: "Housing & Development Bank" },
      { name: "Hsbc Electronic Data Service Delivery" },
      { name: "National Bank Of Egypt" },
      { name: "National Bank Of Kuwait" },
      { name: "Qnb Al Ahli" },
      { name: "Saib Bank" },
    ],
  },
  {
    title: "Oil & Gas ",
    clients: [
      { name: "Arcius Energy Egypt Limited" },
      { name: "Baker Hughes" },
      { name: "British Petroleum (BP Egypt)" },
      { name: "Chevron Egypt SAE" },
      { name: "Dana Gas" },
      { name: "DEA Suez Branch" },
      { name: "East Gas Company" },
      { name: "Energean Egypt Limited" },
      { name: "Enap Sipetrol" },
      { name: "Exxon Mobil Egypt" },
      { name: "Expro Group" },
      { name: "Frank&apos;s International Middle East" },
      { name: "GE Gas Power Systems" },
      { name: "Housing & Development Bank" },
      { name: "GE Oil & Gas Energy Services Egypt" },
      { name: "National Bank Of Egypt" },
      { name: "Halliburton Overseas" },
      { name: "IPR Energy Suez Inc." },
      { name: "Lufkin Middle East" },
      { name: "Master Gas" },
      { name: "Nalco Energy Services Marketing Ltd" },
      { name: "National Oilwell Varco LLC" },
      { name: "Novomet NAP Petroleum Services" },
      { name: "Nuovo Pignone International S.R.L." },
      { name: "Numerical Algorithms Group Ltd" },
      { name: "Pan Marine International Inc." },
      { name: "Petromin Oils" },
      { name: "Petrounion for Petroleum Products" },
      { name: "Pharaonic Petroleum Company" },
      { name: "Pan Marine International Inc." },
      { name: "Production Services Network (UK) Limited (PSN)" },
      { name: "Qatar Gas Group" },
      { name: "Rosetta Fro Energy Solutions" },
      { name: "Schlumberger Logelco Inc" },
      { name: "Scimitar Production Egypt Ltd" },
      { name: "Shell Lubricants Egypt" },
      { name: "Subsea" },
      { name: "TAQA Gas Sector" },
      { name: "TAQA Oil Marketing" },
      { name: "Subsea" },
      { name: "Technip Egypt" },
      { name: "Total Marketing Egypt" },
      { name: "TransGlobe Energy Egypt" },
      { name: "Tuboscope Vetco International" },
      { name: "United Gas Of Derivative Co. (UGDC)" },
      { name: "Valve And Tools" },
      { name: "Vegas Oil & Gas" },
      { name: "Weatherford Oil Tool Services" },
      { name: "Vegas Oil & Gas" },
      { name: "WSP PB" },
    ],
  },
  {
    title: "Construction",
    clients: [
      { name: "AECOM Middle East" },
      { name: "Amer Group" },
      { name: "E-Construct FZ" },
      { name: "ECPC - Consolis" },
      { name: "Elamer for Construction" },
      { name: "Misr Development Company" },
      { name: "DEA Suez Branch" },
      { name: "Porto Group" },
      { name: "Saudi Readymix Concrete" },
      { name: "Enap Sipetrol" },
      { name: "TAQA for Engineering Construction" },
      { name: "The Arab Contractor Co. for Operation & Maintenance" },
      { name: "Titan Concrete and Aggregates Egypt" },
    ],
  },
  {
    title: "Food & Beverage Sector:Afia Internation",
    clients: [
      { name: "Afia International " },
      { name: "Alexandria Sugar Company " },
      { name: "Alyasmin for Import and Distribution " },
      { name: "Bel Egypt " },
      { name: "Best Cheese Company (BCC) " },
      { name: "Café Greco " },
      { name: "Canal Sugar" },
      { name: "Chipsy for Food Industries" },
      { name: "EkatERRA Tea Egypt" },
      { name: "El Rashidi El Mizan" },
      { name: "Froneri Ice Cream Egypt" },
      { name: "Givaudan Egypt" },
      { name: "Giza Seeds & Herbs" },
      { name: "Green Land" },
      { name: "Halwani Brothers" },
      { name: "Hero Nutritional Food Industries" },
      { name: "La Poire – Retail Pro" },
      { name: "Monginis Foods and Services" },
      { name: "Orca Bites" },
      { name: "Pepsi-Cola Egypt" },
      { name: "Rani for Import" },
      { name: "United Sugar" },
      { name: "United Sugar" },
      { name: "Queen Food Industries" },
    ],
  },
  {
    title: "Pharmaceutical Sector",
    clients: [
      { name: "Amoun Pharmaceutical Co." },
      { name: "Astra Zeneca Global Commercial Organization" },
      { name: "Eli Lilly Egypt" },
      { name: "Gyptofarma" },
      { name: "Janssen Egypt" },
      { name: "Merck Serono Commercial Int." },
      { name: "Merck Serono Middle East FZ - Ltd" },
      { name: "Minapharm" },
      { name: "Penta Pharma Egypt" },
      { name: "Pharma Mex Egypt" },
      { name: "Sanofi-Aventis Egypt S.A.E." },
      { name: "Servier Egypt" },
      { name: "Takeda Pharmaceuticals Egypt" },
    ],
  },
  {
    title: "IT Solutions ",
    clients: [
      { name: "ARPU Telecommunication Services" },
      { name: "Axivas" },
      { name: "Capgemini Egypt" },
      { name: "Carve Partners LLC" },
      { name: "DH Healthcare Provider Software Egypt" },
      { name: "Electronic Data Systems Egypt_S.A.E (EDS Egypt)" },
      { name: "HCL Technologies Egypt Limited" },
      { name: "Hewlett Packard (HP)" },
      { name: "IBM WTC Egypt" },
      { name: "Intel Corporation Egypt LLC" },
      { name: "ITSC EGYPT" },
      { name: "Microsoft" },
      { name: "Ndimo - Network Payments Solutions S.A.E." },
      { name: "Neusoft Cloud Technology" },
      { name: "SAP Egypt" },
      { name: "Seal Software Egypt LLC" },
      { name: "SITA" },
      { name: "Sonata Europe Limited" },
      { name: "Jumbo Electronics Co. Ltd. LLC" },
      { name: "InfoFort Egypt" },
      { name: "vBlooming Technology co. Ltd" },
      { name: "Xerox" },
    ],
  },
  {
    title: "Car Manufacturing ",
    clients: [
      { name: "Bavarian Auto Group (BMW)" },
      { name: "Chrysler Group Egypt Ltd." },
      { name: "General Motors Egypt (GM)" },
      { name: "Hyundai Rotem Company (Egypt Branch)" },
      { name: "Mahindra & Mahindra S. Africa" },
      { name: "Mercedes-Benz Egypt S.A.E" },
      { name: "Nissan Egypt" },
    ],
  },
  {
    title: "Industrial & Manufacturing ",
    clients: [
      { name: "Alexandria Portland Cement Co" },
      { name: "Alstom Egypt for Transport Projects" },
      { name: "Arabian Cement Company" },
      { name: "ArcelorMittal" },
      { name: "ASEC Integrate Management Co. Ltd" },
      { name: "Beni Suif Cement" },
      { name: "Brava Services and Maintenance" },
      { name: "Delaval" },
      { name: "D&D Corporation" },
      { name: "Egyptian German Industrial Corporate" },
      { name: "Egyptian Group Company" },
      { name: "Elsewedy Utilities" },
      { name: "Emerson Egypt" },
      { name: "FieldCore Service Solutions International LLC" },
      { name: "France Export Cereals" },
      { name: "GE Steam Power Systems" },
      { name: "Guardian Egypt Company" },
      { name: "Kandil Glass" },
      { name: "Lafarge Cement Egypt" },
      { name: "Lucy Middle East FZE" },
      { name: "Nufarm Middle East Operations" },
      { name: "Philip Morris Misr LLC" },
      { name: "Rotem S R S Egypt" },
      { name: "RTMS Mechanical Maintenance" },
      { name: "Schneider Electric" },
      { name: "Schneider Electric Engineering & Services" },
      { name: "Schneider Electric System Egypt" },
      { name: "Schindler" },
      { name: "Siemens Industrial LLC" },
      { name: "Siemens Technologies SAE" },
      { name: "Siemens Wind Power LLC" },
      { name: "Sika Egypt" },
      { name: "Sinai Cement Co." },
      { name: "Sinai White Portland Cement S.A.E" },
      { name: "Sirat" },
      { name: "Vicat Egypt for Cement Manufacturing" },
    ],
  },
  {
    title: "Education",
    clients: [
      { name: "Amer for Sport and Education" },
      { name: "Cairo American College (CAC Egypt)" },
      { name: "Education Development Center" },
      { name: "German Academic Exchange Service (DAAD)" },
      { name: "Swiss Club Nursery" },
    ],
  },
  {
    title: "Airlines and Travel",
    clients: [
      { name: "Air France" },
      { name: "Alitalia Compagnia Aerea Italiana" },
      { name: "Amadeus Egypt" },
      { name: "British Airways" },
      { name: "KLM" },
      { name: "Lufthansa" },
      { name: "Porto Holidays" },
      { name: "Porto Hotels " },
      { name: "Swiss International Airlines" },
      { name: "Trobby 2" },
    ],
  },
  {
    title: "Advertising and Media",
    clients: [
      { name: "Benchmark" },
      { name: "Findings Research" },
      { name: "Global Direct TV (OSN)" },
      { name: "Modern Arab Company S.A.E" },
      { name: "Sarmady Communications" },
      { name: "TNS Global" },
    ],
  },
  {
    title: "Telecommunication",
    clients: [
      { name: "Digital Technology Company" },
      { name: "Link Development" },
      { name: "Mobiserve Contracting LLC" },
      { name: "Orange" },
      { name: "XEED Egyptian Company for Information Systems" },
    ],
  },
  {
    title: "Trading & Transportation",
    clients: [
      { name: "Cairo Airport Cargo Company (CACC)" },
      { name: "Car-Eem Egypt for Smart Networks" },
      { name: "CMA CGM Egypt" },
      { name: "CMA CGM Egypt Inland Container Services" },
      { name: "Hand Made for Trade and Distribution" },
      { name: "Masheed for Trading and Transportation" },
      { name: "Medsofts" },
      { name: "Roots Group" },
      { name: "The Arabian Company for Transportation Services" },
      { name: "Vanderlande" },
    ],
  },
  {
    title: "Insurance",
    clients: [
      { name: "AIG Egypt Insurance Company SAE" },
      { name: "AXA Africa Health S.A.E." },
      { name: "Globemed Egypt" },
      { name: "MetLife Alico Co." },
      { name: "QNB AlAhli Life" },
      { name: "Wafa Life Insurance Egypt" },
    ],
  },
  {
    title: "Medical Supply and Solutions",
    clients: [
      { name: "BioMérieux" },
      { name: "Cardinal Health" },
      { name: "Cochlear Middle East" },
      { name: "Fresenius Kabi Deutschland GMBH" },
      { name: "Fresenius Medical Care EG" },
      { name: "GE Medical Systems Egypt LLC" },
      { name: "IQVIA Technology Solutions Egypt" },
      { name: "Medtronic LLC" },
      { name: "Quintiles Egypt LLC" },
      { name: "Servier Egypt Scientific Office" },
      { name: "Siemens Healthcare" },
      { name: "Total Care Misr" },
    ],
  },
  {
    title: "Consumer Goods",
    clients: [{ name: "Reckitt Benckiser Egypt Ltd" }, { name: "Unilever" }],
  },
  {
    title: "Fashion and Creativity",
    clients: [{ name: "JeaNologia S.L" }, { name: "The Fashion Kingdom" }],
  },
  {
    title: "Courier",
    clients: [
      { name: "Aramex Mashreq for Logistics Services" },
      { name: "DHL" },
      { name: "DHL Express Egypt" },
    ],
  },
  {
    title: "Financial Solutions",
    clients: [
      { name: "AlAhly Exchange" },
      { name: "Al Ahly Kuwait Egypt Leasing Co" },
      { name: "Al Ahly Leasing Company" },
      { name: "Bayt El Khebra Group" },
      { name: "Beltone Consumer Finance (Bel-Cash)" },
      { name: "Beltone Financial" },
      { name: "BM Lease" },
      { name: "Citadel Capital" },
      { name: "Edama" },
      { name: "Edfapay" },
      { name: "E-Finance" },
      { name: "EFG Hermes Holding" },
      { name: "Egypt Factors" },
      { name: "Fine Eng" },
      { name: "JJ Total Care" },
      { name: "Khales" },
      { name: "Landmark Retail Investment" },
      { name: "Misr Digital Innovation" },
      { name: "Shahry for Consumer Finance" },
      { name: "Sonata Software North America Inc." },
      { name: "Treyd Services AB" },
      { name: "Valu" },
    ],
  },
  {
    title: "E-commerce",
    clients: [
      { name: "E-Aswaaq Misr" },
      { name: "E-Cards" },
      { name: "Delivery Hero Dmart Egypt (Talabat)" },
      { name: "Delivery Hero Egypt " },
      { name: "PayTabs Egypt for Technology Solutions" },
      { name: "Rabbit Egypt" },
    ],
  },
  {
    title: "Agricultural",
    clients: [{ name: "Cimbria Unigrain A-S" }, { name: "ED&F Man" }],
  },
  {
    title: "Community",
    clients: [
      { name: "CSA" },
      { name: "Khaled Abdullah Foundation for Social Care" },
    ],
  },
  {
    title: "General Services",
    clients: [
      { name: "OPS for Market Research" },
      { name: "Diversey Egypt" },
      { name: "Ebutler" },
      { name: "Majid Al Futtaim for Management" },
      { name: "Milezmore for Logistics Services" },
      { name: "NMDC" },
      { name: "Peacock Concierge Misr" },
      { name: "Quest" },
      { name: "Quantum Solutions Trading DMCC" },
      { name: "RSA Security Egypt Limited" },
      { name: "Synthomer S.A.E" },
      { name: "TAQA Water" },
      { name: "Total FM" },
    ],
  },
];

async function main() {
  console.log("Start seeding...");

  // Clear existing data
  await prisma.teamMember.deleteMany();
  await prisma.teamGroup.deleteMany();
  await prisma.client.deleteMany();
  await prisma.industryGroup.deleteMany();
  console.log("Cleared existing data.");

  // Seed Team Groups and Team Members
  for (const group of groupTeamMembers) {
    const createdGroup = await prisma.teamGroup.create({
      data: {
        name: group.groupTitle,
      },
    });

    for (const member of group.members) {
      await prisma.teamMember.create({
        data: {
          name: member.name,
          imageUrl: member.imageUrl,
          teamGroupId: createdGroup.id,
        },
      });
    }
  }
  console.log("Seeded team members.");

  // Seed Industry Groups and Clients
  for (const industry of clientIndusrtries) {
    const createdIndustry = await prisma.industryGroup.create({
      data: {
        name: industry.title,
      },
    });

    for (const client of industry.clients) {
      await prisma.client.create({
        data: {
          name: client.name,
          industryGroupId: createdIndustry.id,
        },
      });
    }
  }
  console.log("Seeded clients.");

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
