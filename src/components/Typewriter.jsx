import React, { useEffect, useState } from "react";

/**
 * Função que cria o efeito de digitação
 * @param {Object} props - Propriedades do componente
 * @returns {JSX.Element} Componente com efeito de digitação
 */
export default function Typewriter({ children, className = "" }) {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setShow(false);
    setDone(false);
    const timeout = setTimeout(() => setShow(true), 10);
    // Duração da animação de digitação
    const doneTimeout = setTimeout(() => setDone(true), 2600);
    return () => {
      clearTimeout(timeout);
      clearTimeout(doneTimeout);
    };
  }, []);

  if (!show) return <span style={{ opacity: 0 }}>{children}</span>;

  return (
    <span className={`typewriter ${done ? "typewriter-done" : ""} ${className}`}>{children}</span>
  );
}