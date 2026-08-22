"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { crmLeads, crmStages } from "@/lib/data/crm-demo";
import { LeadCard } from "@/components/demos/crm/LeadCard";
import { LeadDetailPanel } from "@/components/demos/crm/LeadDetailPanel";
import type { CrmLead, CrmStage } from "@/types";

export function CrmDemo() {
  const [leads, setLeads] = useState<CrmLead[]>(crmLeads);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (clearTimer.current) clearTimeout(clearTimer.current);
    };
  }, []);

  function announce(message: string) {
    setNotification(message);
    if (clearTimer.current) clearTimeout(clearTimer.current);
    clearTimer.current = setTimeout(() => setNotification(null), 4000);
  }

  const selectedLead = leads.find((lead) => lead.id === selectedLeadId) ?? null;

  function moveStage(stage: CrmStage) {
    if (!selectedLead) return;
    setLeads((prev) =>
      prev.map((lead) => (lead.id === selectedLead.id ? { ...lead, stage } : lead)),
    );
    announce(`${selectedLead.name} moved to ${stage}.`);
  }

  function toggleTask(taskId: string) {
    if (!selectedLead) return;
    const task = selectedLead.tasks.find((t) => t.id === taskId);
    if (!task) return;
    const newDone = !task.done;

    setLeads((prev) =>
      prev.map((lead) =>
        lead.id !== selectedLead.id
          ? lead
          : {
              ...lead,
              tasks: lead.tasks.map((t) => (t.id === taskId ? { ...t, done: newDone } : t)),
            },
      ),
    );
    announce(newDone ? "Task marked complete." : "Task reopened.");
  }

  function notifyTeam() {
    if (!selectedLead) return;
    announce(`Notification sent to the team about ${selectedLead.name}.`);
  }

  return (
    <Section className="border-b border-edge bg-surface/40">
      <Container>
        <div className="max-w-2xl">
          <Badge>Interactive Demo — Fictional Records</Badge>
          <Heading as="h2" className="mt-4">
            See how a sales workflow becomes software.
          </Heading>
          <Text size="lg" muted className="mt-5">
            A small, working example of a lead pipeline — select a lead, move it through stages,
            and manage its tasks. Every record here is fictional demo data, built to show how
            Aveniq can design software around your sales process.
          </Text>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {crmStages.map((stage) => (
            <div key={stage}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
                {stage}
              </h3>
              <div className="mt-3 flex flex-col gap-3">
                {leads
                  .filter((lead) => lead.stage === stage)
                  .map((lead) => (
                    <LeadCard
                      key={lead.id}
                      lead={lead}
                      isSelected={selectedLeadId === lead.id}
                      onSelect={() => setSelectedLeadId(lead.id)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <LeadDetailPanel
            lead={selectedLead}
            stages={crmStages}
            onMoveStage={moveStage}
            onToggleTask={toggleTask}
            onNotify={notifyTeam}
          />
        </div>

        <p className="mt-4 min-h-[1.5rem] text-sm text-accent" role="status" aria-live="polite">
          {notification}
        </p>
      </Container>
    </Section>
  );
}
