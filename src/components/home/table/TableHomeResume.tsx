import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const url: string = import.meta.env.VITE_SUPABASE_URL ?? "";
const key: string = import.meta.env.VITE_SUPABASE_KEY ?? "";
console.log(url);
const supabase = createClient(url, key);

interface Column {
  id: "id" | "nombres" | "apellidos" | "created_at" | "actividades";
  label: string;
  width?: number;
  align?: "center";
  format?: (value: number) => string;
}

interface ICliente {
  id: string;
  nombres: string;
  apellidos: string;
  created_at: String;
  actividades: {
    abreviatura: string;
  }[];
}

const columns: readonly Column[] = [
  { id: "nombres", label: "Nombre/s", width: 170, align: "center" },
  { id: "apellidos", label: "Apellido/s", width: 170, align: "center" },
  { id: "id", label: "Id N°", width: 30, align: "center" },
  {
    id: "created_at",
    label: "Vencimiento",
    width: 170,
    align: "center",
  },
  {
    id: "actividades",
    label: "Actividades",
    width: 120,
    align: "center",
  },
];

export const ResumeHomeTable = () => {
  const [clientes, setClientes] = useState<ICliente[] | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    async function getClientes() {
      let { data: clientes } = await supabase
        .from("clientes")
        .select(
          `
        id,
        nombres,
        apellidos,
        created_at,
        actividades(abreviatura)
    `
        )
        .returns<ICliente[]>();
      if (clientes != null) setClientes(clientes);
    }

    getClientes();
  });

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes != null
              ? clientes
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((cliente) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={cliente.id}
                      >
                        {columns.map((column) => {
                          let value;
                          if (column.id === "actividades") {
                            value = cliente.actividades.map(
                              (v) => v.abreviatura
                            );
                          } else {
                            value = cliente[column.id];
                          }
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === "actividades" &&
                              Array.isArray(value)
                                ? value.join(", ")
                                : column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={clientes != null ? clientes.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
