import { useGlobalStore } from '../store/useGlobalStore';
import { broadcastUpdate } from '../sync/useSyncChannel';

export default function Inventory() {
  const inventory = useGlobalStore((state) => state.inventory);
  const setInventory = useGlobalStore((state) => state.setInventory);

  const addItem = () => {
    const newItem = { name: 'Nuevo Item', id: Date.now() };
    const updated = [...inventory, newItem];
    setInventory(updated);
    broadcastUpdate('INVENTORY_UPDATE', updated);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Inventario</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addItem}>Agregar</button>
      <ul className="mt-4">
        {inventory.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}