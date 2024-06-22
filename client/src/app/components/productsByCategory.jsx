import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, Flex, Skeleton, SkeletonText, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { GetAllProducts } from "../services/product";



function ProductByCategory({ categoryProducts }) {
    const { products, setProducts } = categoryProducts;
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
                        <div>yeahhh</div>
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