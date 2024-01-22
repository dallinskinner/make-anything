import { FormEvent, useState } from "react";
import { Form } from "react-daisyui";
import { RadioGroup } from "./RadioGroup";
import { QuestionHeading } from "./Typography";
import { TextInput } from "./TextInput";
import { QuestionsProps } from "@/types";
import { ContactQuestions } from "./ContactQuestions";
import { Card } from "./Card";

export function LogoQuestions({
  name,
  onSubmit,
  isSubmitting,
}: QuestionsProps) {
  const [organizationType, setOrganizationType] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [aesthetic, setAesthetic] = useState("");
  const [contactType, setContactType] = useState("");
  const [contactAddress, setContactAddress] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const emailContent = `Name: ${name}
    Thing: Logo
    What they do: ${organizationType}
    Organization Name: ${organizationName}
    Aesthetic: ${aesthetic}
    Contact Preference: ${contactType}
    Email/Number: ${contactAddress}`;

    onSubmit(emailContent);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <QuestionHeading>What does your organization do?</QuestionHeading>
      <Card>
        <TextInput
          title="What do you do?"
          name="organizationType"
          onChange={(e) => setOrganizationType(e.currentTarget.value)}
          value={organizationType}
        />
      </Card>

      {organizationType && (
        <>
          <QuestionHeading>What is the name of your company?</QuestionHeading>
          <Card>
            <TextInput
              title="Name"
              name="companyName"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.currentTarget.value)}
            />
          </Card>
        </>
      )}

      {organizationName && (
        <>
          <QuestionHeading>
            What aesthetic do you want for your logo?
          </QuestionHeading>
          <Card>
            <RadioGroup
              name="aesthetic"
              onChange={setAesthetic}
              value={aesthetic}
              options={[
                "Edgy",
                "Goth",
                "Cute",
                "Preppy",
                "Professional",
                "Hip",
              ]}
            />
          </Card>
        </>
      )}

      {aesthetic && (
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
