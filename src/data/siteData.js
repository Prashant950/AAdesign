import { Store, Building2, HardHat, Palette, Hammer, Zap, Factory } from 'lucide-react';

export const company = {
  name: 'AA Design & Construction Pvt. Ltd.',
  shortName: 'AA Design & Construction',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'info@aadesignconstruction.in',
  address: 'B-204, Sector 62, Noida - 201301, Delhi NCR, India',
  hours: 'Mon – Sat, 9:30 AM – 6:30 PM',
  socials: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
];

export const heroSlides = [
  {
    img: '/images/hero-retail.jpg',
    badge: 'Pan-India Retail Fit-Out Specialists',
    title: 'Retail Spaces Crafted to Sell.',
    text: 'Flagship EBOs, shop-in-shops, mall kiosks, and luxury Indian showrooms built for high footfall and lasting brand recall.',
  },
  {
    img: '/images/hero-office.jpg',
    badge: 'Grade-A Corporate Workspaces',
    title: 'Offices People Love Working In.',
    text: 'Ergonomic corporate interiors and commercial fit-outs across Delhi NCR, Mumbai, and Bengaluru—delivered on schedule.',
  },
  {
    img: '/images/hero-construction.jpg',
    badge: 'Single-Window Turnkey Delivery',
    title: 'One Team. Design to Handover.',
    text: 'Civil, MEP, architectural woodworking, and site execution under one accountable roof with transparent costing.',
  },
  {
    img: '/images/service-workshop.jpg',
    badge: 'In-House Millwork & Fixtures',
    title: 'Craftsmanship You Can See.',
    text: 'Precision-engineered retail displays, brass vitrines, and modular fixtures fabricated in our own Noida workshop.',
  },
];

export const serviceCategories = [
  'All',
  'Retail Fit-Outs',
  'Corporate & Commercial',
  'Turnkey & MEP',
  'Manufacturing & VM',
];

export const services = [
  {
    slug: 'retail-store-fit-outs',
    category: 'Retail Fit-Outs',
    icon: Store,
    title: 'Retail Store Fit-Outs',
    sub: 'EBO, SIS, Kiosks & Showrooms',
    img: '/images/hero-retail.jpg',
    duration: '25 – 45 Days',
    warranty: '24 Months Workmanship',
    idealFor: 'Fashion EBOs, Jewellery Showrooms, Electronics & Mall Kiosks',
    desc: 'Brand-compliant store roll-outs for exclusive brand outlets, shop-in-shops, kiosks, and flagship showrooms across India.',
    overview:
      'We partner with leading Indian and international retail brands to transform bare-shell mall units and high-street storefronts into opening-day ready showrooms. From mall guideline approvals and facade glazing to precision lighting and custom merchandising bays, every store launches on time.',
    deliverables: [
      'Site survey, laser measurements & mall fit-out NOC coordination',
      'Civil flooring, Italian marble/tile laying & false ceiling execution',
      'Storefront structural glazing, signage & shutter automation',
      'Track & accent LED lighting calibrated for merchandise appeal',
      'Complete custom fixture installation & snag-free store handover',
    ],
    process: [
      'Brand Guideline & BOQ Alignment',
      'Parallel Factory Fixture Fabrication',
      'Night-Shift / Mall-Compliant Site Execution',
      'Pre-Launch Audit & Handover',
    ],
    materials: [
      'BWP Grade Marine Plywood & HDHMR',
      'Brushed PVD Brass & Stainless Steel Trim',
      'Italian / Indian Vitrified Marble Flooring',
      'High-CRI 3000K/4000K Retail Track Lighting',
    ],
    sectors: ['Apparel EBOs', 'Jewellery Showrooms', 'Mall Kiosks', 'Footwear & Lifestyle', 'Luxury Flagships'],
    faqs: [
      { q: 'Can you execute night-shift fit-outs inside operational malls?', a: 'Yes, our site teams regularly work night shifts inside DLF, Phoenix, Select Citywalk, Orion, and Nexus malls following all mall safety & noise rules.' },
      { q: 'Do you handle mall fit-out approvals and MEP NOCs?', a: 'Yes, we prepare shop drawings, SLD schematics, and coordinate directly with mall engineering desks until handover.' },
      { q: 'What is the typical turnaround time for a 1,500 sq ft store?', a: 'Between 25 and 35 days depending on civil scope, because our fixtures are fabricated in parallel at our Noida workshop.' },
    ],
  },
  {
    slug: 'corporate-office-interiors',
    category: 'Corporate & Commercial',
    icon: Building2,
    title: 'Corporate Office Interiors',
    sub: 'Commercial & Workplace Fit-Outs',
    img: '/images/hero-office.jpg',
    duration: '45 – 75 Days',
    warranty: '24 Months Workmanship',
    idealFor: 'IT Campuses, Corporate HQs, Co-Working Hubs & Clinics',
    desc: 'Workspaces planned for productivity, acoustic comfort, and brand culture—from open collaboration floors to executive suites.',
    overview:
      'Modern Indian enterprises need offices that reflect brand stature while keeping teams energized. AA Design & Construction Pvt. Ltd. executes acoustic boardrooms, workstation bays, breakout lounges, and executive cabins with seamless data, AV, and HVAC integration.',
    deliverables: [
      'Space planning, ergonomic zoning & acoustic partition walls',
      'Double-glazed demountable glass cabins & conference suites',
      'Modular workstations, reception desks & executive millwork',
      'Structured LAN/IT networking, access control & AV integration',
      'Biophilic indoor planters, acoustic baffles & wellness lighting',
    ],
    process: [
      'Workplace Audit & 3D Concept',
      'Detailed MEP & Acoustic Engineering',
      'Phased Site Build & Millwork Fitment',
      'Testing, Commissioning & Move-In',
    ],
    materials: [
      '12mm Toughened Acoustic Glass Partitions',
      'Walnut Veneer & Matte PU Laminate Finishes',
      'Modular Carpet Tiles & Raised Access Flooring',
      'PET Felt Acoustic Baffles & Glare-Free LEDs',
    ],
    sectors: ['IT & SaaS Campuses', 'Corporate HQs', 'Co-Working Spaces', 'Financial Services', 'Diagnostic Clinics'],
    faqs: [
      { q: 'Do you provide both design coordination and build execution?', a: 'Yes, we execute from bare-shell or warm-shell handover right through furniture, AV, IT cabling, and move-in.' },
      { q: 'How do you control sound transmission in boardrooms?', a: 'We use double-glazed acoustic glass systems with rockwool-insulated drywall partitions and perimeter acoustic seals.' },
      { q: 'Can you renovate an active office in phases?', a: 'Yes, we plan weekend and zoned night phases so your teams can keep operating with minimal disruption.' },
    ],
  },
  {
    slug: 'turnkey-interior-construction',
    category: 'Turnkey & MEP',
    icon: HardHat,
    title: 'Turnkey Interior & Construction',
    sub: 'End-to-End Project Delivery',
    img: '/images/hero-construction.jpg',
    duration: '60 – 120 Days',
    warranty: '36 Months Structural & Fit-Out',
    idealFor: 'Multi-Storey Showrooms, Commercial Buildings & Flagship Centres',
    desc: 'Design coordination, statutory approvals, civil structure, MEP services, interiors, and final handover managed by one dedicated team.',
    overview:
      'Eliminate vendor finger-pointing and cost overruns. Our turnkey model brings architects, structural engineers, MEP specialists, and master craftsmen under a single fixed-milestone contract with weekly photographic progress reports.',
    deliverables: [
      'Single-point project management & locked BOQ transparency',
      'RCC civil alterations, structural steel & mezzanine fabrication',
      'Complete interior architecture, facade & landscaping coordination',
      'Integrated electrical, HVAC, plumbing & fire-safety execution',
      'As-built drawings, compliance certificates & post-handover AMC',
    ],
    process: [
      'Feasibility, Soil/Structure & Budget Freeze',
      'Design & Statutory Approvals',
      'Milestone-Tracked Civil & Interior Build',
      'Zero-Snag Commissioning',
    ],
    materials: [
      'IS-Standard Structural Steel & Fe-550D TMT',
      'Weatherproof ACP, HPL & Structural Glazing',
      'Crystalline Waterproofing & Epoxy Grouts',
      'Commercial-Grade Sanitaryware & FRLS Wiring',
    ],
    sectors: ['High-Street Showrooms', 'Commercial Complexes', 'Experience Centres', 'Hospitality Venues', 'Auto Dealerships'],
    faqs: [
      { q: 'Is the turnkey project cost locked after BOQ sign-off?', a: 'Yes, once drawings and itemized BOQs are frozen, prices remain fixed unless you explicitly request scope additions.' },
      { q: 'How frequently do clients receive site progress updates?', a: 'Every week with dated site photographs, milestone checklists, and material inspection notes.' },
      { q: 'Do you undertake structural mezzanine and facade work?', a: 'Yes, our structural engineers handle steel mezzanines, staircases, and external high-street glazing.' },
    ],
  },
  {
    slug: 'visual-merchandising',
    category: 'Manufacturing & VM',
    icon: Palette,
    title: 'Visual Merchandising',
    sub: 'VM & Window Display Execution',
    img: '/images/service-vm.jpg',
    duration: '7 – 20 Days',
    warranty: 'Campaign & Fixture Support',
    idealFor: 'Festive Launches, Luxury Boutiques, Jewellery & Apparel Chains',
    desc: 'Show-stopping window displays, festive Indian campaign roll-outs, and in-store storytelling fixtures that lift walk-in conversions.',
    overview:
      'Great retail design attracts eyes before a customer even crosses the threshold. Our VM fabrication and pan-India installation teams execute seasonal launches, Diwali/festive window storytelling, illuminated acrylic props, and focal brand walls across dozens of cities simultaneously.',
    deliverables: [
      '3D props, CNC-cut brass/acrylic backdrops & focal plinths',
      'Window display fabrication with programmable warm spotlights',
      'Synchronized multi-city festive & seasonal campaign roll-out',
      'Modular mannequin risers, signage totems & backlit fabric boxes',
      'Safe packaging, pan-India logistics & overnight site installation',
    ],
    process: [
      'Prototype & Material Sample Sign-Off',
      'Batch CNC & Graphics Production',
      'Pan-India Dispatch & Logistics',
      'Overnight Storefront Installation',
    ],
    materials: [
      'Cast Acrylic, Brushed Brass & Laser-Cut MDF',
      'UV-Printed SEG Backlit Fabric Frames',
      'Dimmable Spotlights & Programmable Strips',
      'Velvet, Suede & Textured Plaster Finishes',
    ],
    sectors: ['Jewellery Windows', 'Festive Retail Campaigns', 'Luxury Fashion', 'Cosmetics Counters', 'Mall Atrium Activations'],
    faqs: [
      { q: 'Can you deploy the same window campaign across 20+ cities together?', a: 'Yes, we batch-produce in Noida, crate city-wise, and deploy regional installation crews overnight for synchronized launches.' },
      { q: 'Do you build a physical mock-up before full rollout?', a: 'Always—for multi-store campaigns we share a physical prototype for lighting and finish sign-off first.' },
      { q: 'Are window props reusable across seasons?', a: 'We design modular frames with interchangeable graphics and magnetic trims so you can refresh campaigns cost-effectively.' },
    ],
  },
  {
    slug: 'retail-fixture-manufacturing',
    category: 'Manufacturing & VM',
    icon: Hammer,
    title: 'Retail Fixture Manufacturing',
    sub: 'Custom Displays & Millwork',
    img: '/images/service-workshop.jpg',
    duration: '15 – 30 Days',
    warranty: '24 Months Hardware & Finish',
    idealFor: 'Retail Chains, Franchises, Optical & Cosmetics Stores',
    desc: 'Custom shelving, gondolas, cash counters, brass vitrines, and modular wall systems built in our Noida facility to exact brand specs.',
    overview:
      'Operating our own woodworking, metal fabrication, powder-coating, and PU-paint facility gives clients unmatched consistency across roll-outs. Every gondola, cash wrap, and illuminated showcase undergoes pre-dispatch dry-fit inspection before reaching your site.',
    deliverables: [
      'Bespoke wall units, mid-floor gondolas & illuminated vitrines',
      'Brushed PVD gold stainless steel, solid timber & veneer finishes',
      'Precision CNC joinery, edge-banding & automotive-grade PU polish',
      'Pre-wired LED shelf strips & heavy-duty soft-close hardware',
      'Flat-pack crating & rapid on-site assembly across 25+ cities',
    ],
    process: [
      'Shop Drawings & Prototype Approval',
      'CNC Cutting & Metal Fabrication',
      'PU Finishing & Factory Dry-Fit QC',
      'On-Site Installation',
    ],
    materials: [
      'SS-304 PVD Gold & Matte Black Powder-Coated Steel',
      'Seasoned Teak, Veneer & High-Gloss / Matte PU',
      'Extra-Clear Toughened Display Glass',
      'Hettich / Blum Heavy-Duty Concealed Hardware',
    ],
    sectors: ['Jewellery Vitrines', 'Eyewear & Watches', 'Beauty & Perfumery', 'Apparel Gondolas', 'Electronics Experience Tables'],
    faqs: [
      { q: 'Can clients inspect fixtures at your Noida plant before dispatch?', a: 'Yes, we invite brand QA teams for pre-dispatch dry-fit inspection or share live video walk-throughs.' },
      { q: 'Do you integrate hidden wiring inside display shelves?', a: 'Yes, all LED shelf tracks, drivers, and security locks are concealed neatly inside CNC-routed channels.' },
      { q: 'What is your minimum order quantity?', a: 'We manufacture both single flagship store sets and 50+ store annual roll-out batches.' },
    ],
  },
  {
    slug: 'civil-electrical-hvac-fire-fighting',
    category: 'Turnkey & MEP',
    icon: Zap,
    title: 'Civil, Electrical, HVAC & Fire-Fighting',
    sub: 'Integrated MEP Engineering',
    img: '/images/service-mep.jpg',
    duration: '20 – 50 Days',
    warranty: 'Code-Compliant Certification',
    idealFor: 'Malls, High-Street Commercials, Restaurants & Corporate Floors',
    desc: 'Safe, NBC & mall-compliant civil, electrical, VRV/ductable HVAC, plumbing, and fire-fighting engineering synchronized with interiors.',
    overview:
      'Concealed services are the backbone of every safe, comfortable commercial space. Our licensed MEP engineers design and execute load-balanced LT panels, energy-efficient HVAC ducting, smoke detectors, and sprinkler grids that pass strict mall and fire-NOC inspections on the first walkthrough.',
    deliverables: [
      'LT/DB electrical panels, earthing & FRLS armored cabling',
      'VRF/VRV & ductable split HVAC supply, insulation & balancing',
      'Fire sprinkler grid modification, hydrants, PA & smoke detection',
      'Waterproofing, masonry, core-cutting & commercial plumbing',
      'Single-line diagrams (SLD), load sheets & safety test reports',
    ],
    process: [
      'Load Calculation & Shop Drawings',
      'First-Fix Concealed Conduit & Ducting',
      'Pressure, Megger & Lux Testing',
      'Mall / Fire NOC Sign-Off',
    ],
    materials: [
      'Polycab / Havells FRLS Cabling & Schneider Switchgear',
      'Daikin / Mitsubishi / Blue Star VRF & Ductable Units',
      'UL/FM Approved Fire Sprinklers & GI Ducting',
      'Nitrile Closed-Cell Thermal & Acoustic Insulation',
    ],
    sectors: ['Shopping Mall Units', 'Fine-Dine & QSR Kitchens', 'Corporate Offices', 'Medical Centres', 'Banquet & Retail Halls'],
    faqs: [
      { q: 'Do you supply test certificates for mall handover?', a: 'Yes—megger insulation reports, hydro-pressure test logs for fire lines, and balanced CFM air-flow sheets are provided.' },
      { q: 'Can you integrate fresh air and kitchen exhaust systems?', a: 'Yes, we design and install treated fresh air (TFA) and commercial scrubber/exhaust ducting for F&B outlets.' },
      { q: 'Are your electrical panels compliant with NBC and CEIG norms?', a: 'All distribution boards include proper RCCB/ELCB protection, phase balancing, and copper busbars.' },
    ],
  },
  {
    slug: 'manufacturing-production-management',
    category: 'Manufacturing & VM',
    icon: Factory,
    title: 'Manufacturing & Production Management',
    sub: 'Roll-Out Scheduling & QA/QC',
    img: '/images/about-showroom.jpg',
    duration: 'Ongoing / Multi-Site',
    warranty: 'ISO-Aligned QA Checklists',
    idealFor: 'National Franchises, Multi-City Store Launches & Developers',
    desc: 'Centralized production planning, vendor orchestration, and multi-stage quality audits so every city roll-out looks identical.',
    overview:
      'Scaling from 2 stores to 50 stores across India demands industrial-grade production discipline. We manage multi-vendor tooling, raw material standardization, dispatch sequencing, and live site trackers so regional launches never stall.',
    deliverables: [
      'Master roll-out Gantt charts & multi-city dispatch scheduling',
      'Standardized material bank & batch color-matching control',
      'In-process factory QA inspections with photographic reports',
      'Vendor coordination, packaging QC & reverse-logistics support',
      'Dedicated roll-out manager & live client progress dashboard',
    ],
    process: [
      'Roll-Out Master Schedule Setup',
      'Batch Material Procurement',
      'Multi-Stage Factory QC Gates',
      'Synchronized Site Handovers',
    ],
    materials: [
      'Standardized Laminate & PVD Shade Control Banks',
      'Barcoded Flat-Pack Protective Crating',
      'Modular Knock-Down Joinery Systems',
      'Digital QA Checklists & Punch-List Trackers',
    ],
    sectors: ['National Retail Franchises', 'Omnichannel Brands', 'QSR Expansion Chains', 'Co-Working Operators', 'Healthcare Networks'],
    faqs: [
      { q: 'How do you keep finishes identical across 15+ stores?', a: 'We lock approved laminate/PU master shade cards in our material bank and procure batch-matched raw sheets.' },
      { q: 'Can you manage third-party signage or IT vendors alongside fixtures?', a: 'Yes, our roll-out coordinator sequences all client-nominated vendors on one master site schedule.' },
      { q: 'Do you handle warehousing for staggered store openings?', a: 'Yes, we offer buffer storage at our Noida facility so pre-built kits dispatch immediately when a site becomes ready.' },
    ],
  },
];

export const brands = [
  { name: 'Tanishq', sector: 'Jewellery Retail', accent: '#8B1E3F' },
  { name: 'Fabindia', sector: 'Lifestyle & Apparel', accent: '#9B2C2C' },
  { name: 'Reliance Trends', sector: 'Fashion Chain', accent: '#1D4ED8' },
  { name: 'Titan Eye+', sector: 'Optical Retail', accent: '#0F766E' },
  { name: 'Raymond', sector: 'Luxury Menswear', accent: '#B91C1C' },
  { name: 'Bata', sector: 'Footwear Flagships', accent: '#DC2626' },
  { name: 'Croma', sector: 'Electronics Megastores', accent: '#059669' },
  { name: 'Lenskart', sector: 'Omnichannel Eyewear', accent: '#1E3A8A' },
  { name: 'Nykaa', sector: 'Beauty & Luxe', accent: '#DB2777' },
  { name: "Haldiram's", sector: 'QSR & Hospitality', accent: '#D97706' },
];

export const reviews = [
  {
    name: 'Rohit Malhotra',
    role: 'Head of Retail Expansion, Aurum Jewels',
    city: 'New Delhi',
    text: 'AA Design & Construction rolled out 14 showrooms across North India in four months without a single quality compromise. Their night-shift mall coordination is unmatched.',
  },
  {
    name: 'Neha Kapoor',
    role: 'Chief Operating Officer, NextGen Tech',
    city: 'Gurugram',
    text: 'Our 22,000 sq ft corporate floor in Cyber Hub was handed over three days ahead of schedule. The walnut millwork, brass accents, and acoustic cabins look truly world-class.',
  },
  {
    name: 'Sandeep Verma',
    role: 'Founder, Meera Ethnic Studio',
    city: 'Jaipur',
    text: 'From civil demolition and electrical load upgrades to festive window merchandising, one accountable team handled everything with clear weekly costing updates.',
  },
  {
    name: 'Anita Deshmukh',
    role: 'Operations Lead, FitZone India',
    city: 'Mumbai',
    text: 'Every custom display unit arrived flat-packed from their Noida workshop and assembled seamlessly on site. Their production tracking saved us nearly three weeks per launch.',
  },
  {
    name: 'Vikramjit Singh',
    role: 'Director, Spice Route Hospitality',
    city: 'Chandigarh',
    text: 'Honest BOQs, disciplined site engineers, and spotless finishing. We have already locked in our next three flagship outlets with Ramesh and Amit’s team.',
  },
];

export const videos = [
  {
    title: 'Luxury Retail Store Fit-Out Walkthrough',
    desc: 'See how our crew turns a bare mall shell into an illuminated Indian flagship EBO in 32 days.',
    poster: '/images/hero-retail.jpg',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    title: 'Corporate Office Transformation in NCR',
    desc: 'A 20,000 sq ft corporate workspace delivered turnkey with acoustic boardrooms and custom millwork.',
    poster: '/images/hero-office.jpg',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    title: 'Inside Our Noida Fixture Workshop',
    desc: 'Precision CNC cutting, brushed-brass detailing, and factory dry-fit quality inspection.',
    poster: '/images/service-workshop.jpg',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
];

export const stats = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '450+', label: 'Projects Delivered' },
  { value: '120+', label: 'Brand Partners' },
  { value: '28+', label: 'Indian Cities Covered' },
];

export const leadership = [
  {
    name: 'Ramesh Sharma',
    role: 'Co-Founder & Managing Director',
    bio: 'Leads turnkey construction strategy, client partnerships, and multi-city retail roll-outs across India with 14+ years in commercial architecture.',
    initials: 'RS',
  },
  {
    name: 'Amit Verma',
    role: 'Co-Founder & Head of Operations',
    bio: 'Oversees our Noida fixture manufacturing facility, MEP engineering standards, and on-site QA/QC execution across every project milestone.',
    initials: 'AV',
  },
];

export const banners = {
  about: '/images/about-showroom.jpg',
  services: '/images/hero-construction.jpg',
  contact: '/images/hero-office.jpg',
};

export const aboutImg = '/images/about-team.jpg';
export const aboutImg2 = '/images/about-showroom.jpg';
