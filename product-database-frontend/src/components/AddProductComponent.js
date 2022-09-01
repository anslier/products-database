import React, { useState } from "react";

// import mui
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function AddProductComponent(props) {
	// state for dialog
	const [open, setOpen] = useState(false);

	// state for product to save
	const [product, setProduct] = useState({
		code: "",
		name: "",
		category: "",
		brand: "",
		type: "",
		description: "",
	});

	// open the modal form
	const handleClickOpen = () => {
		setOpen(true);
	};

	// close the modal form
	const handleClose = () => {
		setOpen(false);
	};

	// save input fields to state
	const handleChange = (event) => {
		setProduct({ ...product, [event.target.name]: event.target.value });
	};

	// save product and close modal form
	const handleSave = () => {
		props.addProduct(product);
		handleClose();
	};
	return (
		<div>
			{/* button to add new product */}
			<Box sx={{ justifyContent: "center" }}>
				<Button variant="contained" onClick={handleClickOpen}>
					New product
				</Button>
			</Box>

			{/* dialog box to insert new product value */}
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>New product</DialogTitle>
				<DialogContent>
					<Stack spacing={2} mt={1} style={{ width: 500 }}>
						<TextField
							label="Code"
							name="code"
							autoFocus
							variant="standard"
							value={product.code}
							onChange={handleChange}
							multiline
						/>
						<TextField
							label="Name"
							name="name"
							variant="standard"
							value={product.name}
							onChange={handleChange}
							multiline
							rows={4}
						/>
						<TextField
							label="Category"
							name="category"
							variant="standard"
							value={product.category}
							onChange={handleChange}
							multiline
						/>
						<TextField
							label="Brand"
							name="brand"
							variant="standard"
							value={product.brand}
							onChange={handleChange}
							multiline
						/>
						<TextField
							label="Type"
							name="type"
							variant="standard"
							value={product.type}
							onChange={handleChange}
							multiline
						/>
						<TextField
							label="Description"
							name="description"
							variant="standard"
							value={product.description}
							onChange={handleChange}
							multiline
							rows={4}
						/>
					</Stack>

					{/* old using input fields */}
					{/* <input
						placeholder="Code"
						name="code"
						value={product.code}
						onChange={handleChange}
					/>
					<br />
					<input
						placeholder="Name"
						name="name"
						value={product.name}
						onChange={handleChange}
					/>
					<br />
					<input
						placeholder="Category"
						name="category"
						value={product.category}
						onChange={handleChange}
					/>
					<br />
					<input
						placeholder="Brand"
						name="brand"
						value={product.brand}
						onChange={handleChange}
					/>
					<br />
					<input
						placeholder="Type"
						name="type"
						value={product.type}
						onChange={handleChange}
					/>
					<br />
					<input
						placeholder="Description"
						name="description"
						value={product.description}
						onChange={handleChange}
					/>
					<br /> */}
				</DialogContent>
				{/* buttons to save or cancel */}
				<DialogActions>
					<Button onClick={handleSave}>Save</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default AddProductComponent;
