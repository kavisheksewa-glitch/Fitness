// src/data/trainersData.js

import Trainer1Img from '../assets/Trainner1.webp';
import Trainer2Img from '../assets/Trainner2.webp';

const trainerImages = [Trainer1Img, Trainer2Img];

export const trainersData = [
  {
    id: 'trainer-01',
    name: 'Marcus Vance',
    title: 'Director of High Performance & Hypertrophy',
    experience: '14+ Years',
    specialties: [
      'Biomechanical Optimization',
      'Hypertrophic Signal Maximization',
      'Pro Athlete Strength Conditioning'
    ],
    certifications: [
      'CSCS (Certified Strength & Conditioning Specialist)',
      'IFBB Pro League Biomechanics Specialist',
      'MSc Human Kinetics - Stanford University'
    ],
    bio: 'Former Olympic conditioning coach with over a decade of experience training world-class athletes, IFBB pros, and high-net-worth executives in precision hypertrophy and power output.',
    quote: 'Excuses are mechanical errors. Correct the form, execute with violence, and the physical adaptation becomes inevitable.',
    imageUrl: trainerImages[0], // Trainner1.webp
    stats: {
      clientTransformations: '350+',
      proAthletesCoached: '42',
      satisfactionRate: '99.4%'
    }
  },
  {
    id: 'trainer-02',
    name: 'Elena Rostova',
    title: 'Head of Kinetic Rehabilitation & Mobility',
    experience: '11 Years',
    specialties: [
      'Postural Realignment',
      'Joint Longevity & Dynamic Flexibility',
      'Core Kinetic Activation'
    ],
    certifications: [
      'Doctor of Physical Therapy (DPT)',
      'FMS (Functional Movement Screen) Level 2',
      'PRI (Postural Restoration Institute) Certified'
    ],
    bio: 'Specializing in structural restoration and mobility, Elena bridges the gap between physical therapy and elite athletic performance, ensuring pain-free high-load lifting.',
    quote: 'True strength is built on flawless movement patterns. Protect the joints, and performance naturally explodes.',
    imageUrl: trainerImages[1], // Trainner.webp
    stats: {
      clientTransformations: '280+',
      proAthletesCoached: '18',
      satisfactionRate: '100%'
    }
  },
  {
    id: 'trainer-03',
    name: 'Alistair Sterling',
    title: 'Chief Nutritionist & Metabolic Specialist',
    experience: '16 Years',
    specialties: [
      'Precision Macro-Nutrient Timing',
      'Metabolic Rate Recomposition',
      'Endocrine & Hormonal Optimization'
    ],
    certifications: [
      'CISSN (Certified Sports Nutritionist)',
      'PhD Molecular Nutrition - Oxford University',
      'Precision Nutrition Level 2 Master Coach'
    ],
    bio: 'Alistair constructs hyper-customized bio-individual nutrition frameworks that optimize metabolic efficiency, hormonal health, and rapid fat oxidation without muscle loss.',
    quote: 'Nutrition is chemical programming. Input precision compounds, and the metabolic machine responds instantaneously.',
    imageUrl: trainerImages[0], // Trainner1.webp
    stats: {
      clientTransformations: '500+',
      proAthletesCoached: '65',
      satisfactionRate: '98.9%'
    }
  },
  {
    id: 'trainer-04',
    name: 'Darius Thorne',
    title: 'Master Combat & Strict Protocol Coach',
    experience: '12 Years',
    specialties: [
      'High-Intensity Interval Protocols (HIIT)',
      'Lactate Threshold Expansion',
      'Tactical Conditioning & Endurance'
    ],
    certifications: [
      'EXOS Performance Specialist',
      'USA Weightlifting Advanced Coach',
      'Former Special Forces Physical Master Trainer'
    ],
    bio: 'Darius brings militarized discipline and extreme conditioning methodologies to the private studio, pushing elite clients past mental and physiological barriers.',
    quote: 'Comfort is the enemy of evolution. Embrace the friction, dominate the timer, and claim your physical peak.',
    imageUrl: trainerImages[1], // Trainner.webp
    stats: {
      clientTransformations: '210+',
      proAthletesCoached: '29',
      satisfactionRate: '99.1%'
    }
  }
];