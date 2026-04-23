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
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Escaneie o QR Code</h2>
        <div id="reader" />
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle: React.CSSProperties = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",

  width: "90%",
  maxWidth: "400px",

  maxHeight: "80vh",
  overflow: "hidden",
};