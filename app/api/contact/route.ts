import { NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const runtime = "nodejs";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function clean(value: FormDataEntryValue | null): string {
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
      firstName: clean(formData.get("firstName")),
      lastName: clean(formData.get("lastName")),
      email: clean(formData.get("email")),
      message: clean(formData.get("message")),
    };

    const validationError = validatePayload(payload);
    if (validationError) {
      return NextResponse.json(
        { ok: false, error: validationError },
        { status: 400 },
      );
    }

    const docRef = await addDoc(collection(db, "contactMessages"), {
      ...payload,
      status: "new",
      source: "website-contact-form",
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ ok: true, id: docRef.id });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Could not send message right now. Please try again.";

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
