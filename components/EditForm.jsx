import { updateTask } from '@/utils/actions';

const EditForm = ({ task }) => {
  const { content, id, completed } = task;

  return (
    <form
      action={updateTask}
      className='max-w-sm p-12 border border-base-300 rounded-lg my-4'
    >
      <input type='hidden' name='id' value={id} />
      <input
        type='text'
        name='content'
        required
        defaultValue={content}
        className='input input-bordered w-full'
      />
      <div className='form-control'>
        <label htmlFor='completed' className='label cursor-pointer'>
          <span className='label-text'>Completed</span>
          <input
            type='checkbox'
            defaultChecked={completed}
            id='completed'
            name='completed'
            className='checkbox chexkbox-primary chechbox-sm'
          />
        </label>
      </div>
      <button type='submit' className='btn btn-primary btn-block btn-sm'>
        Edit
      </button>
    </form>
  );
};

export default EditForm;
