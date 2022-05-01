import './Card.scss';

type Props = {
  item: {
    // title: 'Image' | 'Video' | 'Note' | 'Todo';
    title: string;
    src?: string;
    body?: string;
  };
};

export default function card({ item }: Props) {
  return (
    <div>
      {item.title === 'Image' && (
        <div className="card__wrapper">
          <img src={item.src} />
          <span>{item.title}</span>
        </div>
      )}
      {item.title === 'Note' && (
        <div className="text__card__wrapper">
          <span>{item.title}</span>
          <span>{item.body}</span>
        </div>
      )}
      {item.title === 'Todo' && (
        <div className="text__card__wrapper">
          <span>{item.title}</span>
          <span>{item.body}</span>
        </div>
      )}
      {item.title === 'Video' && (
        <div className="card__wrapper">
          <iframe
            width="560"
            height="315"
            src={item.src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <span>{item.title}</span>
        </div>
      )}
    </div>
  );
}
