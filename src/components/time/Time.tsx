export function DateTime({
  classname,
  timestamp,
}: {
  classname: string;
  timestamp: string;
}) {
  return (
    <time className={`time ${classname}--time`} dateTime={timestamp}>
      {timestamp}
    </time>
  );
}
