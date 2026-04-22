import { Html5QrcodeScanner } from 'html5-qrcode';

export default function Scanner() {
  const scanner = new Html5QrcodeScanner(
    "reader",
    {
      fps: 10,
      qrbox: { width: 500, height: 500 },
    },
    false
  );

  scanner.render(onScanSuccess, onScanFailure);

  async function onScanSuccess(decodedText: any) {

    window.location.href = `/trilha/${decodedText}`;
    let path = "/" + decodedText;


    if (/^\/trilha\/\d+\/?$/.test(path)) {
      window.location.href = `/${decodedText.replace(/^\/+/, "")}`;
    } else {
      alert("QR inválido");
    }
    scanner.pause();
    scanner.clear();
  }

  async function onScanFailure() {
    console.log("Erro");
    //tratar erro
  }
};