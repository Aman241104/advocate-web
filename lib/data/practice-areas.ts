import { PracticeArea } from "@/types/practice";

export const practiceAreas: PracticeArea[] = [
  {
    slug: "matrimonial",
    title: "Matrimonial & Family Disputes",
    category: "Personal Law",
    iconName: "Heart",
    shortDescription: "Compassionate legal guidance for divorce, child custody, and alimony matters in Ahmedabad.",
    longDescription: "Navigating family disputes requires more than just legal knowledge; it requires empathy and a strategic approach that prioritizes long-term peace. With 29+ years of experience, Divya N Modi provides a sanctuary of professional advocacy for individuals facing divorce, domestic disputes, and custody battles. We specialize in both mutual and contested divorce, ensuring your rights and your children's future are protected.",
    benefits: [
      "29+ Years of experience in Family Court matters.",
      "Absolute confidentiality and ethical handling of sensitive information.",
      "Expertise in both Mutual Consent and Contested Divorces.",
      "Comprehensive support for maintenance and child custody claims."
    ],
    process: [
      { step: "01", title: "Initial Consultation", description: "A private discussion to understand the specifics of your family matter and identify the best legal course of action." },
      { step: "02", title: "Legal Strategy", description: "Formulating a robust strategy, whether it involves mediation, counseling, or direct litigation." },
      { step: "03", title: "Drafting & Filing", description: "Preparing precise legal petitions and filing them in the appropriate Family Court." },
      { step: "04", title: "Resolution", description: "Representation in court or through out-of-court settlements to reach a favorable verdict." }
    ],
    faqs: [
      { question: "How long does a mutual divorce take in Ahmedabad?", answer: "A mutual divorce usually takes 6 to 18 months, depending on the mandatory cooling-off period and court schedules." },
      { question: "Is counseling mandatory for matrimonial disputes?", answer: "Yes, family courts in India often prioritize mediation and counseling to explore the possibility of reconciliation before proceeding with litigation." }
    ],
    seoTitle: "Best Divorce Lawyer in Ahmedabad | Matrimonial Dispute Advocate",
    seoDescription: "Seeking a divorce lawyer in Ahmedabad? Divya N Modi provides expert legal help for matrimonial disputes, child custody, and alimony with 29+ years experience."
  },
  {
    slug: "property",
    title: "Property Law & Land Disputes",
    category: "Civil Law",
    iconName: "Home",
    shortDescription: "Expert legal opinion on title deeds, property partition, and handling complex land disputes.",
    longDescription: "Property transactions are some of the most significant financial decisions an individual or business makes. Our office provides detailed legal opinions on title deeds to prevent future litigation. We handle complex land disputes, property partition among legal heirs, and cases related to RERA and land revenue laws in Gujarat.",
    benefits: [
      "Thorough investigation of property chains for title clarity.",
      "Expertise in local land revenue and agricultural land laws (NA/NOC).",
      "Strategic litigation for unauthorized encroachment and property fraud.",
      "Legally sound drafting of Sale Deeds, Lease Agreements, and Gift Deeds."
    ],
    process: [
      { step: "01", title: "Document Review", description: "Analyzing all historical title documents, mutation records, and search reports." },
      { step: "02", title: "Title Verification", description: "Verifying the legal status and ownership authenticity through official records." },
      { step: "03", title: "Legal Opinion", description: "Providing a formal written opinion on the marketability and clarity of the title." },
      { step: "04", title: "Litigation/Drafting", description: "Filing property suits or drafting final deeds for secure transaction." }
    ],
    faqs: [
      { question: "What is a Title Search Report?", answer: "A Title Search Report is a document that traces the history of ownership and any existing encumbrances on a property over the last 30 years." },
      { question: "Can I challenge a property partition deed?", answer: "Yes, a partition deed can be challenged in court if it was executed through fraud, coercion, or if any legal heir was excluded." }
    ],
    seoTitle: "Property Lawyer in Ahmedabad | Land Dispute Advocate in Gujarat",
    seoDescription: "Protect your real estate with the best property lawyer in Ahmedabad. Divya N Modi offers expert advice on land disputes, title deeds, and property litigation."
  },
  {
    slug: "corporate",
    title: "Corporate Agreements & MNC Counsel",
    category: "Corporate Law",
    iconName: "Briefcase",
    shortDescription: "Drafting and vetting corporate agreements for MNCs and local businesses with precision.",
    longDescription: "In the corporate world, a well-drafted agreement is the first line of defense against disputes. We provide comprehensive legal counsel to over 50+ Multi-national Companies (MNCs) and local startups. Our services range from drafting complex Master Service Agreements (MSA) to ensuring compliance with Indian corporate and labor laws.",
    benefits: [
      "Trusted by over 50 Multi-national Companies for legal vetting.",
      "Specialized in drafting MSAs, NDAs, and Vendor Agreements.",
      "Expertise in employment law compliance for HR departments.",
      "Strategic advice on business entity formation and regulatory filing."
    ],
    process: [
      { step: "01", title: "Business Audit", description: "Understanding your specific business model and identifying potential legal risks." },
      { step: "02", title: "Drafting/Vetting", description: "Creating custom agreements or reviewing existing ones for legal loopholes." },
      { step: "03", title: "Negotiation Support", description: "Representing your interests during commercial negotiations to secure favorable terms." },
      { step: "04", title: "Compliance Check", description: "Ensuring all documents comply with current Indian corporate and tax laws." }
    ],
    faqs: [
      { question: "Why should my business hire an outside legal counsel?", answer: "External counsel provides an unbiased, expert perspective on risk management and reduces the overhead of a full-time in-house legal team." },
      { question: "Are digital agreements legally binding in India?", answer: "Yes, under the Information Technology Act, 2000, e-agreements and digital signatures are legally recognized and binding." }
    ],
    seoTitle: "Corporate Lawyer in Ahmedabad | Legal Counsel for MNCs & Startups",
    seoDescription: "Leading corporate lawyer in Ahmedabad. Divya N Modi specializes in MNC agreements, vendor contracts, and startup legal compliance."
  }
];
