export interface FeatureType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  phoneAsset: () => JSX.Element;
  icon: (props: { isActive: boolean }) => JSX.Element;
}
