"use client";

import { Power } from "lucide-react";

interface MatrixToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export default function MatrixToggle({
  enabled,
  onToggle,
}: MatrixToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={
        enabled
          ? "Turn Matrix effect off"
          : "Turn Matrix effect on"
      }
      aria-pressed={enabled}
      className={`matrix-toggle ${
        enabled ? "matrix-on" : ""
      }`}
    >
      <Power className="h-4 w-4" />

      <span className="matrix-toggle-label">
        MATRIX
      </span>

      <span className="matrix-switch">
        <span />
      </span>

      <span className="text-[9px] font-bold">
        {enabled ? "ON" : "OFF"}
      </span>
    </button>
  );
}
