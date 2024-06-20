"use client"
import { Box, Text, FormControl, Input, Button, Icon, Flex } from "@chakra-ui/react";
import { FiSearch} from "react-icons/fi";
import { BiSolidShoppingBags } from "react-icons/bi";
import DefaultLayout from "./components/default";
import styles from "./page.module.css";
import SideFilter from "./components/sideFilter";



export default function Home() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = useRef()
  

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

        <Button display={"flex"} flexDir={"column"} gap={3}  colorScheme={"green"} boxSize={"6em"} borderEndRadius={0} pos={"fixed"} right={"0"} bottom={"50%"} transform={"translateY(50%)"}>
          <div style={{display:"flex", gap:"5px", alignItems:"center"}}>
            <BiSolidShoppingBags size={"1.3rem"} />
            <div style={{fontSize:"13px", fontWeight:"400"}}>
              <span>0</span>
              <span> Items</span>
            </div>
          </div>
          <Button bg={"white"} fontWeight={"600"} fontSize={"13px"} color={"#38A169"}>$0.00</Button>
        </Button>

        <Flex>
         <SideFilter/>
          
          <Box w="100%" bg={"#F3F4F6"} p="5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur corporis suscipit at ullam alias ad optio, saepe harum cumque omnis inventore repellat non libero corrupti natus molestias illum. Nobis, voluptatum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi impedit porro atque molestiae rem corrupti voluptate, enim, iste magni, id hic provident accusamus sed. Ex, molestias nihil. Quaerat, temporibus? Dicta.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rerum at nesciunt ea repellat, dolor corporis. Natus tempora, animi enim deleniti earum reprehenderit nemo ratione dolorum alias, incidunt est laudantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque eius dignissimos voluptate itaque recusandae dicta illo autem fuga, sed illum nihil sunt quas provident est distinctio magnam qui architecto!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae sed soluta officia laudantium commodi sunt est facilis, doloribus architecto excepturi recusandae libero velit quasi temporibus quisquam voluptatibus ducimus et!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus asperiores impedit doloribus et modi, tenetur illo, amet autem molestias corrupti vitae iure sapiente quam, blanditiis illum! Quod omnis totam numquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi praesentium hic eum, eveniet pariatur quis, nam quasi, dicta veritatis molestias cupiditate consequuntur. Laborum possimus ex, neque eius minima mollitia.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et fugiat, rerum aperiam ex exercitationem mollitia. Laborum saepe ipsam, magni repellendus excepturi ea suscipit recusandae incidunt at. Architecto aperiam recusandae quae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi saepe dolores perferendis assumenda sed esse eum ducimus ullam amet, recusandae tempora, doloremque dolorum inventore fugiat eveniet quod illum autem.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos culpa, vel expedita neque quaerat esse cumque quia adipisci dolore, impedit dignissimos ut autem, illum eum dolorem libero ipsa nostrum obcaecati?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic cum beatae maxime quidem iusto voluptatibus veritatis, minus quasi fugiat quo laudantium earum soluta. Libero consequatur quidem itaque odit. Velit, aspernatur?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi assumenda beatae quos ea recusandae quisquam minima? Debitis iure nam quibusdam? Eligendi numquam eveniet reiciendis consectetur exercitationem iste minus, vitae similique!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae ratione assumenda enim veniam culpa harum debitis quae temporibus fuga? Eius quidem consequuntur dolor, odio exercitationem magnam a explicabo commodi consectetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque culpa consequuntur atque facilis! Iure itaque saepe tempore unde quibusdam ipsam laboriosam harum animi? Fugiat natus vitae eaque adipisci sapiente.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi magnam cupiditate, impedit eius laboriosam voluptatem nemo cumque id aspernatur fugiat dolor, ullam incidunt facere non aliquam blanditiis, quia magni?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur, repudiandae enim nesciunt odit voluptates fuga sed eligendi, iure voluptatibus ab? Perferendis dolor numquam impedit eius dolores necessitatibus quasi distinctio!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni eum libero est provident voluptatum dicta tempora debitis dignissimos, ducimus doloremque? Ex, est modi. Voluptatum rerum provident minus iure placeat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa dolore a. Blanditiis nostrum voluptate, sed optio impedit error odit placeat excepturi eaque dolorem ducimus explicabo itaque iusto. Tempore, recusandae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, animi laudantium maxime illo vel culpa quisquam quas quibusdam ipsa praesentium molestiae itaque consectetur exercitationem ab sunt sed error repudiandae autem!
          </Box>
        </Flex>
      </DefaultLayout>
    </>
  );
}
