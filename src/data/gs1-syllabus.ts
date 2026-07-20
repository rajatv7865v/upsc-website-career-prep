export type Gs1Topic = {
  title: string;
  points: string[];
};

export type Gs1Block = {
  title: string;
  topics: Gs1Topic[];
};

export type Gs1Section = {
  id: string;
  label: string;
  title: string;
  summary: string;
  blocks: Gs1Block[];
};

export const gs1SyllabusSections: Gs1Section[] = 
[
  {
    "id": "culture",
    "label": "Section 01",
    "title": "Indian Culture",
    "summary": "Salient aspects of art forms, literature, and architecture from ancient to modern times.",
    "blocks": [
      {
        "title": "Fundamentals of Indian Culture",
        "topics": [
          {
            "title": "Meaning of Culture",
            "points": []
          },
          {
            "title": "Definition of Culture",
            "points": []
          },
          {
            "title": "Components of Culture",
            "points": [
              "Material Culture",
              "Non-Material Culture",
              "Cultural Heritage",
              "Tangible Heritage",
              "Intangible Heritage"
            ]
          },
          {
            "title": "Characteristics of Indian Culture",
            "points": [
              "Antiquity",
              "Continuity",
              "Unity in Diversity",
              "Assimilation",
              "Tolerance",
              "Spiritualism",
              "Pluralism",
              "Syncretism",
              "Cultural Adaptability"
            ]
          },
          {
            "title": "Sources of Indian Culture",
            "points": []
          },
          {
            "title": "Archaeological Sources",
            "points": []
          },
          {
            "title": "Literary Sources",
            "points": []
          },
          {
            "title": "Foreign Accounts",
            "points": []
          },
          {
            "title": "Inscriptions",
            "points": []
          },
          {
            "title": "Coins",
            "points": []
          },
          {
            "title": "Monuments",
            "points": []
          }
        ]
      },
      {
        "title": "Indian Painting",
        "topics": [
          {
            "title": "Prehistoric Paintings",
            "points": [
              "Bhimbetka Paintings",
              "Ancient Paintings",
              "Ajanta Paintings",
              "Bagh Paintings",
              "Sittanavasal Paintings",
              "Ellora Paintings",
              "Medieval Paintings",
              "Mughal Paintings",
              "Rajput Paintings",
              "Pahari Paintings",
              "Deccan Paintings"
            ]
          },
          {
            "title": "Regional Schools",
            "points": [
              "Kangra",
              "Basohli",
              "Kishangarh",
              "Bundi",
              "Mewar",
              "Marwar"
            ]
          },
          {
            "title": "Folk Paintings",
            "points": [
              "Madhubani",
              "Warli",
              "Pattachitra",
              "Kalamkari",
              "Phad",
              "Gond",
              "Sohrai",
              "Pithora",
              "Thangka"
            ]
          },
          {
            "title": "Modern Paintings",
            "points": [
              "Bengal School",
              "Raja Ravi Varma",
              "Abanindranath Tagore",
              "Nandalal Bose",
              "Jamini Roy",
              "Amrita Sher-Gil"
            ]
          }
        ]
      },
      {
        "title": "Indian Sculpture",
        "topics": [
          {
            "title": "Indus Valley Sculpture",
            "points": [
              "Bronze Sculpture",
              "Dancing Girl",
              "Priest King"
            ]
          },
          {
            "title": "Mauryan Sculpture",
            "points": [
              "Ashokan Pillars",
              "Lion Capital",
              "Stupas"
            ]
          },
          {
            "title": "Gandhara School",
            "points": []
          },
          {
            "title": "Mathura School",
            "points": []
          },
          {
            "title": "Amaravati School",
            "points": []
          },
          {
            "title": "Gupta Sculpture",
            "points": [
              "Classical Phase",
              "Buddha Sculptures",
              "Chola Bronzes",
              "Nataraja",
              "Lost Wax Technique"
            ]
          }
        ]
      },
      {
        "title": "Indian Architecture",
        "topics": [
          {
            "title": "Ancient Architecture",
            "points": []
          },
          {
            "title": "Harappan Architecture",
            "points": [
              "Town Planning",
              "Drainage System",
              "Granaries",
              "Great Bath"
            ]
          },
          {
            "title": "Buddhist Architecture",
            "points": [
              "Stupas",
              "Chaityas",
              "Viharas"
            ]
          },
          {
            "title": "Rock-Cut Caves",
            "points": []
          },
          {
            "title": "Temple Architecture",
            "points": []
          },
          {
            "title": "Nagara Style",
            "points": []
          },
          {
            "title": "Sub-Schools",
            "points": [
              "Odisha",
              "Khajuraho",
              "Solanki"
            ]
          },
          {
            "title": "Dravida Style",
            "points": []
          },
          {
            "title": "Features",
            "points": [
              "Chola Temples",
              "Pallava Temples",
              "Vijayanagara Temples"
            ]
          },
          {
            "title": "Vesara Style",
            "points": []
          },
          {
            "title": "Features",
            "points": [
              "Chalukyan Temples",
              "Hoysala Temples",
              "Regional Temple Styles",
              "Kalinga Style",
              "Maru-Gurjara Style",
              "Hemadpanti Style"
            ]
          },
          {
            "title": "Ahom Architecture",
            "points": []
          },
          {
            "title": "Kerala Temple Architecture",
            "points": []
          },
          {
            "title": "Indo-Islamic Architecture",
            "points": []
          },
          {
            "title": "Sultanate Architecture",
            "points": []
          },
          {
            "title": "Slave Dynasty",
            "points": []
          },
          {
            "title": "Khalji",
            "points": []
          },
          {
            "title": "Tughlaq",
            "points": []
          },
          {
            "title": "Sayyid",
            "points": []
          },
          {
            "title": "Lodi",
            "points": []
          },
          {
            "title": "Mughal Architecture",
            "points": [
              "Babur",
              "Humayun",
              "Akbar",
              "Jahangir",
              "Shah Jahan",
              "Aurangzeb"
            ]
          },
          {
            "title": "Regional Islamic Architecture",
            "points": [
              "Deccan",
              "Bengal",
              "Gujarat",
              "Kashmir"
            ]
          },
          {
            "title": "Colonial Architecture",
            "points": [
              "Portuguese Architecture",
              "French Architecture",
              "British Architecture",
              "Neo-Classical",
              "Neo-Gothic",
              "Indo-Saracenic"
            ]
          },
          {
            "title": "Modern Architecture",
            "points": [
              "Post-Independence Architecture",
              "Chandigarh",
              "Le Corbusier"
            ]
          },
          {
            "title": "Contemporary Indian Architecture",
            "points": []
          }
        ]
      },
      {
        "title": "Indian Art Forms",
        "topics": []
      },
      {
        "title": "Performing Arts",
        "topics": [
          {
            "title": "Classical Dances",
            "points": [
              "Bharatanatyam",
              "Kathak",
              "Kathakali",
              "Kuchipudi",
              "Mohiniyattam",
              "Manipuri",
              "Odissi",
              "Sattriya"
            ]
          },
          {
            "title": "Dimensions",
            "points": []
          },
          {
            "title": "Historical Evolution",
            "points": [
              "Regional Significance",
              "Cultural Significance"
            ]
          },
          {
            "title": "Contemporary Challenges",
            "points": []
          },
          {
            "title": "Folk Dances",
            "points": []
          },
          {
            "title": "North India",
            "points": [
              "Ghoomar",
              "Kalbelia",
              "Chhau",
              "Rouf",
              "Bhangra",
              "Gidda"
            ]
          },
          {
            "title": "North-East India",
            "points": [
              "Bihu",
              "Cheraw",
              "Wangala",
              "Hojagiri",
              "Naga Dances",
              "Bamboo Dance"
            ]
          },
          {
            "title": "South India",
            "points": [
              "Yakshagana",
              "Kummi",
              "Karagattam"
            ]
          },
          {
            "title": "Central India",
            "points": [
              "Karma",
              "Sua"
            ]
          },
          {
            "title": "MUSIC",
            "points": []
          },
          {
            "title": "Hindustani Music",
            "points": [
              "Historical Development",
              "Gharanas",
              "Dhrupad",
              "Khayal",
              "Thumri",
              "Tappa",
              "Ghazal"
            ]
          },
          {
            "title": "Carnatic Music",
            "points": []
          },
          {
            "title": "Evolution",
            "points": []
          },
          {
            "title": "Trinity",
            "points": [
              "Tyagaraja",
              "Muthuswami Dikshitar",
              "Syama Sastri"
            ]
          },
          {
            "title": "Musical Instruments",
            "points": [
              "String Instruments",
              "Wind Instruments",
              "Percussion"
            ]
          }
        ]
      },
      {
        "title": "Theatre",
        "topics": [
          {
            "title": "Classical Theatre",
            "points": []
          },
          {
            "title": "Natyashastra",
            "points": [
              "Bharat Muni",
              "Rasa Theory",
              "Bhava Theory"
            ]
          },
          {
            "title": "Traditional Theatre Forms",
            "points": [
              "Yakshagana",
              "Jatra",
              "Nautanki",
              "Tamasha",
              "Bhavai",
              "Bhand Pather",
              "Ankiya Naat",
              "Therukoothu"
            ]
          }
        ]
      },
      {
        "title": "Martial Arts",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Kalaripayattu",
              "Silambam",
              "Thang-Ta",
              "Gatka",
              "Mardani Khel"
            ]
          }
        ]
      },
      {
        "title": "Puppetry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "String Puppetry",
              "Shadow Puppetry",
              "Rod Puppetry",
              "Glove Puppetry"
            ]
          }
        ]
      },
      {
        "title": "Indian Literature",
        "topics": [
          {
            "title": "Ancient Literature",
            "points": [
              "Vedic Literature",
              "Rigveda",
              "Samaveda",
              "Yajurveda",
              "Atharvaveda",
              "Brahmanas",
              "Aranyakas",
              "Upanishads",
              "Vedangas",
              "Epics",
              "Ramayana",
              "Mahabharata",
              "Puranas",
              "Buddhist Literature",
              "Tripitaka",
              "Jataka Tales",
              "Jain Literature",
              "Agamas"
            ]
          }
        ]
      },
      {
        "title": "Sangam Literature",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Ettuthokai",
              "Pattupattu",
              "Tolkappiyam",
              "Silappadikaram",
              "Manimekalai"
            ]
          }
        ]
      },
      {
        "title": "Medieval Literature",
        "topics": [
          {
            "title": "Bhakti Literature",
            "points": [
              "Alvars",
              "Nayanars",
              "Kabir",
              "Tulsidas",
              "Surdas",
              "Mirabai",
              "Guru Nanak",
              "Sufi Literature",
              "Chishti Tradition"
            ]
          },
          {
            "title": "Suhrawardi Tradition",
            "points": []
          },
          {
            "title": "Persian Literature",
            "points": []
          },
          {
            "title": "Court Chronicles",
            "points": []
          },
          {
            "title": "Akbarnama",
            "points": []
          },
          {
            "title": "Ain-i-Akbari",
            "points": []
          }
        ]
      },
      {
        "title": "Modern Literature",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Bengal Renaissance",
              "Nationalist Literature",
              "Progressive Literature",
              "Regional Literature",
              "Contemporary Indian Literature",
              "Literature and Freedom Movement"
            ]
          }
        ]
      },
      {
        "title": "Unesco & Cultural Heritage",
        "topics": [
          {
            "title": "UNESCO World Heritage Sites",
            "points": [
              "Cultural Sites",
              "Mixed Sites",
              "Tentative List"
            ]
          },
          {
            "title": "Intangible Cultural Heritage",
            "points": [
              "UNESCO ICH List",
              "GI Tags and Culture",
              "Cultural Institutions",
              "ASI",
              "IGNCA",
              "National Museum",
              "Lalit Kala Akademi",
              "Sahitya Akademi",
              "Sangeet Natak Akademi"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "modern-history",
    "label": "Section 02",
    "title": "Modern Indian History & Freedom Struggle",
    "summary": "From the mid-18th century to independence — events, personalities, stages, and contributors.",
    "blocks": [
      {
        "title": "Decline of Mughal Empire & Transition to Colonial Rule",
        "topics": [
          {
            "title": "Mughal Empire in the 18th Century",
            "points": []
          },
          {
            "title": "Aurangzeb and aftermath",
            "points": []
          },
          {
            "title": "Weak successors",
            "points": []
          },
          {
            "title": "War of succession",
            "points": []
          },
          {
            "title": "Administrative decline",
            "points": []
          },
          {
            "title": "Economic decline",
            "points": [
              "Jagirdari Crisis",
              "Mansabdari Crisis"
            ]
          },
          {
            "title": "Rise of Regional States",
            "points": []
          },
          {
            "title": "Bengal",
            "points": [
              "Murshid Quli Khan",
              "Alivardi Khan"
            ]
          },
          {
            "title": "Awadh",
            "points": [
              "Saadat Khan",
              "Safdar Jang"
            ]
          },
          {
            "title": "Hyderabad",
            "points": [
              "Nizam-ul-Mulk"
            ]
          },
          {
            "title": "Mysore",
            "points": [
              "Haider Ali",
              "Tipu Sultan"
            ]
          },
          {
            "title": "Marathas",
            "points": [
              "Shivaji's Legacy",
              "Peshwa Rule",
              "Maratha Confederacy"
            ]
          },
          {
            "title": "Sikhs",
            "points": [
              "Banda Bahadur",
              "Misls",
              "Ranjit Singh"
            ]
          },
          {
            "title": "Jats",
            "points": []
          },
          {
            "title": "Rohillas",
            "points": []
          },
          {
            "title": "Rajputs",
            "points": []
          }
        ]
      },
      {
        "title": "British Conquest of India",
        "topics": [
          {
            "title": "Bengal",
            "points": []
          },
          {
            "title": "Battle of Plassey (1757)",
            "points": [
              "Causes",
              "Course",
              "Consequences"
            ]
          },
          {
            "title": "Battle of Buxar (1764)",
            "points": [
              "Causes",
              "Course",
              "Consequences"
            ]
          },
          {
            "title": "Dual Government",
            "points": []
          },
          {
            "title": "Diwani Rights",
            "points": []
          }
        ]
      },
      {
        "title": "Expansion & Consolidation of British Rule",
        "topics": [
          {
            "title": "Administrative Expansion",
            "points": []
          },
          {
            "title": "Subsidiary Alliance",
            "points": [
              "Features"
            ]
          },
          {
            "title": "Impact",
            "points": []
          },
          {
            "title": "Doctrine of Lapse",
            "points": [
              "Features",
              "States Annexed",
              "Paramountcy"
            ]
          },
          {
            "title": "Annexation Policies",
            "points": [
              "Awadh Annexation",
              "Punjab Annexation",
              "Sindh Annexation"
            ]
          }
        ]
      },
      {
        "title": "Socio-religious Reform Movements",
        "topics": [
          {
            "title": "Factors Responsible",
            "points": []
          },
          {
            "title": "Reform Movements",
            "points": [
              "Raja Ram Mohan Roy",
              "Brahmo Samaj",
              "Debendranath Tagore",
              "Keshab Chandra Sen",
              "Young Bengal Movement",
              "Ishwar Chandra Vidyasagar"
            ]
          },
          {
            "title": "Widow Remarriage Movement",
            "points": []
          },
          {
            "title": "Women's Education",
            "points": []
          },
          {
            "title": "Arya Samaj",
            "points": [
              "Swami Dayanand Saraswati",
              "Satyarth Prakash",
              "Shuddhi Movement"
            ]
          },
          {
            "title": "Ramakrishna Movement",
            "points": [
              "Ramakrishna Paramhansa",
              "Swami Vivekananda",
              "Ramakrishna Mission"
            ]
          },
          {
            "title": "Theosophical Society",
            "points": [
              "Annie Besant"
            ]
          },
          {
            "title": "Aligarh Movement",
            "points": [
              "Sir Syed Ahmad Khan"
            ]
          },
          {
            "title": "Deoband Movement",
            "points": []
          },
          {
            "title": "Wahabi Movement",
            "points": []
          },
          {
            "title": "Singh Sabha Movement",
            "points": []
          },
          {
            "title": "Parsi Reform Movement",
            "points": []
          },
          {
            "title": "Prarthana Samaj",
            "points": []
          },
          {
            "title": "SNDP Movement",
            "points": [
              "Narayana Guru"
            ]
          }
        ]
      },
      {
        "title": "Revolt of 1857",
        "topics": [
          {
            "title": "Causes",
            "points": [
              "Political",
              "Economic",
              "Military",
              "Religious",
              "Social"
            ]
          },
          {
            "title": "Centres",
            "points": []
          },
          {
            "title": "Leaders",
            "points": []
          },
          {
            "title": "Nature of Revolt",
            "points": []
          },
          {
            "title": "Consequences",
            "points": []
          },
          {
            "title": "Historiography",
            "points": []
          }
        ]
      },
      {
        "title": "Indian National Congress",
        "topics": [
          {
            "title": "Formation",
            "points": [
              "Safety Valve Theory",
              "Moderate Phase (1885–1905)"
            ]
          },
          {
            "title": "Leaders",
            "points": [
              "Dadabhai Naoroji",
              "Gopal Krishna Gokhale",
              "Surendranath Banerjee",
              "Pherozeshah Mehta"
            ]
          },
          {
            "title": "Methods",
            "points": []
          },
          {
            "title": "Achievements",
            "points": []
          },
          {
            "title": "Limitations",
            "points": []
          }
        ]
      },
      {
        "title": "Gandhian Era (1915–1947)",
        "topics": [
          {
            "title": "Gandhi's Philosophy",
            "points": [
              "Satyagraha",
              "Ahimsa",
              "Trusteeship",
              "Sarvodaya"
            ]
          },
          {
            "title": "Early Movements",
            "points": [
              "Champaran",
              "Ahmedabad Mill Strike",
              "Kheda Satyagraha"
            ]
          },
          {
            "title": "Rowlatt Satyagraha",
            "points": []
          },
          {
            "title": "Jallianwala Bagh Massacre",
            "points": []
          },
          {
            "title": "Khilafat Movement",
            "points": []
          },
          {
            "title": "Non-Cooperation Movement",
            "points": []
          },
          {
            "title": "Civil Disobedience Movement",
            "points": [
              "Dandi March",
              "Gandhi-Irwin Pact",
              "Round Table Conferences"
            ]
          },
          {
            "title": "Quit India Movement",
            "points": [
              "Parallel Governments"
            ]
          }
        ]
      },
      {
        "title": "Contributions From Different Parts of India",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Bengal",
              "Maharashtra",
              "Punjab",
              "Uttar Pradesh",
              "Bihar",
              "Tamil Nadu",
              "Andhra Pradesh",
              "Karnataka",
              "Kerala",
              "Odisha",
              "Gujarat",
              "Assam",
              "North-East India"
            ]
          }
        ]
      },
      {
        "title": "Towards Independence",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Cripps Mission",
              "Wavell Plan",
              "Cabinet Mission",
              "Interim Government",
              "Mountbatten Plan",
              "Partition of India",
              "Indian Independence Act"
            ]
          }
        ]
      },
      {
        "title": "Advent of Europeans in India",
        "topics": [
          {
            "title": "Portuguese",
            "points": [
              "Vasco da Gama",
              "Cartaz System",
              "Estado da India",
              "Decline"
            ]
          },
          {
            "title": "Dutch",
            "points": [
              "VOC",
              "Trade Centres",
              "Decline"
            ]
          },
          {
            "title": "English East India Company",
            "points": [
              "Formation",
              "Charter Acts",
              "Trading Settlements"
            ]
          },
          {
            "title": "French",
            "points": [
              "French East India Company",
              "Dupleix",
              "French Settlements"
            ]
          },
          {
            "title": "Danish",
            "points": []
          }
        ]
      },
      {
        "title": "Anglo-french Rivalry",
        "topics": [
          {
            "title": "Carnatic Wars",
            "points": [
              "First Carnatic War",
              "Second Carnatic War",
              "Third Carnatic War"
            ]
          },
          {
            "title": "Significance",
            "points": []
          },
          {
            "title": "Mysore Wars",
            "points": [
              "First Anglo-Mysore War",
              "Second Anglo-Mysore War",
              "Third Anglo-Mysore War",
              "Fourth Anglo-Mysore War"
            ]
          },
          {
            "title": "Tipu Sultan",
            "points": []
          },
          {
            "title": "Maratha Wars",
            "points": [
              "First Anglo-Maratha War",
              "Second Anglo-Maratha War",
              "Third Anglo-Maratha War"
            ]
          },
          {
            "title": "Subsidiary Alliance",
            "points": []
          },
          {
            "title": "Anglo-Sikh Wars",
            "points": [
              "First Anglo-Sikh War",
              "Second Anglo-Sikh War"
            ]
          }
        ]
      },
      {
        "title": "Economic Impact of British Rule",
        "topics": [
          {
            "title": "Colonial Economy",
            "points": []
          },
          {
            "title": "Drain of Wealth",
            "points": [
              "Dadabhai Naoroji",
              "RC Dutt"
            ]
          },
          {
            "title": "Deindustrialisation",
            "points": []
          },
          {
            "title": "Commercialisation of Agriculture",
            "points": []
          },
          {
            "title": "Rural Indebtedness",
            "points": [
              "Land Revenue Systems",
              "Permanent Settlement",
              "Ryotwari System",
              "Mahalwari System"
            ]
          },
          {
            "title": "Plantation Economy",
            "points": []
          },
          {
            "title": "Railways",
            "points": []
          },
          {
            "title": "Modern Industries",
            "points": []
          },
          {
            "title": "British Fiscal Policy",
            "points": []
          }
        ]
      },
      {
        "title": "Administrative Structure Under British Rule",
        "topics": [
          {
            "title": "Civil Services",
            "points": []
          },
          {
            "title": "Police System",
            "points": []
          },
          {
            "title": "Judiciary",
            "points": []
          },
          {
            "title": "Army Reforms",
            "points": []
          },
          {
            "title": "Local Self Government",
            "points": []
          },
          {
            "title": "Education Policy",
            "points": [
              "Wood's Despatch",
              "Hunter Commission",
              "Sadler Commission",
              "Hartog Committee",
              "Sargent Plan"
            ]
          }
        ]
      },
      {
        "title": "Tribal Movements",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Tribal Resistance",
              "Santhal Rebellion",
              "Kol Rebellion",
              "Munda Rebellion",
              "Birsa Munda",
              "Bhil Revolts",
              "Khond Revolts",
              "Rampa Rebellion",
              "Tana Bhagat Movement",
              "Bastar Rebellion"
            ]
          }
        ]
      },
      {
        "title": "Peasant Movements",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Indigo Revolt",
              "Pabna Movement",
              "Deccan Riots",
              "Moplah Rebellion",
              "Eka Movement",
              "Bardoli Satyagraha",
              "Tebhaga Movement",
              "Telangana Movement"
            ]
          }
        ]
      },
      {
        "title": "Rise of Indian Nationalism",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Factors Responsible",
              "Growth of Press",
              "Growth of Education",
              "Economic Critique of British Rule",
              "Political Associations",
              "Poona Sarvajanik Sabha",
              "Indian Association",
              "Bombay Presidency Association",
              "Madras Mahajan Sabha"
            ]
          }
        ]
      },
      {
        "title": "Extremist Phase (1905–1917)",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Partition of Bengal",
              "Swadeshi Movement",
              "Boycott Movement",
              "National Education Movement",
              "Surat Split",
              "Lal-Bal-Pal",
              "Aurobindo Ghosh"
            ]
          }
        ]
      },
      {
        "title": "Revolutionary Movements",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Bengal Revolutionaries",
              "Maharashtra Revolutionaries",
              "Punjab Revolutionaries",
              "Abhinav Bharat",
              "Anushilan Samiti",
              "Jugantar",
              "Hindustan Republican Association",
              "HSRA",
              "Kakori Conspiracy",
              "Chittagong Armoury Raid",
              "Bhagat Singh",
              "Chandrashekhar Azad",
              "Surya Sen"
            ]
          }
        ]
      },
      {
        "title": "Home Rule Movement",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Annie Besant",
              "Bal Gangadhar Tilak",
              "Significance"
            ]
          }
        ]
      },
      {
        "title": "Constitutional Developments",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Regulating Act 1773",
              "Pitt's India Act 1784"
            ]
          },
          {
            "title": "Charter Acts",
            "points": [
              "1813",
              "1833",
              "1853"
            ]
          },
          {
            "title": "Government of India Act 1858",
            "points": []
          },
          {
            "title": "Indian Councils Acts",
            "points": [
              "1861",
              "1892",
              "1909"
            ]
          },
          {
            "title": "Government of India Act 1919",
            "points": []
          },
          {
            "title": "Government of India Act 1935",
            "points": []
          },
          {
            "title": "Indian Independence Act 1947",
            "points": []
          }
        ]
      },
      {
        "title": "Important Personalities",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Moderates",
              "Extremists",
              "Revolutionaries",
              "Gandhians",
              "Social Reformers",
              "Tribal Leaders"
            ]
          },
          {
            "title": "Women Freedom Fighters",
            "points": [
              "Sarojini Naidu",
              "Aruna Asaf Ali",
              "Kamaladevi Chattopadhyay",
              "Annie Besant",
              "Madam Bhikaji Cama",
              "Sucheta Kriplani",
              "Usha Mehta"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "post-independence",
    "label": "Section 03",
    "title": "Post-Independence Consolidation",
    "summary": "Consolidation and reorganisation within the country after independence.",
    "blocks": [
      {
        "title": "India At Independence (1947)",
        "topics": [
          {
            "title": "Immediate Challenges Before Independent India",
            "points": []
          },
          {
            "title": "Political Challenges",
            "points": [
              "Partition of India",
              "Communal Violence",
              "Integration of Princely States",
              "Refugee Crisis",
              "Kashmir Issue"
            ]
          },
          {
            "title": "Economic Challenges",
            "points": [
              "Colonial Economic Legacy",
              "Food Shortages",
              "Low Industrial Base",
              "Poverty",
              "Unemployment"
            ]
          },
          {
            "title": "Social Challenges",
            "points": [
              "Illiteracy",
              "Public Health Issues",
              "Social Inequality",
              "Caste Discrimination"
            ]
          },
          {
            "title": "Administrative Challenges",
            "points": []
          },
          {
            "title": "Division of Assets",
            "points": []
          },
          {
            "title": "Division of Armed Forces",
            "points": []
          },
          {
            "title": "Creation of New Administrative Structure",
            "points": []
          }
        ]
      },
      {
        "title": "Integration of Princely States",
        "topics": [
          {
            "title": "Background",
            "points": [
              "British Paramountcy",
              "Lapse of Paramountcy",
              "Princely States at Independence"
            ]
          },
          {
            "title": "Role of Sardar Vallabhbhai Patel",
            "points": [
              "States Department",
              "Political Leadership"
            ]
          },
          {
            "title": "Role of V.P. Menon",
            "points": [
              "Administrative Strategy",
              "Negotiations"
            ]
          },
          {
            "title": "Instrument of Accession",
            "points": []
          },
          {
            "title": "Merger Agreements",
            "points": []
          }
        ]
      },
      {
        "title": "Constitution Making",
        "topics": [
          {
            "title": "Constituent Assembly",
            "points": [
              "Formation",
              "Composition",
              "Working"
            ]
          },
          {
            "title": "Major Committees",
            "points": []
          },
          {
            "title": "Key Debates",
            "points": []
          },
          {
            "title": "Adoption of Constitution",
            "points": [
              "26 November 1949",
              "26 January 1950"
            ]
          }
        ]
      },
      {
        "title": "Nation Building Under Nehru",
        "topics": [
          {
            "title": "Nehru's Vision",
            "points": [
              "Democracy",
              "Socialism",
              "Secularism",
              "Scientific Temper",
              "Planned Development"
            ]
          },
          {
            "title": "Parliamentary Democracy",
            "points": [
              "Universal Adult Franchise",
              "Electoral System",
              "Multi-party Democracy",
              "Planning Commission",
              "Five-Year Plans",
              "Public Sector Development",
              "Scientific Institutions",
              "IITs",
              "AIIMS",
              "CSIR",
              "Atomic Energy Programme",
              "ISRO Foundations"
            ]
          }
        ]
      },
      {
        "title": "Evolution of Indian Federalism",
        "topics": [
          {
            "title": "Centre-State Relations",
            "points": [
              "Legislative Relations",
              "Administrative Relations",
              "Financial Relations"
            ]
          },
          {
            "title": "Cooperative Federalism",
            "points": []
          },
          {
            "title": "Competitive Federalism",
            "points": []
          },
          {
            "title": "Fiscal Federalism",
            "points": []
          },
          {
            "title": "Regional Aspirations",
            "points": [
              "Sub-State Movements",
              "Identity Politics"
            ]
          }
        ]
      },
      {
        "title": "Reorganisation After 1956",
        "topics": [
          {
            "title": "Maharashtra and Gujarat (1960)",
            "points": [
              "Samyukta Maharashtra Movement",
              "Mahagujarat Movement"
            ]
          },
          {
            "title": "Punjab Reorganisation (1966)",
            "points": [
              "Punjabi Suba Movement",
              "Formation of Haryana",
              "Chandigarh Issue"
            ]
          },
          {
            "title": "North-Eastern Reorganisation",
            "points": [
              "Nagaland (1963)",
              "Meghalaya (1972)",
              "Manipur (1972)",
              "Tripura (1972)",
              "Mizoram (1987)",
              "Arunachal Pradesh (1987)",
              "Sikkim (1975)"
            ]
          },
          {
            "title": "Uttarakhand (2000)",
            "points": []
          },
          {
            "title": "Jharkhand (2000)",
            "points": []
          },
          {
            "title": "Chhattisgarh (2000)",
            "points": []
          },
          {
            "title": "Telangana (2014)",
            "points": []
          }
        ]
      },
      {
        "title": "Partition of India",
        "topics": [
          {
            "title": "Causes of Partition",
            "points": [
              "Two Nation Theory",
              "Communal Politics",
              "British Policies",
              "Muslim League's Demand"
            ]
          },
          {
            "title": "Consequences of Partition",
            "points": [
              "Humanitarian Crisis",
              "Refugee Problem",
              "Communal Riots",
              "Economic Losses",
              "Administrative Disruptions",
              "Long-term India-Pakistan Tensions"
            ]
          }
        ]
      },
      {
        "title": "Refugee Rehabilitation",
        "topics": [
          {
            "title": "Refugee Influx",
            "points": [
              "Refugees from West Pakistan",
              "Refugees from East Pakistan"
            ]
          },
          {
            "title": "Government Measures",
            "points": [
              "Rehabilitation Camps",
              "Land Redistribution",
              "Employment Generation",
              "Urban Rehabilitation"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Housing",
              "Livelihood",
              "Social Integration"
            ]
          }
        ]
      },
      {
        "title": "Case Studies of Integration",
        "topics": [
          {
            "title": "Junagadh",
            "points": [
              "Background",
              "Nawab's Decision",
              "Referendum",
              "Integration"
            ]
          },
          {
            "title": "Hyderabad",
            "points": [
              "Nizam's Position",
              "Operation Polo",
              "Jammu and Kashmir",
              "Instrument of Accession",
              "Tribal Invasion",
              "First Indo-Pak War",
              "UN Intervention",
              "Article 370 (Historical Context)",
              "Special Status Debate"
            ]
          },
          {
            "title": "Travancore",
            "points": []
          },
          {
            "title": "Bhopal",
            "points": []
          },
          {
            "title": "Jodhpur",
            "points": []
          },
          {
            "title": "Manipur",
            "points": [
              "Merger Agreement",
              "Political Debate"
            ]
          },
          {
            "title": "French Territories",
            "points": [
              "Puducherry",
              "Chandernagore",
              "Mahe",
              "Karaikal",
              "Yanam"
            ]
          },
          {
            "title": "Portuguese Territories",
            "points": [
              "Goa Liberation",
              "Daman",
              "Diu",
              "Operation Vijay"
            ]
          }
        ]
      },
      {
        "title": "Reorganisation of States",
        "topics": [
          {
            "title": "Need for Reorganisation",
            "points": [
              "Administrative Convenience",
              "Linguistic Aspirations",
              "Cultural Identity",
              "Regional Demands"
            ]
          }
        ]
      },
      {
        "title": "• Linguistic Reorganisation",
        "topics": [
          {
            "title": "Dhar Commission (1948)",
            "points": []
          },
          {
            "title": "JVP Committee",
            "points": []
          },
          {
            "title": "Andhra Movement",
            "points": [
              "Potti Sriramulu: Fast Unto Death",
              "Formation of Andhra State (1953)"
            ]
          },
          {
            "title": "States Reorganisation Commission (SRC)",
            "points": [
              "Fazl Ali Commission"
            ]
          },
          {
            "title": "States Reorganisation Act, 1956",
            "points": []
          }
        ]
      },
      {
        "title": "National Integration",
        "topics": [
          {
            "title": "Challenges",
            "points": [
              "Regionalism",
              "Linguism",
              "Communalism",
              "Separatism",
              "Ethnic Movements",
              "Insurgency"
            ]
          }
        ]
      },
      {
        "title": "Language Issue in India",
        "topics": [
          {
            "title": "Official Language Debate",
            "points": [
              "Hindi as Official Language",
              "Opposition in South India",
              "Anti-Hindi Agitations"
            ]
          },
          {
            "title": "Official Languages Act, 1963",
            "points": [
              "Three Language Formula"
            ]
          }
        ]
      },
      {
        "title": "Social and Political Consolidation",
        "topics": [
          {
            "title": "Land Reforms",
            "points": [
              "Zamindari Abolition",
              "Tenancy Reforms",
              "Ceiling Laws"
            ]
          },
          {
            "title": "Community Development Programme",
            "points": []
          },
          {
            "title": "Panchayati Raj",
            "points": []
          },
          {
            "title": "Green Revolution",
            "points": []
          }
        ]
      }
    ]
  },
  {
    "id": "world-history",
    "label": "Section 04",
    "title": "History of the World",
    "summary": "18th century onwards — Industrial Revolution, world wars, ideologies, and redrawal of boundaries.",
    "blocks": [
      {
        "title": "World History – Foundations",
        "topics": [
          {
            "title": "Understanding Modern World History",
            "points": [
              "Meaning of Modern World History",
              "Transition from Medieval to Modern World",
              "Age of Exploration",
              "Age of Discovery",
              "Scientific Revolution",
              "Renaissance",
              "Reformation",
              "Enlightenment",
              "Rise of Nation States",
              "Mercantilism",
              "Commercial Revolution"
            ]
          }
        ]
      },
      {
        "title": "American Revolution (1775–1783)",
        "topics": [
          {
            "title": "Background",
            "points": [
              "British Colonies in America",
              "Colonial Administration",
              "Economic Policies",
              "Taxation Policies",
              "Boston Tea Party",
              "Intolerable Acts",
              "Declaration of Independence",
              "Revolutionary War",
              "Treaty of Paris"
            ]
          },
          {
            "title": "Important Personalities",
            "points": [
              "Birth of USA",
              "Democracy",
              "Republicanism",
              "Constitutionalism",
              "Influence on French Revolution"
            ]
          }
        ]
      },
      {
        "title": "Industrial Revolution",
        "topics": [
          {
            "title": "Preconditions",
            "points": [
              "Agricultural Revolution",
              "Capital Accumulation",
              "Technological Innovation",
              "Colonial Resources",
              "First Industrial Revolution",
              "Britain",
              "Textile Industry",
              "Coal Industry",
              "Iron Industry",
              "Steam Engine",
              "Major Inventions",
              "Second Industrial Revolution",
              "Electricity",
              "Steel Industry",
              "Chemical Industry",
              "Automobile Industry",
              "Communication Revolution",
              "Urbanization",
              "Capitalism",
              "Factory System",
              "Labour Class",
              "Child Labour",
              "Women's Labour",
              "Trade Unions",
              "Environmental Impact"
            ]
          }
        ]
      },
      {
        "title": "Russian Revolution (1917)",
        "topics": [
          {
            "title": "Background",
            "points": [
              "Tsarist Autocracy",
              "Economic Conditions",
              "Social Conditions",
              "1905 Revolution"
            ]
          },
          {
            "title": "February Revolution",
            "points": []
          },
          {
            "title": "October Revolution",
            "points": [
              "Important Personalities",
              "Bolshevik Revolution"
            ]
          },
          {
            "title": "Formation of USSR",
            "points": [
              "Consequences",
              "Spread of Communism",
              "Socialist State",
              "Cold War Foundations"
            ]
          }
        ]
      },
      {
        "title": "First World War (1914–1918)",
        "topics": [
          {
            "title": "Causes",
            "points": [
              "Militarism",
              "Alliances",
              "Imperialism",
              "Nationalism",
              "Sarajevo Incident",
              "Alliances",
              "Triple Alliance",
              "Triple Entente",
              "Major Events",
              "Western Front",
              "Eastern Front",
              "US Entry",
              "Treaty of Versailles",
              "League of Nations",
              "Consequences",
              "Economic Crisis",
              "Political Instability",
              "Rise of Fascism",
              "Rise of Nazism"
            ]
          }
        ]
      },
      {
        "title": "Second World War (1939–1945)",
        "topics": [
          {
            "title": "Causes",
            "points": [
              "Treaty of Versailles",
              "Failure of League",
              "Aggressive Nationalism",
              "Appeasement",
              "Major Events",
              "German Expansion",
              "Pearl Harbor",
              "Operation Barbarossa",
              "D-Day",
              "Hiroshima & Nagasaki",
              "Major Conferences",
              "Yalta",
              "Potsdam",
              "Tehran",
              "Consequences",
              "United Nations",
              "Bipolar World",
              "Cold War",
              "Decolonization"
            ]
          }
        ]
      },
      {
        "title": "Cold War",
        "topics": [
          {
            "title": "Meaning",
            "points": []
          },
          {
            "title": "Causes",
            "points": []
          },
          {
            "title": "Features",
            "points": [
              "Arms Race",
              "Nuclear Race",
              "Proxy Wars",
              "Military Alliances",
              "NATO",
              "Warsaw Pact",
              "SEATO",
              "CENTO",
              "Major Crises",
              "Berlin Crisis",
              "Cuban Missile Crisis",
              "Korean War",
              "Vietnam War",
              "Afghan Crisis",
              "Détente"
            ]
          },
          {
            "title": "End of Cold War",
            "points": []
          },
          {
            "title": "Collapse of USSR",
            "points": []
          }
        ]
      },
      {
        "title": "Decolonization",
        "topics": [
          {
            "title": "Meaning",
            "points": []
          },
          {
            "title": "Causes",
            "points": []
          },
          {
            "title": "Post-WWII Changes",
            "points": [
              "Asian Decolonization",
              "India",
              "Indonesia",
              "Vietnam",
              "Malaysia",
              "Myanmar",
              "African Decolonization",
              "Ghana",
              "Kenya",
              "Algeria",
              "Congo",
              "South Africa"
            ]
          }
        ]
      },
      {
        "title": "Other Political Ideologies",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Liberalism",
              "Conservatism",
              "Nationalism",
              "Secularism",
              "Feminism",
              "Anarchism",
              "Environmentalism",
              "Humanism"
            ]
          }
        ]
      },
      {
        "title": "United Nations & Post-war World Order",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Formation of United Nations",
              "UN Charter",
              "UN Organs",
              "Peacekeeping",
              "Human Rights",
              "Universal Declaration of Human Rights"
            ]
          },
          {
            "title": "Bretton Woods Institutions",
            "points": [
              "IMF",
              "World Bank",
              "GATT"
            ]
          }
        ]
      },
      {
        "title": "French Revolution (1789)",
        "topics": [
          {
            "title": "Background",
            "points": [
              "Ancien Régime",
              "Social Structure",
              "First Estate",
              "Second Estate",
              "Third Estate"
            ]
          },
          {
            "title": "Causes",
            "points": [
              "Political Causes",
              "Economic Causes",
              "Social Causes",
              "Intellectual Causes"
            ]
          },
          {
            "title": "Important Events",
            "points": [
              "Estates General",
              "Tennis Court Oath",
              "Storming of Bastille",
              "National Assembly",
              "Reign of Terror",
              "Directory",
              "Important Personalities",
              "Liberty",
              "Equality",
              "Fraternity",
              "Nationalism",
              "Democracy",
              "Secularism"
            ]
          }
        ]
      },
      {
        "title": "Napoleonic Era",
        "topics": [
          {
            "title": "Rise of Napoleon",
            "points": []
          },
          {
            "title": "Napoleonic Reforms",
            "points": [
              "Civil Code",
              "Administrative Reforms"
            ]
          },
          {
            "title": "Napoleonic Wars",
            "points": []
          },
          {
            "title": "Continental System",
            "points": []
          },
          {
            "title": "Downfall of Napoleon",
            "points": []
          },
          {
            "title": "Congress of Vienna (1815)",
            "points": []
          },
          {
            "title": "Concert of Europe",
            "points": []
          },
          {
            "title": "Legacy of Napoleon",
            "points": []
          }
        ]
      },
      {
        "title": "Age of Nationalism",
        "topics": [
          {
            "title": "Concept of Nationalism",
            "points": []
          },
          {
            "title": "Nationalism in Europe",
            "points": [
              "Unification of Italy",
              "Mazzini",
              "Garibaldi",
              "Cavour",
              "Victor Emmanuel II",
              "Unification of Germany",
              "Bismarck",
              "Blood and Iron Policy",
              "Franco-Prussian War",
              "Nationalist Movements",
              "Poland",
              "Greece",
              "Hungary",
              "Balkans",
              "Impact of Nationalism"
            ]
          }
        ]
      },
      {
        "title": "Imperialism & Colonialism",
        "topics": [
          {
            "title": "Meaning",
            "points": [
              "Colonialism",
              "Imperialism",
              "Neo-Colonialism",
              "Causes",
              "Economic Motives",
              "Political Motives",
              "Strategic Motives",
              "Civilizing Mission",
              "Forms of Imperialism",
              "Direct Rule",
              "Indirect Rule",
              "Protectorate",
              "Sphere of Influence",
              "European Colonial Empires",
              "British Empire",
              "French Empire",
              "Dutch Empire",
              "Portuguese Empire",
              "Belgian Empire",
              "German Empire",
              "Scramble for Africa",
              "Berlin Conference",
              "African Colonization",
              "Colonization of Asia",
              "China",
              "Southeast Asia",
              "West Asia",
              "Economic Exploitation",
              "Resource Extraction",
              "Cultural Impact",
              "Political Impact"
            ]
          }
        ]
      },
      {
        "title": "Inter-war Period",
        "topics": [
          {
            "title": "League of Nations",
            "points": [
              "Structure",
              "Functions",
              "Failures",
              "Great Depression (1929)",
              "Causes",
              "Effects",
              "Global Impact",
              "New Deal",
              "Franklin D. Roosevelt",
              "Rise of Dictatorships",
              "Germany",
              "Italy",
              "Japan"
            ]
          }
        ]
      },
      {
        "title": "Fascism & Nazism",
        "topics": [
          {
            "title": "Fascism",
            "points": [
              "Mussolini",
              "Features",
              "Policies",
              "Nazism",
              "Hitler",
              "Nazi Ideology",
              "Anti-Semitism"
            ]
          },
          {
            "title": "Expansionism",
            "points": []
          },
          {
            "title": "Comparison",
            "points": [
              "Fascism vs Nazism",
              "Fascism vs Communism"
            ]
          }
        ]
      },
      {
        "title": "Redrawal of National Boundaries",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Congress of Vienna",
              "Versailles Settlement",
              "German Reunification",
              "Breakup of USSR",
              "Breakup of Yugoslavia",
              "Czechoslovakia Division",
              "Middle East Boundary Changes",
              "Creation of Israel",
              "Palestinian Issue"
            ]
          }
        ]
      },
      {
        "title": "Communism",
        "topics": [
          {
            "title": "Origins",
            "points": [
              "Karl Marx",
              "Friedrich Engels",
              "Communist Manifesto",
              "Principles",
              "Class Struggle",
              "Dictatorship of Proletariat",
              "Collective Ownership"
            ]
          },
          {
            "title": "Forms",
            "points": [
              "Marxism",
              "Leninism",
              "Stalinism",
              "Maoism"
            ]
          },
          {
            "title": "Impact on Society",
            "points": [
              "Political",
              "Economic",
              "Social"
            ]
          }
        ]
      },
      {
        "title": "Capitalism",
        "topics": [
          {
            "title": "Origins",
            "points": [
              "Adam Smith",
              "Wealth of Nations",
              "Principles",
              "Private Property",
              "Market Economy",
              "Competition"
            ]
          },
          {
            "title": "Profit Motive",
            "points": []
          },
          {
            "title": "Forms",
            "points": [
              "Classical Capitalism",
              "Welfare Capitalism",
              "Liberal Capitalism",
              "Neo-Liberalism",
              "Impact on Society",
              "Industrial Growth",
              "Economic Inequality",
              "Consumerism",
              "Globalization"
            ]
          }
        ]
      },
      {
        "title": "Socialism",
        "topics": [
          {
            "title": "Origins",
            "points": [
              "Utopian Socialism",
              "Scientific Socialism",
              "Thinkers",
              "Karl Marx",
              "Robert Owen",
              "Saint-Simon",
              "Fourier"
            ]
          },
          {
            "title": "Forms",
            "points": [
              "Democratic Socialism",
              "Fabian Socialism",
              "Market Socialism",
              "State Socialism"
            ]
          },
          {
            "title": "Impact on Society",
            "points": [
              "Welfare State",
              "Social Justice",
              "Labour Rights"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "indian-society",
    "label": "Section 05",
    "title": "Indian Society",
    "summary": "Diversity, women, population, poverty, urbanization, globalization, communalism, regionalism & secularism.",
    "blocks": [
      {
        "title": "Topics",
        "topics": [
          {
            "title": "Effects of Globalization on Indian Society.",
            "points": []
          }
        ]
      },
      {
        "title": "Indian Society: Conceptual Foundations",
        "topics": [
          {
            "title": "Meaning of Society",
            "points": [
              "Society",
              "Community",
              "Association",
              "Social Group",
              "Institution",
              "Social Structure",
              "Social System",
              "Social Organization"
            ]
          },
          {
            "title": "Features of Indian Society",
            "points": [
              "Ancient Roots",
              "Continuity",
              "Unity in Diversity"
            ]
          },
          {
            "title": "Cultural Pluralism",
            "points": [
              "Multi-Ethnic Society",
              "Multi-Religious Society",
              "Multi-Lingual Society",
              "Multi-Cultural Society"
            ]
          },
          {
            "title": "Composite Culture",
            "points": []
          },
          {
            "title": "Syncretic Traditions",
            "points": []
          },
          {
            "title": "Democratic Character",
            "points": []
          },
          {
            "title": "Spiritual Orientation",
            "points": []
          },
          {
            "title": "Family-Centric Society",
            "points": []
          },
          {
            "title": "Tolerance and Accommodation",
            "points": []
          },
          {
            "title": "Assimilation",
            "points": []
          },
          {
            "title": "Coexistence",
            "points": []
          }
        ]
      },
      {
        "title": "Unity in Diversity",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Historical Basis",
              "Constitutional Basis",
              "Cultural Basis"
            ]
          },
          {
            "title": "Challenges to Unity",
            "points": []
          },
          {
            "title": "National Integration Mechanisms",
            "points": []
          }
        ]
      },
      {
        "title": "Women Empowerment",
        "topics": [
          {
            "title": "Meaning",
            "points": []
          },
          {
            "title": "Dimensions",
            "points": [
              "Social Empowerment",
              "Economic Empowerment",
              "Political Empowerment",
              "Educational Empowerment",
              "Legal Empowerment",
              "SHGs"
            ]
          },
          {
            "title": "Microfinance",
            "points": []
          },
          {
            "title": "Women Entrepreneurship",
            "points": []
          },
          {
            "title": "Digital Inclusion",
            "points": []
          },
          {
            "title": "Financial Inclusion",
            "points": []
          }
        ]
      },
      {
        "title": "Women Organisations",
        "topics": [
          {
            "title": "Government Organisations",
            "points": [
              "National Commission for Women",
              "State Commissions",
              "Civil Society Organisations",
              "SEWA",
              "Self Help Groups",
              "NGOs",
              "Feminist Movements",
              "Grassroots Movements"
            ]
          }
        ]
      },
      {
        "title": "Women Movements in India",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Social Reform Movements",
              "Women's Rights Movement",
              "Environmental Movements",
              "Chipko Movement",
              "Anti-Liquor Movements"
            ]
          },
          {
            "title": "Contemporary Feminist Movements",
            "points": []
          }
        ]
      },
      {
        "title": "Poverty",
        "topics": [
          {
            "title": "Meaning",
            "points": []
          },
          {
            "title": "Types",
            "points": [
              "Absolute Poverty",
              "Relative Poverty",
              "Multidimensional Poverty",
              "Urban Poverty",
              "Rural Poverty"
            ]
          },
          {
            "title": "Causes",
            "points": [
              "Economic",
              "Social",
              "Political",
              "Geographical"
            ]
          },
          {
            "title": "Measurement",
            "points": []
          },
          {
            "title": "Tendulkar Committee",
            "points": []
          },
          {
            "title": "Rangarajan Committee",
            "points": []
          },
          {
            "title": "MPI",
            "points": []
          },
          {
            "title": "HDI",
            "points": []
          }
        ]
      },
      {
        "title": "Development",
        "topics": [
          {
            "title": "Meaning of Development",
            "points": [
              "Economic Development",
              "Human Development",
              "Inclusive Development",
              "Sustainable Development",
              "Participatory Development",
              "Social Development"
            ]
          }
        ]
      },
      {
        "title": "Developmental Issues",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Unemployment",
              "Hunger",
              "Malnutrition",
              "Illiteracy",
              "Health Inequality",
              "Educational Inequality",
              "Digital Divide",
              "Regional Imbalance",
              "Agrarian Distress",
              "Landlessness",
              "Informal Sector Problems"
            ]
          }
        ]
      },
      {
        "title": "Globalization",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning",
              "Evolution"
            ]
          },
          {
            "title": "Drivers",
            "points": [
              "Economic Globalization",
              "Cultural Globalization",
              "Political Globalization",
              "Technological Globalization"
            ]
          }
        ]
      },
      {
        "title": "Effects of Globalization",
        "topics": [
          {
            "title": "Positive Effects",
            "points": [
              "Economic Growth",
              "Employment",
              "Technology Transfer",
              "Cultural Exchange",
              "Education",
              "Communication Revolution"
            ]
          },
          {
            "title": "Negative Effects",
            "points": [
              "Consumerism",
              "Cultural Homogenization",
              "Identity Crisis",
              "Cultural Erosion",
              "Economic Inequality",
              "Labour Exploitation",
              "Digital Divide"
            ]
          }
        ]
      },
      {
        "title": "Globalization & Social Change",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Family Structure",
              "Marriage Patterns",
              "Youth Culture",
              "Media Influence",
              "Lifestyle Changes",
              "Food Habits",
              "Language Changes",
              "Migration Trends",
              "Work Culture"
            ]
          }
        ]
      },
      {
        "title": "Secularism",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning",
              "Historical Evolution",
              "Western Secularism",
              "Indian Secularism"
            ]
          },
          {
            "title": "Constitutional Basis",
            "points": [
              "Preamble",
              "Fundamental Rights",
              "DPSPs"
            ]
          },
          {
            "title": "Features of Indian Secularism",
            "points": [
              "Equal Respect for All Religions",
              "Principled Distance",
              "Religious Freedom"
            ]
          },
          {
            "title": "Challenges",
            "points": [
              "Communal Politics",
              "Religious Extremism",
              "Hate Speech",
              "Identity Politics"
            ]
          },
          {
            "title": "Secularism and National Integration",
            "points": []
          }
        ]
      },
      {
        "title": "Diversity of India",
        "topics": [
          {
            "title": "Cultural Diversity",
            "points": [
              "Regional Cultures",
              "Folk Traditions",
              "Tribal Cultures",
              "Classical Traditions",
              "Religious Diversity",
              "Hinduism",
              "Islam",
              "Christianity",
              "Sikhism",
              "Buddhism",
              "Jainism",
              "Zoroastrianism",
              "Judaism",
              "Bahá'í Faith"
            ]
          },
          {
            "title": "Linguistic Diversity",
            "points": [
              "Constitutional Languages",
              "Scheduled Languages"
            ]
          },
          {
            "title": "Language Families",
            "points": [
              "Indo-Aryan",
              "Dravidian",
              "Austro-Asiatic",
              "Tibeto-Burman",
              "Ethnic Diversity"
            ]
          },
          {
            "title": "Tribal Communities",
            "points": []
          },
          {
            "title": "Racial Groups",
            "points": []
          },
          {
            "title": "Migrant Communities",
            "points": []
          },
          {
            "title": "Regional Diversity",
            "points": [
              "North India",
              "South India",
              "East India",
              "West India",
              "North-East India",
              "Himalayan Region",
              "Island Regions"
            ]
          },
          {
            "title": "Diversity and National Integration",
            "points": [
              "Challenges",
              "Opportunities",
              "Constitutional Safeguards"
            ]
          }
        ]
      },
      {
        "title": "Population",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Demography",
              "Census",
              "Population Growth"
            ]
          },
          {
            "title": "Population Density",
            "points": [
              "Fertility Rate",
              "Birth Rate",
              "Death Rate"
            ]
          },
          {
            "title": "Dependency Ratio",
            "points": []
          },
          {
            "title": "Life Expectancy",
            "points": []
          },
          {
            "title": "Demographic Dividend",
            "points": []
          },
          {
            "title": "Population Transition Theory",
            "points": []
          },
          {
            "title": "Age Structure",
            "points": []
          },
          {
            "title": "Population Pyramid",
            "points": []
          }
        ]
      },
      {
        "title": "Population Issues",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Population Explosion",
              "Overpopulation",
              "Underpopulation",
              "Ageing Population",
              "Youth Bulge"
            ]
          },
          {
            "title": "Migration",
            "points": [
              "Internal Migration",
              "International Migration",
              "Rural-Urban Migration",
              "Seasonal Migration",
              "Brain Drain",
              "Brain Gain",
              "Brain Circulation"
            ]
          }
        ]
      },
      {
        "title": "Population Policies",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "National Population Policy",
              "Family Planning",
              "Reproductive Health",
              "Population Stabilization"
            ]
          }
        ]
      },
      {
        "title": "Urbanization",
        "topics": [
          {
            "title": "Meaning",
            "points": [
              "Urban Growth",
              "Urban Transition",
              "Urban Expansion",
              "Urban Sprawl"
            ]
          },
          {
            "title": "Smart Cities",
            "points": []
          },
          {
            "title": "Metropolitan Cities",
            "points": []
          },
          {
            "title": "Megacities",
            "points": []
          }
        ]
      },
      {
        "title": "Urban Problems",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Housing Crisis",
              "Slums",
              "Traffic Congestion",
              "Pollution",
              "Water Scarcity",
              "Sewage Problems",
              "Solid Waste Management",
              "Urban Flooding",
              "Crime",
              "Informal Settlements",
              "Urban Poverty",
              "Infrastructure Deficit"
            ]
          }
        ]
      },
      {
        "title": "Urban Solutions",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Smart Cities Mission",
              "AMRUT",
              "TOD",
              "Sustainable Cities",
              "Urban Governance",
              "Municipal Reforms",
              "Public Transport",
              "Affordable Housing",
              "Green Urban Planning"
            ]
          }
        ]
      },
      {
        "title": "Social Justice",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Equality",
              "Equity",
              "Inclusion",
              "Representation",
              "Human Rights",
              "Social Democracy"
            ]
          }
        ]
      },
      {
        "title": "Social Empowerment of Vulnerable Groups",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Scheduled Castes",
              "Caste Discrimination",
              "Untouchability",
              "Social Mobility",
              "Scheduled Tribes",
              "Tribal Rights",
              "Forest Rights",
              "Displacement",
              "OBCs"
            ]
          },
          {
            "title": "Minorities",
            "points": []
          },
          {
            "title": "Persons with Disabilities",
            "points": []
          },
          {
            "title": "Elderly Population",
            "points": []
          },
          {
            "title": "Transgender Community",
            "points": []
          },
          {
            "title": "Migrant Workers",
            "points": []
          }
        ]
      },
      {
        "title": "Communalism",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Meaning"
            ]
          },
          {
            "title": "Features",
            "points": []
          },
          {
            "title": "Historical Background",
            "points": []
          },
          {
            "title": "Colonial Roots",
            "points": []
          },
          {
            "title": "Causes",
            "points": [
              "Political Causes",
              "Economic Causes",
              "Social Causes",
              "Religious Causes"
            ]
          },
          {
            "title": "Types",
            "points": [
              "Majority Communalism",
              "Minority Communalism"
            ]
          },
          {
            "title": "Consequences",
            "points": [
              "Violence",
              "Polarization",
              "Social Fragmentation",
              "Measures to Address Communalism"
            ]
          }
        ]
      },
      {
        "title": "Regionalism",
        "topics": [
          {
            "title": "Meaning",
            "points": []
          },
          {
            "title": "Types",
            "points": []
          },
          {
            "title": "Linguistic Regionalism",
            "points": []
          },
          {
            "title": "Economic Regionalism",
            "points": []
          },
          {
            "title": "Cultural Regionalism",
            "points": []
          },
          {
            "title": "Political Regionalism",
            "points": []
          },
          {
            "title": "Causes",
            "points": []
          },
          {
            "title": "Consequences",
            "points": []
          },
          {
            "title": "Regional Movements",
            "points": []
          },
          {
            "title": "Inter-State Disputes",
            "points": []
          },
          {
            "title": "Water Disputes",
            "points": []
          },
          {
            "title": "Boundary Disputes",
            "points": []
          },
          {
            "title": "Cooperative Federalism",
            "points": []
          },
          {
            "title": "Competitive Federalism",
            "points": []
          }
        ]
      }
    ]
  },
  {
    "id": "physical-geography",
    "label": "Section 06",
    "title": "World's Physical Geography",
    "summary": "Salient features of the world’s physical geography for GS Paper I.",
    "blocks": [
      {
        "title": "Geomorphology (landforms & Earth's Evolution)",
        "topics": []
      },
      {
        "title": "Origin and Evolution of Earth",
        "topics": [
          {
            "title": "Universe",
            "points": []
          },
          {
            "title": "Origin of Universe",
            "points": []
          },
          {
            "title": "Big Bang Theory",
            "points": []
          },
          {
            "title": "Expanding Universe Theory",
            "points": []
          },
          {
            "title": "Solar System",
            "points": []
          },
          {
            "title": "Formation of Solar System",
            "points": []
          },
          {
            "title": "Nebular Hypothesis",
            "points": []
          },
          {
            "title": "Planetesimal Hypothesis",
            "points": []
          },
          {
            "title": "Tidal Hypothesis",
            "points": []
          },
          {
            "title": "Earth",
            "points": []
          },
          {
            "title": "Origin of Earth",
            "points": []
          },
          {
            "title": "Evolution of Earth",
            "points": []
          },
          {
            "title": "Geological Time Scale",
            "points": []
          },
          {
            "title": "Geological Eras",
            "points": []
          },
          {
            "title": "Precambrian",
            "points": []
          },
          {
            "title": "Paleozoic",
            "points": []
          },
          {
            "title": "Mesozoic",
            "points": []
          },
          {
            "title": "Cenozoic",
            "points": []
          }
        ]
      },
      {
        "title": "Endogenic Forces",
        "topics": [
          {
            "title": "Diastrophism",
            "points": []
          },
          {
            "title": "Orogenic Movements",
            "points": []
          },
          {
            "title": "Epeirogenic Movements",
            "points": []
          },
          {
            "title": "Folding",
            "points": []
          },
          {
            "title": "Types of Folds",
            "points": []
          },
          {
            "title": "Faulting",
            "points": []
          },
          {
            "title": "Types of Faults",
            "points": []
          },
          {
            "title": "Earthquakes",
            "points": []
          },
          {
            "title": "Causese",
            "points": []
          },
          {
            "title": "Types",
            "points": []
          },
          {
            "title": "Distribution",
            "points": []
          },
          {
            "title": "Effects",
            "points": []
          },
          {
            "title": "Tsunami",
            "points": []
          },
          {
            "title": "Volcanism",
            "points": []
          },
          {
            "title": "Volcano",
            "points": []
          },
          {
            "title": "Types of Volcanoes",
            "points": [
              "Shield Volcano",
              "Composite Volcano",
              "Cinder Cone Volcano",
              "Volcanic Landforms",
              "Caldera",
              "Crater"
            ]
          },
          {
            "title": "Lava Plateau",
            "points": []
          }
        ]
      },
      {
        "title": "Exogenic Forces",
        "topics": [
          {
            "title": "Weathering",
            "points": [
              "Mechanical Weathering",
              "Chemical Weathering",
              "Biological Weathering"
            ]
          },
          {
            "title": "Mass Wasting",
            "points": []
          },
          {
            "title": "Landslides",
            "points": []
          },
          {
            "title": "Soil Creep",
            "points": []
          },
          {
            "title": "Rockfall",
            "points": []
          },
          {
            "title": "Mudflow",
            "points": []
          }
        ]
      },
      {
        "title": "Climatology",
        "topics": []
      },
      {
        "title": "Atmosphere",
        "topics": [
          {
            "title": "Composition of Atmosphere",
            "points": []
          },
          {
            "title": "Permanent Gases",
            "points": []
          },
          {
            "title": "Variable Gases",
            "points": []
          },
          {
            "title": "Aerosols",
            "points": []
          },
          {
            "title": "Structure of Atmosphere",
            "points": [
              "Troposphere",
              "Stratosphere",
              "Mesosphere",
              "Thermosphere",
              "Exosphere"
            ]
          }
        ]
      },
      {
        "title": "Heat Budget & Temperature",
        "topics": [
          {
            "title": "Insolation",
            "points": []
          },
          {
            "title": "Heat Budget",
            "points": []
          },
          {
            "title": "Albedo",
            "points": []
          },
          {
            "title": "Greenhouse Effect",
            "points": []
          },
          {
            "title": "Global Warming",
            "points": []
          },
          {
            "title": "Temperature Distribution",
            "points": []
          },
          {
            "title": "Horizontal Distribution",
            "points": []
          },
          {
            "title": "Vertical Distribution",
            "points": []
          },
          {
            "title": "Temperature Inversion",
            "points": []
          }
        ]
      },
      {
        "title": "Atmospheric Pressure & Winds",
        "topics": [
          {
            "title": "Pressure Belts",
            "points": []
          },
          {
            "title": "Equatorial Low",
            "points": []
          },
          {
            "title": "Subtropical High",
            "points": []
          },
          {
            "title": "Subpolar Low",
            "points": []
          },
          {
            "title": "Polar High",
            "points": []
          },
          {
            "title": "Planetary Winds",
            "points": []
          },
          {
            "title": "Trade Winds",
            "points": []
          },
          {
            "title": "Westerlies",
            "points": []
          },
          {
            "title": "Polar Easterlies",
            "points": []
          },
          {
            "title": "Local Winds",
            "points": []
          },
          {
            "title": "Chinook",
            "points": []
          },
          {
            "title": "Foehn",
            "points": []
          },
          {
            "title": "Mistral",
            "points": []
          },
          {
            "title": "Bora",
            "points": []
          },
          {
            "title": "Sirocco",
            "points": []
          },
          {
            "title": "Loo",
            "points": []
          },
          {
            "title": "Jet Streams",
            "points": []
          },
          {
            "title": "Polar Jet Stream",
            "points": []
          },
          {
            "title": "Subtropical Jet Stream",
            "points": []
          },
          {
            "title": "Tropical Easterly Jet",
            "points": []
          }
        ]
      },
      {
        "title": "Atmospheric Circulation",
        "topics": [
          {
            "title": "Hadley Cell",
            "points": []
          },
          {
            "title": "Ferrel Cell",
            "points": []
          },
          {
            "title": "Polar Cell",
            "points": []
          },
          {
            "title": "Walker Circulation",
            "points": []
          },
          {
            "title": "Monsoon Mechanism",
            "points": []
          }
        ]
      },
      {
        "title": "Climate Classification",
        "topics": [
          {
            "title": "Koppen Climate Classification",
            "points": []
          },
          {
            "title": "Thornthwaite Classification",
            "points": []
          },
          {
            "title": "Trewartha Classification",
            "points": []
          }
        ]
      },
      {
        "title": "World Climatic Regions",
        "topics": [
          {
            "title": "Equatorial Climate",
            "points": []
          },
          {
            "title": "Tropical Monsoon Climate",
            "points": []
          },
          {
            "title": "Tropical Savanna Climate",
            "points": []
          },
          {
            "title": "Hot Desert Climate",
            "points": []
          },
          {
            "title": "Mediterranean Climate",
            "points": []
          },
          {
            "title": "China Type Climate",
            "points": []
          },
          {
            "title": "British Type Climate",
            "points": []
          },
          {
            "title": "Taiga Climate",
            "points": []
          },
          {
            "title": "Tundra Climate",
            "points": []
          },
          {
            "title": "Polar Climate",
            "points": []
          },
          {
            "title": "Highland Climate",
            "points": []
          }
        ]
      },
      {
        "title": "Oceanography",
        "topics": []
      },
      {
        "title": "Ocean Basins",
        "topics": [
          {
            "title": "Pacific Ocean",
            "points": []
          },
          {
            "title": "Atlantic Ocean",
            "points": []
          },
          {
            "title": "Indian Ocean",
            "points": []
          },
          {
            "title": "Arctic Ocean",
            "points": []
          },
          {
            "title": "Southern Ocean",
            "points": []
          }
        ]
      },
      {
        "title": "Ocean Floor Topography",
        "topics": [
          {
            "title": "Continental Shelf",
            "points": []
          },
          {
            "title": "Continental Slope",
            "points": []
          },
          {
            "title": "Continental Rise",
            "points": []
          },
          {
            "title": "Abyssal Plains",
            "points": []
          },
          {
            "title": "Mid-Oceanic Ridges",
            "points": []
          },
          {
            "title": "Ocean Trenches",
            "points": []
          },
          {
            "title": "Seamounts",
            "points": []
          },
          {
            "title": "Guyots",
            "points": []
          }
        ]
      },
      {
        "title": "Ocean Water",
        "topics": [
          {
            "title": "Temperature",
            "points": []
          },
          {
            "title": "Salinity",
            "points": []
          },
          {
            "title": "Density",
            "points": []
          }
        ]
      },
      {
        "title": "Ocean Movements",
        "topics": [
          {
            "title": "Waves",
            "points": []
          },
          {
            "title": "Tsunami",
            "points": []
          },
          {
            "title": "Tides",
            "points": []
          },
          {
            "title": "Spring Tide",
            "points": []
          },
          {
            "title": "Neap Tide",
            "points": []
          },
          {
            "title": "Ocean Currents",
            "points": []
          },
          {
            "title": "Warm Currents",
            "points": []
          },
          {
            "title": "Cold Currents",
            "points": []
          },
          {
            "title": "Major Ocean Currents",
            "points": []
          },
          {
            "title": "Gulf Stream",
            "points": []
          },
          {
            "title": "Labrador Current",
            "points": []
          },
          {
            "title": "Kuroshio Current",
            "points": []
          },
          {
            "title": "Oyashio Current",
            "points": []
          },
          {
            "title": "Canary Current",
            "points": []
          },
          {
            "title": "Peru Current",
            "points": []
          },
          {
            "title": "Benguela Current",
            "points": []
          },
          {
            "title": "Agulhas Current",
            "points": []
          },
          {
            "title": "West Australian Current",
            "points": []
          },
          {
            "title": "El Niño",
            "points": []
          },
          {
            "title": "La Niña",
            "points": []
          },
          {
            "title": "ENSO",
            "points": []
          },
          {
            "title": "Indian Ocean Dipole",
            "points": []
          },
          {
            "title": "Southern Oscillation",
            "points": []
          }
        ]
      },
      {
        "title": "World Physical Features",
        "topics": []
      },
      {
        "title": "Major Mountain Systems",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Himalayas",
              "Andes",
              "Rockies",
              "Alps",
              "Atlas",
              "Appalachian",
              "Ural",
              "Great Dividing Range"
            ]
          }
        ]
      },
      {
        "title": "Important Straits, Channels & Chokepoints",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Strait of Hormuz",
              "Malacca Strait",
              "Bab-el-Mandeb",
              "Bosphorus",
              "Dardanelles",
              "Bering Strait",
              "Mozambique Channel",
              "Suez Canal",
              "Panama Canal"
            ]
          }
        ]
      },
      {
        "title": "World Regional Geography",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Arctic Region",
              "Antarctica",
              "West Asia",
              "Central Asia",
              "South-East Asia",
              "Europe",
              "Africa",
              "Latin America",
              "Indo-Pacific Region"
            ]
          }
        ]
      },
      {
        "title": "Interior of Earth",
        "topics": [
          {
            "title": "Earth's Internal Structure",
            "points": []
          },
          {
            "title": "Crust",
            "points": []
          },
          {
            "title": "Continental Crust",
            "points": []
          },
          {
            "title": "Oceanic Crust",
            "points": []
          },
          {
            "title": "Mantle",
            "points": []
          },
          {
            "title": "Upper Mantle",
            "points": []
          },
          {
            "title": "Lower Mantle",
            "points": []
          },
          {
            "title": "Core",
            "points": []
          },
          {
            "title": "Outer Core",
            "points": []
          },
          {
            "title": "Inner Core",
            "points": []
          },
          {
            "title": "Seismology",
            "points": []
          },
          {
            "title": "Earthquakes",
            "points": []
          },
          {
            "title": "Seismic Waves",
            "points": []
          },
          {
            "title": "P-Waves",
            "points": []
          },
          {
            "title": "S-Waves",
            "points": []
          },
          {
            "title": "Surface Waves",
            "points": []
          },
          {
            "title": "Evidence for Earth's Interior",
            "points": []
          },
          {
            "title": "Direct Sources",
            "points": []
          },
          {
            "title": "Indirect Sources",
            "points": []
          }
        ]
      },
      {
        "title": "Plate Tectonics",
        "topics": [
          {
            "title": "Continental Drift Theory",
            "points": []
          },
          {
            "title": "Alfred Wegener",
            "points": []
          },
          {
            "title": "Evidence",
            "points": []
          },
          {
            "title": "Criticism",
            "points": []
          },
          {
            "title": "Sea Floor Spreading Theory",
            "points": []
          },
          {
            "title": "Harry Hess",
            "points": []
          },
          {
            "title": "Evidence",
            "points": []
          },
          {
            "title": "Plate Tectonic Theory",
            "points": []
          },
          {
            "title": "Lithosphere",
            "points": []
          },
          {
            "title": "Asthenosphere",
            "points": []
          },
          {
            "title": "Plates",
            "points": []
          },
          {
            "title": "Major Plates",
            "points": []
          },
          {
            "title": "Minor Plates",
            "points": []
          },
          {
            "title": "Plate Boundaries",
            "points": [
              "Divergent Boundary",
              "Convergent Boundary",
              "Transform Boundary"
            ]
          },
          {
            "title": "Consequences",
            "points": []
          },
          {
            "title": "Mountain Building",
            "points": []
          },
          {
            "title": "Earthquakes",
            "points": []
          },
          {
            "title": "Volcanoes",
            "points": []
          },
          {
            "title": "Ocean Trenches",
            "points": []
          }
        ]
      },
      {
        "title": "Geomorphic Processes & Landforms",
        "topics": [
          {
            "title": "Fluvial Landforms",
            "points": []
          },
          {
            "title": "Erosional Landforms",
            "points": [
              "V-Shaped Valley",
              "Gorge",
              "Canyon",
              "Waterfall",
              "Rapids",
              "Potholes"
            ]
          },
          {
            "title": "Depositional Landforms",
            "points": [
              "Flood Plain",
              "Natural Levee",
              "Delta",
              "Alluvial Fan"
            ]
          },
          {
            "title": "Glacial Landforms",
            "points": []
          },
          {
            "title": "Erosional",
            "points": [
              "Cirque",
              "Arete",
              "Horn",
              "U-Shaped Valley",
              "Fjord"
            ]
          },
          {
            "title": "Depositional",
            "points": [
              "Moraine",
              "Drumlin",
              "Esker",
              "Outwash Plain"
            ]
          },
          {
            "title": "Aeolian Landforms",
            "points": []
          },
          {
            "title": "Erosional",
            "points": [
              "Mushroom Rock",
              "Zeugen",
              "Yardang"
            ]
          },
          {
            "title": "Depositional",
            "points": [
              "Sand Dunes",
              "Loess"
            ]
          },
          {
            "title": "Karst Topography",
            "points": []
          },
          {
            "title": "Limestone Landforms",
            "points": []
          },
          {
            "title": "Sinkholes",
            "points": []
          },
          {
            "title": "Dolines",
            "points": []
          },
          {
            "title": "Uvala",
            "points": []
          },
          {
            "title": "Polje",
            "points": []
          },
          {
            "title": "Stalactites",
            "points": []
          },
          {
            "title": "Stalagmites",
            "points": []
          },
          {
            "title": "Coastal Landforms",
            "points": []
          },
          {
            "title": "Erosional",
            "points": []
          },
          {
            "title": "Sea Cliffs",
            "points": []
          },
          {
            "title": "Sea Caves",
            "points": []
          },
          {
            "title": "Sea Arches",
            "points": []
          },
          {
            "title": "Stacks",
            "points": []
          },
          {
            "title": "Depositional",
            "points": []
          },
          {
            "title": "Beaches",
            "points": []
          },
          {
            "title": "Spits",
            "points": []
          },
          {
            "title": "Bars",
            "points": []
          },
          {
            "title": "Lagoons",
            "points": []
          }
        ]
      },
      {
        "title": "Humidity & Precipitation",
        "topics": [
          {
            "title": "Humidity",
            "points": []
          },
          {
            "title": "Condensation",
            "points": []
          },
          {
            "title": "Clouds",
            "points": []
          },
          {
            "title": "Cloud Classification",
            "points": []
          },
          {
            "title": "Rainfall Types",
            "points": []
          },
          {
            "title": "Convectional Rainfall",
            "points": []
          },
          {
            "title": "Orographic Rainfall",
            "points": []
          },
          {
            "title": "Cyclonic Rainfall",
            "points": []
          }
        ]
      },
      {
        "title": "Air Masses & Fronts",
        "topics": [
          {
            "title": "Air Masses",
            "points": []
          },
          {
            "title": "Classification",
            "points": []
          },
          {
            "title": "Source Regions",
            "points": []
          },
          {
            "title": "Fronts",
            "points": []
          },
          {
            "title": "Warm Front",
            "points": []
          },
          {
            "title": "Cold Front",
            "points": []
          },
          {
            "title": "Occluded Front",
            "points": []
          },
          {
            "title": "Stationary Front",
            "points": []
          }
        ]
      },
      {
        "title": "Cyclones",
        "topics": [
          {
            "title": "Tropical Cyclones",
            "points": []
          },
          {
            "title": "Formation",
            "points": []
          },
          {
            "title": "Conditions",
            "points": []
          },
          {
            "title": "Structure",
            "points": []
          },
          {
            "title": "Distribution",
            "points": []
          },
          {
            "title": "Temperate Cyclones",
            "points": []
          },
          {
            "title": "Anti-Cyclones",
            "points": []
          },
          {
            "title": "Tornado",
            "points": []
          },
          {
            "title": "Waterspout",
            "points": []
          },
          {
            "title": "Blizzard",
            "points": []
          }
        ]
      },
      {
        "title": "Biogeography",
        "topics": []
      },
      {
        "title": "Ecosystems & Biomes",
        "topics": [
          {
            "title": "Biomes",
            "points": []
          },
          {
            "title": "Tropical Rainforest",
            "points": []
          },
          {
            "title": "Tropical Grassland",
            "points": []
          },
          {
            "title": "Desert",
            "points": []
          },
          {
            "title": "Mediterranean",
            "points": []
          },
          {
            "title": "Temperate Forest",
            "points": []
          },
          {
            "title": "Taiga",
            "points": []
          },
          {
            "title": "Tundra",
            "points": []
          },
          {
            "title": "Polar",
            "points": []
          },
          {
            "title": "Mountain Biome",
            "points": []
          },
          {
            "title": "Biodiversity Distribution",
            "points": []
          },
          {
            "title": "Species Richness",
            "points": []
          },
          {
            "title": "Endemism",
            "points": []
          }
        ]
      },
      {
        "title": "World Natural Vegetation",
        "topics": [
          {
            "title": "Equatorial Forests",
            "points": []
          },
          {
            "title": "Tropical Deciduous Forests",
            "points": []
          },
          {
            "title": "Mediterranean Vegetation",
            "points": []
          },
          {
            "title": "Temperate Forests",
            "points": []
          },
          {
            "title": "Coniferous Forests",
            "points": []
          },
          {
            "title": "Tundra Vegetation",
            "points": []
          }
        ]
      },
      {
        "title": "World Soils",
        "topics": [
          {
            "title": "Soil Formation",
            "points": []
          },
          {
            "title": "Soil Profile",
            "points": [
              "O Horizon",
              "A Horizon",
              "B Horizon",
              "C Horizon"
            ]
          },
          {
            "title": "Major Soil Types",
            "points": [
              "Chernozem",
              "Podzol",
              "Laterite",
              "Desert Soil",
              "Tundra Soil",
              "Alluvial Soil"
            ]
          }
        ]
      },
      {
        "title": "Major Plateaus",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Tibetan Plateau",
              "Deccan Plateau",
              "Brazilian Highlands",
              "Patagonian Plateau",
              "Mexican Plateau",
              "Ethiopian Plateau"
            ]
          }
        ]
      },
      {
        "title": "Major Plains",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Indo-Gangetic Plain",
              "North China Plain",
              "Great Plains",
              "Pampas",
              "Siberian Plain"
            ]
          }
        ]
      },
      {
        "title": "Major Deserts",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Sahara",
              "Kalahari",
              "Namib",
              "Arabian Desert",
              "Thar Desert",
              "Atacama",
              "Gobi",
              "Great Victoria Desert"
            ]
          }
        ]
      },
      {
        "title": "Major River Systems",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Nile",
              "Amazon",
              "Mississippi",
              "Yangtze",
              "Yellow River",
              "Congo",
              "Danube",
              "Volga",
              "Mekong",
              "Murray-Darling"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "resources-industries",
    "label": "Section 07",
    "title": "Natural Resources & Industrial Location",
    "summary": "Distribution of key natural resources and factors behind location of industries (including India).",
    "blocks": [
      {
        "title": "Natural Resources – Fundamentals",
        "topics": [
          {
            "title": "Meaning of Natural Resources",
            "points": []
          },
          {
            "title": "Characteristics",
            "points": []
          },
          {
            "title": "Classification",
            "points": []
          },
          {
            "title": "Based on Origin",
            "points": []
          },
          {
            "title": "Biotic Resources",
            "points": []
          },
          {
            "title": "Abiotic Resources",
            "points": []
          },
          {
            "title": "Based on Exhaustibility",
            "points": []
          },
          {
            "title": "Renewable Resources",
            "points": []
          },
          {
            "title": "Non-Renewable Resources",
            "points": []
          },
          {
            "title": "Based on Ownership",
            "points": []
          },
          {
            "title": "Individual Resources",
            "points": []
          },
          {
            "title": "Community Resources",
            "points": []
          },
          {
            "title": "National Resources",
            "points": []
          },
          {
            "title": "International Resources",
            "points": []
          },
          {
            "title": "Based on Development",
            "points": []
          },
          {
            "title": "Potential Resources",
            "points": []
          },
          {
            "title": "Developed Resources",
            "points": []
          },
          {
            "title": "Stock Resources",
            "points": []
          },
          {
            "title": "Reserves",
            "points": []
          }
        ]
      },
      {
        "title": "Resource Geography",
        "topics": [
          {
            "title": "Resource Distribution",
            "points": []
          },
          {
            "title": "Resource Concentration",
            "points": []
          },
          {
            "title": "Resource Scarcity",
            "points": []
          },
          {
            "title": "Resource Regions",
            "points": []
          },
          {
            "title": "Resource Nationalism",
            "points": []
          },
          {
            "title": "Resource Curse",
            "points": []
          },
          {
            "title": "Strategic Resources",
            "points": []
          },
          {
            "title": "Critical Minerals",
            "points": []
          },
          {
            "title": "Rare Earth Elements",
            "points": []
          }
        ]
      },
      {
        "title": "Metallic Minerals",
        "topics": [
          {
            "title": "Iron Ore",
            "points": []
          },
          {
            "title": "Formation",
            "points": []
          },
          {
            "title": "Types",
            "points": []
          },
          {
            "title": "Magnetite",
            "points": []
          },
          {
            "title": "Hematite",
            "points": []
          },
          {
            "title": "Limonite",
            "points": []
          },
          {
            "title": "Siderite",
            "points": []
          },
          {
            "title": "World Distribution",
            "points": [
              "Australia",
              "Brazil",
              "China",
              "Russia",
              "India",
              "Ukraine",
              "Indian Distribution",
              "Odisha",
              "Chhattisgarh",
              "Karnataka",
              "Jharkhand",
              "Goa"
            ]
          },
          {
            "title": "Manganese",
            "points": []
          },
          {
            "title": "Uses",
            "points": []
          },
          {
            "title": "Distribution",
            "points": [
              "South Africa",
              "Australia",
              "Brazil",
              "India",
              "Gabon"
            ]
          },
          {
            "title": "Bauxite",
            "points": []
          },
          {
            "title": "Aluminium Industry",
            "points": []
          },
          {
            "title": "World Distribution",
            "points": [
              "Australia",
              "Guinea",
              "Brazil",
              "China",
              "India",
              "Copper",
              "Distribution",
              "Chile",
              "Peru",
              "USA",
              "Zambia",
              "DRC",
              "Australia"
            ]
          },
          {
            "title": "Gold",
            "points": []
          },
          {
            "title": "Distribution",
            "points": [
              "South Africa",
              "Australia",
              "Russia",
              "China",
              "Canada"
            ]
          },
          {
            "title": "Silver",
            "points": []
          },
          {
            "title": "Nickel",
            "points": []
          },
          {
            "title": "Zinc",
            "points": []
          },
          {
            "title": "Lead",
            "points": []
          },
          {
            "title": "Tin",
            "points": []
          },
          {
            "title": "Chromium",
            "points": []
          },
          {
            "title": "Tungsten",
            "points": []
          },
          {
            "title": "Molybdenum",
            "points": []
          },
          {
            "title": "Cobalt",
            "points": []
          },
          {
            "title": "Lithium",
            "points": []
          },
          {
            "title": "Graphite",
            "points": []
          },
          {
            "title": "Silicon",
            "points": []
          },
          {
            "title": "Titanium",
            "points": []
          }
        ]
      },
      {
        "title": "Critical Minerals",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Lithium",
              "Cobalt",
              "Nickel",
              "Graphite",
              "Rare Earth Elements",
              "Germanium",
              "Gallium",
              "Copper",
              "Silicon",
              "Global Supply Chains",
              "Strategic Importance",
              "Energy Transition",
              "Electric Vehicle Industry",
              "Semiconductor Industry",
              "Indian Initiatives",
              "KABIL",
              "National Critical Mineral Mission",
              "Critical Mineral Auctions"
            ]
          }
        ]
      },
      {
        "title": "Non-metallic Minerals",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Limestone",
              "Gypsum",
              "Mica",
              "Phosphates",
              "Potash",
              "Sulphur",
              "Diamond",
              "Salt"
            ]
          }
        ]
      },
      {
        "title": "Industrial Location Theories",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Alfred Weber Theory",
              "Losch Theory",
              "Christaller Theory",
              "Growth Pole Theory",
              "Central Place Theory",
              "Perroux Theory",
              "Industrial Linkages",
              "Agglomeration Economies",
              "Deglomeration"
            ]
          }
        ]
      },
      {
        "title": "Factors Affecting Industrial Location",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Physical Factors",
              "Raw Material",
              "Power",
              "Water",
              "Climate",
              "Land",
              "Topography",
              "Human Factors",
              "Labour",
              "Capital",
              "Technology",
              "Entrepreneurship",
              "Market",
              "Transport",
              "Government Policy",
              "Urbanization",
              "Infrastructure"
            ]
          }
        ]
      },
      {
        "title": "Iron and Steel Industry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Raw Material Orientation",
              "Market Orientation",
              "Global Centres",
              "Ruhr",
              "Great Lakes Region",
              "Donbas",
              "Japan",
              "China",
              "India",
              "Jamshedpur",
              "Bhilai",
              "Rourkela",
              "Durgapur",
              "Bokaro",
              "Visakhapatnam"
            ]
          }
        ]
      },
      {
        "title": "Cotton Textile Industry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Global Distribution",
              "China",
              "India",
              "Bangladesh",
              "Vietnam",
              "USA",
              "India",
              "Mumbai",
              "Ahmedabad",
              "Coimbatore",
              "Surat"
            ]
          }
        ]
      },
      {
        "title": "Sugar Industry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Tropical vs Temperate Sugar Industry",
              "India",
              "Maharashtra",
              "Uttar Pradesh",
              "Karnataka"
            ]
          }
        ]
      },
      {
        "title": "Tertiary Sector",
        "topics": []
      },
      {
        "title": "Service Sector",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Banking",
              "Insurance",
              "Trade",
              "Logistics",
              "Tourism",
              "Healthcare",
              "Education",
              "IT Services"
            ]
          }
        ]
      },
      {
        "title": "Transport Industry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Road Transport",
              "Rail Transport",
              "Air Transport",
              "Water Transport",
              "Multimodal Logistics"
            ]
          }
        ]
      },
      {
        "title": "Port-based Development",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Major Ports of World",
              "Chokepoints",
              "Maritime Trade Routes",
              "India",
              "Western Coast",
              "Eastern Coast",
              "Sagarmala"
            ]
          }
        ]
      },
      {
        "title": "Financial Centres",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "New York",
              "London",
              "Tokyo",
              "Singapore",
              "Hong Kong",
              "Dubai",
              "Mumbai"
            ]
          }
        ]
      },
      {
        "title": "Tourism Industry",
        "topics": [
          {
            "title": "Physical Factors",
            "points": []
          },
          {
            "title": "Cultural Factors",
            "points": []
          },
          {
            "title": "Economic Factors",
            "points": []
          },
          {
            "title": "Sustainable Tourism",
            "points": []
          }
        ]
      },
      {
        "title": "Energy Resources",
        "topics": [
          {
            "title": "Coal",
            "points": []
          },
          {
            "title": "Formation",
            "points": []
          },
          {
            "title": "Types",
            "points": [
              "Peat",
              "Lignite",
              "Bituminous",
              "Anthracite"
            ]
          },
          {
            "title": "Global Distribution",
            "points": [
              "China",
              "India",
              "USA",
              "Australia",
              "Russia",
              "South Africa",
              "Germany"
            ]
          },
          {
            "title": "Indian Distribution",
            "points": [
              "Jharkhand",
              "Odisha",
              "Chhattisgarh",
              "West Bengal",
              "Madhya Pradesh",
              "Telangana",
              "Maharashtra"
            ]
          },
          {
            "title": "Petroleum",
            "points": []
          },
          {
            "title": "Formation",
            "points": []
          },
          {
            "title": "Types",
            "points": []
          },
          {
            "title": "Refining",
            "points": []
          },
          {
            "title": "Global Distribution",
            "points": [
              "Middle East",
              "Saudi Arabia",
              "Iran",
              "Iraq",
              "Kuwait",
              "UAE",
              "Qatar",
              "Russia",
              "USA",
              "Venezuela",
              "Canada",
              "Nigeria"
            ]
          },
          {
            "title": "Indian Distribution",
            "points": [
              "Mumbai High",
              "Assam",
              "Gujarat",
              "Krishna-Godavari Basin",
              "Rajasthan"
            ]
          },
          {
            "title": "Natural Gas",
            "points": []
          },
          {
            "title": "Conventional Gas",
            "points": []
          },
          {
            "title": "Shale Gas",
            "points": []
          },
          {
            "title": "Coal Bed Methane",
            "points": []
          },
          {
            "title": "Tight Gas",
            "points": []
          },
          {
            "title": "World Distribution",
            "points": [
              "Russia",
              "USA",
              "Qatar",
              "Iran",
              "Turkmenistan"
            ]
          },
          {
            "title": "India",
            "points": [
              "KG Basin",
              "Tripura",
              "Assam",
              "Gujarat"
            ]
          },
          {
            "title": "Nuclear Minerals",
            "points": []
          },
          {
            "title": "Uranium",
            "points": []
          },
          {
            "title": "Thorium",
            "points": []
          },
          {
            "title": "Global Distribution",
            "points": [
              "Kazakhstan",
              "Canada",
              "Australia",
              "Namibia",
              "Niger",
              "India",
              "Jharkhand",
              "Andhra Pradesh",
              "Rajasthan",
              "Meghalaya",
              "Kerala (Thorium)",
              "Tamil Nadu (Thorium)"
            ]
          }
        ]
      },
      {
        "title": "Water Resources",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Surface Water",
              "Groundwater",
              "Glaciers",
              "Aquifers",
              "River Basins",
              "World Distribution",
              "Amazon Basin",
              "Congo Basin",
              "Nile Basin",
              "Yangtze Basin",
              "Mississippi Basin",
              "South Asia",
              "Indus Basin",
              "Ganga Basin",
              "Brahmaputra Basin"
            ]
          }
        ]
      },
      {
        "title": "Forest Resources",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Tropical Forests",
              "Temperate Forests",
              "Boreal Forests",
              "Mangroves",
              "Global Distribution",
              "Amazon",
              "Congo",
              "Taiga",
              "South-East Asia",
              "India",
              "Himalayan Forests",
              "Western Ghats",
              "North-East India",
              "Sundarbans"
            ]
          }
        ]
      },
      {
        "title": "Marine Resources",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Fisheries",
              "Offshore Minerals",
              "Deep Sea Mining",
              "Polymetallic Nodules",
              "Blue Economy",
              "Marine Energy"
            ]
          }
        ]
      },
      {
        "title": "Agricultural Resources",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Arable Land",
              "Soil Resources",
              "Irrigation Resources",
              "Agro-Climatic Resources"
            ]
          }
        ]
      },
      {
        "title": "Primary Sector Industries",
        "topics": []
      },
      {
        "title": "Agriculture",
        "topics": [
          {
            "title": "Factors Influencing Agriculture",
            "points": [
              "Climate",
              "Soil",
              "Relief",
              "Irrigation",
              "Technology",
              "Market"
            ]
          },
          {
            "title": "Agricultural Regions of the World",
            "points": [
              "Wheat Region",
              "Rice Region",
              "Cotton Region",
              "Maize Region",
              "Plantation Region"
            ]
          }
        ]
      },
      {
        "title": "Forestry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Lumber Industry",
              "Pulp Industry",
              "Paper Industry"
            ]
          }
        ]
      },
      {
        "title": "Fisheries",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Marine Fisheries",
              "Inland Fisheries",
              "Aquaculture"
            ]
          }
        ]
      },
      {
        "title": "Mining Industry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Location Factors",
              "Mining Regions",
              "Environmental Issues"
            ]
          }
        ]
      },
      {
        "title": "Petrochemical Industry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Refineries",
              "Downstream Industries",
              "Petrochemical Clusters"
            ]
          }
        ]
      },
      {
        "title": "Automobile Industry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "World Hubs",
              "USA",
              "Germany",
              "Japan",
              "South Korea",
              "China",
              "India",
              "Chennai",
              "Pune",
              "Gurugram",
              "Sanand"
            ]
          }
        ]
      },
      {
        "title": "It Industry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Location Factors",
              "Knowledge Economy",
              "Innovation Clusters",
              "India",
              "Bengaluru",
              "Hyderabad",
              "Pune",
              "Chennai",
              "Gurugram",
              "Noida"
            ]
          }
        ]
      },
      {
        "title": "Electronics & Semiconductor Industry",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Chip Manufacturing",
              "Fab Industry",
              "Supply Chains",
              "Semiconductor Mission"
            ]
          }
        ]
      },
      {
        "title": "Sunrise Industries",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Green Hydrogen",
              "EV Manufacturing",
              "Battery Industry",
              "AI Industry",
              "Space Industry",
              "Biotechnology"
            ]
          }
        ]
      },
      {
        "title": "South Asia & Indian Subcontinent Resource Geography",
        "topics": []
      },
      {
        "title": "South Asia Resource Profile",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "India",
              "Pakistan",
              "Bangladesh",
              "Nepal",
              "Bhutan",
              "Sri Lanka",
              "Maldives",
              "Afghanistan",
              "Energy Geography of South Asia",
              "Water Geography of South Asia",
              "Mineral Geography of South Asia",
              "Agriculture Geography of South Asia",
              "Geopolitics of Resources"
            ]
          }
        ]
      },
      {
        "title": "Resource Geopolitics",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "OPEC",
              "OPEC+",
              "Critical Minerals Race",
              "Arctic Resources",
              "South China Sea Resources",
              "Rare Earth Monopoly",
              "Energy Security",
              "Food Security",
              "Water Security"
            ]
          }
        ]
      },
      {
        "title": "Resource Sustainability",
        "topics": [
          {
            "title": "Sustainable Mining",
            "points": []
          },
          {
            "title": "Circular Economy",
            "points": []
          },
          {
            "title": "Resource Efficiency",
            "points": []
          },
          {
            "title": "Green Transition",
            "points": []
          },
          {
            "title": "Renewable Energy Transition",
            "points": []
          },
          {
            "title": "Just Energy Transition",
            "points": []
          }
        ]
      },
      {
        "title": "Important Geophysical Phenomena, Geographical Features, Location Changes in Critical Geographical Features (including Water Bodies & Ice Caps), Flora & Fauna and Their Effects",
        "topics": []
      },
      {
        "title": "Geophysical Phenomena – Fundamentals",
        "topics": [
          {
            "title": "Meaning of Geophysical Phenomena",
            "points": []
          },
          {
            "title": "Endogenic Processes",
            "points": []
          },
          {
            "title": "Exogenic Processes",
            "points": []
          },
          {
            "title": "Sudden Events",
            "points": []
          },
          {
            "title": "Gradual Processes",
            "points": []
          },
          {
            "title": "Classification",
            "points": []
          },
          {
            "title": "Geological Phenomena",
            "points": []
          },
          {
            "title": "Atmospheric Phenomena",
            "points": []
          },
          {
            "title": "Oceanic Phenomena",
            "points": []
          },
          {
            "title": "Cryospheric Phenomena",
            "points": []
          },
          {
            "title": "Biospheric Phenomena",
            "points": []
          }
        ]
      },
      {
        "title": "Earthquakes",
        "topics": [
          {
            "title": "Earthquake Fundamentals",
            "points": []
          },
          {
            "title": "Definition",
            "points": []
          },
          {
            "title": "Causes",
            "points": []
          },
          {
            "title": "Tectonic Causes",
            "points": []
          },
          {
            "title": "Volcanic Causes",
            "points": []
          },
          {
            "title": "Human-Induced Causes",
            "points": []
          },
          {
            "title": "Focus (Hypocentre)",
            "points": []
          },
          {
            "title": "Epicentre",
            "points": []
          },
          {
            "title": "Fault",
            "points": []
          },
          {
            "title": "Fault Plane",
            "points": []
          },
          {
            "title": "Seismic Waves",
            "points": []
          },
          {
            "title": "P Waves",
            "points": []
          },
          {
            "title": "S Waves",
            "points": []
          },
          {
            "title": "Surface Waves",
            "points": []
          },
          {
            "title": "Types of Earthquakes",
            "points": []
          },
          {
            "title": "Tectonic Earthquakes",
            "points": []
          },
          {
            "title": "Volcanic Earthquakes",
            "points": []
          },
          {
            "title": "Collapse Earthquakes",
            "points": []
          },
          {
            "title": "Measurement",
            "points": []
          },
          {
            "title": "Global Distribution",
            "points": []
          },
          {
            "title": "Circum-Pacific Belt",
            "points": []
          },
          {
            "title": "Mid-Oceanic Ridge Belt",
            "points": []
          },
          {
            "title": "Alpine-Himalayan Belt",
            "points": []
          },
          {
            "title": "Indian Earthquake Zones",
            "points": []
          },
          {
            "title": "Zone II",
            "points": []
          },
          {
            "title": "Zone III",
            "points": []
          },
          {
            "title": "Zone IV",
            "points": []
          },
          {
            "title": "Zone V",
            "points": []
          },
          {
            "title": "Ground Shaking",
            "points": []
          },
          {
            "title": "Landslides",
            "points": []
          },
          {
            "title": "Liquefaction",
            "points": []
          },
          {
            "title": "Tsunami Generation",
            "points": []
          },
          {
            "title": "Infrastructure Damage",
            "points": []
          },
          {
            "title": "Human Casualties",
            "points": []
          },
          {
            "title": "Earthquake Management",
            "points": []
          },
          {
            "title": "Prediction",
            "points": []
          },
          {
            "title": "Preparedness",
            "points": []
          },
          {
            "title": "Mitigation",
            "points": []
          },
          {
            "title": "NDMA Guidelines",
            "points": []
          },
          {
            "title": "Building Codes",
            "points": []
          }
        ]
      },
      {
        "title": "Landslides",
        "topics": [
          {
            "title": "Meaning",
            "points": []
          },
          {
            "title": "Causes",
            "points": []
          },
          {
            "title": "Geological Causes",
            "points": []
          },
          {
            "title": "Climatic Causes",
            "points": []
          },
          {
            "title": "Anthropogenic Causes",
            "points": []
          },
          {
            "title": "Types",
            "points": []
          },
          {
            "title": "Rockfall",
            "points": []
          },
          {
            "title": "Debris Flow",
            "points": []
          },
          {
            "title": "Mudflow",
            "points": []
          },
          {
            "title": "Slump",
            "points": []
          },
          {
            "title": "Himalayan Landslides",
            "points": []
          },
          {
            "title": "Western Ghats Landslides",
            "points": []
          },
          {
            "title": "Urban Landslides",
            "points": []
          },
          {
            "title": "Disaster Management",
            "points": []
          }
        ]
      },
      {
        "title": "Tornadoes & Severe Weather Events",
        "topics": [
          {
            "title": "Tornadoes",
            "points": []
          },
          {
            "title": "Waterspouts",
            "points": []
          },
          {
            "title": "Dust Storms",
            "points": []
          },
          {
            "title": "Thunderstorms",
            "points": []
          },
          {
            "title": "Lightning",
            "points": []
          },
          {
            "title": "Cloudburst",
            "points": []
          },
          {
            "title": "Hailstorms",
            "points": []
          },
          {
            "title": "Heat Waves",
            "points": []
          },
          {
            "title": "Cold Waves",
            "points": []
          },
          {
            "title": "Blizzards",
            "points": []
          }
        ]
      },
      {
        "title": "Cryosphere (ice Caps & Glaciers)",
        "topics": []
      },
      {
        "title": "Polar Regions",
        "topics": [
          {
            "title": "Arctic",
            "points": []
          },
          {
            "title": "Geography",
            "points": []
          },
          {
            "title": "Arctic Amplification",
            "points": []
          },
          {
            "title": "Arctic Sea Ice Loss",
            "points": []
          },
          {
            "title": "Antarctica",
            "points": []
          },
          {
            "title": "Antarctic Ice Sheet",
            "points": []
          },
          {
            "title": "Ice Shelves",
            "points": []
          },
          {
            "title": "Antarctic Circumpolar Current",
            "points": []
          }
        ]
      },
      {
        "title": "Glaciers",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Glacier Formation",
              "Glacier Types",
              "Continental Glaciers",
              "Valley Glaciers",
              "Mountain Glaciers",
              "Himalayan Glaciers",
              "Gangotri",
              "Siachen",
              "Zemu",
              "Milam",
              "Glacier Retreat",
              "Causes",
              "Effects",
              "GLOF",
              "Glacial Lake Outburst Flood",
              "Himalayan Vulnerability"
            ]
          }
        ]
      },
      {
        "title": "Indian Ocean Dipole",
        "topics": [
          {
            "title": "Positive IOD",
            "points": []
          },
          {
            "title": "Negative IOD",
            "points": []
          },
          {
            "title": "Impact on Indian Monsoon",
            "points": []
          }
        ]
      },
      {
        "title": "Ocean-atmosphere Interactions",
        "topics": [
          {
            "title": "ENSO",
            "points": []
          },
          {
            "title": "IOD",
            "points": []
          },
          {
            "title": "Madden-Julian Oscillation (MJO)",
            "points": []
          },
          {
            "title": "Pacific Decadal Oscillation (PDO)",
            "points": []
          },
          {
            "title": "Atlantic Multidecadal Oscillation (AMO)",
            "points": []
          }
        ]
      },
      {
        "title": "Tsunami",
        "topics": [
          {
            "title": "Fundamentals",
            "points": []
          },
          {
            "title": "Definition",
            "points": []
          },
          {
            "title": "Characteristics",
            "points": []
          },
          {
            "title": "Wave Mechanics",
            "points": []
          },
          {
            "title": "Causes",
            "points": []
          },
          {
            "title": "Undersea Earthquakes",
            "points": []
          },
          {
            "title": "Volcanic Eruptions",
            "points": []
          },
          {
            "title": "Landslides",
            "points": []
          },
          {
            "title": "Meteorite Impact",
            "points": []
          },
          {
            "title": "Tsunami Propagation",
            "points": []
          },
          {
            "title": "Warning Systems",
            "points": []
          },
          {
            "title": "Indian Tsunami Early Warning Centre",
            "points": []
          },
          {
            "title": "UNESCO Warning Systems",
            "points": []
          },
          {
            "title": "Indian Ocean Tsunami 2004",
            "points": []
          },
          {
            "title": "Effects",
            "points": []
          },
          {
            "title": "Coastal Erosion",
            "points": []
          },
          {
            "title": "Salinization",
            "points": []
          },
          {
            "title": "Habitat Destruction",
            "points": []
          },
          {
            "title": "Human Losses",
            "points": []
          }
        ]
      },
      {
        "title": "Volcanism",
        "topics": [
          {
            "title": "Volcano Fundamentals",
            "points": []
          },
          {
            "title": "Magma",
            "points": []
          },
          {
            "title": "Lava",
            "points": []
          },
          {
            "title": "Vent",
            "points": []
          },
          {
            "title": "Crater",
            "points": []
          },
          {
            "title": "Caldera",
            "points": []
          },
          {
            "title": "Plate Tectonics",
            "points": []
          },
          {
            "title": "Hotspots",
            "points": []
          },
          {
            "title": "Mantle Plumes",
            "points": []
          },
          {
            "title": "Types of Volcanoes",
            "points": []
          },
          {
            "title": "Shield Volcano",
            "points": []
          },
          {
            "title": "Composite Volcano",
            "points": []
          },
          {
            "title": "Cinder Cone Volcano",
            "points": []
          },
          {
            "title": "Lava Dome",
            "points": []
          },
          {
            "title": "Types Based on Activity",
            "points": []
          },
          {
            "title": "Active Volcanoes",
            "points": []
          },
          {
            "title": "Dormant Volcanoes",
            "points": []
          },
          {
            "title": "Extinct Volcanoes",
            "points": []
          },
          {
            "title": "Distribution",
            "points": []
          },
          {
            "title": "Ring of Fire",
            "points": []
          },
          {
            "title": "Mid-Oceanic Ridges",
            "points": []
          },
          {
            "title": "Hotspot Volcanoes",
            "points": []
          },
          {
            "title": "Major Volcanoes",
            "points": []
          },
          {
            "title": "Krakatoa",
            "points": []
          },
          {
            "title": "Vesuvius",
            "points": []
          },
          {
            "title": "Etna",
            "points": []
          },
          {
            "title": "Fuji",
            "points": []
          },
          {
            "title": "Mauna Loa",
            "points": []
          },
          {
            "title": "Kilauea",
            "points": []
          },
          {
            "title": "Indian Context",
            "points": []
          },
          {
            "title": "Barren Island",
            "points": []
          },
          {
            "title": "Narcondam Island",
            "points": []
          },
          {
            "title": "Deccan Traps",
            "points": []
          },
          {
            "title": "Effects",
            "points": []
          },
          {
            "title": "Climate Impact",
            "points": []
          },
          {
            "title": "Volcanic Winter",
            "points": []
          },
          {
            "title": "Soil Fertility",
            "points": []
          },
          {
            "title": "Hazards",
            "points": []
          }
        ]
      },
      {
        "title": "Cyclones",
        "topics": [
          {
            "title": "Tropical Cyclones",
            "points": []
          },
          {
            "title": "Conditions for Formation",
            "points": []
          },
          {
            "title": "Classification",
            "points": []
          },
          {
            "title": "Ocean Basins",
            "points": []
          },
          {
            "title": "Cyclone Naming",
            "points": []
          },
          {
            "title": "Cyclones in India",
            "points": []
          },
          {
            "title": "Effects",
            "points": []
          },
          {
            "title": "Storm Surge",
            "points": []
          },
          {
            "title": "Coastal Flooding",
            "points": []
          },
          {
            "title": "Agricultural Damage",
            "points": []
          },
          {
            "title": "Infrastructure Damage",
            "points": []
          },
          {
            "title": "Mitigation",
            "points": []
          },
          {
            "title": "Early Warning Systems",
            "points": []
          },
          {
            "title": "NDMA Guidelines",
            "points": []
          },
          {
            "title": "Cyclone Shelters",
            "points": []
          }
        ]
      },
      {
        "title": "Climate & Oceanic Phenomena",
        "topics": []
      },
      {
        "title": "El Niño & La Nina",
        "topics": [
          {
            "title": "El Nino",
            "points": []
          },
          {
            "title": "Causes",
            "points": []
          },
          {
            "title": "Characteristics",
            "points": []
          },
          {
            "title": "Impact on India",
            "points": []
          },
          {
            "title": "La Nina",
            "points": []
          },
          {
            "title": "Characteristics",
            "points": []
          },
          {
            "title": "Impact",
            "points": []
          },
          {
            "title": "ENSO",
            "points": []
          },
          {
            "title": "Southern Oscillation",
            "points": []
          },
          {
            "title": "Walker Circulation",
            "points": []
          }
        ]
      },
      {
        "title": "Disaster Geography",
        "topics": []
      },
      {
        "title": "Natural Disasters",
        "topics": [
          {
            "title": "Geological Disasters",
            "points": []
          },
          {
            "title": "Earthquakes",
            "points": []
          },
          {
            "title": "Tsunami",
            "points": []
          },
          {
            "title": "Volcanoes",
            "points": []
          },
          {
            "title": "Landslides",
            "points": []
          },
          {
            "title": "Hydro-Meteorological Disasters",
            "points": []
          },
          {
            "title": "Cyclones",
            "points": []
          },
          {
            "title": "Floods",
            "points": []
          },
          {
            "title": "Droughts",
            "points": []
          },
          {
            "title": "Heat Waves",
            "points": []
          },
          {
            "title": "Cloudbursts",
            "points": []
          }
        ]
      },
      {
        "title": "Disaster Risk Reduction",
        "topics": [
          {
            "title": "Key points",
            "points": [
              "Sendai Framework",
              "Disaster Management Cycle",
              "Prevention",
              "Mitigation",
              "Preparedness",
              "Response",
              "Recovery",
              "NDMA",
              "NDRF",
              "Early Warning Systems"
            ]
          }
        ]
      }
    ]
  }
];
