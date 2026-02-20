export type Room = { id: string; name: string };

export type Shift = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  active: boolean;
  activeTime: string;
  assigneeName: string;
  statusLabel: string;
  colorVariant: "purple" | "orange" | "blue";
  dayKey: string;
  roomId: string;

  description: string;
  locationLabel: string;
  serviceLabel: string;

  teamSlots: Array<{ label: string; time: string; variant: "orange" | "blue" }>;
  notes: Array<{ id: string; author: string; timeAgo: string; text: string }>;
};

export type Publication = {
  id: string;
  tags: string[];
  title: string;
  excerpt: string;
  author: string;
  dateLabel: string;
  readTimeLabel: string;
};
