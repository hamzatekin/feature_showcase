import styles from './App.module.css';
import { useState } from 'react';

import { Feature } from './components/Feature';
import { FeatureShowcase } from './components/FeatureShowcase';
import { FeatureType } from './types';
import { CertifiedIcon } from './components/icons/CertifiedIcon';

import { ScannerPhone } from './components/phones/ScannerPhone';
import { SignAndStampPhone } from './components/phones/SignAndStampPhone';
import { BatchScanningPhone } from './components/phones/BatchScannningPhone';

import { ExportPhone } from './components/phones/ExportPhone';
import { AdvancedFiltersPhone } from './components/phones/AdvancedFiltersPhone';
import { ExportIcon } from './components/icons/ExportIcon';
import { DocumentIcon } from './components/icons/DocumentIcon';
import { FiltersIcon } from './components/icons/FiltersIcon';
import { ScannerIcon } from './components/icons/ScannerIcon';

// icons and phone assets can be lazy loaded to improve performance
export const featureList: FeatureType[] = [
  {
    id: 'document-scanner',
    title: 'Scan with Ease',
    subtitle: 'Document Scanner',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',

    icon: DocumentIcon,
    phoneAsset: ScannerPhone,
  },
  {
    id: 'sign-stap',
    subtitle: 'Sign & Stamp',
    title: 'One-Tap Focus',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    icon: CertifiedIcon,
    phoneAsset: SignAndStampPhone,
  },
  {
    id: 'batch-scanning',
    subtitle: 'Batch Scanning',
    title: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    icon: ScannerIcon,
    phoneAsset: BatchScanningPhone,
  },
  {
    id: 'advanced-filters',
    subtitle: 'Advanced Filters',
    title: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    icon: FiltersIcon,
    phoneAsset: AdvancedFiltersPhone,
  },
  {
    id: 'export-share',
    subtitle: 'Export & Share',
    title: 'All-Round Conversion',
    description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    icon: ExportIcon,
    phoneAsset: ExportPhone,
  },
];

export function App() {
  const [selectedFeatureId, setSelectedFeatureId] = useState(featureList[0].id);

  const itemClicked = (id: string) => {
    setSelectedFeatureId(id);
  };

  const selectedFeature = featureList.find(
    (item) => item.id === selectedFeatureId,
  )!;

  return (
    <main className={styles.main}>
      <FeatureShowcase
        description={selectedFeature.description}
        subtitle={selectedFeature.subtitle}
        title={selectedFeature.title}
        icon={selectedFeature.icon}
        id={selectedFeature.id}
        phoneAsset={selectedFeature.phoneAsset}
      />
      <div className={styles.featureContainer}>
        {featureList.map(({ id, subtitle, icon }) => (
          <Feature
            key={id}
            id={id}
            icon={icon}
            text={subtitle}
            itemClicked={itemClicked}
            isActive={selectedFeatureId === id}
          />
        ))}
      </div>
    </main>
  );
}
