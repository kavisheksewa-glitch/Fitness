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

// NOTE: Order of this array = order of videos in localVideos (workout1 ... workout10).
// Card number N shows workout N video, so keep both in the same order.
export const homeWorkouts = [
  {
    id: 'video-01',
    title: 'Decline Push-Up',
    category: 'Bodyweight',
    difficulty: 'Intermediate',
    targetGroup: 'Upper Chest, Anterior Delts & Core',
    description:
      'Feet elevated on a bench shift more load onto the upper chest and shoulders while your core works to keep the body rigid.',
    instructions: [
      'Place your feet on a bench (12-18 inches high) with hands slightly wider than shoulders.',
      'Keep a straight line from shoulders to ankles; squeeze glutes and abs.',
      'Lower your chest under control until it nearly touches the floor.',
      'Press up powerfully without letting your hips sag.',
    ],
  },
  {
    id: 'video-02',
    title: 'Bodyweight Squat',
    category: 'Bodyweight',
    difficulty: 'Beginner',
    targetGroup: 'Quadriceps, Glutes & Core',
    description:
      'A foundational lower-body movement that builds leg strength and mobility, with hands clasped at the chest for balance.',
    instructions: [
      'Stand with feet shoulder-width apart, toes turned out slightly.',
      'Clasp your hands at chest height and keep your chest up.',
      'Sit your hips back and down until thighs are parallel to the floor.',
      'Drive through your heels to stand tall without locking the knees hard.',
    ],
  },
  {
    id: 'video-03',
    title: 'Barbell Back Squat',
    category: 'Gym Workout',
    difficulty: 'Advanced',
    targetGroup: 'Quads, Glutes, Hamstrings & Core',
    description:
      'The king of leg exercises. A loaded barbell on the upper back builds total lower-body strength and muscle mass.',
    instructions: [
      'Set the bar at upper-chest height, place it on your upper traps and grip just outside shoulder width.',
      'Unrack, step back and set your feet shoulder-width apart; brace your core.',
      'Squat down until thighs are at least parallel, knees tracking over toes.',
      'Drive up through mid-foot, keeping chest up and back tight.',
    ],
  },
  {
    id: 'video-04',
    title: 'Barbell Deadlift',
    category: 'Gym Workout',
    difficulty: 'Advanced',
    targetGroup: 'Hamstrings, Glutes, Lower Back & Traps',
    description:
      'A full posterior-chain lift where you pull a loaded bar from the floor to a tall standing position.',
    instructions: [
      'Stand with the bar over mid-foot, hinge down and grip just outside your legs.',
      'Flatten your back, lift your chest and brace your core before pulling.',
      'Push the floor away and drag the bar close to your shins and thighs.',
      'Lock out with hips and knees together, then lower the bar with control.',
    ],
  },
  {
    id: 'video-05',
    title: 'Seated Barbell Shoulder Press',
    category: 'Gym Workout',
    difficulty: 'Intermediate',
    targetGroup: 'Shoulders, Triceps & Upper Chest',
    description:
      'A back-supported overhead press that builds strong, broad shoulders while limiting lower-back strain.',
    instructions: [
      'Sit with your back firmly against the pad and grip the bar slightly wider than shoulders.',
      'Start with the bar at collarbone level and elbows slightly in front of the bar.',
      'Press the bar straight overhead until your arms are fully extended.',
      'Lower slowly back to collarbone height and repeat.',
    ],
  },
  {
    id: 'video-06',
    title: 'Wide-Grip Pull-Up',
    category: 'Bodyweight',
    difficulty: 'Advanced',
    targetGroup: 'Lats, Upper Back & Biceps',
    description:
      'A classic bodyweight back builder. The wide overhand grip puts extra focus on the lats for a V-shaped back.',
    instructions: [
      'Grab the bar with an overhand grip wider than shoulder width and hang fully.',
      'Pull your shoulder blades down and back to start the movement.',
      'Drive your elbows down toward your ribs until your chin clears the bar.',
      'Lower for 2-3 seconds to a full hang; avoid swinging.',
    ],
  },
  {
    id: 'video-07',
    title: 'Single-Arm Cable Curl',
    category: 'Gym Workout',
    difficulty: 'Intermediate',
    targetGroup: 'Biceps & Brachialis',
    description:
      'Cables keep constant tension on the biceps through the full range, making this great for muscle definition.',
    instructions: [
      'Stand facing the cable machine with a single handle and keep your elbow pinned to your side.',
      'Curl the handle up toward your shoulder without swinging your body.',
      'Squeeze your bicep hard for one second at the top.',
      'Lower slowly until your arm is almost fully straight.',
    ],
  },
  {
    id: 'video-08',
    title: 'Dumbbell Romanian Deadlift',
    category: 'Gym Workout',
    difficulty: 'Intermediate',
    targetGroup: 'Hamstrings, Glutes & Lower Back',
    description:
      'A hip-hinge movement with dumbbells that deeply stretches and strengthens the hamstrings and glutes.',
    instructions: [
      'Stand with feet hip-width apart, dumbbells in front of your thighs, knees slightly bent.',
      'Push your hips back and slide the dumbbells down along your legs.',
      'Lower until you feel a strong hamstring stretch, keeping your back flat.',
      'Squeeze your glutes and drive your hips forward to stand tall.',
    ],
  },
  {
    id: 'video-09',
    title: 'EZ-Bar Preacher Curl',
    category: 'Gym Workout',
    difficulty: 'Intermediate',
    targetGroup: 'Biceps (Lower & Peak)',
    description:
      'Resting your arms on the preacher pad removes momentum, so the biceps do all the work.',
    instructions: [
      'Sit at the preacher bench with upper arms flat on the pad and grip the EZ-bar at shoulder width.',
      'Curl the bar up without lifting your elbows off the pad.',
      'Pause and squeeze your biceps at the top.',
      'Lower slowly until your arms are almost straight, without locking out.',
    ],
  },
  {
    id: 'video-10',
    title: 'Dumbbell Walking Lunge',
    category: 'Gym Workout',
    difficulty: 'Intermediate',
    targetGroup: 'Quads, Glutes & Hamstrings',
    description:
      'A dynamic single-leg exercise that builds leg strength, balance and coordination while moving forward.',
    instructions: [
      'Hold a dumbbell in each hand at your sides and stand tall.',
      'Take a long step forward and lower your back knee toward the floor.',
      'Keep your front knee over the ankle and your torso upright.',
      'Push through the front heel and step into the next lunge with the other leg.',
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