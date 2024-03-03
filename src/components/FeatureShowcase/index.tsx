import styles from './index.module.css';
import { FeatureType } from '../../types';
import { Variants, motion } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

export function FeatureShowcase({
  description,
  subtitle,
  title,
  id,
  phoneAsset: PhoneAsset,
}: FeatureType) {
  return (
    <div key={id} className={styles.container}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.showcaseText}
      >
        <div className={styles.headerContainer}>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <h1 className={styles.heading}>{title}</h1>
        </div>
        <div className={styles.subtextContainer}>
          <span className={styles.subtext}>{description}</span>
        </div>
        <div className={styles.learnMorebuttonContainer}>
          <button type="button" className={styles.learnMoreButton}>
            Learn More
          </button>
        </div>
      </motion.div>
      <div className={styles.showcaseImage}>
        <PhoneAsset />
      </div>
    </div>
  );
}
