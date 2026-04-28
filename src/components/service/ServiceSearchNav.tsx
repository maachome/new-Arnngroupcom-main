import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router-dom";
import { getServiceBySlug } from "../../data/servicesData";
import { ArrowRight, Compass, Sparkles } from "lucide-react";

const categories = [
  { slug: "economic-empowerment", name: "Economic Empowerment", color: "#3b82f6" },
  { slug: "real-estate-development", name: "Real Estate Development", color: "#8b5cf6" },
  { slug: "ict", name: "Information & Communication Technologies", color: "#10b981" },
  { slug: "agro-aquaculture", name: "Agro-Aquaculture", color: "#10b981" },
  { slug: "fashion-industries", name: "Fashion Industries", color: "#ec4899" },
  { slug: "empowering-global-talent", name: "Empowering Global Talent", color: "#06b6d4" },
  { slug: "healthcare-access", name: "Global Healthcare", color: "#f43f5e" },
  { slug: "food-safety", name: "A Global Initiative for World Food Safety", color: "#16a34a" },
  { slug: "luxury-furniture", name: "Furniture and Furnishing Sectors", color: "#92400e" },
  { slug: "fb-segments", name: "F&B Segments", color: "#dc2626" },
];

export function ServiceSearchNav() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const currentService = slug ? getServiceBySlug(slug) : undefined;
  const serviceColor = currentService?.color || "#2d3e5f";
  const currentIndex = categories.findIndex((category) => category.slug === slug);
  const nextCategory =
    currentIndex >= 0 ? categories[(currentIndex + 1) % categories.length] : categories[0];

  return (
    <section
      id="service-categories"
      className="srv-section"
      style={{ ["--srv-accent" as string]: serviceColor }}
    >
      <div className="srv-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="srv-category-shell"
        >
          <div className="srv-category-hero">
            <div>
              <div className="srv-chip">
                <Compass size={14} />
                <span>Browse by category</span>
              </div>
              <h3 className="srv-heading mt-5">Continue through the group’s business verticals.</h3>
              <p className="srv-nav-copy mt-4 max-w-[54ch]">
                Move across the portfolio through one shared navigation surface instead of a loose
                collection of end-of-page links.
              </p>
            </div>

            <button
              className="srv-category-spotlight"
              onClick={() => navigate(`/services/${nextCategory.slug}`)}
            >
              <div className="srv-category-spotlight-top">
                <div className="srv-card-icon">
                  <Sparkles size={20} />
                </div>
                <span>Next category</span>
              </div>
              <strong>{nextCategory.name}</strong>
              <div className="srv-category-spotlight-bottom">
                <span>Open service page</span>
                <ArrowRight size={18} />
              </div>
            </button>
          </div>

          <div className="srv-category-board">
            {categories.map((category, index) => {
              const isActive = slug === category.slug;
              return (
                <motion.button
                  key={category.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  onClick={() => navigate(`/services/${category.slug}`)}
                  className={`srv-category-tile ${isActive ? "active" : ""}`}
                  style={{ ["--srv-tile-accent" as string]: category.color }}
                >
                  <div className="srv-category-tile-top">
                    <span className="srv-category-index">{`0${index + 1}`}</span>
                    <ArrowRight size={16} />
                  </div>
                  <div className="srv-category-copy">
                    <span className="srv-category-name">{category.name}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
