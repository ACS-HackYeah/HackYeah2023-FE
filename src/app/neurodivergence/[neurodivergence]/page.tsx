"use client";
import { useParams } from "next/navigation";
import { Section, Heading, ClickableTile } from "@carbon/react";
import "./page.scss";
import { DataEnrichment, Forum, MailAll } from "@carbon/icons-react";

export default function Page() {
  const { neurodivergence } = useParams();
  return (
    <Section>
      <Heading>
        Support Group |{" "}
        {typeof neurodivergence === "string"
          ? neurodivergence.toUpperCase()
          : neurodivergence}
      </Heading>

      <div className="tiles">
        <ClickableTile href={`/neurodivergence/${neurodivergence}/tips`}>
          <DataEnrichment width={48} height={48} />
          Tips
        </ClickableTile>
        <ClickableTile href={`/neurodivergence/${neurodivergence}/posts`}>
          <MailAll width={48} height={48} />
          Posts
        </ClickableTile>
        <ClickableTile href={`/neurodivergence/${neurodivergence}/chat`}>
          <Forum width={48} height={48} />
          Chat
        </ClickableTile>
      </div>
    </Section>
  );
}
