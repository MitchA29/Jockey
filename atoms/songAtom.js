import { atom } from "recoil";

export const currentTrackIdState = atom({
    key: "currentTracIdState",
    default: null,
});

export const isPlayingState = atom({
    key: "isPlayingState",
    default:false,
});