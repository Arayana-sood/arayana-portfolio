/* ─────────────────────────────────────────────────────────────────────────
   ABOUT DATA
   Honest, realistic, and reflective of Arayana's actual stage and focus.
   No inflated claims or exaggerated labels.
   ─────────────────────────────────────────────────────────────────────────*/

export interface ContextItem {
  label: string;
  value: string;
  detail: string;
}

export const aboutData = {
  headline: "Turning ideas into functional software, from data to deployment.",
  paragraphs: [
    "I'm a 3rd-year B.Tech student with a minor in Data Science, graduating in 2028. My interest sits at the intersection of data-driven systems and usable software. Rather than treating theory and development as separate tracks, I enjoy connecting them into real tools.",
    "My work spans machine learning models, full-stack applications, system-level concepts in Linux and C, and data analytics dashboards. I value practical problem-solving: taking an unstructured challenge, figuring out the architecture, and building something responsive and functional.",
  ],
  contextCards: [
    {
      label: "Current Stage",
      value: "3rd-Year B.Tech · 2028",
      detail: "Undergraduate with Data Science Minor",
    },
    {
      label: "Core Interests",
      value: "Data Science · ML · Analytics",
      detail: "Predictive modeling, data pipelines & insights",
    },
    {
      label: "Engineering",
      value: "Full Stack & Systems",
      detail: "React, Python, FastAPI, Linux & OS internals",
    },
    {
      label: "Approach",
      value: "Hands-on & Practical",
      detail: "Building usable projects over pure theory",
    },
  ] as ContextItem[],
};
