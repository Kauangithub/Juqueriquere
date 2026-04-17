import data from './data.json';
import { Html5QrcodeScanner } from 'html5-qrcode';

interface PontoInteresse {
  planta: string;
  latitude: string;
  longitude: string;
}

interface Trilha {
  id: number;
  nome: string;
  cor_identificacao: string;
  descricao: string;
  pontos_interesse: PontoInteresse[];
  pontos_no_mapa: number[];
}

function getTrilhaById(id: string): Trilha | undefined {
  return data.trilhas.find(t => t.id === Number(id));
}

function renderTrilha(trilha: Trilha): void {
  document.body.innerHTML = `
    <h1>${trilha.nome}</h1>
    <p><strong>Identificação:</strong> ${trilha.cor_identificacao}</p>
    <p><strong>Descrição:</strong> ${trilha.descricao}</p>
    <p><strong>Pontos no mapa:</strong> ${trilha.pontos_no_mapa.join(', ')}</p>
    <h2>Pontos de Interesse</h2>
    <ul>
      ${trilha.pontos_interesse.map(p => `
        <li>
          ${p.planta}
          ${p.latitude && p.longitude
      ? ` — Lat: ${p.latitude}, Lon: ${p.longitude}`
      : ''}
        </li>
      `).join('')}
    </ul>
  `;
}

function renderNotFound(id: string) {
  document.body.innerHTML = `<p>Trilha com id "${id}" não encontrada.</p>`;
}

function renderHome() {
  document.body.innerHTML = `
    <h1>${data.parque}</h1>
    <p>${data.localizacao}</p>
    <h2>Trilhas disponíveis</h2>
    <div id=reader></div>

    <ul>
      ${data.trilhas.map(t => `
        <li><a href="/trilhas/${t.id}">${t.nome}</a></li>
      `).join('')}
    </ul>

    

  `;


  const scanner = new Html5QrcodeScanner(
    "reader",
    {
      fps: 10,
      qrbox: { width: 500, height: 500 },
    },
    false
  );

  scanner.render(onScanSuccess, onScanFailure);

  function onScanSuccess(decodedText: any) {
    console.log("QR lido:", decodedText);

    // código sem verificação, utilizar apenas para teste
    window.location.href = `${decodedText}`;

    // Código utilizando if else
    // if (decodedText.startsWith("trilha")) {
    //   window.location.href = `${decodedText}`;
    // } else {
    //   alert("QR inválido");

    // }

    scanner.pause();
  }

  function onScanFailure() {
    //tratar erro
  }


}

export default function route() {
  const path = window.location.pathname;
  const match = path.match(/^\/trilhas\/(\d+)\/?$/);

  if (match) {
    const id = match[1];
    const trilha = getTrilhaById(id);
    trilha ? renderTrilha(trilha) : renderNotFound(id);
  } else {
    renderHome();
  }
}

// Handle navigation via History API without full page reloads
document.addEventListener('click', (e) => {
  if (!e.target) return;
  const anchor = (e.target as Element).closest('a[href^="/trilhas/"]');
  if (anchor) {
    e.preventDefault();
    history.pushState(null, '', (anchor as HTMLAnchorElement).href);
    route();
  }
});




window.addEventListener('popstate', route);

route();