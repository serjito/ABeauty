import { NextRequest, NextResponse } from 'next/server';

import connectDB from '@/utils/mongoose';
import Register from '@/models/Register';

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectDB();
  try {
    const body = await req.json();
    const newRegister = await Register.create(body);
    return NextResponse.json({ data: newRegister }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  await connectDB();
  try {
    const result = await Register.find({});
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
