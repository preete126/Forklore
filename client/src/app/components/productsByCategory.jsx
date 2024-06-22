import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Card, CardBody, CloseButton, Flex, SimpleGrid, Skeleton, SkeletonText, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GetAllProducts } from "../services/product";
import { FaCartArrowDown } from "react-icons/fa6";



function ProductByCategory() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const isMounted = useRef(true)
    const errors = useRef(false)
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: true })



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true)
                const response = await GetAllProducts()
                setProducts(response.data.data)
            } catch (error) {
                console.log(error);
                errors.current = true
                console.log(errors.current);
                setIsLoading(false)
                return
            } finally {
                console.log(errors.current);
                setIsLoading(false)
            }
        }
        if (isMounted.current) fetchProducts()
        return () => {
            isMounted.current = false
        }

    }, [setProducts])
    useEffect(() => {
        console.log(products);
    }, [products]);



    return (
        <>
            {
                !isLoading ?

                    (errors.current ?
                        (isVisible ?
                            <Alert status='error' variant={"subtle"} w="18em" borderTopRadius={4}>
                                <AlertIcon />
                                <Box>
                                    <AlertTitle>Network error</AlertTitle>
                                    <AlertDescription> No internet Connection</AlertDescription>
                                </Box>
                                <CloseButton
                                    alignSelf='flex-start'
                                    position='relative'
                                    right={-1}
                                    top={-1}
                                    onClick={onClose}
                                />
                            </Alert> :
                            ""

                        )
                        :
                        (
                            <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                                {products.map((items, index) =>
                                    <Card key={index}>
                                        <CardBody p={4}>
                                            <Flex justifyContent={"space-between"} pb={5}>
                                                <div style={{ width: items.old_price !== null ? "80%" : "100%", height: "15em", alignContent: "center", position: "relative" }}>
                                                    <Image src={items.image_url[0]} layout="fill" objectFit="cover" alt={items.name} style={{ fontSize: "13px", margin: "auto", borderRadius: "7px" }} />
                                                </div>
                                                {
                                                    items.old_price !== null ?
                                                        <Text width={12} h={6} bg="#EAB308" fontSize={13} color={"white"} textAlign={"center"} alignContent={"center"} borderRadius={12}>{(Math.floor((items.old_price - items.price) / items.old_price) * 100)}%</Text>
                                                        :
                                                        ""
                                                }
                                            </Flex>
                                            <Text fontWeight={"600"} fontSize={16} >{items.name}</Text>
                                            <Text color={"#A3AAB5"} pt="1" pb="5" fontSize={13}>{items.quantity}</Text>
                                            {
                                                items.old_price !== null ?
                                                    <Text textDecoration={"line-through"} fontSize={10} color={"#A3AAB5"}>${items.old_price}.00</Text>
                                                    :
                                                    <div style={{fontSize:"10px", visibility:"hidden"}}>yooo</div>
                                            }

                                            <Flex justifyContent={"space-between"} alignItems={"center"} mt={"auto"}>
                                                <Text color={"#38A169"} fontWeight={"600"}>${items.price}.00</Text>
                                                <Button leftIcon={<FaCartArrowDown />} size={"sm"} bg="transparent" color={"#38A169"} borderRadius={20} px="4" border={"1px solid #A3AAB5"}>
                                                    Cart
                                                </Button>
                                            </Flex>
                                        </CardBody>
                                    </Card>
                                )}
                            </SimpleGrid>
                        )
                    )
                    :
                    <Flex flexWrap={"wrap"} justifyContent={"space-between"} gap={6}>
                        {[1, 2, 3, 4, 5, 6].map((value) =>
                            <Box key={value} w="18.5em">
                                <Skeleton height={"300px"} borderTopRadius={6}></Skeleton>
                                <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
                            </Box>
                        )}
                    </Flex>
            }
        </>
    );
}

export default ProductByCategory;