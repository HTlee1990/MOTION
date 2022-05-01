import { useEffect } from 'react';
import './Cards.scss';

type Props = {
  onClick: (idx: number) => void;
  removeCard: (e: any, idx: number) => void;
  idx: number;
  item: {
    // title: 'Image' | 'Video' | 'Note' | 'Todo';
    category: string;
    title: string;
    src?: string;
    body?: string;
  };
};

export default function card({ item, removeCard, idx, onClick }: Props) {
  return (
    <div onClick={() => onClick(idx)}>
      {item.category === 'Image' && (
        <div className="card__wrapper">
          <img src={item.src} />
          <span>{item.title}</span>
          <button onClick={(e) => removeCard(e, idx)}>&#215;</button>
        </div>
      )}
      {item.category === 'Note' && (
        <div className="text__card__wrapper">
          <span>{item.title}</span>
          <span>{item.body}</span>
          <button onClick={(e) => removeCard(e, idx)}>&#215;</button>
        </div>
      )}
      {item.category === 'Todo' && (
        <div className="text__card__wrapper">
          <span>{item.title}</span>
          <span>{item.body}</span>
          <button onClick={(e) => removeCard(e, idx)}>&#215;</button>
        </div>
      )}
      {item.category === 'Video' && (
        <div className="card__wrapper">
          <iframe
            width="560"
            height="315"
            src={item.src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <span>{item.title}</span>
          <button onClick={(e) => removeCard(e, idx)}>&#215;</button>
        </div>
      )}
    </div>
  );
}
