import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/utils/mongoose';
import Register from '@/models/Register';

interface Params {
  id: string;
}

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  await connectDB();
  const id = params.id;
  try {
    const result = await Register.findById(id);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const registerDelete = await Register.findByIdAndDelete(params.id);
    if (!registerDelete)
      return NextResponse.json(
        {
          message: 'Task not found',
        },
        { status: 404 }
      );
    return NextResponse.json(registerDelete);
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const data = await request.json();
    const registerUpdated = await Register.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(registerUpdated);
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
