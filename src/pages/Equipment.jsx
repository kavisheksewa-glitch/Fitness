import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  Layers, 
  Rotate3d, 
  ShieldCheck, 
  Cpu, 
  Maximize2, 
  CheckCircle2, 
  Dumbbell, 
  Sliders, 
  X,
  Zap,
  Activity
} from 'lucide-react';
import Equipment1 from '../assets/Equipment1.webp';
import Equipment2 from '../assets/Equipment2.webp';
import Equipment3 from '../assets/Equipment3.webp';
import home1 from '../assets/home1.webp';
import home2 from '../assets/home2.webp';
import home3 from '../assets/home3.webp';

export default function Equipment() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [inspectItem, setInspectItem] = useState(null);

  const sectionRefs = useRef({});
  const topRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Apparatus', icon: <Layers className="w-4 h-4" /> },
    { id: 'freeweights', label: 'Free Weights & Racks', icon: <Dumbbell className="w-4 h-4" /> },
    { id: 'cables', label: 'Cable & Pulley Systems', icon: <Zap className="w-4 h-4" /> },
    { id: 'plate-loaded', label: 'Plate-Loaded & Leverage', icon: <Sliders className="w-4 h-4" /> },
    { id: 'cardio', label: 'Functional & Endurance', icon: <Activity className="w-4 h-4" /> },
  ];

  const equipmentList = [
    {
      id: 'eq-01',
      category: 'freeweights',
      categoryLabel: 'Free Weights & Racks',
      title: 'Muscle Empire Heavy-Duty Olympic Power Rack & Monolift',
      subtitle: 'Laser-Cut 11-Gauge Structural Steel',
      imageUrl: Equipment1,
      specs: {
        steelGauge: '11-Gauge Structural Steel (3x3")',
        maxLoad: '2,500 lbs (1,133 kg)',
        adjustability: '1-Inch Precision Hole Spacing',
        dimensions: '90" H x 48" W x 60" D',
        coating: 'Matte Black Electrostatic Powder Coat',
      },
      biomechanics: 'Integrated pneumatic monolift hooks eliminate bench press unrack friction and squat misalignments.',
      description: 'Engineered for absolute structural integrity under maximal powerlifting loads. Features integrated spotter arms, band pegs, and multi-angle pull-up stations.',
    },
    {
      id: 'eq-02',
      category: 'cables',
      categoryLabel: 'Cable & Pulley Systems',
      title: 'Dual-Stack Kinetic Cable Functional Trainer',
      subtitle: 'Constant Tension Aircraft-Grade Wire Matrix',
      imageUrl: Equipment2,
      specs: {
        steelGauge: 'Commercial Dual 250lb Stack',
        maxLoad: '1:1 / 2:1 Pulley Ratio Selectable',
        adjustability: '32 Vertical Adjustment Settings',
        dimensions: '84" H x 62" W x 42" D',
        coating: 'Anodized Aluminum Pulleys',
      },
      biomechanics: 'Bespoke aluminum pulley wheels eliminate friction spikes throughout the entire eccentric contraction phase.',
      description: 'Provides continuous smooth resistance for rotational core work, chest flies, lat isolation, and unilateral rehabilitation.',
    },
    {
      id: 'eq-03',
      category: 'plate-loaded',
      categoryLabel: 'Plate-Loaded & Leverage',
      title: '45-Degree Linear Bearing Leg Press',
      subtitle: 'Quad & Glute Precision Mechanical Drive',
      imageUrl: Equipment3,
      specs: {
        steelGauge: 'Heavy Structural Box Frame',
        maxLoad: '1,800 lbs Plate Capacity',
        adjustability: '4-Position Backrest Angle Adjuster',
        dimensions: '62" H x 68" W x 92" L',
        coating: 'Industrial Chrome Weight Horns',
      },
      biomechanics: '45-degree linear movement track protects lower lumbar vertebrae while maximizing isolation of the vastus lateralis.',
      description: 'Ultra-smooth carriage glides on hardened steel shafts with industrial linear bearings for high-yield quad hypertrophy.',
    },
    {
      id: 'eq-04',
      category: 'freeweights',
      categoryLabel: 'Free Weights & Racks',
      title: 'Machined CPU Urethane Dumbbell Suite',
      subtitle: 'Solid Steel Core with Laser Machined Knurling',
      imageUrl: home1,
      specs: {
        steelGauge: 'Single-Piece Solid Steel Head',
        maxLoad: 'Sets 5 lbs - 150 lbs (2.5lb Increments)',
        adjustability: 'Medium Volcanic Knurl Grip',
        dimensions: '32mm Hard Chrome Handle',
        coating: 'High-Density German CPU Urethane',
      },
      biomechanics: 'Exact head-to-handle weight balancing prevents torque on wrists during heavy pressing or dumbbell rows.',
      description: 'Virtually indestructible CPU urethane coating protects flooring, dampens noise, and guarantees lifetime weight accuracy within ±0.5%.',
    },
    {
      id: 'eq-05',
      category: 'plate-loaded',
      categoryLabel: 'Plate-Loaded & Leverage',
      title: 'Iso-Lateral Plate-Loaded Chest Press',
      subtitle: 'Converging & Diverging Axis Architecture',
      imageUrl: home2,
      specs: {
        steelGauge: 'Biomechanical Pivot Axis',
        maxLoad: '800 lbs Total Plate Horns',
        adjustability: 'Pneumatic Assisted Seat Adjustment',
        dimensions: '54" H x 58" W x 64" D',
        coating: 'Custom Electro-Coated Arms',
      },
      biomechanics: 'Converging movement arc replicates natural human pressing arm path, maximizing mid-chest pectoral contraction.',
      description: 'Independent arm movements allow unilateral training to correct strength imbalances and protect shoulder AC joints.',
    },
    {
      id: 'eq-06',
      category: 'cardio',
      categoryLabel: 'Functional & Endurance',
      title: 'Air Resistance Dual Ergometer Row Matrix',
      subtitle: 'Dynamic Resistance Wind-Damper Drive',
      imageUrl: home3,
      specs: {
        steelGauge: 'Precision Steel Flywheel Hub',
        maxLoad: 'Spiral Damper Settings 1-10',
        adjustability: 'Flexfoot Adjuster System',
        dimensions: '34" H x 24" W x 96" L',
        coating: 'Satin Anodized Aluminum Rail',
      },
      biomechanics: 'Exponential air resistance mimics fluid water dynamics, matching the user effort instantaneously.',
      description: 'Provides full-body posterior chain activation, cardiovascular conditioning, and lactate threshold training with zero joint shock.',
    },
  ];

  // Group equipment by category, preserving the order defined in `categories`
  const groupedCategories = categories
    .filter((c) => c.id !== 'all')
    .map((cat) => ({
      ...cat,
      items: equipmentList.filter((item) => item.category === cat.id),
    }))
    .filter((group) => group.items.length > 0);

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);

    if (catId === 'all') {
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const target = sectionRefs.current[catId];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className="relative text-stone-700 min-h-screen pt-6 pb-16 px-4 md:px-8 lg:px-10 overflow-hidden"
      style={{ 
        backgroundColor: "#F7F5F0",
        backgroundImage: "radial-gradient(#E8E3D5 0.75px, transparent 0.75px), radial-gradient(#E8E3D5 0.75px, #F7F5F0 0.75px)",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0, 15px 15px"
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-10 relative z-10">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 font-sans">
          <div className="inline-flex items-center gap-1.5 border border-amber-300/80 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800">
              Commercial Biomechanical Apparatus
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif uppercase">
            EQUIPMENT LOOP
          </h1>

          <p className="text-stone-600 text-xs md:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Inspect our 11-gauge structural steel apparatus, custom machined free weights, and dynamic pneumatic cable systems built for peak force exertion.
          </p>

          {/* Category Filter Buttons -> now Scroll-to-Section Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white border-amber-600 shadow-sm'
                    : 'bg-white/90 text-stone-600 border-amber-200 hover:text-amber-700 hover:border-amber-400'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ================= FEATURED 3D LOOP PREVIEW HERO ================= */}
        <div ref={topRef} className="relative bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-6 md:p-8 overflow-hidden shadow-sm font-sans scroll-mt-24">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Visual Media Box */}
            <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-amber-200/80 bg-stone-900 aspect-video">
              <img
                src={Equipment1}
                alt="Apparatus 3D Showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              {/* Overlay Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 border border-amber-200 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold shadow-sm">
                <Rotate3d className="w-3.5 h-3.5 animate-spin text-amber-600" style={{ animationDuration: '8s' }} />
                <span>3D Render Loop Active</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-stone-200">
                <span>Muscle Empire Monolift Rack v4.2</span>
                <span className="text-amber-400 font-semibold">100% Structural Calibration</span>
              </div>
            </div>

            {/* Spec Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-amber-600 text-[10px] font-mono uppercase tracking-[0.2em] font-bold block">
                Engineering Standard
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-stone-900 font-serif uppercase">
                MILITARY-GRADE KINETIC APPARATUS
              </h2>
              <p className="text-xs text-stone-600 font-normal leading-relaxed">
                Every rack, stack, and barbell in our facility is laser-calibrated to eliminate dynamic slop, ensure exact leverage angles, and prevent structural fatigue.
              </p>

              <div className="space-y-2 font-mono text-xs text-stone-700 pt-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>11-Gauge USA Structural Steel Tubing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Zero-Friction Sealed Bearing Axles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>ISO 9001 Biomechanical Certification</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= EQUIPMENT SECTIONS (grouped by category) ================= */}
        <div className="space-y-14">
          {groupedCategories.map((group) => (
            <div
              key={group.id}
              id={group.id}
              ref={(el) => (sectionRefs.current[group.id] = el)}
              className="space-y-6 scroll-mt-24"
            >
              {/* Section Heading */}
              <div className="flex items-center gap-3 border-b border-amber-200/80 pb-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                  {group.icon}
                </div>
                <div>
                  <span className="text-amber-600 text-[10px] font-mono uppercase tracking-[0.2em] font-bold block">
                    Category
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-stone-900 font-serif uppercase">
                    {group.label}
                  </h3>
                </div>
              </div>

              {/* Equipment Grid for this section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl overflow-hidden hover:border-amber-400 transition-all duration-500 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      {/* Image Showcase */}
                      <div className="relative aspect-video overflow-hidden bg-stone-100 border-b border-amber-200/80">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        <span className="absolute top-3 left-3 bg-white/90 border border-amber-200 text-amber-800 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md font-bold shadow-sm">
                          {item.categoryLabel}
                        </span>

                        <button
                          onClick={() => setInspectItem(item)}
                          className="absolute bottom-3 right-3 bg-amber-600 text-white p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-amber-700 cursor-pointer"
                          title="Inspect Tech Specs"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-2.5">
                        <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors font-serif">
                          {item.title}
                        </h3>
                        
                        <span className="block text-[11px] font-mono text-amber-700 font-bold">
                          {item.subtitle}
                        </span>

                        <p className="text-xs text-stone-600 font-normal leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Quick Specs Footer */}
                    <div className="px-5 pb-5 pt-2 border-t border-amber-100 mt-auto">
                      <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 mb-3">
                        <span>Steel: <strong className="text-stone-900">{item.specs.steelGauge.split(' ')[0]}</strong></span>
                        <span>Capacity: <strong className="text-amber-700">{item.specs.maxLoad.split(' ')[0]}</strong></span>
                      </div>

                      <button
                        onClick={() => setInspectItem(item)}
                        className="w-full text-center border border-amber-200 bg-white/80 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-600 hover:text-white hover:border-amber-600 text-amber-700 text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl transition-all duration-300 cursor-pointer shadow-sm"
                      >
                        Inspect Specifications
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= INSPECT MODAL ================= */}
        {inspectItem && (
          <div className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-md flex items-center justify-center p-4 font-sans">
            <div className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl max-w-2xl w-full p-6 space-y-4 relative shadow-xl max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setInspectItem(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 p-2 rounded-full border border-amber-200 hover:border-amber-400 bg-stone-50 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <span className="text-amber-600 text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
                  {inspectItem.categoryLabel}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-stone-900 font-serif">
                  {inspectItem.title}
                </h3>
              </div>

              {/* Modal Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-amber-200/80">
                <img
                  src={inspectItem.imageUrl}
                  alt={inspectItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Biomechanics Box */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-3.5 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold block">
                  Biomechanical Optimization
                </span>
                <p className="text-xs text-stone-700 font-normal leading-relaxed">
                  {inspectItem.biomechanics}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold">
                  Technical Specifications
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                  <div className="bg-stone-50/80 p-2.5 rounded-xl border border-amber-200/80">
                    <span className="text-stone-400 block text-[9px] uppercase">Steel / Construction</span>
                    <span className="text-stone-900 font-semibold">{inspectItem.specs.steelGauge}</span>
                  </div>

                  <div className="bg-stone-50/80 p-2.5 rounded-xl border border-amber-200/80">
                    <span className="text-stone-400 block text-[9px] uppercase">Maximum Rated Load</span>
                    <span className="text-amber-700 font-semibold">{inspectItem.specs.maxLoad}</span>
                  </div>

                  <div className="bg-stone-50/80 p-2.5 rounded-xl border border-amber-200/80">
                    <span className="text-stone-400 block text-[9px] uppercase">Adjustability</span>
                    <span className="text-stone-900 font-semibold">{inspectItem.specs.adjustability}</span>
                  </div>

                  <div className="bg-stone-50/80 p-2.5 rounded-xl border border-amber-200/80">
                    <span className="text-stone-400 block text-[9px] uppercase">Coating & Finish</span>
                    <span className="text-stone-900 font-semibold">{inspectItem.specs.coating}</span>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => setInspectItem(null)}
                  className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-xs uppercase tracking-[0.15em] py-3.5 rounded-xl transition-colors shadow-md shadow-amber-600/25 cursor-pointer"
                >
                  Close Inspection
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}