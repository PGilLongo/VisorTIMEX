// config.js (GitHub Pages)
// IMPORTANTE:
// - Este archivo debe estar en el MISMO nivel que index.html.
// - Si cambias algo y no se actualiza, recarga con Ctrl+F5.
// - Tu Sheet ya está accesible vía CSV export.

const CONFIG = {
  // URL CSV (pestaña INTERVENCIONES, gid=0)
  SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/1YmawIXYy05HKHLimWPLOSjWesamv-mwhot5ZNnselkA/export?format=csv&gid=0",

  // Columna con coordenadas "lat,lng"
  COL_COORDS: "PUNTO DE ACTIVACION",

  // Columna opcional para mostrar en el popup
  COL_LABEL: "INFORME",

  // Estilo del punto
  MARKER_COLOR: "#dc2626",
  MARKER_RADIUS: 6,
  MARKER_FILL_OPACITY: 0.85
};
