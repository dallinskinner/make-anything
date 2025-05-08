"use client";

import { useCallback, useRef, useState } from "react";
import { Alert, Button, Modal, Toast } from "react-daisyui";

export function FeedbackToast() {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  return (
    <>
      <Toast vertical="bottom" horizontal="center">
        <Alert status="info">
          Help us improve Make Anything!{" "}
          <Button size="sm" onClick={handleShow}>
            Take a quick survey
          </Button>
        </Alert>
      </Toast>

      <Modal ref={ref}>
        <div data-tf-live="01JTM7KTYCZD7F8KA24FM3CXF6"></div>
        <script src="//embed.typeform.com/next/embed.js"></script>
        <p className="text-xs mt-2">Press ESC to close</p>
      </Modal>
    </>
  );
}
