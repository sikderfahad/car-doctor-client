const FooterColumn = ({ column }) => {
  return (
    <div>
      <h2 className="text-xl capitalize font-semibold mb-2">{column.title}</h2>
      <ul className="space-y-1">
        {column.navs.map((nav, idx) => (
          <li key={idx}>
            <a href="#" className="hover:underline capitalize text-gray-400">
              {nav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
