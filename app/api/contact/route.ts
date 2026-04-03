import { NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function sanitize(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePayload(payload: ContactPayload) {
  if (
    !payload.firstName ||
    !payload.lastName ||
    !payload.email ||
    !payload.message
  ) {
    return "Please complete all fields.";
  }

  if (!isValidEmail(payload.email)) {
    return "Please enter a valid email address.";
  }

  if (payload.message.length < 10) {
    return "Message must be at least 10 characters.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const payload: ContactPayload = {
      firstName: sanitize(formData.get("firstName")),
      lastName: sanitize(formData.get("lastName")),
      email: sanitize(formData.get("email")),
      message: sanitize(formData.get("message")),
    };

    const validationError = validatePayload(payload);
    if (validationError) {
      return NextResponse.json(
        { ok: false, error: validationError },
        { status: 400 },
      );
    }

    const doc = await addDoc(collection(db, "contactMessages"), {
      ...payload,
      status: "new",
      source: "website-contact-form",
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ ok: true, id: doc.id });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Could not send message right now. Please try again.";

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
