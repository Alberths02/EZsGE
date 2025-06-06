import { useGlobalStore } from '../store/useGlobalStore';
import { broadcastUpdate } from '../sync/useSyncChannel';

export default function Reports() {
  const reports = useGlobalStore((state) => state.reports);
  const setReports = useGlobalStore((state) => state.setReports);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Reportes</h2>
      <pre>{JSON.stringify(reports, null, 2)}</pre>
    </div>
  );
}