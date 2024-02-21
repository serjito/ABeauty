'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Params {
  id: string;
}
interface Registers {
  _id: string;
  name: string;
  email: string;
  telephone: number;
  terms: boolean;
}

function Registros() {
  const router = useRouter();
  const [registers, setRegisters] = useState<Registers[]>([]);

  useEffect(() => {
    axios
      .get('/api/register')
      .then(response => {
        setRegisters(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleDelete = async ({ params }: { params: Params }) => {
    if (window.confirm('Are you sure you want to delete')) {
      try {
        const res = await axios.delete(`/api/register/${params.id}`);

        if (!res.status) {
          throw new Error('Failed to delete');
        }

        const updatedRegisters = registers.filter(
          register => register._id !== params.id
        );
        setRegisters(updatedRegisters);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 my-4 bg-zinc-900 rounded-lg text-zinc-100">
      <h2 className="text-3xl my-3">REGISTROS ACTUALES</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead className="text-center">Términos</TableHead>
            <TableHead colSpan={2} className="text-center">
              Acciones
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {registers.map(register => (
            <TableRow key={register._id}>
              <TableCell className="font-medium">{register.name}</TableCell>
              <TableCell>{register.email}</TableCell>
              <TableCell>{register.telephone}</TableCell>
              <TableCell className="text-center">
                {register.terms ? 'Accepted' : 'Not Accepted'}
              </TableCell>
              <TableCell className="text-right">
                {' '}
                <button className="bg-yellow-500 rounded-xl py-2 px-2">
                  EDITAR
                </button>{' '}
              </TableCell>
              <TableCell className="text-center">
                <button
                  onClick={() => handleDelete({ params: { id: register._id } })}
                  className="bg-red-500 rounded-xl py-2 px-2"
                >
                  ELIMINAR
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="bg-zinc-700">
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-center"> {registers.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Registros;
