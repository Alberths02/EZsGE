import { useEffect } from 'react';
import { useGlobalStore } from '../store/useGlobalStore';

const channel = new BroadcastChannel('ezsge-core');

export function useSyncChannel() {
  const { setInventory, setReports } = useGlobalStore.getState();

  useEffect(() => {
    channel.onmessage = ({ data }) => {
      if (data.type === 'INVENTORY_UPDATE') setInventory(data.payload);
      else if (data.type === 'REPORT_UPDATE') setReports(data.payload);
    };
    return () => channel.close();
  }, []);
}

export function broadcastUpdate(type, payload) {
  channel.postMessage({ type, payload });
}