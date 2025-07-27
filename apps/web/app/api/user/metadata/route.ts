import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { userId } = await auth();
  const { role } = await req.json();

  if (!userId || !role) {
    return NextResponse.json({ error: 'Missing user or role' }, { status: 400 });
  }

  const client = await clerkClient();
  await client.users.updateUser(userId, {
    publicMetadata: { role },
  });

  return NextResponse.json({ success: true });
}
