
import { Service, ClassSchedule, MembershipPlan, Testimonial, Trainer } from './types';

export const SERVICES: Service[] = [
  {
    id: 'pt',
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your goals with certified elite trainers.',
    priceRange: '8,000 - 12,000 HUF / session',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'group',
    title: 'Group Classes',
    description: 'High-energy HIIT, Yoga, Zumba, and Strength training classes.',
    priceRange: '2,500 - 4,000 HUF / class',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'recovery',
    title: 'Rehabilitation',
    description: 'Specialized programs for injury recovery and physical therapy support.',
    priceRange: 'Contact for pricing',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  }
];

export const SCHEDULE: ClassSchedule[] = [
  { time: '07:00', monday: 'HIIT', tuesday: 'Yoga', wednesday: 'CrossFit', thursday: 'Pilates', friday: 'HIIT', saturday: 'Yoga', sunday: '-' },
  { time: '09:00', monday: 'Strength', tuesday: 'Zumba', wednesday: 'Strength', thursday: 'HIIT', friday: 'Zumba', saturday: 'Full Body', sunday: 'Mobility' },
  { time: '17:00', monday: 'Zumba', tuesday: 'HIIT', wednesday: 'Yoga', thursday: 'Strength', friday: 'CrossFit', saturday: '-', sunday: '-' },
  { time: '18:30', monday: 'CrossFit', tuesday: 'Strength', wednesday: 'HIIT', thursday: 'Zumba', friday: 'Mobility', saturday: '-', sunday: '-' },
];

export const MEMBERSHIPS: MembershipPlan[] = [
  {
    name: 'Basic',
    price: '14,900',
    period: '/month',
    features: ['Access to Gym Floor', 'Locker Room Access', '1 Guest Pass / Month', 'Standard Equipment']
  },
  {
    name: 'Premium',
    price: '22,900',
    period: '/month',
    features: ['Unlimited Group Classes', 'Priority Equipment Access', 'Sauna Access', 'Nutrition Guide', '4 Guest Passes / Month'],
    recommended: true
  },
  {
    name: 'VIP',
    price: '39,900',
    period: '/month',
    features: ['2 Personal Training Sessions', 'Full Access to All Facilities', 'Customized Workout Plan', 'Laundry Service', 'Supplement Discount']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'László Kovács',
    role: 'Member since 2022',
    content: 'The community at NEXT Fitness II is unmatched. I lost 15kg in 6 months thanks to their trainers!',
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    name: 'Petra Szabó',
    role: 'Yoga Enthusiast',
    content: 'Best equipment in Kecskemét. The atmosphere is always motivating and clean.',
    avatar: 'https://picsum.photos/id/65/100/100'
  }
];

export const TRAINERS: Trainer[] = [
  {
    name: 'András Nagy',
    specialty: 'Bodybuilding & Nutrition',
    bio: '10+ years experience in competitive bodybuilding.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Zsofia Molnár',
    specialty: 'Yoga & Pilates',
    bio: 'Certified instructor focusing on mindfulness and core strength.',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80&w=400'
  }
];
