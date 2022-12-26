import { Description } from 'Pages/Shops/styles';

export function Descriptions(props: {
  cuisines: string[];
  backgroundColor?: string;
}): JSX.Element {
  const { cuisines, backgroundColor } = props;
  return (
    <Description>
      {cuisines.map((cuisine) => (
        <div key={cuisine} style={{ backgroundColor }}>
          {cuisine}
        </div>
      ))}
    </Description>
  );
}
