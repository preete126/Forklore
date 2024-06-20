import { Button, ButtonGroup, Flex, Link, List, ListItem, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import brand_name from "../images/brand_name.png"
import store_icon from "../images/store_icon.png"
// import { TriangleDownIcon } from "@chakra-ui/icons"
import { AiFillCaretDown } from "react-icons/ai";

function DefaultLayout({ children }) {
    return (
        <>
            <Flex px={7} zIndex={9} py={5} bg="white" pos={"fixed"} w="100%" justifyContent={"space-between"} alignItems={"center"}>
                <Flex gap={7} alignItems={"center"}>
                    <Link href="/">
                        <Image src={brand_name} width={250} />
                    </Link>
                   

                    <Menu isLazy>
                        <MenuButton px="3" w="150px" color={"#009F7F"} size="lg" colorScheme="white" boxShadow='base' as={Button} rightIcon={<AiFillCaretDown />}>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <Image src={store_icon} width="17" boxSize='2rem' />
                                <span style={{ fontWeight: "600", fontSize: '14px' }}>Grocery</span>
                            </div>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link href="/" gap={5}>
                                    <Image src={store_icon} width="17" ps="12" boxSize='2rem' />
                                    <span style={{ fontSize: '14px' }}> Grocery</span>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link gap={5} minH="30px">
                                    <Image src={store_icon} width="17" ps="12" boxSize='2rem' />
                                    <span style={{ fontSize: '14px' }}>Furniture</span>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link gap={5} minH="30px">
                                    <Image src={store_icon} width="17" ps="12" boxSize='2rem' />
                                    <span style={{ fontSize: '14px' }}>Gadget</span>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link gap={5} minH="30px">
                                    <Image src={store_icon} width="17" ps="12" boxSize='2rem' />
                                    <span style={{ fontSize: '14px' }}>Bags</span>
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <List display="flex" gap={7} alignItems={"center"}>
                    <ListItem>
                        <Link>
                            Shops
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link>
                            Offer
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link>
                            Contact
                        </Link>
                    </ListItem>
                    <ListItem >
                        <ButtonGroup spacing={5}>
                            <Button fontSize={"14"} fontWeight={"500"} colorScheme={"green"}>Join</Button>
                            <Button fontSize={"14"} fontWeight={"500"} colorScheme={"green"}>Become a seller</Button>
                        </ButtonGroup>
                    </ListItem>
                </List>
            </Flex>
            {children}
        </>
    );
}

export default DefaultLayout;