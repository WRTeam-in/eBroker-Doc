import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Admin Panel",
    icon: "🏢",
    description: (
      <>
        Powerful backend to manage your real estate platform. Control users,
        properties, settings, and every aspect of your business.
      </>
    ),
    link: "/docs/admin/configure-on-server",
  },
  {
    title: "Web Application",
    icon: "🌐",
    description: (
      <>
        Responsive web interface for users to browse, search, and interact with
        property listings. Support for SEO to attract more visitors.
      </>
    ),
    link: "/docs/web/",
  },
  {
    title: "Mobile App",
    icon: "📱",
    description: (
      <>
        Flutter-based applications for Android and iOS. Modern UI, real-time
        chat, property listings, and more for mobile users.
      </>
    ),
    link: "/docs/app/app-key-points",
  },
  {
    title: "Changelog",
    icon: "📝",
    description: (
      <>
        Stay up to date with the latest features, improvements, and fixes in our
        regular updates. View our detailed changelog for all versions.
      </>
    ),
    link: "/docs/changelog",
  }
];

function Feature({ icon, title, description, link }) {
  return (
    <div className={clsx("col col--6")}>
      <Link to={link} className={styles.featureCard}>
        <div className={styles.featureContent}>
          <div className={styles.featureIconWrapper}>
            <span className={styles.featureIcon}>{icon}</span>
          </div>
          <div className={styles.featureTextWrapper}>
            <div className={styles.featureText}>
              <Heading as="h3">{title}</Heading>
              <p>{description}</p>
            </div>
            <div className={styles.featureArrow}>→</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{rowGap: "1rem"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
