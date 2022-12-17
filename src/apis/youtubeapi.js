import axios from "axios";

const KEY = "AIzaSyBmn_mz9v2VCJig1lw29foDZaiD2mfIcm0 ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});