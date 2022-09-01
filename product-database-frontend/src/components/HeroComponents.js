import React from "react";

// import mui
import Image from "mui-image";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// for routing
import { Link } from "react-router-dom";

function HeroComponents() {
	return (
		<div>
			{/* background image */}
			<Box
				sx={{
					width: "100vw",
					height: "100vh",
					backgroundImage:
						"url(https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1790&q=80)",
				}}>
				{/* not used */}
				{/* <Image
					src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1790&q=80"
					height="100%"
					width="100%"
					showLoading={<CircularProgress />}
					fit="cover"
					duration={10000}
					easing="cubic-bezier"
					errorIcon={true}
					bgColor="inherit"
				/> */}

				{/* text and button */}
				<Stack
					spacing={2}
					// direction="row"
					direction="column"
					justifyContent="center"
					alignItems="center">
					{/* main title */}
					<Typography
						mt={50}
						variant="h3"
						// component="div"
						style={{ color: "#42a5f5" }}
						// color="primary"
						sx={{ flexGrow: 1 }}>
						Customize your products list here
					</Typography>

					{/* button to table */}
					<Link to="/ProductsTablePage">
						<Button variant="contained">
							Go to products listing
						</Button>
					</Link>
				</Stack>
			</Box>
		</div>
	);
}

export default HeroComponents;
