import { DotsGrid } from "@/components/DotsGrid/DotsGrid";

export const metadata = {
  title: 'Portfolio - About',
  description: 'The about page of my portfolio.',
}

export default function About() {
  return (
    <div className="relative min-h-screen bg-zinc-900 flex items-center p-12">

      <div className="absolute inset-0 overflow-visible">
        <DotsGrid dotColor="#2e2e2e" activeColor="#e3e3e3" opacity={1} dotSize ="0.8vw" />
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-10 w-full max-w-6xl mx-auto">
    
            <div className="flex flex-col gap-4 bg-zinc-850/60 backdrop-blur-[3px] rounded-2xl p-8 border-[3px] border-[#F2360C]/5">
              <h1 className="leading-none" style={{ fontFamily: 'var(--font-orbitron)' }}>
                <span className="block text-white text-8xl font-black">RYAN</span>
                <span className="block text-zinc-400 text-7xl font-black">SOKOLOWSKY</span>
              </h1>
              <p className="text-zinc-200 text-sm leading-relaxed tracking-[0.2em] uppercase ">
                AI Solutions Engineer and Software Engineering student at Ensign College bridging technical development and commercial strategy to optimize the bottom line. Architecting scalable Python pipelines, cost-saving LLM orchestration, and other AI integrations. Cross-functional team leader leveraging marketing analytics and ROAS expertise to eliminate bottlenecks and transform complex code into measurable business growth.
              </p>
            </div>

            <div className="flex flex-col gap-4 bg-zinc-850/60 backdrop-blur-[3px] rounded-2xl p-8 border-[3px] border-[#F2360C]/5">
              <h1 className="leading-none" style={{ fontFamily: 'var(--font-orbitron)' }}>
                <span className="block text-white text-6xl font-black">PROJECTS</span>
              </h1>
              <div>
                <h2 className="text-zinc-300 text-2xl font-bold tracking-[0.2em] uppercase">
                 Subaru Lead Classification Demo
                </h2>
                <p className="text-zinc-200 text-xs leading-relaxed tracking-[0.2em] uppercase max-w-2xl">
                  <span className="text-[#BF0413] font-bold text-4xl leading-[0] relative top-[8px]">·</span>
                  Built a Python-based machine learning prototype using scikit-learn designed to process multi-variable dealership datasets and simulate predicting walking-buyer intent with an 87% target accuracy
                </p>
              </div>
              <div>
                <h2 className="text-zinc-300 text-2xl font-bold tracking-[0.2em] uppercase">
                 Semantic Vector Layer for LLMs
                </h2>
                <p className="text-zinc-200 text-xs leading-relaxed tracking-[0.2em] uppercase max-w-2xl">
                  <span className="text-[#BF0413] font-bold text-4xl leading-[0] relative top-[8px]">·</span>
                  Optimizing a 3D semantic vector space optimized via nightly Python cron-jobs, expanding model capacity to map entire English language while increasing semantic accuracy by 24% over a multi-month autonomous training cycle
                </p>
              </div>
              <div>
                <h2 className="text-zinc-300 text-2xl font-bold tracking-[0.2em] uppercase">
                 AI Token Optimization & Workflow Engine
                </h2>
                <p className="text-zinc-200 text-xs leading-relaxed tracking-[0.2em] uppercase max-w-2xl">
                  <span className="text-[#BF0413] font-bold text-4xl leading-[0] relative top-[8px]">·</span>
                  Created a Python-based orchestration system utilizing dual-model validation logic to reduce LLM API token consumption by 32% and minimize output hallucinations                </p>
              </div>
              <div>
                <h2 className="text-zinc-300 text-2xl font-bold tracking-[0.2em] uppercase">
                 Automated Video Asset Synthesis Pipeline
                </h2>
                <p className="text-zinc-200 text-xs leading-relaxed tracking-[0.2em] uppercase max-w-2xl">
                  <span className="text-[#BF0413] font-bold text-4xl leading-[0] relative top-[8px]">·</span>
                  Developed a Python-based video generation pipeline integrating the Pexels API to combine stock and user-submitted footage for client Facebook ad campaigns, streamlining ad creative production and reducing manual editing by an estimated 70%                </p>
              </div>


          </div>

          <div className="flex flex-col gap-4 bg-zinc-850/60 backdrop-blur-[3px] rounded-2xl p-8 border-[3px] border-[#F2360C]/5">
              <h1 className="leading-none" style={{ fontFamily: 'var(--font-orbitron)' }}>
                <span className="block text-white text-6xl font-black">EXPERIENCE</span>
              </h1>

              <div>
                <h2 className="text-zinc-300 text-2xl font-bold tracking-[0.2em] uppercase">
                 AI Solutions Engineer Intern | Interior Solutions
                </h2>
                <p className="text-zinc-200 text-xs leading-relaxed tracking-[0.2em] uppercase max-w-2xl">
                  <span className="text-[#BF0413] font-bold text-4xl leading-[0] relative top-[8px]">·</span>
                  Architecting custom GPT implementations and tailored Python scripts to automate multi-channel workflows; spanning email automation, product matching, and project analysis for a commercial furniture store
                </p>
              </div> 
              <div>
                <h2 className="text-zinc-300 text-2xl font-bold tracking-[0.2em] uppercase">
                 Member Service Representative II | UCCU
                </h2>
                <p className="text-zinc-200 text-xs leading-relaxed tracking-[0.2em] uppercase max-w-2xl">
                  <span className="text-[#BF0413] font-bold text-4xl leading-[0] relative top-[8px]">·</span>
                  Guided an average of 15 customers weekly through loan application process, contributing to approximately 4 funded loans per week
                </p>
                <p className="text-zinc-200 text-xs leading-relaxed tracking-[0.2em] uppercase max-w-2xl">
                  <span className="text-[#BF0413] font-bold text-4xl leading-[0] relative top-[8px]">·</span>
                  Utilized Excel to execute complex income calculations and debt-to-income logic, while auditing high-volume branch transactions to ensure 100% precision in monetary data entry                </p>
              </div> 
              <div>
                <h2 className="text-zinc-300 text-2xl font-bold tracking-[0.2em] uppercase">
                 Spanish Ads & AI Optimization Manager | THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS
                </h2>
                <p className="text-zinc-200 text-xs leading-relaxed tracking-[0.2em] uppercase max-w-2xl">
                  <span className="text-[#BF0413] font-bold text-4xl leading-[0] relative top-[8px]">·</span>
                  Architected an automated AI feedback loop utilizing ChatGPT to optimize targeting and ad creative, reducing cost-per- conversion to $4,000, outperforming organization’s premium benchmark of $10,000 by 60%                </p>
                <p className="text-zinc-200 text-xs leading-relaxed tracking-[0.2em] uppercase max-w-2xl">
                  <span className="text-[#BF0413] font-bold text-4xl leading-[0] relative top-[8px]">·</span>
                  Deployed generative AI tools to conduct market research and scale dynamic A/B testing variations, utilizing cross-cultural data segmentation to align campaigns with distinct Spanish-speaking demographics and expand weekly engagement by 35%                </p>
                <p className="text-zinc-200 text-xs leading-relaxed tracking-[0.2em] uppercase max-w-2xl">
                  <span className="text-[#BF0413] font-bold text-4xl leading-[0] relative top-[8px]">·</span>
                  Led a 6-person team utilizing prompt engineering and demographic segmentation, resolving critical Tableau and Meta Ads data mismatches to protect telemetry integrity                </p>
              </div> 

          </div>

    </div>
  </div>

  );
}
