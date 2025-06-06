import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">EZsGE-Core Dashboard</h1>
      <nav className="space-x-4">
        <Link className="text-blue-500 hover:underline" to="/inventory">Inventario</Link>
        <Link className="text-blue-500 hover:underline" to="/reports">Reportes</Link>
      </nav>
    </div>
  );
}