import Box from "./Box";

interface Props {
  toggleTheme: () => void;
  url: string;
  name: string;
}

function SwitchTheme({ toggleTheme, url, name }: Props) {
  return (
    <Box onClick={() => toggleTheme()}>
      <picture>
        <img src={url} alt={name} />
      </picture>
    </Box>
  );
}

export default SwitchTheme;
