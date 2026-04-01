export interface LegalProcess {
  step: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PracticeArea {
  slug: string;
  title: string;
  category: string;
  iconName: string; // Used to map to Lucide icons
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  process: LegalProcess[];
  faqs: FAQ[];
  seoTitle: string;
  seoDescription: string;
}
