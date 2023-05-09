import CommentCard from './CommentCard';

export default function Display({ comment }) {
  return (
    <ul className=''>
      {comment.map(data => (
        <CommentCard data={data} key={data.id} />
      ))}
    </ul>
  );
}
