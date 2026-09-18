import React, { useState } from 'react';
import { 
  Utensils, 
  Flame, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ChevronRight, 
  Apple, 
  Coffee, 
  Sun, 
  Moon, 
  Layers 
} from 'lucide-react';
import { dietPlans } from '../data/dietData';
import diet1 from '../assets/diet1.webp';
import diet2 from '../assets/diet3.webp';
import diet3 from '../assets/diet2.webp';

export default function Diets() {
  const [activePlan, setActivePlan] = useState('shred');

  const plans = [
    { id: 'shred', label: 'Shred & Cut', desc: 'High protein, caloric deficit for lean muscle retention' },
    { id: 'lean', label: 'Lean Bulk', desc: 'Controlled surplus for clean mass accumulation' },
    { id: 'maintenance', label: 'Performance', desc: 'Iso-caloric nutrient timing for peak athleticism' }
  ];

  const mealImages = [diet1, diet2, diet3];

  const currentPlanData = dietPlans[activePlan];

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
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 border border-amber-300/80 bg-white/90 backdrop-blur-md px-4 py-1.5 lg:px-5 lg:py-2 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-600" />
            <span className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-amber-800 font-sans">
              Clinical Nutrition Architecture
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-serif uppercase">
            NUTRITION PROTOCOLS
          </h1>

          <p className="text-stone-600 text-xs md:text-sm lg:text-base font-normal leading-relaxed max-w-2xl lg:max-w-3xl mx-auto font-sans">
            Precision macronutrient distribution engineered to optimize body composition, hormone regulation, and metabolic output.
          </p>

          {/* Plan Switcher Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 lg:gap-3 pt-4">
            {plans.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePlan(p.id)}
                className={`p-3.5 lg:p-4 rounded-2xl border text-left transition-all duration-300 font-sans cursor-pointer ${
                  activePlan === p.id 
                    ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white border-amber-600 shadow-md shadow-amber-600/25' 
                    : 'bg-white/90 text-stone-700 border-amber-200 hover:border-amber-400'
                }`}
              >
                <div className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider">{p.label}</div>
                <div className={`text-[11px] lg:text-xs mt-0.5 line-clamp-1 ${activePlan === p.id ? 'text-amber-100' : 'text-stone-500'}`}>
                  {p.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ================= MACRO OVERVIEW BAR ================= */}
        <div className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-5 md:p-8 lg:p-10 shadow-sm font-sans">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-amber-100 pb-6">
            <div className="space-y-1">
              <span className="text-amber-600 text-[10px] lg:text-xs font-mono uppercase tracking-[0.2em] font-bold">
                Active Protocol Overview
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 font-serif uppercase">
                {currentPlanData.title}
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-stone-600 max-w-xl lg:max-w-2xl">
                {currentPlanData.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:gap-4 font-mono">
              <div className="bg-stone-50/80 border border-amber-200/80 px-4 py-3 lg:px-5 lg:py-4 rounded-2xl text-center flex-1 sm:flex-none">
                <span className="text-[10px] lg:text-xs text-stone-400 uppercase tracking-widest block">Daily Target</span>
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-amber-700">{currentPlanData.calories}</span>
              </div>
              <div className="bg-stone-50/80 border border-amber-200/80 px-4 py-3 lg:px-5 lg:py-4 rounded-2xl text-center flex-1 sm:flex-none">
                <span className="text-[10px] lg:text-xs text-stone-400 uppercase tracking-widest block">Water Intake</span>
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-amber-700">{currentPlanData.water}</span>
              </div>
            </div>
          </div>

          {/* Macro Breakdown Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 pt-6">
            <div className="bg-amber-50/50 border border-amber-200/80 p-4 lg:p-5 rounded-2xl space-y-1">
              <div className="text-[10px] lg:text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Protein Target</div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-900">{currentPlanData.macros.protein}</div>
              <p className="text-[11px] lg:text-xs text-stone-500 font-sans">Required for myofibrillar protein synthesis.</p>
            </div>
            <div className="bg-yellow-50/50 border border-yellow-200/80 p-4 lg:p-5 rounded-2xl space-y-1">
              <div className="text-[10px] lg:text-xs font-mono uppercase tracking-widest text-yellow-700 font-bold">Carbohydrates</div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-900">{currentPlanData.macros.carbs}</div>
              <p className="text-[11px] lg:text-xs text-stone-500 font-sans">Glycogen replenishment & cognitive focus.</p>
            </div>
            <div className="bg-stone-100/60 border border-amber-200/80 p-4 lg:p-5 rounded-2xl space-y-1">
              <div className="text-[10px] lg:text-xs font-mono uppercase tracking-widest text-stone-700 font-bold">Healthy Fats</div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-900">{currentPlanData.macros.fats}</div>
              <p className="text-[11px] lg:text-xs text-stone-500 font-sans">Hormonal optimization & cellular health.</p>
            </div>
          </div>
        </div>

        {/* ================= DAILY MEAL TIMELINE ================= */}
        <div className="space-y-6">
          <div className="border-b border-amber-200/80 pb-3">
            <span className="text-amber-600 text-[10px] lg:text-xs font-mono uppercase tracking-[0.2em] font-bold block">
              Execution Schedule
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-900 font-serif uppercase">
              Daily Meal Breakdown
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {currentPlanData.meals.map((meal, index) => (
              <div 
                key={index}
                className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl overflow-hidden hover:border-amber-400 transition-colors shadow-sm font-sans"
              >
                {/* Meal Image */}
                <div className="w-full h-44 md:h-48 lg:h-56 overflow-hidden">
                  <img
                    src={mealImages[index % mealImages.length]}
                    alt={meal.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 md:p-6 lg:p-7 space-y-4">
                  <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-mono font-bold text-xs lg:text-sm">
                        0{index + 1}
                      </div>
                      <div>
                        <h4 className="text-base lg:text-lg font-bold text-stone-900">{meal.title}</h4>
                        <span className="text-[11px] lg:text-xs text-stone-400 font-mono">{meal.timing}</span>
                      </div>
                    </div>
                    <span className="text-xs lg:text-sm font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full">
                      {meal.calories} kcal
                    </span>
                  </div>

                  {/* Food Items List */}
                  <div className="space-y-2.5">
                    <div className="text-[10px] lg:text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">Primary Ingredients</div>
                    <ul className="space-y-2 lg:space-y-2.5">
                      {meal.items.map((item, i) => (
                        <li key={i} className="flex items-center justify-between text-xs lg:text-sm bg-stone-50/80 p-2.5 lg:p-3 rounded-xl border border-amber-100">
                          <span className="font-medium text-stone-800">{item.name}</span>
                          <span className="font-mono text-amber-700 font-semibold">{item.portion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meal Notes */}
                  {meal.note && (
                    <div className="bg-amber-50/60 border border-amber-200/80 p-3 lg:p-3.5 rounded-xl text-xs lg:text-sm text-amber-900 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 lg:w-5 lg:h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{meal.note}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}