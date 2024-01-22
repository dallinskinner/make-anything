import { useState } from "react";
import { Button, Loading, Input } from "react-daisyui";
import { RadioGroup } from "./RadioGroup";
import { QuestionHeading } from "./Typography";
import { Card } from "./Card";

interface Props {
  isSubmitting: boolean;
  contactType: string;
  setContactType: (value: string) => void;
  contactAddress: string;
  setContactAddress: (value: string) => void;
}

export function ContactQuestions({
  isSubmitting,
  contactType,
  setContactType,
  contactAddress,
  setContactAddress,
}: Props) {
  console.log(contactType);

  return (
    <>
      <QuestionHeading>How do you want to be contacted?</QuestionHeading>

      <Card>
        <RadioGroup
          name="contactType"
          onChange={setContactType}
          value={contactType}
          options={["Email", "Message"]}
        />

        {contactType && (
          <>
            <Input
              required
              value={contactAddress}
              onChange={(e) => setContactAddress(e.target.value)}
              type={contactType === "Email" ? "email" : "tel"}
              placeholder={`Please type your ${
                contactType === "Email" ? "email address" : "phone number"
              }`}
            />

            <Button
              color="primary"
              className="mt-3"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? <Loading /> : "Submit"}
            </Button>

            {contactType === "Email" && (
              <Button
                className="mt-3"
                type="button"
                color="secondary"
                onClick={() => setContactAddress("alissatheskinner@gmail.com")}
              >
                {isSubmitting ? <Loading /> : "Click here if you are Alissa"}
              </Button>
            )}
          </>
        )}
      </Card>
    </>
  );
}
