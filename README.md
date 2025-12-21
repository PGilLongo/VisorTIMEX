# Visor de mapa desde Google Sheet (lat,lng en una celda)

Este proyecto permite abrir un mapa desde **cualquier dispositivo** (móvil/tablet/PC) y mostrar puntos
leídos desde un Google Sheet.

En tu Sheet las coordenadas vienen en una sola celda con formato:

`39.842784,-4.089569`

## Archivos
- `index.html` → visor del mapa
- `config.js` → configuración (URL del CSV + nombre de columna de coordenadas)

## Paso 1: Publicar el Sheet como CSV
En Google Sheets:
1. **Archivo → Compartir → Publicar en la web**
2. Selecciona la pestaña: **INTERVENCIONES**
3. Formato: **CSV**
4. Publicar y copia la URL

La URL suele parecerse a:
`https://docs.google.com/spreadsheets/d/e/XXXX/pub?output=csv`

## Paso 2: Configurar
Abre `config.js` y pega la URL en:

```js
SHEET_CSV_URL: "PEGA_AQUI_TU_CSV"
```

Y asegúrate de que `COL_COORDS` coincide EXACTAMENTE con el encabezado del Sheet, por ejemplo:
- `PUNTO DE ACTIVACION`
- `PUNTO DE INTERVENCION`
- `PUNTO DE FINALIZACIÓN`
- `PUNTO DE DISPONIBLES`

## Paso 3: Subir a un hosting (para abrirlo en cualquier dispositivo)
Sube `index.html` y `config.js` a un hosting estático (Netlify / GitHub Pages / Vercel).

⚠️ Importante: no funciona abriendo con doble clic (file://). Debe estar en una URL http(s).

## Comprobación rápida
- Abre la URL pública del visor
- Deberías ver el mapa y los puntos
- Si sale el mapa pero no puntos:
  - revisa que el Sheet esté publicado
  - abre la URL CSV en el navegador y confirma que ves un CSV
  - verifica `COL_COORDS` y el formato `lat,lng`
