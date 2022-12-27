import { TagsWrapper } from 'Pages/Shops/styles';

export function TagList(props: {
  items: string[];
  backgroundColor?: string;
}): JSX.Element {
  const { items, backgroundColor } = props;
  return (
    <TagsWrapper>
      {items.map((item) => (
        <div key={item} style={{ backgroundColor }}>
          {item}
        </div>
      ))}
    </TagsWrapper>
  );
}
