import type yup from "yup";
import { object, string, mixed } from "yup";

export const RequestBaseSchema = object({
  type: mixed()
    .oneOf(["hype", "song"] as const)
    .required(),
  event_id: string().required(),
  nickname: string().optional(),
});

export const HypeRequestSchema = RequestBaseSchema.shape({
  description: string().required("Hype description required"),
  nickname: string().optional(),
});

export const SongRequestSchema = RequestBaseSchema.shape({
  artist: string().required("Artist name required"),
  song_title: string().required("Song name required"),
});

export interface HypeRequestPayload
  extends yup.InferType<typeof HypeRequestSchema> {}
export interface SongRequestPayload
  extends yup.InferType<typeof SongRequestSchema> {}
