import { Heading, HStack, Image, Text, VStack, Box, Link, Wrap } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <div >
      <Box
        backgroundColor="#ffffff"
        borderRadius="5px"
      >
        <Image src={imageSrc} borderRadius="5px"/>
        <Wrap p="4">
          <Heading size="sm" color="black">{title}</Heading>
          <Text size="sm" color="grey">{description}</Text>
          <Link href="#" color="black">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link>
        </Wrap>
      </Box>
    </div>
  );
};

export default Card;