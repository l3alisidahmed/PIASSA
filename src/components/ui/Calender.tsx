import { use, useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());

  const CalendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      
    // console.log(CalendarRef.current);
      // console.log(CalendarRef.current?.childNodes);
      // console.log(CalendarRef.current?.children);
      // console.log(CalendarRef.current?.children[0].childNodes);
      // console.log(CalendarRef.current?.children[0].children);

      console.log(CalendarRef.current?.children[0].childNodes[0].attributes[0].value);
      console.log(CalendarRef.current?.children[0].childNodes[1].attributes[0].value);

      const calendarHeader = CalendarRef.current?.children[0].childNodes[0].attributes[0].value;
      const calendarBody = CalendarRef.current?.children[0].childNodes[1].attributes[0].value;

      if (CalendarRef.current) {
        CalendarRef.current.children[0].childNodes[0].attributes[0].value = `${calendarHeader} flex flex-row gap-20`; 
        CalendarRef.current.children[0].childNodes[1].attributes[0].value = `${calendarBody} text-center`;
      }      
      console.log('Calendar Clicked');
  }, []);

  useEffect(() => { 
    console.log(value);
  }, [value]);

  return (
    <div className="flex justify-center bg-white p-10 text-black" ref={CalendarRef}>
      <Calendar onChange={onChange} value={value} className={'flex flex-col gap-5 items-center'}/>
    </div>
  );
}

export default CalendarComponent;
