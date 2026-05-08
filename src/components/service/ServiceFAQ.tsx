import { motion } from "motion/react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { useState } from "react";
import { ServiceFAQData } from "../../types/service";

interface ServiceFAQProps {
  data?: ServiceFAQData;
  color: string;
  serviceTitle: string;
}

function buildDefaultFAQ(serviceTitle: string): ServiceFAQData {
  return {
    title: "Key Questions",
    items: [
      {
        question: `How does ARNN Group participate in ${serviceTitle}?`,
        answer:
          `ARNN Group approaches ${serviceTitle.toLowerCase()} through structured operating models, sector partnerships, and carefully phased execution aligned with the group’s broader business direction.`,
      },
      {
        question: "What kinds of partnerships are typically considered?",
        answer:
          "Partnerships may include operating relationships, strategic collaborations, supply-side coordination, market-entry support, and other sector-aligned commercial arrangements depending on the business model.",
      },
      {
        question: "Which markets are currently prioritized?",
        answer:
          "Priority markets are evaluated based on sector fit, operating feasibility, partner readiness, and long-term commercial sustainability across regional and international opportunities.",
      },
      {
        question: "How are projects or engagements generally structured?",
        answer:
          "Most engagements move through a staged process covering initial review, scope definition, partner alignment, operating planning, and measured execution with ongoing oversight.",
      },
      {
        question: "What is typically reviewed before a new engagement begins?",
        answer:
          "Initial review usually covers strategic fit, operating feasibility, partner alignment, delivery requirements, compliance considerations, and the long-term value of the opportunity.",
      },
      {
        question: "Does ARNN Group work through direct operations, partnerships, or both?",
        answer:
          "The group may operate directly, through strategic partners, or through blended structures depending on sector requirements, local market conditions, and execution readiness.",
      },
      {
        question: "How is execution quality maintained across different business sectors?",
        answer:
          "Execution is typically guided through defined operating frameworks, experienced sector coordination, structured partner selection, and ongoing oversight throughout delivery.",
      },
      {
        question: "Who should initiate contact for a sector discussion?",
        answer:
          "Relevant partners, institutions, operators, investors, and commercial stakeholders may initiate contact when there is a clear strategic or operating fit with the sector focus.",
      },
    ],
  };
}

export function ServiceFAQ({ data, color, serviceTitle }: ServiceFAQProps) {
  const faqData = data ?? buildDefaultFAQ(serviceTitle);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="srv-section" style={{ ["--srv-accent" as string]: color }}>
      <div className="srv-container">
        <div className="srv-faq-shell">
          <div className="srv-faq-header">
            <div className="srv-chip">
              <MessageSquare size={14} />
              <span>Business Q&amp;A</span>
            </div>
            <h2 className="srv-heading mt-5">{faqData.title}</h2>
            <p className="srv-nav-copy mt-4 max-w-[56ch]">
              Core questions about engagement approach, partnerships, market focus, and delivery structure.
            </p>
          </div>

          <div className="srv-faq-list">
            {faqData.items.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={`${item.question}-${idx}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className={`srv-faq-item ${isOpen ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="srv-faq-trigger"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="srv-faq-question">{item.question}</span>
                    <ChevronDown
                      size={18}
                      className={`srv-faq-icon ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen ? (
                    <div className="srv-faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  ) : null}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
