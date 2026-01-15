import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PandaAi",
  description:
    "PandaAi transforme les cours en un cycle d'étude structuré et efficace.",
};

export default function FrLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
