// Convierte las referencias a carpetas de frentes escritas como código en los .md
// (por ejemplo `05-auditoria` o `04-design-system/README.md`) en enlaces con el nombre
// de la página del portal ("05 · Auditoría"). En GitHub los .md se siguen viendo igual.
//
//   `05-auditoria`, `05-auditoria/` o `05-auditoria/README.md` -> 05 · Auditoría (página del frente)
//   `00-resumen/index.md`                                       -> Portada del portal
//   `01-investigacion/competencia/RES-clearly.md`               -> 01 · Investigación › título del documento
//   `05-auditoria/bitacora-auditoria-ux/` (carpeta u otro archivo) -> 05 · Auditoría › `bitacora-auditoria-ux/`
import fs from 'node:fs';
import path from 'node:path';

const RAIZ = path.resolve(process.cwd(), '..');
const PATRON = /^(0[0-9]-[a-z0-9-]+)(?:\/(.*))?$/;

const slug = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function leerTitulo(archivo) {
  let texto = '';
  try {
    texto = fs.readFileSync(archivo, 'utf8');
  } catch {
    return null;
  }
  const fm = texto.match(/^---\n([\s\S]*?)\n---/);
  if (fm) {
    const t = fm[1].match(/^titulo:\s*["']?(.+?)["']?\s*$/m);
    if (t) return t[1];
  }
  const h1 = texto.match(/^#\s+(.+)$/m);
  return h1 ? h1[1].trim() : null;
}

const cacheFrentes = new Map();
function frente(id) {
  if (cacheFrentes.has(id)) return cacheFrentes.get(id);
  const readme = path.join(RAIZ, id, 'README.md');
  let dato = null;
  if (id === '00-resumen') {
    // La portada del portal sale de 00-resumen/index.md
    dato = { url: '/', nombre: 'Portada del portal' };
  } else if (fs.existsSync(readme)) {
    const texto = fs.readFileSync(readme, 'utf8');
    const titulo = leerTitulo(readme) ?? id;
    const numero = (texto.match(/^numero:\s*["']?(\d+)["']?\s*$/m) ?? [])[1] ?? id.slice(0, 2);
    dato = { url: `/${id}/`, nombre: `${numero} · ${titulo}` };
  }
  cacheFrentes.set(id, dato);
  return dato;
}

const texto = (value) => ({ type: 'text', value });
const enlace = (href, hijos) => ({ type: 'element', tagName: 'a', properties: { href }, children: hijos });
const codigo = (value) => ({ type: 'element', tagName: 'code', properties: {}, children: [texto(value)] });

/** Devuelve los nodos que reemplazan al <code>, o null si no es una referencia a un frente. */
export function reemplazo(valor, dentroDeEnlace) {
  const m = valor.trim().match(PATRON);
  if (!m) return null;
  const [, id, restoCrudo = ''] = m;
  const f = frente(id);
  if (!f) return null;
  const resto = restoCrudo.replace(/\/$/, '') === '' ? '' : restoCrudo;
  const conEnlace = (href, hijos) => (dentroDeEnlace ? hijos : [enlace(href, hijos)]);

  if (resto === '' || /^readme\.md$/i.test(resto) || (id === '00-resumen' && /^index\.md$/i.test(resto))) return conEnlace(f.url, [texto(f.nombre)]);

  if (/\.md$/i.test(resto) && fs.existsSync(path.join(RAIZ, id, resto))) {
    const tituloDoc = leerTitulo(path.join(RAIZ, id, resto)) ?? resto;
    const url = `/${id}/${resto.replace(/\.md$/i, '').split('/').map(slug).join('/')}/`;
    return conEnlace(url, [texto(`${f.nombre} › ${tituloDoc}`)]);
  }

  return [...conEnlace(f.url, [texto(f.nombre)]), texto(' › '), codigo(resto)];
}

function recorrer(nodo, dentroDeEnlace) {
  if (!nodo.children) return;
  const esEnlace = dentroDeEnlace || (nodo.type === 'element' && nodo.tagName === 'a');
  const nuevos = [];
  for (const hijo of nodo.children) {
    if (hijo.type === 'element' && hijo.tagName === 'pre') {
      nuevos.push(hijo);
      continue;
    }
    if (hijo.type === 'element' && hijo.tagName === 'code' && hijo.children?.length === 1 && hijo.children[0].type === 'text') {
      const r = reemplazo(hijo.children[0].value, esEnlace);
      if (r) {
        nuevos.push(...r);
        continue;
      }
    }
    recorrer(hijo, esEnlace);
    nuevos.push(hijo);
  }
  nodo.children = nuevos;
}

export default function rehypeFrentes() {
  return (arbol) => recorrer(arbol, false);
}
