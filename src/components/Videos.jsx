import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
    console.log("videos:", videos);

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, idx) => (
                <Box key={idx} sx={{ flexGrow: 1, flexBasis: { xs: "100%", sm: "50%", md: "33%", lg: "20%", xl: "15%" } }} >
                     {item.id.videoId && <VideoCard video={item} />}
                     {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos