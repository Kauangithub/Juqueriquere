import { useEffect } from "react";
import { sincronizarTrilhas } from "../services/sync";
import { sincronizarPontos } from "../services/sync";

export function useSync() {
  useEffect(() => {
    async function run() {
      if (!navigator.onLine) return;

      try {
        await sincronizarTrilhas();
        await sincronizarPontos();
      } catch (err) {
        console.error("Erro na sincronização:", err);
      }
    }

    run();
  }, []);
}