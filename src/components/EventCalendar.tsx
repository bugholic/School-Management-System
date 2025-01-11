"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// temp data

const events = [
  {
    id: 1,
    title: "lorem ipsum gryea",
    time: "12:00 - 02:00",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, distinctio.",
  },
  {
    id: 2,
    title: "lorem ipsum gryea",
    time: "12:00 - 02:00",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, distinctio.",
  },
  {
    id: 3,
    title: "lorem ipsum gryea",
    time: "12:00 - 02:00",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, distinctio.",
  },
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  const router = useRouter();
  useEffect(() => {
    router.push(`?date=${value}`);
  }, [value, router]);
  return <Calendar onChange={onChange} value={value}/>;
};

export default EventCalendar;
