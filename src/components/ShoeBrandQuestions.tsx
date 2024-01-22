import { FormEvent, useState } from "react";
import { Form } from "react-daisyui";
import { RadioGroup } from "./RadioGroup";
import { QuestionHeading } from "./Typography";
import { TextInput } from "./TextInput";
import { QuestionsProps } from "@/types";
import { ContactQuestions } from "./ContactQuestions";
import { Card } from "./Card";

export function ShoeBrandQuestions({
  name,
  onSubmit,
  isSubmitting,
}: QuestionsProps) {
  const [shoeType, setShoeType] = useState("");
  const [brandName, setBrandName] = useState("");
  const [contactType, setContactType] = useState("");
  const [contactAddress, setContactAddress] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const emailContent = `Name: ${name}
    Thing: Shoe Brand
    Type: ${shoeType}
    Brand Name: ${brandName}
    Contact Preference: ${contactType}
    Email/Number: ${contactAddress}`;

    onSubmit(emailContent);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <QuestionHeading>What type of shoe?</QuestionHeading>
      <Card>
        <RadioGroup
          name="shoeType"
          onChange={setShoeType}
          value={shoeType}
          options={["Sports", "Casual", "Dress", "Work", "Slippers"]}
        />
      </Card>

      {shoeType && (
        <>
          <QuestionHeading>What is the name of your brand?</QuestionHeading>
          <Card>
            <TextInput
              title="Name"
              name="brandName"
              value={brandName}
              onChange={(e) => setBrandName(e.currentTarget.value)}
            />
          </Card>
        </>
      )}

      {brandName && (
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
