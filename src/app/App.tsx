"use client";

import { Card } from "@/components/Card";
import { CompanyQuestions } from "@/components/CompanyQuestions";
import { LeagueQuestions } from "@/components/LeagueQuestions";
import { LogoQuestions } from "@/components/LogoQuestions";
import { RadioGroup } from "@/components/RadioGroup";
import { ShoeBrandQuestions } from "@/components/ShoeBrandQuestions";
import { TextInput } from "@/components/TextInput";
import { QuestionHeading } from "@/components/Typography";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Alert, Button, Toast } from "react-daisyui";

export function App() {
  const [personName, setPersonName] = useState("");
  const [thingType, setThingType] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  function reset() {
    setPersonName("");
    setThingType("");
  }

  function onSuccess() {
    setIsSubmitting(false);
    setShowToast(true);
    reset();
  }

  async function sendEmail({ emailContent }: { emailContent: string }) {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emailContent,
      }),
    });

    console.log("response", response);
  }

  async function handleSubmit(emailContent: string) {
    setIsSubmitting(true);

    await sendEmail({
      emailContent,
    });

    onSuccess();
  }

  return (
    <>
      <Button color="secondary" tag="a" href="/">
        <ArrowLeftIcon className="size-5 mr-1" /> Back to home
      </Button>

      <QuestionHeading>What is your name?</QuestionHeading>

      <Card>
        <TextInput
          title="Your Name"
          name="personName"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
        />
      </Card>

      {personName && (
        <>
          <QuestionHeading>What do you want to make?</QuestionHeading>
          <Card>
            <RadioGroup
              name="thingType"
              onChange={setThingType}
              value={thingType}
              options={["League", "Company", "Logo", "Shoe Brand"]}
            />
          </Card>
        </>
      )}

      {(() => {
        switch (thingType) {
          case "":
            return null;
          case "League":
            return (
              <LeagueQuestions
                onSubmit={handleSubmit}
                name={personName}
                isSubmitting={isSubmitting}
              />
            );
          case "Company":
            return (
              <CompanyQuestions
                onSubmit={handleSubmit}
                name={personName}
                isSubmitting={isSubmitting}
              />
            );
          case "Logo":
            return (
              <LogoQuestions
                onSubmit={handleSubmit}
                name={personName}
                isSubmitting={isSubmitting}
              />
            );
          case "Shoe Brand":
            return (
              <ShoeBrandQuestions
                onSubmit={handleSubmit}
                name={personName}
                isSubmitting={isSubmitting}
              />
            );
          default:
            return <h1 className="text-lg mt-6">Coming soon</h1>;
        }
      })()}

      {showToast && (
        <Toast vertical="middle" horizontal="center">
          <Alert status="info">Thank you for your submission</Alert>
        </Toast>
      )}
    </>
  );
}
