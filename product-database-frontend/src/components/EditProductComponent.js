import React, { useState } from "react";

// import mui
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function EditProductComponent(props) {
	// dialog state
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

	// open the modal form and update the product state
	const handleClickOpen = () => {
		setProduct({
			code: props.data.row.code,
			name: props.data.row.name,
			category: props.data.row.category,
			brand: props.data.row.brand,
			type: props.data.row.type,
			description: props.data.row.description,
		});
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

	// update product and close modal form

	const handleSave = () => {
		props.updateProduct(product, props.data.id);
		handleClose();
	};

	return (
		<div>
			{/* button to edit product */}
			{/* <Button onClick={handleClickOpen}>Edit</Button> */}
			<IconButton onClick={handleClickOpen}>
				<EditIcon color="primary" />
			</IconButton>

			{/* dialog to fill new product information */}
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Edit product</DialogTitle>
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
				<DialogActions>
					<Button onClick={handleSave}>Save</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default EditProductComponent;
