import { useEffect, useState } from 'react';
import './Cards.scss';

type Categories = 'Video' | 'Image' | 'Todo' | 'Note';

type Props = {
  onClick: (idx: number) => void;
  removeCard: (e: any, idx: number) => void;
  idx: number;
  item: {
    category: Categories;
    title: string;
    src?: string;
    body?: string;
  };
  onDragStartHandler: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  dragHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dragEndHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dragEnterHandler: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  dragLeaveHandler: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
};
type DragState = 'start' | 'stop' | 'enter' | 'leave';

export default function Card({
  item,
  removeCard,
  idx,
  onClick,
  onDragStartHandler,
  dragHandler,
  dragEndHandler,
  dragEnterHandler,
  dragLeaveHandler,
}: Props) {
  return (
    <div
      onClick={() => onClick(idx)}
      draggable="true"
      onDragStart={(e) => onDragStartHandler(e, idx)}
      onDrag={dragHandler}
      onDragEnd={dragEndHandler}
      onDragEnter={(e) => dragEnterHandler(e, idx)}
      onDragLeave={(e) => dragEnterHandler(e, idx)}
    >
      {item.category === 'Image' && (
        <div className="card__wrapper">
          <img src={item.src} />
          <span className="title">{item.title}</span>
          <button onClick={(e) => removeCard(e, idx)}>&#215;</button>
        </div>
      )}
      {item.category === 'Note' && (
        <div className="text__card__wrapper">
          <span className="title">{item.title}</span>
          <span className="content">{item.body}</span>
          <button onClick={(e) => removeCard(e, idx)}>&#215;</button>
        </div>
      )}
      {item.category === 'Todo' && (
        <div className="text__card__wrapper">
          <span className="title">{item.title}</span>
          <span className="content">{item.body}</span>
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
          <span className="title">{item.title}</span>
          <button onClick={(e) => removeCard(e, idx)}>&#215;</button>
        </div>
      )}
    </div>
  );
}
