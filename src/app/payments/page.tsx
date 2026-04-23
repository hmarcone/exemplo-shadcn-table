import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "mon56@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "monserrat44@gmail.com",
    },
    {
        id: "489e1d44",
        amount: 242,
        status: "success",
        email: "ken99@gmail.com",
    },
    {
        id: "239e1d44",
        amount: 316,
        status: "success",
        email: "abe45@gmail.com",
    },
    {
        id: "139e1d44",
        amount: 874,
        status: "success",
        email: "silas22@gmail.com",
    },
    {
        id: "567e1d44",
        amount: 721,
        status: "failed",
        email: "carmella@gmail.com",
    },
 ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}