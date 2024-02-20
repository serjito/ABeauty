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
import Register from '@/models/Register';
import connectDB from '@/utils/mongoose';

async function loadRegisters() {
  connectDB();
  const registers = await Register.find();
  return registers;
}

async function Registers() {
  const registers = await loadRegisters();

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
                <button className="bg-red-500 rounded-xl py-2 px-2">
                  EDITAR
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="bg-zinc-700">
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right"> {registers.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Registers;
