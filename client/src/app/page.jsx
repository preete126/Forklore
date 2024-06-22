"use client"

import SideFilter from "./components/sideFilter";
import ProductByCategory from "./components/productsByCategory";
import { Box, Flex } from "@chakra-ui/react";
import Index from "./landingpage";
import DefaultLayout from "./components/default";




export default function Home() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = useRef()
  // const [itemByCategory,setItemByCategory] = useState([])

  // const handleItemDisplayOnClick = (ev)=>{
  //   setItemByCategory(ev)
  // }


  return (
    <>
      <DefaultLayout>
        
        <Index/>
        <Flex>
          <SideFilter/>

          <Box w="100%" bg={"#F3F4F6"} p="10">
            <ProductByCategory />
          </Box>
        </Flex>
      </DefaultLayout>
    </>
  );
}
