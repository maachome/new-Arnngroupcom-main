import { motion } from "motion/react";
import {
  Award, TrendingUp, Globe, Quote, Hotel, Building2, Bitcoin, Server, Sprout,
  Waves, Building, Gem, Heart, Shirt, Footprints, Briefcase, Leaf, Sparkles,
  ShieldCheck, Handshake, Video, Plane, Cpu, Users, Factory, Store,
} from "lucide-react";

interface SuccessStory {
  title: string;
  description: string;
  achievement: string;
  region: string;
  icon?: string;
}

interface ServiceSuccessData {
  title: string;
  subtitle?: string;
  stories: SuccessStory[];
}

interface ServiceSuccessProps {
  data: ServiceSuccessData;
  color: string;
}

const iconMap: Record<string, any> = {
  award: Award,
  trending: TrendingUp,
  "trending-up": TrendingUp,
  globe: Globe,
  quote: Quote,
  hotel: Hotel,
  "building-2": Building2,
  bitcoin: Bitcoin,
  server: Server,
  sprout: Sprout,
  waves: Waves,
  building: Building,
  gem: Gem,
  heart: Heart,
  shirt: Shirt,
  footprints: Footprints,
  briefcase: Briefcase,
  leaf: Leaf,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  handshake: Handshake,
  video: Video,
  plane: Plane,
  cpu: Cpu,
  users: Users,
  factory: Factory,
  store: Store,
};

export function ServiceSuccess({ data, color }: ServiceSuccessProps) {
  return (
    <section className="srv-section" style={{ ["--srv-accent" as string]: color }}>
      <div className="srv-container">
        <div className="text-center max-w-[760px] mx-auto mb-10">
          {data.subtitle && <div className="srv-chip mx-auto">{data.subtitle}</div>}
          <h2 className="srv-heading mt-5">{data.title}</h2>
        </div>

        <div className="srv-success-grid">
          {data.stories.map((story, idx) => {
            const Icon = story.icon ? iconMap[story.icon] || Award : Award;
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="srv-story"
              >
                <div className="srv-story-meta">
                  <div className="srv-card-icon">
                    <Icon size={22} />
                  </div>
                  <span className="srv-region">{story.region}</span>
                </div>

                <h3 className="srv-story-title">{story.title}</h3>
                <p className="srv-story-copy">{story.description}</p>

                <div className="srv-achievement">
                  <p className="srv-achievement-label">Key achievement</p>
                  <p className="srv-achievement-copy">{story.achievement}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
