import { NavigationFragment } from '../../../../graphql/sdk';

export const Navigation = (props: NavigationFragment['navigation']) => {
  return (
    <nav className="menu">
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              {item.href}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
