/* eslint-disable react-hooks/rules-of-hooks */
import {
  Badge,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Avatar,
  Box,
} from "@chakra-ui/react";
import { Trip } from "src/utils/interface";
import TripAvatarCarousel from "./TripAvatarCarousel";
import { UserData } from "./UserProfile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "src/utils/TripAvatarCarouselSettings";

interface Props {
  userDetail: UserData;
  trips: Trip[];
}

export const UserDetail = ({ userDetail, trips }: Props) => {
  const user = userDetail;

  const logo: string =
    "https://drive.google.com/file/d/1ti7xmFJWKOqUUNcuV2TEpMCb56NAaMU3/view";
  const tikTok: string =
    "https://pngfolio.com/images/all_img/copy/1631443365tiktok-icon.png";
  const instagram: string =
    "https://www.adverthia.com/wp-content/uploads/2020/02/instagram-logo-png-transparent-background-1024x1024-1.png";
  const facebook: string =
    "https://i0.wp.com/www.dpabogados.com/wp-content/uploads/2016/09/facebook-logo-png-transparent-background.png?fit=1600%2C1600&ssl=1";

  const tikTokPage = "https://www.tiktok.com/";
  const instaPage = "https://www.instagram.com/";
  const facePage = "https://es-es.facebook.com/";

  const arrInterests: string[] = user.keyWords.split(",");
  const defaulHashtags: string[] = ["trips", "traveling", "friends"];
  const arrInterests: string[] = user.keyWords
    ? user.KeyWords.split(",")
    : defaulHashtags;

  const myCreatedActiveTrips = trips?.filter(
    (trip) => trip.planner.id === user?.id && trip.active === true
  );

  return (
    <>
      <Center pt={6}>
        <Heading>Meet the traveler</Heading>
      </Center>

      <Box display={"flex"} flexDirection={"column"}>
        <Center py={2} h={"55vh"}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "540px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            padding={4}
          >
            <Flex flex={1}>
              <Image
                alt="image user"
                borderRadius={"xl"}
                objectFit="cover"
                boxSize="100%"
                src={user?.avatar ? user.avatar.toString() : logo}
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {user && user?.name}
              </Heading>

              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                {user && user?.description}
              </Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                {arrInterests?.map((int, index) => {
                      return (
                        <Badge
                          key={index}
                          px={2}
                          py={1}
                          bg={useColorModeValue("gray.50", "gray.800")}
                          fontWeight={"400"}
                        >
                          {`#${int.toLowerCase()}`}
                        </Badge>
                      );
                    })
                  : defaulHashtags?.map((h, index) => {
                      return (
                        <Badge
                          key={index}
                          px={2}
                          py={1}
                          bg={useColorModeValue("gray.50", "gray.800")}
                          fontWeight={"400"}
                        >
                          {`#${h.toLowerCase()}`}
                        </Badge>
                      );
                    })}
              </Stack>

              <Center>
                <Stack
                  width={"100%"}
                  mt={"1rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <a
                    href={user?.urlTikTok ? user.urlTikTok : tikTokPage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      boxSize="40px"
                      objectFit="cover"
                      src={tikTok}
                      alt="tikTok-icon"
                    />
                  </a>
                  <a
                    href={user?.urlInstagram ? user.urlInstagram : instaPage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      boxSize="40px"
                      objectFit="cover"
                      src={instagram}
                      alt="instagram-icon"
                    />
                  </a>
                  <a
                    href={user?.urlFaceBook ? user.urlFaceBook : facePage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      boxSize="40px"
                      objectFit="cover"
                      src={facebook}
                      alt="facebook-icon"
                    />
                  </a>
                </Stack>
              </Center>
            </Stack>
          </Stack>
        </Center>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Text
            textAlign={"center"}
            color={useColorModeValue("#293541", "#F3B46F")}
            fontSize={"3xl"}
            fontFamily={"body"}
            p={2}
          >
            Created Trips, Join them!!!
          </Text>

          <TripAvatarCarousel myCreatedActiveTrips={myCreatedActiveTrips} />
        </Box>
      </Box>
    </>
  );
};

export default UserDetail;
