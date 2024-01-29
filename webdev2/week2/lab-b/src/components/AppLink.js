const AppLink = ({ name, description, url }) => {
    return (
      <li key={name}>
        <a href={url}>
          {name} - {description}
        </a>
      </li>
    );
};
export default AppLink;