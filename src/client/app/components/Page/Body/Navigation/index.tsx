import { NavigationFragment } from '../../../../graphql/sdk';

export const Navigation = (props: NavigationFragment['navigation']) => {
  return (
    <nav className="container max-w-7xl px-6 py-4 bg-white shadow -skew-x-12 rounded-tl-2xl rounded-bl rounded-br-2xl rounded-tr">
      <div className="flex flex-col mx-auto md:flex-row md:items-center md:justify-between skew-x-12">
        <div className="flex items-center justify-between">
          <div>
            <a href="/" className="text-xl font-bold text-gray-800 md:text-2xl">
              {props.title}
            </a>
          </div>
        </div>
        <div className="flex-col hidden md:flex md:flex-row md:-mx-4">
          {props.items.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
