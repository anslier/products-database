import React, { useEffect, useState } from "react";

// import mui
import {
	DataGrid,
	GridToolbarContainer,
	GridToolbarExport,
	gridClasses,
} from "@mui/x-data-grid";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

// import components
import AddProductComponent from "./AddProductComponent.js";
import EditProductComponent from "./EditProductComponent.js";

function TableComponent() {
	// products data placeholder
	const [products, setProducts] = useState([]);

	// products data placeholder higher level
	const [productsId, setProductsId] = useState([]);

	// state for snackbar notification after adding, deleteing and updating product
	const [openDelete, setOpenDelete] = useState(false);
	const [openAdd, setOpenAdd] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);

	// fetch data from rest api
	useEffect(() => {
		fetchProducts();
	}, []);

	// get method
	const fetchProducts = () => {
		fetch("http://localhost:8080/api/products")
			.then((response) => response.json())
			.then((data) => {
				setProducts(data._embedded.products);
				setProductsId(data);
			})
			.catch((err) => console.error(err));
	};

	// delete product delete method with confirmation message
	const onDelClick = (url) => {
		if (window.confirm("Confirm deleting this product?")) {
			fetch(url, { method: "DELETE" })
				.then((response) => {
					if (response.ok) {
						fetchProducts();
						setOpenDelete(true);
					} else {
						alert("Something went wrong!");
					}
				})
				.catch((err) => console.error(err));
		}
	};

	// add product post method
	const addProduct = (product) => {
		fetch("http://localhost:8080/api/products", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(product),
		})
			.then((response) => {
				if (response.ok) {
					fetchProducts();
					setOpenAdd(true);
				} else {
					alert("Something went wrong!");
				}
			})
			.catch((err) => console.error(err));
	};

	// edit product update method
	const updateProduct = (product, link) => {
		fetch(link, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(product),
		})
			.then((response) => {
				if (response.ok) {
					fetchProducts();
					setOpenEdit(true);
				} else {
					alert("Something went wrong!");
				}
			})
			.catch((err) => console.error(err));
	};

	// define table columns
	const columns = [
		{ field: "id", headerName: "ID", width: 80 },
		{ field: "code", headerName: "Code", width: 80 },
		{ field: "name", headerName: "Name", width: 300 },
		{ field: "category", headerName: "Category", width: 150 },
		{ field: "brand", headerName: "Brand", width: 80 },
		{ field: "type", headerName: "Type", width: 80 },
		{ field: "description", headerName: "Description", width: 600 },
		// edit button
		{
			field: "_links.products.href",
			headerName: "",
			sortable: false,
			filterable: false,
			renderCell: (row) => (
				<EditProductComponent
					data={row}
					updateProduct={updateProduct}
				/>
			),
		},
		// delete button
		{
			field: "_links.self.href",
			headerName: "",
			sortable: false,
			filterable: false,
			width: 80,
			renderCell: (row) => (
				<IconButton onClick={() => onDelClick(row.id)}>
					<DeleteIcon color="error" />
				</IconButton>
			),
		},
	];

	// output data to console
	// console.log(products);
	// console.log(productsId._embedded);

	return (
		// basic list products
		// <div>
		// 	<table>
		// 		<tbody>
		// 			{products.map((product, index) => (
		// 				<tr key={index}>
		// 					<td>{product.brand}</td>
		// 					<td>{product.type}</td>
		// 				</tr>
		// 			))}
		// 		</tbody>
		// 	</table>
		// </div>

		<div>
			{/* button to add new product */}
			{/* <Box textAlign="center" sx={{ m: 2 }}> */}
			<Stack mt={2} mb={2} justifyContent="center" alignItems="center">
				<AddProductComponent addProduct={addProduct} />
			</Stack>
			{/* </Box> */}

			<div style={{ height: 700, width: "100%" }}>
				{/* display table */}
				<DataGrid
					rows={products}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[10]}
					disableSelectionOnClick
					// rowHeight={100}
					getRowHeight={() => "auto"}
					sx={{ m: 2 }}
					getRowId={(row) => row._links.self.href}
					components={{ Toolbar: CustomToolbar }}
				/>

				{/* notification after deleting a product */}
				<Snackbar
					open={openDelete}
					autoHideDuration={5000}
					onClose={() => setOpenDelete(false)}
					message="Product deleted"
				/>

				{/* notification after adding a product */}
				<Snackbar
					open={openAdd}
					autoHideDuration={5000}
					onClose={() => setOpenAdd(false)}
					message="Product added"
				/>

				{/* notification after editing a product */}
				<Snackbar
					open={openEdit}
					autoHideDuration={5000}
					onClose={() => setOpenEdit(false)}
					message="Product edited"
				/>
			</div>
		</div>
	);
}

export default TableComponent;

// button to export table to csv file
function CustomToolbar() {
	return (
		<GridToolbarContainer className={gridClasses.toolbarContainer}>
			<GridToolbarExport />
		</GridToolbarContainer>
	);
}
