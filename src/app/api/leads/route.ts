import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";

export const dynamic = "force-dynamic";

function str(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const fullName = str(body.fullName, 120);
    const email = str(body.email, 160);
    const message = str(body.message, 2000);

    if (fullName.length < 2) {
      return NextResponse.json({ ok: false, error: "Merci d'indiquer ton nom." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Email invalide." }, { status: 400 });
    }

    const [row] = await db
      .insert(leads)
      .values({
        fullName,
        email,
        phone: str(body.phone, 40),
        city: str(body.city, 80),
        role: str(body.role, 30) || "student",
        subject: str(body.subject, 120),
        message,
      })
      .returning({ id: leads.id });

    return NextResponse.json({ ok: true, id: row?.id });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Impossible d'enregistrer la demande." },
      { status: 500 },
    );
  }
}

export async function GET() {
  const rows = await db.select().from(leads).orderBy(desc(leads.createdAt)).limit(20);
  return NextResponse.json({ ok: true, count: rows.length, leads: rows });
}
