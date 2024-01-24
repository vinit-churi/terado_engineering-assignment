import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import tShirt from "@/assets/images/blank-t-shirt.webp";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "product",
    headerName: "Product Name",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <div className="flex items-center gap-2">
        <img
          src={tShirt}
          alt="Product"
          style={{ width: "40px", height: "40px" }}
          className="rounded-lg"
        />
        <p>{params.row.product}</p>
      </div>
    ),
  },
  { field: "categories", headerName: "Categories", flex: 1 },
  { field: "quantity", headerName: "Quantity", flex: 1 },
  { field: "amount", headerName: "Amount", flex: 1 },
  {
    field: "action",
    headerName: "action",
    flex: 1,
    renderCell: () => (
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    ),
  },
];

const rows = [
  {
    id: 1,
    product: "Product 1",
    categories: "Category 1",
    quantity: 10,
    amount: 100,
    action: "Buy",
    imageUrl: "",
  },
  {
    id: 2,
    product: "Product 2",
    categories: "Category 2",
    quantity: 20,
    amount: 200,
    action: "Sell",
    imageUrl: "",
  },
  {
    id: 3,
    product: "Product 3",
    categories: "Category 3",
    quantity: 30,
    amount: 300,
    action: "Buy",
    imageUrl: "",
  },
  {
    id: 4,
    product: "Product 4",
    categories: "Category 4",
    quantity: 40,
    amount: 400,
    action: "Sell",
    imageUrl: "",
  },
  {
    id: 5,
    product: "Product 5",
    categories: "Category 5",
    quantity: 50,
    amount: 500,
    action: "Buy",
    imageUrl: "",
  },
  {
    id: 6,
    product: "Product 6",
    categories: "Category 6",
    quantity: 60,
    amount: 600,
    action: "Sell",
    imageUrl: "",
  },
  {
    id: 7,
    product: "Product 7",
    categories: "Category 7",
    quantity: 70,
    amount: 700,
    action: "Buy",
    imageUrl: "",
  },
  {
    id: 8,
    product: "Product 8",
    categories: "Category 8",
    quantity: 80,
    amount: 800,
    action: "Sell",
    imageUrl: "",
  },
  {
    id: 9,
    product: "Product 9",
    categories: "Category 9",
    quantity: 90,
    amount: 900,
    action: "Buy",
    imageUrl: "",
  },
  {
    id: 10,
    product: "Product 10",
    categories: "Category 10",
    quantity: 100,
    amount: 1000,
    action: "Sell",
    imageUrl: "",
  },
  {
    id: 11,
    product: "Product 11",
    categories: "Category 11",
    quantity: 110,
    amount: 1100,
    action: "Buy",
    imageUrl: "",
  },
  {
    id: 12,
    product: "Product 12",
    categories: "Category 12",
    quantity: 120,
    amount: 1200,
    action: "Sell",
    imageUrl: "",
  },
  {
    id: 13,
    product: "Product 13",
    categories: "Category 13",
    quantity: 130,
    amount: 1300,
    action: "Buy",
    imageUrl: "",
  },
  {
    id: 14,
    product: "Product 14",
    categories: "Category 14",
    quantity: 140,
    amount: 1400,
    action: "Sell",
    imageUrl: "",
  },
  {
    id: 15,
    product: "Product 15",
    categories: "Category 15",
    quantity: 150,
    amount: 1500,
    action: "Buy",
    imageUrl: "",
  },
];
const DashboardTable = () => {
  return (
    <div>
      <div className="pb-4" style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default DashboardTable;
