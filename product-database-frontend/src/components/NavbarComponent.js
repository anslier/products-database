import React from "react";

// import mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// for routing
import { Link } from "react-router-dom";

function NavbarComponent() {
	return (
		<div>
			{/* navbar */}
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}>
							Products Listing
						</Typography>
						{/* button to homepage */}
						<Link to="/">
							<Button variant="contained">
								Back to homepage
							</Button>
						</Link>

						{/* <Button color="inherit">Add new product</Button> */}
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
}

export default NavbarComponent;
