import prisma from '@/utils/db';

const prismaHandlers = async () => {
  console.log('prisma example');
  // await prisma.task.create({
  //   data: {
  //     content: 'Wake Up',
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  if (tasks.length === 0) {
    return <h3 className='mt-8 font-medium text-lg'>Not task to show</h3>;
  }

  return (
    <div>
      <h1 className='text-7xl'>
        {tasks.map((task) => {
          return (
            <p key={task.id} className='text-2xl py-2'>
              {task.content}
            </p>
          );
        })}
      </h1>
    </div>
  );
};
export default PrismaExample;
