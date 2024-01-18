"use client";

import { Step } from "@/components/Step";
import { FormEvent, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Form,
  Input,
  Loading,
  Radio,
  Toast,
} from "react-daisyui";

export function Client() {
  const [personName, setPersonName] = useState("");
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [contactType, setContactType] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

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
    setStep1("");
    setStep2("");
    setName("");
    setCountry("");
    setContactType("");
  }

  function onSuccess() {
    setIsSubmitting(false);
    setShowToast(true);
    reset();
  }

  async function sendEmail({
    personName,
    step1,
    step2,
    name,
    country,
    contactType,
    emailAddress,
  }: {
    personName: string;
    step1: string;
    step2: string;
    name: string;
    country: string;
    contactType: string;
    emailAddress: string;
  }) {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        personName,
        step1,
        step2,
        name,
        country,
        contactType,
        emailAddress,
      }),
    });

    console.log("response", response);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    await sendEmail({
      personName,
      step1,
      step2,
      name,
      country,
      contactType,
      emailAddress,
    });

    onSuccess();
  }

  async function handleAlissaClick() {
    setIsSubmitting(true);

    await sendEmail({
      personName,
      step1,
      step2,
      name,
      country,
      contactType,
      emailAddress: "alissatheskinner@gmail.com",
    });

    onSuccess();
  }

  return (
    <>
      <h1 className="text-xl mt-7 mb-3">What is your name?</h1>
      <Card className="bg-base-100 shadow-md">
        <Card.Body>
          <Form.Label title="Your Name">
            <Input
              name="personName"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
            />
          </Form.Label>
        </Card.Body>
      </Card>

      {personName && (
        <Step
          onChange={setStep1}
          value={step1}
          options={["League", "Company", "Logo", "Shoe Brand"]}
          heading="What do you want to make?"
        />
      )}

      {(() => {
        switch (step1) {
          case "":
            return null;
          case "League":
            return (
              <Step
                onChange={setStep2}
                value={step2}
                options={["Hockey", "Soccer", "Baseball", "Football", "Tennis"]}
                heading="What type of league?"
              />
            );
          default:
            return <h1 className="text-lg mt-6">Coming soon</h1>;
        }
      })()}

      {step2 && (
        <>
          <h1 className="text-xl mt-7 mb-3">
            What is the name of your league?
          </h1>
          <Card className="bg-base-100 shadow-md">
            <Card.Body>
              <Form.Label title="Name">
                <Input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Label>
            </Card.Body>
          </Card>
        </>
      )}

      {name && (
        <>
          <h1 className="text-xl mt-7 mb-3">
            What country is your league from?
          </h1>
          <Card className="bg-base-100 shadow-md">
            <Card.Body>
              <Form.Label title="Country">
                <Input
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Form.Label>
            </Card.Body>
          </Card>
        </>
      )}

      {country && (
        <Step
          onChange={setContactType}
          value={contactType}
          options={["Email", "Message"]}
          heading="How do you want to be contacted?"
          extra={
            contactType ? (
              <Form onSubmit={handleSubmit}>
                <Input
                  required
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  type={contactType === "Email" ? "email" : "tel"}
                  placeholder={`Please type your ${
                    contactType === "Email" ? "email address" : "phone number"
                  }`}
                />

                {contactType && (
                  <Button
                    color="primary"
                    className="mt-3"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? <Loading /> : "Submit"}
                  </Button>
                )}

                {contactType === "Email" && (
                  <Button
                    className="mt-3"
                    type="button"
                    color="secondary"
                    onClick={handleAlissaClick}
                  >
                    {isSubmitting ? (
                      <Loading />
                    ) : (
                      "Click here if you are Alissa"
                    )}
                  </Button>
                )}
              </Form>
            ) : null
          }
        />
      )}

      {showToast && (
        <Toast vertical="middle" horizontal="center">
          <Alert status="info">Thank you for your submission</Alert>
        </Toast>
      )}
    </>
  );
}
