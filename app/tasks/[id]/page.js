import EditForm from '@/components/EditForm';
import { getTask } from '@/utils/actions';
import Link from 'next/link';

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);

  return (
    <>
      <div className='mb-16'>
        <h1 className='text-6xl font-bold'>{task.content}</h1>
        <Link href='/tasks' className='btn btn-accent'>
          Back to Tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default SingleTaskPage;