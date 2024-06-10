import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoMdTime } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import { TbZodiacTaurus } from "react-icons/tb";

export default function ZodiacList() {
  return (
    <Table className=" rounded-lg bg-white">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="flex items-center gap-2 font-bold">
            <IoMdTime className="text-lg" />
            Tanggal Mulai
          </TableHead>
          <TableHead>
            <div className="flex gap-2 font-bold">
              <IoIosTime className="text-lg" />
              Tanggal Akhir
            </div>
          </TableHead>
          <TableHead>
            <div className="flex gap-2 font-bold">
              <TbZodiacTaurus className="text-lg" />
              Zodiac
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">21 Maret</TableCell>
          <TableCell>19 April</TableCell>
          <TableCell>Aries</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">20 April</TableCell>
          <TableCell>20 Mei</TableCell>
          <TableCell>Taurus</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">21 Mei</TableCell>
          <TableCell>20 Juni</TableCell>
          <TableCell>Gemini</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">21 Juni</TableCell>
          <TableCell>22 Juli</TableCell>
          <TableCell>Cancer</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">23 Juli</TableCell>
          <TableCell>22 Agustus</TableCell>
          <TableCell>Leo</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">23 Agustus</TableCell>
          <TableCell>22 September</TableCell>
          <TableCell>Virgo</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">23 September</TableCell>
          <TableCell>22 Oktober</TableCell>
          <TableCell>Libra</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">23 Oktober</TableCell>
          <TableCell>21 November</TableCell>
          <TableCell>Scorpio</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">22 November</TableCell>
          <TableCell>21 Desember</TableCell>
          <TableCell>Sagittarius</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">22 Desember</TableCell>
          <TableCell>19 Januari</TableCell>
          <TableCell>Capricorn</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">20 Januari</TableCell>
          <TableCell>18 Februari</TableCell>
          <TableCell>Aquarius</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">19 Februari</TableCell>
          <TableCell>20 Maret</TableCell>
          <TableCell>Pisces</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
