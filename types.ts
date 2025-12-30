
export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  image: string;
}

export interface ClassSchedule {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface MembershipPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Trainer {
  name: string;
  specialty: string;
  bio: string;
  image: string;
}
