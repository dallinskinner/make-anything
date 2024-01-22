import { FormEvent, useState } from "react";
import { Form } from "react-daisyui";
import { RadioGroup } from "./RadioGroup";
import { QuestionHeading } from "./Typography";
import { TextInput } from "./TextInput";
import { QuestionsProps } from "@/types";
import { ContactQuestions } from "./ContactQuestions";
import { Card } from "./Card";

export function LeagueQuestions({
  name,
  onSubmit,
  isSubmitting,
}: QuestionsProps) {
  const [leagueType, setLeagueType] = useState("");
  const [leagueName, setLeagueName] = useState("");
  const [leagueCountry, setLeagueCountry] = useState("");
  const [contactType, setContactType] = useState("");
  const [contactAddress, setContactAddress] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const emailContent = `Name: ${name}
    Thing: League
    Sport: ${leagueType}
    League Name: ${leagueName}
    League Country: ${leagueCountry}
    Contact Preference: ${contactType}
    Email/Number: ${contactAddress}`;

    onSubmit(emailContent);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <QuestionHeading>What type of league?</QuestionHeading>
      <Card>
        <RadioGroup
          name="leagueType"
          onChange={setLeagueType}
          value={leagueType}
          options={["Hockey", "Soccer", "Baseball", "Football", "Tennis"]}
        />
      </Card>

      {leagueType && (
        <>
          <QuestionHeading>What is the name of your league?</QuestionHeading>
          <Card>
            <TextInput
              title="Name"
              name="leagueName"
              value={leagueName}
              onChange={(e) => setLeagueName(e.currentTarget.value)}
            />
          </Card>
        </>
      )}

      {leagueName && (
        <>
          <QuestionHeading>What country is your league from?</QuestionHeading>
          <Card>
            <TextInput
              title="Country"
              name="leagueCountry"
              value={leagueCountry}
              onChange={(e) => setLeagueCountry(e.currentTarget.value)}
            />
          </Card>
        </>
      )}

      {leagueCountry && (
        <ContactQuestions
          isSubmitting={isSubmitting}
          contactType={contactType}
          contactAddress={contactAddress}
          setContactType={setContactType}
          setContactAddress={setContactAddress}
        />
      )}
    </Form>
  );
}
