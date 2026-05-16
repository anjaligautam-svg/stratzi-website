"use client";

import { BarChart3, FileSearch, Database, Microscope } from "lucide-react";
import {
  OrbitalTimeline,
  type OrbitalItem,
} from "@/components/ui/orbital-timeline";

/**
 * CaseStudiesOrbital — client-component wrapper.
 *
 * Owns the orbital items definition because lucide-react icons are React
 * function components, which can't be serialized across the server →
 * client boundary. Defining them in a "use client" file keeps everything
 * inside the client world.
 */

const orbitalItems: OrbitalItem[] = [
  {
    id: 1,
    title: "Financial Reporting",
    sector: "GenAI",
    detail:
      "Autonomous agents generate dynamic reports by pulling from SQL, file storage, and the open web.",
    icon: BarChart3,
  },
  {
    id: 2,
    title: "Loan Approval",
    sector: "Document Automation",
    detail:
      "Automated pipeline extracts structured data from bank statements and verifies document authenticity.",
    icon: FileSearch,
  },
  {
    id: 3,
    title: "RAG at Scale",
    sector: "Retrieval Systems",
    detail:
      "Sparse-embedding RAG that matches dense retrieval performance with a fraction of the memory.",
    icon: Database,
  },
  {
    id: 4,
    title: "Biomarker Discovery",
    sector: "Healthcare · Genomics",
    detail:
      "End-to-end tool that makes cancer biomarker discovery accessible to scientists and clinicians.",
    icon: Microscope,
  },
];

export function CaseStudiesOrbital() {
  return <OrbitalTimeline items={orbitalItems} radius={120} />;
}

export const caseStudiesCount = orbitalItems.length;
