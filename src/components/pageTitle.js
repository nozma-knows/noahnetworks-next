export default function PageTitle({ title, links }) {
  return (
    <div className="flex flex-col items-center font-urbanist text-white">
      <div className="text-[55px] font-bold">{title}</div>
      {links && (
        <div className="flex text-4xl gap-6">
          {links.map((item) => {
            const { Logo, link } = item;
            return (
              <a key={link} href={link} target="_blank" rel="noreferrer">
                <Logo />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
