import { Html5QrcodeScanner } from 'html5-qrcode';

export default function Scanner(){
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

  async function onScanFailure() {
    console.log("Erro");
    //tratar erro
  }
};