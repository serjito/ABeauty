import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/utils/mongoose';
import Register from '@/models/Register';

export async function GET() {
  connectDB();
  const register = await Register.find();
  return NextResponse.json(register);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const newRegister = new Register(data);
    const savedRegister = await newRegister.save();
    return NextResponse.json({
      message: 'creenado',
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: 'Hubo un error desconocido',
        },
        {
          status: 400,
        }
      );
    }
  }
}
