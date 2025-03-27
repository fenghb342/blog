import { GetIndexFromSlugID } from "./hash";
import DashuaiConfig from "../../Dashuai.config";

/**
 * Retrieves the cover URL for an unspecified entry based on the provided ID.
 *
 * @param id - The unique identifier for the entry.
 * @returns The URL of the corresponding cover image.
 */
export function GetCoverURLForUnspecifiedEntry(id: string): string {
  const index = GetIndexFromSlugID(id, DashuaiConfig.banners.length);
  return DashuaiConfig.banners[index];
}
