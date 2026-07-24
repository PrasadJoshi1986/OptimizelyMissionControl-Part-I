export default function Steps({ items, startAt = 1 }) {
  return (
    <ol className="steps">
      {items.map((item, i) => (
        <li key={i}>
          <div className="step-num">{startAt + i}</div>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ol>
  );
}
