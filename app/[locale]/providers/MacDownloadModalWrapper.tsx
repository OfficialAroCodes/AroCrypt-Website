import MacDownloadModal from '../components/MacDownloadModal';
import { useModal } from './MacModalProvider';

export default function MacDownloadModalWrapper() {
  const { macModal, macDownloadLink, closeMacModal } = useModal();

  return (
    <MacDownloadModal
      downloadLink={macDownloadLink}
      isShown={macModal}
      onClose={closeMacModal}
    />
  );
}
