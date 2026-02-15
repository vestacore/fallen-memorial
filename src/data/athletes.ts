export interface Athlete {
  id: string;
  name: string;
  sport: string;
  sportCategory: string;
  age: number | null;
  dateOfBirth?: string;
  dateOfDeath?: string;
  yearOfDeath: number;
  achievements: string[];
  biography: string;
  circumstances: string;
  quote?: string;
  ageGroup: "child" | "youth" | "adult";
  region?: string;
}

export const athletes: Athlete[] = [
  {
    id: "dmytro-sharpar",
    name: "Dmytro Sharpar",
    sport: "Figure Skating",
    sportCategory: "Winter Sports",
    age: 25,
    dateOfDeath: "2023",
    yearOfDeath: 2023,
    achievements: [
      "Youth Olympics competitor",
      "Ukrainian national team member",
      "Multiple national championship medalist",
    ],
    biography:
      "Dmytro Sharpar was a talented Ukrainian figure skater who represented his country at the Youth Olympic Games. Known for his elegant performances on ice, he was a rising star in Ukrainian figure skating with dreams of competing at the senior Olympic level.",
    circumstances: "Killed in action while defending Ukraine in 2023.",
    ageGroup: "adult",
    region: "Kharkiv",
  },
  {
    id: "maksym-halinichev",
    name: "Maksym Halinichev",
    sport: "Boxing",
    sportCategory: "Combat Sports",
    age: 22,
    dateOfDeath: "2023",
    yearOfDeath: 2023,
    achievements: [
      "Youth Olympic silver medalist",
      "European Youth Championship medalist",
      "Ukrainian national champion",
    ],
    biography:
      "Maksym Halinichev was a promising boxer who earned a silver medal at the Youth Olympic Games. His powerful technique and determination made him one of Ukraine's brightest boxing prospects with a future that pointed toward senior international glory.",
    circumstances: "Fell in combat defending Ukraine in 2023.",
    ageGroup: "adult",
    region: "Shostka",
  },
  {
    id: "yevhen-malyshev",
    name: "Yevhen Malyshev",
    sport: "Biathlon",
    sportCategory: "Winter Sports",
    age: 19,
    dateOfDeath: "2022",
    yearOfDeath: 2022,
    achievements: [
      "Youth Olympics participant",
      "Junior national team member",
      "Ukrainian Biathlon Federation athlete",
    ],
    biography:
      "At just 19, Yevhen Malyshev had already represented Ukraine at the Youth Olympic Games in biathlon. Combining skiing endurance with sharpshooting precision, he embodied the spirit of Ukrainian winter sports.",
    circumstances: "Killed in action during the defense of Ukraine in 2022.",
    ageGroup: "youth",
    region: "Kharkiv",
  },
  {
    id: "andrii-kutsenko",
    name: "Andrii Kutsenko",
    sport: "Cycling",
    sportCategory: "Endurance Sports",
    age: 34,
    dateOfDeath: "2024",
    yearOfDeath: 2024,
    achievements: [
      "International cycling competitor",
      "Multiple national road race podiums",
      "Ukrainian Cycling Federation member",
    ],
    biography:
      "Andrii Kutsenko was an experienced cyclist who competed internationally for Ukraine. His dedication to the sport spanned over a decade, inspiring younger riders across the country.",
    circumstances: "Killed while serving in the Armed Forces of Ukraine in 2024.",
    ageGroup: "adult",
    region: "Lviv",
  },
  {
    id: "kateryna-troian",
    name: "Kateryna Troian",
    sport: "Track & Field",
    sportCategory: "Athletics",
    age: 32,
    dateOfDeath: "2025",
    yearOfDeath: 2025,
    achievements: [
      "Ukrainian track & field athlete",
      "Volunteer and soldier, call sign 'Meow'",
      "Inspirational figure in women's athletics",
    ],
    biography:
      "Kateryna Troian was a track and field athlete who transitioned from competing on the track to defending her country on the front lines. Known by her call sign 'Meow,' she became a symbol of courage among Ukrainian women athletes who took up arms.",
    circumstances: "Killed in action in 2023 while serving with the Armed Forces of Ukraine.",
    quote: "We will win. There is no other option.",
    ageGroup: "adult",
    region: "Zaporizhzhia",
  },
  {
    id: "fedir-yepifanov",
    name: "Fedir Yepifanov",
    sport: "Fencing",
    sportCategory: "Combat Sports",
    age: 19,
    dateOfDeath: "2023",
    yearOfDeath: 2023,
    achievements: [
      "World Championship top 16",
      "European Junior Championship medalist",
      "Ukrainian national fencing team member",
    ],
    biography:
      "Fedir Yepifanov was a fencing prodigy who reached the top 16 at the World Championship at a remarkably young age. His speed and tactical brilliance on the piste made him one of Ukraine's most promising fencers.",
    circumstances: "Killed in action in 2023 at the age of 19.",
    ageGroup: "youth",
    region: "Kyiv",
  },
  {
    id: "pavlo-ishchenko",
    name: "Pavlo Ishchenko",
    sport: "Strongman",
    sportCategory: "Strength Sports",
    age: 40,
    dateOfDeath: "2025",
    yearOfDeath: 2025,
    achievements: [
      "World Strongman champion",
      "European Strongman champion",
      "Multiple Ukrainian national titles",
    ],
    biography:
      "Pavlo Ishchenko was a dominant force in international strongman competitions, earning world and European championship titles. His incredible strength was matched only by his devotion to Ukraine.",
    circumstances: "Killed while defending Ukraine in 2025.",
    ageGroup: "adult",
    region: "Kyiv",
  },
  {
    id: "oleksii-lohinov",
    name: "Oleksii Lohinov",
    sport: "Ice Hockey",
    sportCategory: "Winter Sports",
    age: 23,
    dateOfDeath: "2023",
    yearOfDeath: 2023,
    achievements: [
      "Professional hockey goalie",
      "Ukrainian Hockey League player",
      "National team prospect",
    ],
    biography:
      "Oleksii Lohinov was a talented ice hockey goaltender who played professionally in Ukraine. Known for his lightning reflexes and calm demeanor under pressure, he was considered a rising star in Ukrainian hockey.",
    circumstances: "Killed in the early months of the full-scale invasion in 2022.",
    ageGroup: "adult",
    region: "Kyiv",
  },
  {
    id: "karyna-bakhur",
    name: "Karyna Bakhur",
    sport: "Kickboxing",
    sportCategory: "Combat Sports",
    age: 17,
    dateOfDeath: "2025",
    yearOfDeath: 2025,
    achievements: [
      "Champion of Ukraine",
      "European Kickboxing champion",
      "Multiple international tournament winner",
    ],
    biography:
      "At just 17, Karyna Bakhur had already claimed Ukrainian and European kickboxing titles. Her fierce determination and athletic talent promised a brilliant future in combat sports that was tragically cut short.",
    circumstances: "Killed by Russian shelling in 2025.",
    ageGroup: "youth",
    region: "Mariupol",
  },
  {
    id: "volodymyr-androshchuk",
    name: "Volodymyr Androshchuk",
    sport: "Decathlon",
    sportCategory: "Athletics",
    age: 22,
    dateOfDeath: "2023",
    yearOfDeath: 2023,
    achievements: [
      "European Championship competitor",
      "Ukrainian Athletics Federation athlete",
      "National decathlon record contender",
    ],
    biography:
      "Volodymyr Androshchuk was a versatile decathlete who represented Ukraine at the European Championships. His ability across ten disciplines showcased extraordinary athletic talent and dedication.",
    circumstances: "Fell in combat in 2023 while serving in the Armed Forces of Ukraine.",
    ageGroup: "adult",
    region: "Khmelnytskyi",
  },
  {
    id: "oleksii-khabarov",
    name: "Oleksii Khabarov",
    sport: "Shooting",
    sportCategory: "Precision Sports",
    age: 31,
    dateOfDeath: "2025",
    yearOfDeath: 2025,
    achievements: [
      "National shooting record holder",
      "Ukrainian Shooting Federation elite athlete",
      "International competition medalist",
    ],
    biography:
      "Oleksii Khabarov was one of Ukraine's finest marksmen, holding national records in competitive shooting. His precision and focus made him a standout in international competitions.",
    circumstances: "Killed in action in 2025.",
    ageGroup: "adult",
    region: "Poltava",
  },
  {
    id: "daria-kurdel",
    name: "Daria Kurdel",
    sport: "Sports Dancing",
    sportCategory: "Dance Sports",
    age: 20,
    dateOfDeath: "2022",
    yearOfDeath: 2022,
    achievements: [
      "Ukrainian Sports Dancing competitor",
      "Regional championship medalist",
      "Dance academy graduate",
    ],
    biography:
      "Daria Kurdel was a graceful sports dancer whose artistry and athleticism captivated audiences. She had dedicated her life to dance from a young age and was building a promising competitive career.",
    circumstances: "Killed by Russian shelling in 2022.",
    ageGroup: "youth",
    region: "Kharkiv",
  },
  {
    id: "alina-peregudova",
    name: "Alina Peregudova",
    sport: "Weightlifting",
    sportCategory: "Strength Sports",
    age: 14,
    dateOfDeath: "2022",
    yearOfDeath: 2022,
    achievements: [
      "Junior weightlifting prospect",
      "Regional youth champion",
      "Sports school student",
    ],
    biography:
      "At just 14 years old, Alina Peregudova was already showing remarkable talent in weightlifting. Training at her local sports school in Mariupol, she dreamed of one day representing Ukraine at the Olympic Games.",
    circumstances: "Killed during the siege of Mariupol in 2022.",
    ageGroup: "child",
    region: "Mariupol",
  },
  {
    id: "kateryna-diachenko",
    name: "Kateryna Diachenko",
    sport: "Gymnastics",
    sportCategory: "Gymnastics",
    age: 11,
    dateOfDeath: "2022",
    yearOfDeath: 2022,
    achievements: [
      "Youth gymnastics competitor",
      "Sports school standout",
      "Regional championship participant",
    ],
    biography:
      "Kateryna Diachenko was an 11-year-old gymnast with extraordinary flexibility and grace. A dedicated student at her gymnastics school, she was already competing in regional championships and dreaming of Olympic glory.",
    circumstances: "Killed by an aerial bomb strike in 2022.",
    ageGroup: "child",
    region: "Chernihiv",
  },
  {
    id: "viktoriia-ivashko",
    name: "Viktoriia Ivashko",
    sport: "Judo",
    sportCategory: "Combat Sports",
    age: 9,
    dateOfDeath: "2023",
    yearOfDeath: 2023,
    achievements: [
      "Youth judo student",
      "Sports school participant",
      "Future champion in the making",
    ],
    biography:
      "At only 9 years old, Viktoriia Ivashko was one of the youngest victims of the war's toll on Ukrainian sports. She had just begun her journey in judo, showing natural talent and enthusiasm that her coaches described as extraordinary.",
    circumstances: "Killed during shelling of Kyiv in 2023.",
    ageGroup: "child",
    region: "Kyiv",
  },
  {
    id: "mariia-lebid",
    name: "Maria Lebid",
    sport: "Sports Dancing",
    sportCategory: "Dance Sports",
    age: 15,
    dateOfDeath: "2023",
    yearOfDeath: 2023,
    achievements: [
      "Youth sports dancing competitor",
      "Regional championship medalist",
      "Dance ensemble performer",
    ],
    biography:
      "Mariia Lebid was a talented 15-year-old sports dancer from Dnipro who had been dancing competitively since the age of 6. Her grace and dedication to her art made her a standout performer at regional competitions.",
    circumstances: "Killed by a missile strike on Dnipro in 2023.",
    ageGroup: "child",
    region: "Dnipro",
  },
  {
    id: "roman-polishchuk",
    name: "Roman Polishchuk",
    sport: "High Jump",
    sportCategory: "Athletics",
    age: 28,
    dateOfDeath: "2023",
    yearOfDeath: 2023,
    achievements: [
      "Ukrainian high jump competitor",
      "National championship participant",
      "Athletics club standout",
    ],
    biography:
      "Roman Polishchuk was a high jumper who dedicated years to perfecting his craft in Ukrainian athletics. His powerful leaps and competitive spirit earned him respect across the national athletics community.",
    circumstances: "Killed in action while defending Ukraine in 2023.",
    ageGroup: "adult",
    region: "Zhytomyr",
  },
  {
    id: "andrii-yaremenko",
    name: "Andrii Yaremenko",
    sport: "Greco-Roman Wrestling",
    sportCategory: "Combat Sports",
    age: 25,
    dateOfDeath: "2025",
    yearOfDeath: 2025,
    achievements: [
      "National Greco-Roman wrestling competitor",
      "Ukrainian championship medalist",
      "International tournament participant",
    ],
    biography:
      "Andrii Yaremenko was a skilled Greco-Roman wrestler who combined raw power with technical finesse. A regular on the Ukrainian wrestling circuit, he was working toward qualifying for major international championships.",
    circumstances: "Killed in combat in 2025 at the age of 25.",
    ageGroup: "adult",
    region: "Odesa",
  },
  {
    id: "mykyta-kozubenko",
    name: "Mykyta Kozubenko",
    sport: "Diving (Coach)",
    sportCategory: "Aquatic Sports",
    age: 31,
    dateOfDeath: "2025",
    yearOfDeath: 2025,
    achievements: [
      "Professional diving coach",
      "Former competitive diver",
      "Trained multiple national-level athletes",
    ],
    biography:
      "Mykyta Kozubenko transitioned from competitive diving to coaching, where he discovered his true calling — nurturing the next generation of Ukrainian divers. His students remember him as a demanding but deeply caring mentor.",
    circumstances: "Killed while serving in the Armed Forces of Ukraine in 2025.",
    quote: "Every dive is a leap of faith. Every training session builds wings.",
    ageGroup: "adult",
    region: "Mykolaiv",
  },
];

export const sportCategories = [...new Set(athletes.map((a) => a.sportCategory))].sort();
export const sports = [...new Set(athletes.map((a) => a.sport))].sort();
export const years = [...new Set(athletes.map((a) => a.yearOfDeath))].sort();

export const statistics = {
  athletesKilled: 591,
  coachesKilled: 123,
  facilitiesDestroyed: 725,
  athletesInCaptivity: 22,
  athletesMissing: 11,
  asOfDate: "March 2025",
};

export function getAthleteById(id: string): Athlete | undefined {
  return athletes.find((a) => a.id === id);
}

export function getAdjacentAthletes(id: string): { prev: Athlete | null; next: Athlete | null } {
  const index = athletes.findIndex((a) => a.id === id);
  return {
    prev: index > 0 ? athletes[index - 1] : null,
    next: index < athletes.length - 1 ? athletes[index + 1] : null,
  };
}
