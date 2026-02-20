import type { Publication } from "../../types/shared";

export type PublicationsState = {
  publications: Publication[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
};
