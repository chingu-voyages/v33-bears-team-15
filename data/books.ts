export type BooksCategoriesType = {
  category: string;
  link: string;
  data: Array<{ name: string; author: string; src: string; rating: number }>;
};

const booksByCategories: BooksCategoriesType[] = [
  {
    category: 'Business',
    link: '/business',
    data: [
      {
        name: 'Lean Project Management Explained',
        author: 'Can Akdeniz',
        src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/399285183/original/216x216/ade11cc8e3/1629025589?v=1',
        rating: 4,
      },
      {
        name: 'Your Next Five Moves: Master the Art of Business Strategy',
        author: 'Patrick Bet-David',
        src: 'https://imgv2-1-f.scribdassets.com/img/audiobook_square_badge/445801005/original/216x216/2c6db4dc9c/1630690492?v=1',
        rating: 5,
      },
      {
        name: 'Project Management',
        author: 'Matthew Batchelor',
        src: 'https://imgv2-1-f.scribdassets.com/img/word_document/234818776/original/216x287/c4fe3181c4/1631223320?v=1',
        rating: 4,
      },
      {
        name: 'The Achievement Habit: Stop Wishing, Start Doing, and Take Command of Your Life',
        author: 'Bernard Roth',
        src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/290004030/original/216x216/7d14d99feb/1630542153?v=1',
        rating: 4,
      },
      {
        name: 'The Intelligent Investor, Rev. Ed',
        author: 'Benjamin Graham',
        src: 'https://imgv2-2-f.scribdassets.com/img/word_document/168907403/original/216x287/184af85d56/1631563264?v=1',
        rating: 4,
      },
      {
        name: 'Kanban in 30 Days: Modern and efficient organization that delivers results',
        author: 'Tomas Björkholm',
        src: 'https://imgv2-2-f.scribdassets.com/img/word_document/274180393/original/216x287/2557941aa8/1617226196?v=1',
        rating: 4,
      },
      {
        name: "HBR's 10 Must Reads on Managing People, Vol. 2",
        author: 'Harvard Business Review',
        src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/445619872/original/216x216/d3acc95329/1629024807?v=1',
        rating: 5,
      },
    ],
  },
  {
    category: 'Management',
    link: '/management',
    data: [
      {
        name: "How to Lead: Wisdom from the World's Greatest CEOs, Founders, and Game Changers",
        author: 'David M. Rubenstein',
        src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/453286011/original/216x216/60df09bd85/1630426530?v=1',
        rating: 5,
      },
      {
        name: 'The Agile Mind-Set: Making Agile Processes Work',
        author: 'Gil Broza',
        src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/339258272/original/216x216/9f5651138f/1629335142?v=1',
        rating: 4,
      },
      {
        name: 'Agile Coaching: Where to Start?',
        author: 'Dmitri Iarandine',
        src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/421359648/original/216x216/ce4378f819/1629352968?v=1',
        rating: 5,
      },
      {
        name: 'Agile Coaching: Where to Start?',
        author: 'Dmitri Iarandine',
        src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/421359648/original/216x216/ce4378f819/1629352968?v=1',
        rating: 5,
      },
      {
        name: 'Q & As for the PMBOK® Guide Sixth Edition',
        author: 'Project Management Institute',
        src: 'https://imgv2-1-f.scribdassets.com/img/word_document/363127693/original/216x287/c9100ed0d2/1617224906?v=1',
        rating: 5,
      },
      {
        name: "HBR's 10 Must Reads on Managing People, Vol. 2",
        author: 'Harvard Business Review',
        src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/445619872/original/216x216/d3acc95329/1629024807?v=1',
        rating: 5,
      },
      {
        name: 'The 7 Habits of Highly Effective People: 30th Anniversary Edition',
        author: 'Stephen R. Covey',
        src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/459262322/original/216x216/e34e63065e/1630426530?v=1',
        rating: 5,
      },
    ],
  },
  {
    category: 'Leadership',
    link: '/leadership',
    data: [
      {
        name: 'The 7 Habits of Highly Effective People',
        author: 'Stephen R. Covey',
        src: 'https://imgv2-2-f.scribdassets.com/img/word_document/266265967/original/216x287/54c25f30d1/1630770257?v=1',
        rating: 4,
      },
      {
        name: 'The 7 Habits of Highly Effective People',
        author: 'Stephen R. Covey',
        src: 'https://imgv2-2-f.scribdassets.com/img/word_document/266265967/original/216x287/54c25f30d1/1630770257?v=1',
        rating: 4,
      },
      {
        name: 'Your Best Year Ever: A 5-Step Plan for Achieving Your Most Important Goals',
        author: 'Michael Hyatt',
        src: 'https://imgv2-1-f.scribdassets.com/img/audiobook_square_badge/368231494/original/216x216/261fb01081/1627622728?v=1',
        rating: 4,
      },
      {
        name: 'The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers',
        author: 'Ben Horowitz',
        src: 'https://imgv2-1-f.scribdassets.com/img/audiobook_square_badge/237962796/original/216x216/1c76ca685b/1630538016?v=1',
        rating: 5,
      },
      {
        name: 'Invent and Wander: The Collected Writings of Jeff Bezos, With an Introduction by Walter Isaacson',
        author: 'Walter Isaacson',
        src: 'https://imgv2-1-f.scribdassets.com/img/audiobook_square_badge/480308518/original/216x216/e9b8ea867a/1629000157?v=1',
        rating: 5,
      },
      {
        name: 'Agile Project Management for Dummies',
        author: 'Mark C. Layton, MBA, CST, PMP, SCPM',
        src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/338731950/original/216x216/51d6bac0c5/1628956255?v=1',
        rating: 5,
      },
      {
        name: "HBR's 10 Must Reads on Managing People, Vol. 2",
        author: 'Harvard Business Review',
        src: 'https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/445619872/original/216x216/d3acc95329/1629024807?v=1',
        rating: 5,
      },
      {
        name: 'Design Leadership Handbook',
        author: 'Aarron Walter',
        src: 'https://imgv2-1-f.scribdassets.com/img/audiobook_square_badge/419673945/original/216x216/253a228ac2/1628369393?v=1',
        rating: 4,
      },
      {
        name: 'Difficult Conversations (HBR 20-Minute Manager Series)',
        author: 'Harvard Business Review',
        src: 'https://imgv2-2-f.scribdassets.com/img/word_document/353494806/original/216x287/3a6b436448/1617230603?v=1',
        rating: 4,
      },
    ],
  },
];

export default booksByCategories;
