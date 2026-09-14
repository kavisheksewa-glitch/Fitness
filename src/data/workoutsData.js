// src/data/workoutsData.js

export const gymWorkouts = [
  {
    id: 'gym-01',
    title: 'Hypertrophic Upper Body Power',
    category: 'Gym Workout',
    targetGroup: 'Chest, Back, Shoulders & Arms',
    level: 'Advanced',
    duration: '60 - 75 Mins',
    description: 'A high-yield hypertrophy routine structured around compound multi-joint movements and strict biomechanical control.',
    equipment: 'Barbell, Cable Station, Dumbbells',
    exercises: [
      { name: 'Incline Barbell Bench Press', sets: 4, reps: '6 - 8', rest: '180s', note: 'Maintain 30° incline; focus on controlled eccentric descent.' },
      { name: 'Weighted Chest-Supported Row', sets: 4, reps: '8 - 10', rest: '120s', note: 'Pause at peak contraction to maximize lat activation.' },
      { name: 'Seated Overhead Dumbbell Press', sets: 3, reps: '8 - 10', rest: '90s', note: 'Keep core engaged; full range of motion without flaring elbows.' },
      { name: 'Cable Dual-Pulley Lateral Raise', sets: 4, reps: '12 - 15', rest: '60s', note: 'Constant cable tension through the lateral deltoid plane.' },
      { name: 'Supinated Cable Incline Curl', sets: 3, reps: '10 - 12', rest: '60s', note: 'Strict wrist alignment; eliminate shoulder momentum.' },
    ],
  },
  {
    id: 'gym-02',
    title: 'Posterior Chain & Quad Sculpting',
    category: 'Gym Workout',
    targetGroup: 'Quads, Hamstrings & Glutes',
    level: 'Elite',
    duration: '75 Mins',
    description: 'Precision leg routine targeting both absolute mechanical tension and deep hamstring/quad isolation.',
    equipment: 'Squat Rack, Leg Press, Romanian Dumbbells',
    exercises: [
      { name: 'Safety Bar Back Squat', sets: 4, reps: '5 - 7', rest: '180s', note: 'Parallel depth; explode through mid-foot drive.' },
      { name: 'Dumbbell Romanian Deadlift', sets: 4, reps: '8 - 10', rest: '120s', note: 'Hinge deeply at hips until maximal hamstring stretch.' },
      { name: 'Narrow-Stance Leg Press', sets: 3, reps: '12 - 15', rest: '90s', note: 'Accentuate quad extension at lower movement quadrant.' },
      { name: 'Single-Leg Seated Hamstring Curl', sets: 3, reps: '12 - 15', rest: '60s', note: 'Unilateral control to fix mechanical imbalances.' },
      { name: 'Standing Calf Raise on Block', sets: 4, reps: '15 - 20', rest: '45s', note: '2-second hold at top; deep stretch at bottom.' },
    ],
  },
];

export const homeWorkouts = [
  {
    id: 'home-01',
    title: 'Decline Push-Up & Core Execution',
    category: 'Home Workout',
    difficulty: 'Intermediate',
    duration: '0:45',
    targetGroup: 'Upper Chest, Anterior Delts & Core',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-training-with-a-cable-machine-40262-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    description: 'Elevate your feet on a chair or platform to shift load onto upper pectoral fibers and stabilize deep abdominal muscles.',
    instructions: [
      'Place feet on an elevated surface (12-18 inches high).',
      'Maintain a rigid plank line from shoulders to ankles.',
      'Lower torso under control until chest nearly grazes the floor.',
      'Explode upward using pectoral contraction.',
    ],
  },
  {
    id: 'home-02',
    title: 'Isokinetic Bodyweight Squats & Hold',
    category: 'Home Workout',
    difficulty: 'Beginner to Advanced',
    duration: '1:10',
    targetGroup: 'Quadriceps, Glutes & Mobility',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-gym-equipment-for-weight-training-40263-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    description: 'Combine continuous-tension bodyweight squats with a 3-second isometric pause at parallel squat depth.',
    instructions: [
      'Position feet slightly wider than shoulder-width with toes flared 15 degrees.',
      'Descend slowly taking 3 full seconds to reach parallel.',
      'Hold static at parallel position for 3 seconds.',
      'Drive upward through heels without locking knees at the top.',
    ],
  },
];

export const strictWorkouts = [
  {
    id: 'strict-01',
    protocolTitle: 'AURUM 5x5 Heavy Load Protocol',
    intensityLevel: 'Maximum Intensity (RPE 9-10)',
    focus: 'Neuromuscular Force Production & Bone Density',
    restInterval: 'Strict 180s Time-Gated Rest',
    tempo: '3-1-X-0 (3s Eccentric, 1s Pause, Explosive Concentric)',
    description: 'Zero momentum, high mechanical tension protocol reserved for experienced lifters pushing maximum strength limits.',
    protocolRules: [
      'Strict tempo execution on every rep; sets are invalidated if speed degrades on the eccentric phase.',
      'Required 3-minute rest periods monitored via digital timer.',
      'Complete pre-workout mobility and CNS activation mandatory before load initiation.',
    ],
    breakdown: [
      { exercise: 'Barbell Back Squat', sets: 5, reps: 5, targetRPE: 'RPE 9', tempo: '3-1-X-0' },
      { exercise: 'Conventional Barbell Deadlift', sets: 5, reps: 3, targetRPE: 'RPE 9.5', tempo: '2-1-X-0' },
      { exercise: 'Weighted Overhead Strict Press', sets: 5, reps: 5, targetRPE: 'RPE 9', tempo: '3-0-X-0' },
    ],
  },
  {
    id: 'strict-02',
    protocolTitle: 'Metabolic Lactate Threshold Burn',
    intensityLevel: 'High Velocity / Cardiovascular Conditioning',
    focus: 'Mitochondrial Density & Glycogen Depletion',
    restInterval: 'Strict 45s Time-Gated Rest',
    tempo: 'Continuous Constant Velocity',
    description: 'A continuous superset regime designed to maximize lactate threshold without sacrificing muscle tissue integrity.',
    protocolRules: [
      'Perform exercises back-to-back with zero rest between paired supersets.',
      'Strict 45 seconds rest only after both exercises in a pair are completed.',
      'Heart rate must remain within 75%-85% HR Max range.',
    ],
    breakdown: [
      { exercise: 'Dumbbell Thruster', sets: 4, reps: 15, targetRPE: 'RPE 8.5', tempo: '1-0-1-0' },
      { exercise: 'Kettlebell Russian Swings', sets: 4, reps: 20, targetRPE: 'RPE 8.5', tempo: 'X-0-X-0' },
      { exercise: 'Hanging Leg Tuck & Hold', sets: 4, reps: 12, targetRPE: 'RPE 9', tempo: '2-1-2-1' },
    ],
  },
];