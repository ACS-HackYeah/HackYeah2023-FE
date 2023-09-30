"use client";
import { useParams } from "next/navigation";
import { Section, Heading, ClickableTile } from "@carbon/react";
import "./page.scss";
import { DataEnrichment, Forum, MailAll } from "@carbon/icons-react";

export default function Page() {
  const { language } = useParams();
  return (
    <Section>
      <Heading>Support Group | Expats in Poland</Heading>
      <Heading>
        LANGUAGE:{" "}
        {typeof language === "string" ? language.toUpperCase() : language}
      </Heading>

      <div className="tiles">
        <ClickableTile href={`/expats-in-poland/${language}/tips`}>
          <DataEnrichment width={48} height={48} />
          Tips
        </ClickableTile>
        <ClickableTile href={`/expats-in-poland/${language}/posts`}>
          <MailAll width={48} height={48} />
          Posts
        </ClickableTile>
        <ClickableTile href={`/expats-in-poland/${language}/chat`}>
          <Forum width={48} height={48} />
          Chat
        </ClickableTile>
      </div>
    </Section>
  );
}
