import styles from './index.module.css';

interface FeatureProps {
  id: string;
  text: string;
  icon: (props: { isActive: boolean }) => JSX.Element;
  itemClicked: (id: string) => void;
  isActive: boolean;
}

export function Feature({
  id,
  icon: Icon,
  text,
  isActive,
  itemClicked,
}: FeatureProps) {
  const featureContentStyles = isActive
    ? styles.featureContentActive
    : styles.featureContent;

  return (
    <button
      onClick={() => itemClicked(id)}
      type="button"
      className={styles.featureButton}
    >
      <div className={featureContentStyles}>
        <div className={styles.featureItemIcon}>
          <Icon isActive={isActive} />
        </div>
        <div className={styles.featureItemText}>{text}</div>
      </div>
    </button>
  );
}
