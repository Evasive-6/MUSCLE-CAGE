import { SCHEDULE } from "@/lib/data";

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Workout Schedule</div>
            <h2 className="font-heading text-white text-5xl sm:text-6xl leading-[0.9] uppercase">
              Weekly <span className="text-[#D90429]">Plan.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-sm">Sample weekly schedule — actual class timings may vary. Contact gym to confirm.</p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[900px] grid grid-cols-7 gap-px bg-white/5 border border-white/10">
            {SCHEDULE.map((day, i) => (
              <div key={day.day} data-testid={`schedule-day-${day.day}`} className="bg-[#0a0a0a] p-5 min-h-[320px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="font-heading text-white text-2xl uppercase">{day.day}</div>
                  <div className="text-[10px] tracking-widest uppercase text-[#D90429]">0{i + 1}</div>
                </div>
                <div className="space-y-2">
                  {day.classes.map((c, ci) => (
                    <div key={ci} className="text-xs text-white/80 flex items-start gap-2 border-l-2 border-[#D90429] pl-2 py-1">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
