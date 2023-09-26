"use client";
import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import Cart from "./Cart";
import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";

export default function HeaderSearc() {
    const [open, setOpen] = React.useState(false)
  return (
    <nav className="flex justify-between items-center py-10 max-lg:py-4 max-sm:py-2">
      <Link href="/">
        <p className="text-pop text-primary text-3xl max-lg:text-xl max-sm:hidden whitespace-nowrap hover:text-primaryLight">E-commerce</p>
        <p className="hidden text-pop text-primary text-xl max-sm:block">Ecom</p>
      </Link>
      <Search />
      <div className="flex">
      <Link href="/" className="mr-10 max-lg:hidden hover:bg-primaryHover rounded-full p-1">
          <Image src="/user.svg" alt="user" width={24} height={24} />
        </Link>
      <Cart />
      <div className="hidden max-lg:block">
        <React.Fragment>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </IconButton>
          <Drawer open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                ml: "auto",
                mt: 1,
                mr: 1,
              }}
            >
              <Typography
                component="label"
                htmlFor="close-icon"
                fontSize="md"
                fontWeight="lg"
                sx={{ cursor: "pointer", fontFamily: "Open Sans" }}
              >
                close
              </Typography>
              <ModalClose id="close-icon" size="lg"  sx={{ position: "initial" }} />
            </Box>
            <List
              size="lg"
              component="nav"
              sx={{
                flex: "none",
                mt: 6,
                mb: 3,
                fontSize: "xl",
                "& > div": { justifyContent: "center" },
                display: "flex",
                alignItems: "center",
                fontFamily: "Open Sans"
              }}
            >
              <ListItemButton onClick={() => setOpen(false)}><Link className="mb-4" href="/blogs">Blogs</Link></ListItemButton>
              <ListItemButton onClick={() => setOpen(false)}><Link className="mb-4" href="/">About Us</Link></ListItemButton>
              <ListItemButton onClick={() => setOpen(false)}><Link className="mb-4" href="/">Chat with us</Link></ListItemButton>
              <div className="absolute bottom-0 text-center">
                <p className="text-pop text-primary">Contacts</p>
                <p className="text-primary">+420 336 775 664</p>
                <p className="text-primary">info@ecommerce.com</p>
              </div>
            </List>
          </Drawer>
        </React.Fragment>
        </div>
      </div>
    </nav>
  );
}