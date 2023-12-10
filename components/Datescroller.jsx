"use client"
import React, { useEffect, useState } from 'react'
import { Datepicker } from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Datescroller = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const currentDate = new Date();
  const [date, setDate] = useState({
    startValue: new Date(currentDate),
    endValue: new Date(currentDate),
    rangeDates: [],
  });

  useEffect(() => {
    const formattedDate = date.startValue.toISOString().split('T')[0];
    const params = new URLSearchParams(searchParams)
    params.set("q", formattedDate);
    replace(`${pathname}?${params}`);
  }, [date.startValue])

  const handleChange = (d) => {
    const [selectedDate] = d;
    console.log(d,selectedDate)
    setDate((prev) => ({ ...prev, endValue: selectedDate, startValue: selectedDate }));
  };

  return (
    <Datepicker
      onChange={handleChange}
      locale={enUS}
      startValue={date.startValue}
      endValue={date.endValue}
    />
  );


}

export default Datescroller;