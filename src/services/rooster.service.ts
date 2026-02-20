// File: src/services/rooster.service.ts
import type { Room, Shift } from "../types/shared";
import { mockDelay } from "./mockDelay";

export async function fetchRooms(): Promise<Room[]> {
  await mockDelay(250);
  return [
    { id: "room1", name: "Room1" },
    { id: "room2", name: "Room2" },
  ];
}

export async function fetchShifts(): Promise<Shift[]> {
  await mockDelay(650);

  const shifts: Shift[] = [
    {
      id: "s1",
      colorVariant: "purple",
      title: "Verkoever Shift",
      startTime: "08:00",
      endTime: "12:00",
      assigneeName: "Omar r.",
      statusLabel: "Beschikbaar",
      dayKey: "2024-01-18",
      active: false,
      activeTime: "8:00",
      roomId: "room1",
      description:
        "Ochtendronde en voorbereiding van patiënten in de verkoeverruimte.",
      locationLabel: "Verkoeverruimte",
      serviceLabel: "Ochtend 8:00-12:00",
      teamSlots: [
        { label: "Omar r., Elijah a.", time: "08:00 - 10:00", variant: "blue" },
        {
          label: "Omar r., Elijah a.",
          time: "10:00 - 12:00",
          variant: "orange",
        },
      ],
      notes: [
        {
          id: "n1",
          author: "Omar r",
          timeAgo: "5 min geleden",
          text: "Check vitale waarden vóór overdracht.",
        },
        {
          id: "n2",
          author: "Elijah a",
          timeAgo: "2 min geleden",
          text: "Patiënt 3 heeft extra monitoring nodig.",
        },
      ],
    },

    {
      id: "s2",
      colorVariant: "blue",
      title: "Consult Shift",
      startTime: "12:00",
      endTime: "16:00",
      assigneeName: "Elijah a.",
      statusLabel: "Toegewezen",
      dayKey: "2024-01-18",
      active: true,
      activeTime: "8:30",
      roomId: "room1",
      description:
        "Consulten met patiënten en familie, inclusief planning van vervolgstappen.",
      locationLabel: "Spreekkamer",
      serviceLabel: "Middag 12:00-16:00",
      teamSlots: [
        { label: "Elijah a., Omar r.", time: "12:00 - 14:00", variant: "blue" },
        {
          label: "Elijah a., Omar r.",
          time: "14:00 - 16:00",
          variant: "orange",
        },
      ],
      notes: [
        {
          id: "n3",
          author: "Elijah a",
          timeAgo: "10 min geleden",
          text: "Dossier updaten na elk consult.",
        },
      ],
    },

    {
      id: "s3",
      colorVariant: "orange",
      title: "Operatie Voorbereiding",
      startTime: "16:00",
      endTime: "20:00",
      assigneeName: "Omar r.",
      statusLabel: "Beschikbaar",
      dayKey: "2024-01-18",
      active: false,
      activeTime: "9:00",
      roomId: "room1",
      description:
        "Voorbereiding van operatiekamer en instrumenten; checklists nalopen.",
      locationLabel: "OK Voorruimte",
      serviceLabel: "Avond 16:00-20:00",
      teamSlots: [
        { label: "Omar r., Team OK", time: "16:00 - 18:00", variant: "orange" },
        { label: "Omar r., Team OK", time: "18:00 - 20:00", variant: "blue" },
      ],
      notes: [
        {
          id: "n4",
          author: "Omar r",
          timeAgo: "12 min geleden",
          text: "Controleer steriele trays vóór start.",
        },
      ],
    },

    {
      id: "s4",
      colorVariant: "purple",
      title: "Morning Briefing",
      startTime: "08:30",
      endTime: "10:30",
      assigneeName: "Elijah a.",
      statusLabel: "Beschikbaar",
      dayKey: "2024-01-19",
      active: false,
      activeTime: "9:30",
      roomId: "room1",
      description: "Team briefing, taakverdeling en prioriteiten voor de dag.",
      locationLabel: "Teamruimte",
      serviceLabel: "Ochtend 8:30-10:30",
      teamSlots: [
        { label: "Elijah a., Omar r.", time: "08:30 - 09:30", variant: "blue" },
        {
          label: "Elijah a., Omar r.",
          time: "09:30 - 10:30",
          variant: "orange",
        },
      ],
      notes: [
        {
          id: "n5",
          author: "Elijah a",
          timeAgo: "1 uur geleden",
          text: "Neem cases van gisteren kort door.",
        },
      ],
    },

    {
      id: "s5",
      colorVariant: "blue",
      title: "Ward Round",
      startTime: "10:30",
      endTime: "14:30",
      assigneeName: "Omar r.",
      statusLabel: "Toegewezen",
      dayKey: "2024-01-19",
      active: false,
      activeTime: "10:00",
      roomId: "room1",
      description:
        "Visite op de afdeling, medicatie checks en follow-up notities.",
      locationLabel: "Afdeling",
      serviceLabel: "Middag 10:30-14:30",
      teamSlots: [
        { label: "Omar r., Elijah a.", time: "10:30 - 12:30", variant: "blue" },
        {
          label: "Omar r., Elijah a.",
          time: "12:30 - 14:30",
          variant: "orange",
        },
      ],
      notes: [
        {
          id: "n6",
          author: "Omar r",
          timeAgo: "20 min geleden",
          text: "Let op pijnscores bij patiënt 2.",
        },
      ],
    },

    {
      id: "s6",
      colorVariant: "orange",
      title: "Evening Handover",
      startTime: "18:00",
      endTime: "20:00",
      assigneeName: "Elijah a.",
      statusLabel: "Beschikbaar",
      dayKey: "2024-01-20",
      active: false,
      activeTime: "10:30",
      roomId: "room1",
      description:
        "Overdracht naar avonddienst, afronden taken en status updates.",
      locationLabel: "Balie",
      serviceLabel: "Avond 18:00-20:00",
      teamSlots: [
        {
          label: "Elijah a., Omar r.",
          time: "18:00 - 19:00",
          variant: "orange",
        },
        { label: "Elijah a., Omar r.", time: "19:00 - 20:00", variant: "blue" },
      ],
      notes: [
        {
          id: "n7",
          author: "Elijah a",
          timeAgo: "3 min geleden",
          text: "Update rooster voor morgen vóór afsluiten.",
        },
      ],
    },
  ];

  return shifts;
}
