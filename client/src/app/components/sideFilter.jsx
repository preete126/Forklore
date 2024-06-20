import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Link } from "@chakra-ui/react";
import { useRef } from "react";
import { FaAppleAlt, FaPumpSoap } from "react-icons/fa";
import { TbMeat, TbMilk, TbHealthRecognition } from "react-icons/tb";
import { GiDogBowl, GiCoffeeCup } from "react-icons/gi";
import { PiCookingPotThin, PiBowlSteamThin } from "react-icons/pi";
import { MdOutlineFreeBreakfast } from "react-icons/md";

function SideFilter() {
    const categories = useRef(
        [
            {

                "category": "Fruits & Vegetables",
                "sub_category": [
                    "Fruits",
                    "Vegetables"
                ],
                "icon": FaAppleAlt
            },
            {

                "category": "Meat & Fish",
                "sub_category": [
                    "Fresh Fish",
                    "Meat"
                ],
                "icon": TbMeat
            },
            {

                "category": "Snacks",
                "sub_category": [
                    "Nuts & Biscuits",
                    "Chocolates",
                    "Crisps",
                    "Noodles & Pasta",
                    "Sauce",
                    "Soup"
                ],
                "icon": PiBowlSteamThin
            },
            {

                "category": "Pet Care",
                "sub_category": [
                    "Cat Food",
                    "Dog Food",
                    "Accessories"
                ],
                "icon": GiDogBowl
            },
            {

                "category": "Home & Cleaning",
                "sub_category": [
                    "Air Freshner",
                    "Cleaning Products",
                    "Kitchen Accessories",
                    "Laundry"
                ],
                "icon": FaPumpSoap
            },
            {

                "category": "Dairy",
                "sub_category": [
                    "Milk",
                    "Butter",
                    "Egg",
                    "Yogurt"
                ],
                "icon": TbMilk
            },
            {

                "category": "Cooking",
                "sub_category": [
                    "Oil",
                    "Rice",
                    "Salt & Sugar",
                    "Spices"
                ],
                "icon": PiCookingPotThin
            },
            {

                "category": "Breakfast",
                "sub_category": [
                    "Bread",
                    "Cereal",
                    "Jam"
                ],
                "icon": MdOutlineFreeBreakfast
            },
            {

                "category": "Beverage",
                "sub_category": [
                    "Coffee",
                    "Energy Drinks",
                    "Juice",
                    "Fizzy Drinks",
                    "Tea"
                ],
                "icon": GiCoffeeCup
            },
            {

                "category": "Health & Beauty",
                "sub_category": [
                    "Bath",
                    "Cream",
                    "Deodorant",
                    "Face Care",
                    "Oral Care",
                    "Shaving Needs"
                ],
                "icon": TbHealthRecognition
            }
        ]
    )



    return (
        <>
            <Box w="18em" h="100vh" overflowY={"scroll"} position={"sticky"} border={"0.5px solid #E7E7E7"} top={"90px"} bg={"white"} className="overflowY">
                <Accordion allowToggle px="5" py="8">
                    {categories.current.map((item, index) =>
                        <AccordionItem key={index} border={"none"} p="1.5">
                            <h2>
                                <AccordionButton _hover={"bg:transparent"}>
                                    <Link w="100%" display={"flex"} justifyContent={"space-between"}>
                                        <Box fontSize={"0.8em"} fontWeight={"600"} display={"flex"} gap={5} alignItems={"center"} as='span' flex='1' textAlign='left'>
                                            {< item.icon size={"1.5em"} />}
                                            {item.category}
                                        </Box>
                                        <AccordionIcon boxSize={"1em"} />
                                    </Link>
                                </AccordionButton>
                                <AccordionPanel>
                                    {item.sub_category.map((value) =>
                                        <Link key={value} style={{ fontSize: "0.8em", padding: "10px 0 5px 3em", fontWeight: "600" }}>{value}</Link>
                                    )}
                                </AccordionPanel>
                            </h2>
                        </AccordionItem>
                    )}
                </Accordion>
            </Box>
        </>
    );
}

export default SideFilter;