import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function Scanner({ onClose }: { onClose: () => void }) {
  const qrRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    if (qrRef.current) return; 
    const html5QrCode = new Html5Qrcode("reader");
    qrRef.current = html5QrCode;

    const start = async () => {
      await html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 250, height: 250 } },
        (decodedText) => {
          const path = decodedText.startsWith("/")
            ? decodedText
            : `/${decodedText}`;

          if (/^\/trilha\/\d+\/?$/.test(path)) {
            window.location.href = path;
          } else {
            alert("QR inválido");
          }

          stop();
          onClose();
        },
        () => {}
      );
    };

    const stop = async () => {
      try {
        await html5QrCode.stop();
        html5QrCode.clear();
        qrRef.current = null;
      } catch {}
    };

    start();

    return () => {
      stop();
    };
  }, []);

  return (
    <div className="leitorQR">
      <div className="container vertical">
        <h1>Aponte a câmera<br></br>para um código QR</h1>
        <div id="reader" />
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}