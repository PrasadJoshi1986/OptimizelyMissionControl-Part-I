import useScrollReveal from '../hooks/useScrollReveal';

const ImgIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
  </svg>
);

export default function ImgFigure({ src, alt }) {
  const ref = useScrollReveal();
  return (
    <div className="img-wrap reveal" ref={ref}>
      <img src={src} alt={alt} loading="lazy" />
      <div className="img-caption"><ImgIcon />{alt}</div>
    </div>
  );
}
