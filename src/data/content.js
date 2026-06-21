import {
  BookOpen,
  Church,
  Crown,
  Flame,
  Globe2,
  HandHeart,
  HeartPulse,
  Landmark,
  Megaphone,
  MessageCircleHeart,
  Radio,
  Sparkles,
  SunMedium,
  Users,
} from 'lucide-react';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Vision', href: '#vision' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Prayer', href: '#prayer' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

export const pillars = [
  {
    title: 'Prophetic Vision',
    text: 'Discerning divine direction and awakening destinies through the revealed counsel of God.',
    icon: Sparkles,
  },
  {
    title: 'Evangelism to the Nations',
    text: 'Carrying the gospel of Jesus Christ with urgency, clarity and compassion across cultures.',
    icon: Globe2,
  },
  {
    title: 'Power of the Holy Spirit',
    text: 'Ministering in prayer, worship and bold faith for lives to encounter the presence of God.',
    icon: Flame,
  },
  {
    title: 'Teaching & Discipleship',
    text: 'Equipping believers to know the Word, walk in holiness and serve with maturity.',
    icon: BookOpen,
  },
  {
    title: 'Miracles & Testimonies',
    text: 'Celebrating healings, deliverance, restoration and every sign that glorifies Jesus.',
    icon: HeartPulse,
  },
  {
    title: 'Glory to God',
    text: 'Keeping worship, service and impact centered on Christ, the author of every miracle.',
    icon: Crown,
  },
];

export const sermons = [
  {
    title: 'Faith for Miracles',
    meta: 'Teaching Series',
    text: 'A faith-building message on believing God beyond visible limitations.',
    icon: SunMedium,
  },
  {
    title: 'The Power of Prayer',
    meta: 'Prayer School',
    text: 'Learning to pray with persistence, purity and expectation.',
    icon: MessageCircleHeart,
  },
  {
    title: 'Walking in Prophetic Vision',
    meta: 'Prophetic Insight',
    text: 'Recognizing God-given vision and stewarding it with obedience.',
    icon: Radio,
  },
  {
    title: 'Evangelism and the Nations',
    meta: 'Mission Focus',
    text: 'A call to carry the gospel from local communities to global harvest fields.',
    icon: Megaphone,
  },
];

export const testimonies = [
  'Healing',
  'Deliverance',
  'Restoration',
  'Financial Breakthrough',
  'Family Restoration',
];

export const events = [
  {
    title: 'Prophetic Conferences',
    date: 'August 16, 2026',
    place: 'Kinshasa, DRC',
    text: 'A gathering for worship, prophetic teaching and ministry to leaders.',
  },
  {
    title: 'Miracle Nights',
    date: 'September 6, 2026',
    place: 'Lagos, Nigeria',
    text: 'An evening of prayer, healing, deliverance and testimonies.',
  },
  {
    title: 'Evangelism Campaigns',
    date: 'October 12, 2026',
    place: 'Accra, Ghana',
    text: 'Open-air outreach focused on salvation, prayer and discipleship follow-up.',
  },
  {
    title: 'Prayer Marathons',
    date: 'Every First Friday',
    place: 'Online & Local Chapters',
    text: 'Intercession for families, nations, churches and divine transformation.',
  },
];

export const contactItems = [
  { label: 'Email', value: 'contact@manymiraclesministries.org', icon: Church },
  { label: 'WhatsApp', value: '+1 (000) 000-0000', icon: MessageCircleHeart },
  { label: 'Global Office', value: 'International Ministry Network', icon: Landmark },
  { label: 'Partnership', value: 'partners@manymiraclesministries.org', icon: HandHeart },
];

export const impactStats = [
  { value: '12+', label: 'Nations in prayer focus' },
  { value: '24/7', label: 'Intercession vision' },
  { value: '1M+', label: 'Souls harvest mandate' },
  { value: '5', label: 'Ministry pillars' },
];

export const footerLinks = ['Prayer Request', 'Sermons', 'Events', 'Partnership', 'Contact'];
