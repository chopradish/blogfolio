import { cn } from "../lib/utils";
import type { CareerEvent } from "../types";

interface TimelineItemProps {
  index: number;
  event: CareerEvent;
}

const TimelineItem = ({ index, event }: TimelineItemProps) => {
  const isEvenItem = index % 2 == 0;
  const isFirstItem = index == 0;

  return (
    <div className={cn("grid grid-cols-6 gap-x-8 ")}>
      <div
        className={cn(
          "flex flex-col col-span-2 p-5",
          isEvenItem && "border-l rounded-l border-y",
        )}
      >
        <span className="font-semibold text-rose-500 dark:text-rose-400">
          {/* `{index + 1}. {event.org}`*/}
          {event.org}
        </span>
        <span className="text-sm">{event.position}</span>
        <span className="text-gray-600 dark:text-gray-300 text-xs">
          {event.time}
        </span>
        <span className="text-gray-600 dark:text-gray-300 text-xs">
          {event.loc}
        </span>
      </div>
      <div
        className={cn(
          "col-span-4 block p-5 content-center",
          !isEvenItem && "border-r rounded-r border-y",
          isFirstItem && "border-t",
        )}
      >
        <ul className="list-disc text-sm leading-snug">
          {event.details.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface TimelineProps {
  careerEvents: CareerEvent[];
}

export const Timeline = ({ careerEvents }: TimelineProps) => {
  const sortedEvents = careerEvents.sort((l, r) => r.id - l.id);

  return (
    <div className="flex flex-col">
      {sortedEvents.map((event, index) => {
        return <TimelineItem key={event.id} index={index} event={event} />;
      })}
    </div>
  );
};
