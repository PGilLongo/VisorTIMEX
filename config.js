// config.js (GitHub Pages)
// Definimos CONFIG explícitamente en window para evitar problemas de scope

window.CONFIG = {
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
