// Farmer segments from Solution Presentation, Slide 4 and Research Dossier Slide 3
// Segment shares are ASSUMPTIONS in the solution, not validated population estimates

export interface FarmerSegment {
  id: string;
  name: string;
  share: number;
  shareNote: string;
  landholding: string;
  crops: string[];
  profile: string;
  riskTolerance: string;
  targetSolutions: string[];
  channels: string[];
  marketingStrategy: string;
  color: string;
  icon: string;
}

export const farmerSegments: FarmerSegment[] = [
  {
    id: 'progressive',
    name: 'Progressive Innovators (Early Adopters)',
    share: 20,
    shareNote: 'Assumed share — solution assumption, not independently validated',
    landholding: '>5 acres',
    crops: ['Chilli', 'Basmati', 'Grapes', 'Spices', 'Export Horticulture'],
    profile: 'Higher landholding, cash crops, early technology adopters, higher risk tolerance. Interested in premium biologicals and export-protocol compliance.',
    riskTolerance: 'High',
    targetSolutions: [
      'Indogulf BioEdge (Biologicals)',
      'Zero-Residue Export Protocols',
      'Patented Spiromesifen (Mites/Whitefly)',
    ],
    channels: [
      'Direct VIP WhatsApp Advisory',
      'Export Mandi MRL Certifications',
      'Free Soil-Health Analysis',
      'Demonstration Plot Invitations',
    ],
    marketingStrategy: 'Prioritize early product demonstrations and digital communication. Offer soil health analysis, export MRL support, and VIP agronomist access as differentiated value.',
    color: '#123B2A',
    icon: '🌱',
  },
  {
    id: 'yield-maximizers',
    name: 'Core Yield Maximizers',
    share: 60,
    shareNote: 'Assumed share — solution assumption, not independently validated',
    landholding: '2–5 acres',
    crops: ['Paddy', 'Wheat', 'Cotton', 'Cereals', 'Staple Crops'],
    profile: 'Focus on yield, efficiency, and practical crop-stage guidance. Sensitive to labour costs. Seek proven, reliable solutions for common crop-management problems.',
    riskTolerance: 'Medium',
    targetSolutions: [
      'Patented Pyrazosulfuron Ethyl (Rice Herbicide)',
      'Specialty Plant Nutrition Bundles',
      'Labour-Saving Selective Weedicides',
    ],
    channels: [
      'Village Split-Demonstrations',
      'Field Day Peer Testimonials',
      'QR Packaging Video Guides',
      'Seasonal WhatsApp Campaigns',
      'Dealer Programmes',
    ],
    marketingStrategy: 'Prioritize seasonal campaigns and dealer programmes. Run visible 0.5-acre split-plot demonstrations comparing Indogulf vs conventional products. Use peer testimonials and local success stories.',
    color: '#237A48',
    icon: '🌾',
  },
  {
    id: 'smallholders',
    name: 'Risk-Averse Smallholders',
    share: 20,
    shareNote: 'Assumed share — solution assumption, not independently validated',
    landholding: '<2 acres',
    crops: ['Mixed subsistence crops', 'Local varieties'],
    profile: 'Limited working capital, extreme fear of crop failure. Rely heavily on dealer credit and trusted advisor recommendations. Conservative in adopting unfamiliar products.',
    riskTolerance: 'Low',
    targetSolutions: [
      'Affordable Formulation Sachets',
      'Broad-Spectrum Protective Sprays',
      'Emergency Pest Knockdown Products',
    ],
    channels: [
      'Micro-Dose Trial Packs',
      'Local Krishi Mitra Guarantee',
      'Dealer Credit Programmes',
      'Trusted Peer Referrals',
    ],
    marketingStrategy: 'Emphasize trusted advice, practical education, and appropriate dealer support. Reduce first-purchase risk through micro-dose trial packs and Krishi Mitra endorsements.',
    color: '#79543A',
    icon: '🤝',
  },
];
