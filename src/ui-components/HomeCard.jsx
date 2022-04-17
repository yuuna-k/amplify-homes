/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="268px"
      height="366px"
      position="relative"
      borderRadius="50px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(200,200,200,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="156px"
        height="70px"
        position="absolute"
        top="278px"
        left="69px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Title&#xA;Description"
        {...getOverrideProps(overrides, "Title Description")}
      ></Text>
      <Image
        width="266px"
        height="263px"
        position="absolute"
        top="0px"
        left="2px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "homecard_img")}
      ></Image>
    </View>
  );
}
