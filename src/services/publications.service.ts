import type { Publication } from "../types/shared";
import { mockDelay } from "./mockDelay";

export async function fetchPublications(): Promise<Publication[]> {
  await mockDelay(500);
  return [
    {
      id: "p1",
      tags: ["Covid", "Vaccine"],
      title: "Vaccine hesitancy trends",
      excerpt:
        "How do you build stroke risk tools that are both clinically powerful and user-friendly for everyday care?",
      author: "Elijah Oyindamola",
      dateLabel: "20 Jan 2022",
      readTimeLabel: "3mins",
    },
    {
      id: "p2",
      tags: ["Covid", "Vaccine"],
      title: "Vaccine hesitancy trends",
      excerpt:
        "How do you build stroke risk tools that are both clinically powerful and user-friendly for everyday care?",
      author: "Elijah Oyindamola",
      dateLabel: "20 Jan 2022",
      readTimeLabel: "3mins",
    },
  ];
}
