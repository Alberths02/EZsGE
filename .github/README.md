# EZsGE-Core

Sistema modular de gestión de inventario con sincronización entre pestañas.

## 🚀 Instalación

```bash
npm install
npm run dev
```

## 🧠 Estructura

- `modules/` → Módulos independientes como Inventario y Reportes.
- `store/` → Estado global con Zustand.
- `sync/` → Comunicación entre pestañas con BroadcastChannel.

## 🔄 Sincronización en Tiempo Real

Cada acción en una pestaña se sincroniza automáticamente con las demás usando `BroadcastChannel`.

## 🌐 Subida a GitHub

1. Crea un repositorio en GitHub.
2. Sube el contenido de esta carpeta.
3. Asegura que `vite.config.js` y `package.json` estén correctamente configurados.