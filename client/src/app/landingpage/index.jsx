import DefaultLayout from "../components/default";
import { Box, Text, FormControl, Input, Button, Icon, Flex } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { BiSolidShoppingBags } from "react-icons/bi";
import styles from "../page.module.css";
import { useState } from "react";

function Index() {
    return ( 
        <>
            <DefaultLayout>
            <Box className={`${styles.homebg}`}>
          <main className={`${styles.wrap}`}>
            <div>
              <Text fontWeight="700" fontSize="3em">
                Groceries Delivered in 90 Minute
              </Text>
              <Text fontSize="18">
                Get your healthy foods & snacks delivered at your doorsteps all day everyday
              </Text>
              <FormControl display={"flex"} mt="5">
                <Input type='search' px="6" h="55" focusBorderColor="transparent" bg="rgba(255,255,255,0.4)" boxShadow={"base"} variant={"unstyled"} borderRightRadius={0} placeholder="Select your products from here" _placeholder={{ fontSize: "small" }} />
                <Button colorScheme={"green"} width={"170px"} borderStartRadius={0} h="55" leftIcon={<FiSearch />} >Search</Button>
              </FormControl>
            </div>
          </main>
        </Box>

        <Button display={"flex"} flexDir={"column"} gap={3} colorScheme={"green"} boxSize={"6em"} borderEndRadius={0} pos={"fixed"} right={"0"} bottom={"50%"} transform={"translateY(50%)"} zIndex={9}>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <BiSolidShoppingBags size={"1.3rem"} />
            <div style={{ fontSize: "13px", fontWeight: "400" }}>
              <span>0</span>
              <span> Items</span>
            </div>
          </div>
          <Box h="3em" w="5em" borderRadius={3} alignContent={"center"} bg={"white"} fontWeight={"600"} fontSize={"13px"} color={"#38A169"}>$0.00</Box>
        </Button>
            </DefaultLayout>
        </>
     );
}

export default Index;