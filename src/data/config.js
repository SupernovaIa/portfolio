import { Home, FolderGit2, Compass, User, Mail } from "lucide-react";

export const VIEW = 900;
export const CENTER = VIEW / 2;
export const RING_RADII = [0, 130, 230, 340];
export const ROTATION_SPEEDS = [0, 90, 140, 200];

export const STATUS_COLORS = {
  completed: { fill: "#0a3a4a", stroke: "#22d3ee", glow: "#22d3ee", text: "#e0f7fa" },
  active:    { fill: "#0891b2", stroke: "#67e8f9", glow: "#67e8f9", text: "#ffffff" },
  available: { fill: "#0a2540", stroke: "#475569", glow: "#94a3b8", text: "#cbd5e1" },
  locked:    { fill: "#0a1628", stroke: "#1e293b", glow: "#1e293b", text: "#475569" },
};

export const NAV = [
  { id: "home",     label: "Inicio",    Icon: Home },
  { id: "projects", label: "Proyectos", Icon: FolderGit2 },
  { id: "stack",    label: "Stack",     Icon: Compass },
  { id: "about",    label: "Sobre mí",  Icon: User },
  { id: "contact",  label: "Contacto",  Icon: Mail },
];
