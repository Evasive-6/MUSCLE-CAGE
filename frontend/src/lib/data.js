import {
  Dumbbell, Activity, Flame, Zap, TrendingDown, TrendingUp,
  UserCog, Salad, Lock, Shirt, Wind, Car,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Facilities", to: "/#facilities" },
  { label: "Trainers", to: "/#trainers" },
  { label: "Membership", to: "/#membership" },
  { label: "Gallery", to: "/#gallery" },
  { label: "Blog", to: "/#blog" },
  { label: "Contact", to: "/contact" },
];

export const COUNTERS = [
  { label: "Active Members", value: 1200, suffix: "+" },
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Certified Trainers", value: 15, suffix: "+" },
  { label: "Transformations", value: 850, suffix: "+" },
];

export const FACILITIES = [
  { icon: Dumbbell, title: "Strength Training", desc: "Free weights, racks & heavy iron." },
  { icon: Activity, title: "Cardio Zone", desc: "Treadmills, bikes & rowers." },
  { icon: Flame, title: "CrossFit", desc: "High-intensity functional workouts." },
  { icon: Zap, title: "Functional Training", desc: "Mobility, agility & endurance." },
  { icon: TrendingDown, title: "Weight Loss", desc: "Structured fat-loss programs." },
  { icon: TrendingUp, title: "Muscle Gain", desc: "Hypertrophy-focused protocols." },
  { icon: UserCog, title: "Personal Training", desc: "One-on-one expert coaching." },
  { icon: Salad, title: "Nutrition Guidance", desc: "Custom meal & macro plans." },
  { icon: Lock, title: "Locker Room", desc: "Secure premium lockers." },
  { icon: Shirt, title: "Changing Room", desc: "Spacious & hygienic." },
  { icon: Wind, title: "Steam Room", desc: "Recovery steam facility available." },
  { icon: Car, title: "Parking", desc: "Two-wheeler & car parking on site." },
];

export const MEMBERSHIP_PLANS = [
  { name: "Monthly", tag: "Starter", price: "1,999", perks: ["Full gym access", "Locker access", "Fitness assessment"], badge: null },
  { name: "Quarterly", tag: "Popular", price: "4,999", perks: ["Everything in Monthly", "1 PT session / month", "Nutrition tips"], badge: "Popular" },
  { name: "Half-Yearly", tag: "Value", price: "8,999", perks: ["Everything in Quarterly", "Diet consultation", "Progress tracking"], badge: null },
  { name: "Annual", tag: "Best Value", price: "15,999", perks: ["Everything in Half-Yearly", "4 PT sessions", "Premium locker", "Guest passes"], badge: "Best Value" },
];

export const TRAINERS = [
  { name: "Trainer 1", role: "Strength & Powerlifting", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=85", specialty: "Powerlifting · Hypertrophy" },
  { name: "Trainer 2", role: "Functional Specialist", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=900&q=85", specialty: "CrossFit · Mobility" },
  { name: "Trainer 3", role: "Transformation Coach", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85", specialty: "Fat Loss · Nutrition" },
];

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&q=80", h: "row-span-2" },
  { src: "https://images.pexels.com/photos/37352354/pexels-photo-37352354.jpeg?w=800", h: "" },
  { src: "https://images.pexels.com/photos/17211446/pexels-photo-17211446.jpeg?w=800", h: "" },
  { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80", h: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", h: "" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80", h: "" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=80", h: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80", h: "" },
];

export const TRANSFORMATIONS = [
  {
    before: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=800&q=80",
    after: "https://images.pexels.com/photos/17924333/pexels-photo-17924333.jpeg?w=800",
    weeks: 16,
    desc: "Fat loss + lean muscle build.",
  },
  {
    before: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
    after: "https://images.unsplash.com/photo-1583500178690-f7fd39c69b1c?w=800&q=80",
    weeks: 24,
    desc: "Strength & hypertrophy program.",
  },
  {
    before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    after: "https://images.unsplash.com/photo-1567598508481-65985588e295?w=800&q=80",
    weeks: 12,
    desc: "Endurance & functional gains.",
  },
];

export const SCHEDULE = [
  { day: "Mon", classes: ["6:00 CrossFit", "8:00 Strength", "18:00 HIIT", "20:00 Yoga"] },
  { day: "Tue", classes: ["6:00 Cardio", "8:00 Functional", "18:00 Strength", "20:00 Mobility"] },
  { day: "Wed", classes: ["6:00 CrossFit", "8:00 Strength", "18:00 HIIT", "20:00 Boxing"] },
  { day: "Thu", classes: ["6:00 Cardio", "8:00 Functional", "18:00 Strength", "20:00 Yoga"] },
  { day: "Fri", classes: ["6:00 CrossFit", "8:00 Strength", "18:00 HIIT", "20:00 Mobility"] },
  { day: "Sat", classes: ["7:00 Bootcamp", "9:00 Open Gym", "17:00 Powerlift"] },
  { day: "Sun", classes: ["8:00 Recovery", "10:00 Open Gym"] },
];

export const BLOG = [
  {
    slug: "5-compound-lifts-every-beginner-must-master",
    title: "5 Compound Lifts Every Beginner Must Master",
    excerpt: "The foundation of strength. Squat, deadlift, bench, overhead press & row — done right.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=85",
    tag: "Strength",
    readTime: "6 min read",
    date: "December 2025",
    content: [
      { type: "p", text: "If you're new to the gym, the single fastest way to build strength, coordination, and confidence is to master a small handful of compound lifts. These are the movements that recruit multiple muscle groups at once — the ones that actually change how you look, how you move, and how you feel." },
      { type: "h2", text: "1. The Back Squat" },
      { type: "p", text: "The king of leg exercises. Done correctly, the squat trains your quads, glutes, hamstrings, core, and even upper back. Focus on hitting parallel, keeping your chest tall, and driving through your mid-foot. Start with just the bar." },
      { type: "h2", text: "2. The Conventional Deadlift" },
      { type: "p", text: "Nothing builds full-body strength like picking heavy things off the floor. Neutral spine, brace hard, push the floor away. The deadlift teaches you to be strong under load — a life skill, not just a gym skill." },
      { type: "h2", text: "3. The Bench Press" },
      { type: "p", text: "The classic upper-body strength builder. Retract your shoulder blades, drive your feet into the floor, and touch the same spot on your chest every rep. Consistency of technique is what unlocks progression." },
      { type: "h2", text: "4. The Overhead Press" },
      { type: "p", text: "Shoulders, triceps, and a rock-solid core. Standing overhead press teaches you to stabilise your whole body while producing force overhead. It's humbling — expect the numbers to be lower than you think." },
      { type: "h2", text: "5. The Barbell Row" },
      { type: "p", text: "A strong back protects a strong bench and a strong deadlift. Bent-over rows train the mid-back, lats, rear delts, and grip — all in one movement. Keep your torso stable and pull to your lower ribs." },
      { type: "h2", text: "Where to start" },
      { type: "p", text: "Pick a beginner program that uses these five lifts three days per week. Focus on adding a small amount of weight every session. Book a session with one of our coaches at The Muscle Cage Fitness and we'll walk you through every rep." },
    ],
  },
  {
    slug: "protein-timing-myth-vs-science",
    title: "Protein Timing: Myth vs Science",
    excerpt: "Anabolic window? Post-workout shakes? What research actually tells us about protein.",
    img: "https://images.pexels.com/photos/1092874/pexels-photo-1092874.jpeg?w=1400",
    tag: "Nutrition",
    readTime: "5 min read",
    date: "December 2025",
    content: [
      { type: "p", text: "For decades, gym-goers believed there was a magical 30-minute 'anabolic window' after training in which you had to slam a protein shake or lose your gains. Modern research paints a much more relaxed picture." },
      { type: "h2", text: "What actually matters" },
      { type: "p", text: "Total daily protein intake is by far the biggest driver of muscle growth. For most active adults, that's around 1.6 to 2.2 grams of protein per kilogram of body weight per day, spread across 3-5 meals." },
      { type: "h2", text: "The anabolic window is wider than you think" },
      { type: "p", text: "Studies show muscle protein synthesis remains elevated for up to 24 hours after a training session. A post-workout meal within 1-2 hours is more than enough — you don't need to sprint to the shaker." },
      { type: "h2", text: "Practical takeaways" },
      { type: "p", text: "Hit your daily total. Eat protein at every meal. Don't stress about the exact minute. If you had a proper meal 1-2 hours before training, you don't even need something immediately after." },
    ],
  },
  {
    slug: "how-to-build-discipline-not-just-motivation",
    title: "How to Build Discipline (Not Just Motivation)",
    excerpt: "Motivation fades. Systems win. Here's how to engineer consistency in the gym.",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1400&q=85",
    tag: "Mindset",
    readTime: "4 min read",
    date: "December 2025",
    content: [
      { type: "p", text: "Motivation is a mood. Discipline is a system. The strongest people you see in the gym aren't operating on some superhuman internal fire — they've simply removed the number of decisions they need to make." },
      { type: "h2", text: "Schedule it like a meeting" },
      { type: "p", text: "Pick your gym time and treat it as non-negotiable. Same days, same slot every week. When it's on the calendar, willpower stops being a factor." },
      { type: "h2", text: "Lower the activation energy" },
      { type: "p", text: "Pack your gym bag the night before. Sleep in your workout clothes if you have to. The fewer steps between waking up and walking through the door, the higher your consistency." },
      { type: "h2", text: "Track something small" },
      { type: "p", text: "Log every session. Even a single number — reps, weight, or a check-mark. Data is a mirror. When you can see the streak, you protect it." },
      { type: "h2", text: "Show up on the bad days" },
      { type: "p", text: "The days you don't feel like it are the ones that count. Even a 20-minute session on a low-energy day beats the zero-day. Progress is a rounding error of consistency." },
    ],
  },
];

export const FAQS = [
  { q: "Where is The Muscle Cage Fitness located?", a: "We are located in Goregaon East, Mumbai, Maharashtra. Full address is available on our Contact page along with directions." },
  { q: "What are the opening hours?", a: "Monday to Friday: 5:30 AM – 11:00 PM. Saturday: 6:00 AM – 10:00 PM. Sunday: 7:00 AM – 8:00 PM." },
  { q: "Do you offer a free trial?", a: "Yes. New members can book a complimentary trial session directly from this website using the Book a Free Trial form." },
  { q: "Do beginners receive guidance?", a: "Absolutely. Every new member receives an onboarding session with a certified trainer who walks you through equipment, form, and a starter program." },
  { q: "Is personal training available?", a: "Yes. One-on-one personal training is available and can be discussed with our team at the gym or through the Personal Trainer booking form." },
  { q: "Is parking available?", a: "Please contact the gym for the latest parking availability. We do offer on-site parking subject to space." },
  { q: "Do you provide nutrition guidance?", a: "Yes, custom diet plans and nutrition consultations are included with select memberships and available as an add-on." },
];

export const TESTIMONIALS = [
  { name: "Rohan M.", text: "The atmosphere at Muscle Cage is unmatched. Real iron, serious lifters, and coaches who actually pay attention to your form. Best gym I've trained in.", role: "Member · 2 Years" },
  { name: "Priya S.", text: "Dropped 11kg in 4 months while getting stronger. The coaches build programs around you, not the other way around. Highly recommend.", role: "Transformation" },
  { name: "Aditya K.", text: "Clean, premium, and never overcrowded. The equipment quality is top-tier and the community keeps you accountable. Worth every rupee.", role: "Member · 1 Year" },
  { name: "Neha D.", text: "As a beginner I was nervous, but the trainers here made me feel completely comfortable. Six months in and I've never been fitter.", role: "Member" },
  { name: "Karan V.", text: "The strength zone is a dream. Real racks, calibrated plates, chalk allowed. If you're serious about lifting, this is the place.", role: "Powerlifter" },
  { name: "Sana R.", text: "Loved the free trial experience — smooth signup, great facility tour and a proper training session. Signed up the same day.", role: "New Member" },
];

// Real demo contact information
export const CONTACT_PHONE_DISPLAY = "+91 98670 11719";
export const CONTACT_WHATSAPP_DISPLAY = "+91 84337 61032";
export const CONTACT_EMAIL = "info@musclecagefitness.in";
export const CONTACT_ADDRESS_LINES = [
  "The Muscle Cage Fitness,",
  "General Arun Kumar Vaidya Marg,",
  "opp. Agarwal Diagnostic Centre,",
  "Malad, Generak, Goregaon East,",
  "Mumbai, Maharashtra 400063",
];
export const PHONE_TEL = "tel:+919867011719";
export const WHATSAPP_URL = "https://wa.me/918433761032";
export const MAPS_EMBED_URL = "https://www.google.com/maps?q=The+Muscle+Cage+Fitness+General+Arun+Kumar+Vaidya+Marg+Goregaon+East+Mumbai+400063&t=&z=16&ie=UTF8&iwloc=&output=embed";

export const OPENING_HOURS = [
  { day: "Monday – Friday", h: "5:30 AM – 11:00 PM" },
  { day: "Saturday", h: "6:00 AM – 10:00 PM" },
  { day: "Sunday", h: "7:00 AM – 8:00 PM" },
];

// Backwards-compat aliases used across old imports
export const PLACEHOLDER_PHONE = CONTACT_PHONE_DISPLAY;
export const PLACEHOLDER_EMAIL = CONTACT_EMAIL;
export const PLACEHOLDER_WHATSAPP = WHATSAPP_URL;
export const PLACEHOLDER_TEL = PHONE_TEL;
