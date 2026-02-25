export interface Article {
  slug: string;
  image: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: 'childhood-dreams',
    image: '/news/IMG_6484.JPG',
    title: 'Do you remember your childhood dreams?',
    date: 'March 2024',
    excerpt:
      'When we were children, the world felt limitless. We dreamed of becoming astronauts, artists, or adventurers. But somewhere along the way, those dreams faded.',
    body: [
      'When we were children, the world felt limitless. We dreamed of becoming astronauts, artists, or adventurers. Every corner of the playground held the promise of a new world, and every sunset was a painting we could step into.',
      'But somewhere along the way, those dreams faded into the background of daily life. We traded telescopes for spreadsheets, crayons for keyboards. The wild landscapes of our imagination were paved over by responsibilities and routines.',
      'I started asking people: "Do you remember your childhood dreams?" The answers were always surprising. A banker who once wanted to be a deep-sea diver. A teacher who dreamed of building robots. A chef who imagined herself as an astronaut.',
      'What struck me most wasn\'t the dreams themselves, but the way people\'s eyes lit up when they remembered. For a brief moment, they were children again — full of wonder, free from doubt.',
      'This project is about reconnecting with that part of ourselves. Not to abandon our adult lives, but to remember that the spark of curiosity and wonder never truly goes away. It just waits, patiently, for us to rediscover it.',
    ],
  },
  {
    slug: 'aunts-first-love',
    image: '/news/IMG_8628.JPG',
    title: "My Aunt's First Love in 15 Years",
    date: 'August 2023',
    excerpt:
      'In the summer of 2023, I got a call from my aunt. "Please don\'t tell your mother," she whispered.',
    body: [
      'In the summer of 2023, I got a call from my aunt. "Please don\'t tell your mother," she whispered. Her voice carried a mix of excitement and vulnerability that I had never heard before.',
      'My aunt had been single for fifteen years. After her divorce, she threw herself into work and raising her two children alone. Love, she told me once, was something she had "graduated from."',
      'But that summer, she met someone at a pottery class she had joined on a whim. He was quiet, kind, and made her laugh in a way she had forgotten was possible.',
      '"I feel like a teenager again," she confessed, half-embarrassed. "Is that ridiculous at my age?"',
      'I told her it was the most beautiful thing I had heard in a long time.',
      'Watching my aunt fall in love again taught me something profound: the heart doesn\'t have an expiration date. Love doesn\'t care about your age, your past, or your carefully constructed walls. It arrives when it arrives, often in the most unexpected places — like a pottery class on a Tuesday afternoon.',
      'She asked me not to tell my mother because she was afraid of being judged. But I think what she was really afraid of was hope — the terrifying, exhilarating possibility that life still had surprises in store.',
    ],
  },
  {
    slug: 'salsa-in-mexico',
    image: '/news/IMG_6688.jpg',
    title: 'Living Simply: Making Salsa from Scratch in Mexico',
    date: 'January 2024',
    excerpt:
      'In a small kitchen in Oaxaca, I learned that the best things in life are made with patience and fresh ingredients.',
    body: [
      'In a small kitchen in Oaxaca, I learned that the best things in life are made with patience and fresh ingredients. My host, Doña María, was seventy-three years old and had been making salsa the same way since she was a girl.',
      'She didn\'t use a blender. She didn\'t use a recipe. She used a molcajete — a volcanic stone mortar — and her hands, which moved with the confidence of someone who has done something ten thousand times.',
      '"The secret," she told me, grinding roasted tomatoes into the stone, "is that there is no secret. You just pay attention."',
      'I spent three days in her kitchen. We roasted chiles over an open flame, charred tomatoes until their skins blistered, and crushed garlic cloves with sea salt. The house smelled like smoke and cilantro and something ancient.',
      'In those three days, I didn\'t check my phone once. I didn\'t think about deadlines or social media or the noise of modern life. I was completely present, completely absorbed in the simple act of making something by hand.',
      'Doña María taught me more than how to make salsa. She taught me that simplicity isn\'t about having less — it\'s about being more present with what you have. The richest moments of our lives are often the quietest ones.',
    ],
  },
];
