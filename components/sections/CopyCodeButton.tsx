"use client";

import { useState } from "react";

// Fallback for contexts where the async Clipboard API is unavailable or denied
// (e.g. non-HTTPS origins) - a temporary textarea + execCommand still works there.
function legacyCopy(text: string): boolean {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  let succeeded = false;
  try {
    succeeded = document.execCommand("copy");
  } catch {
    succeeded = false;
  }
  document.body.removeChild(textarea);
  return succeeded;
}

export function CopyCodeButton({ codeText }: { codeText: string }) {
  const [label, setLabel] = useState("Copy");

  async function handleClick() {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(codeText);
        showFeedback("Copied!");
        return;
      } catch {
        // Fall through to the legacy method below
      }
    }

    showFeedback(legacyCopy(codeText) ? "Copied!" : "Press Ctrl+C to copy");
  }

  function showFeedback(text: string) {
    setLabel(text);
    setTimeout(() => setLabel("Copy"), 1500);
  }

  return (
    <button className="copy-btn" onClick={handleClick}>
      {label}
    </button>
  );
}
