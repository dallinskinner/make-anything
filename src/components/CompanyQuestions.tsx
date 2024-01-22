import { FormEvent, useState } from "react";
import { Form } from "react-daisyui";
import { RadioGroup } from "./RadioGroup";
import { QuestionHeading } from "./Typography";
import { TextInput } from "./TextInput";
import { QuestionsProps } from "@/types";
import { ContactQuestions } from "./ContactQuestions";
import { Card } from "./Card";

export function CompanyQuestions({
  name,
  onSubmit,
  isSubmitting,
}: QuestionsProps) {
  const [companyType, setCompanyType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyCountry, setCompanyCountry] = useState("");
  const [contactType, setContactType] = useState("");
  const [contactAddress, setContactAddress] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const emailContent = `Name: ${name}
    Thing: Company
    Type: ${companyType}
    Company Name: ${companyName}
    Company Country: ${companyCountry}
    Contact Preference: ${contactType}
    Email/Number: ${contactAddress}`;

    onSubmit(emailContent);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <QuestionHeading>What type of company?</QuestionHeading>
      <Card>
        <RadioGroup
          onChange={setCompanyType}
          value={companyType}
          name="companyType"
          options={["Clothing", "Electronics", "Car", "Restaurant", "Media"]}
        />
      </Card>

      {companyType && (
        <>
          <QuestionHeading>What is the name of your company?</QuestionHeading>
          <Card>
            <TextInput
              title="Name"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.currentTarget.value)}
            />
          </Card>
        </>
      )}

      {companyName && (
        <>
          <QuestionHeading>
            What country is your company based in?
          </QuestionHeading>
          <Card>
            <TextInput
              title="Country"
              name="leagueCountry"
              value={companyCountry}
              onChange={(e) => setCompanyCountry(e.currentTarget.value)}
            />
          </Card>
        </>
      )}

      {companyCountry && (
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
