
import { useForm } from 'react-hook-form';
import Modal from './Ui/Modal';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/features/task/taskSlice';



const AddTask = ({isOpen, setIsOpen, title}) => {
  const {register, handleSubmit,reset} = useForm();
const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(addTask(data));
    onCancel();
  }

  const onCancel = ()=>{
    reset();
    setIsOpen(false);
  }

  return (
    <div>
       <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Task Title' >
       

       <form onSubmit={handleSubmit(onSubmit)}>
       <div>
        <label htmlFor='title'>Title</label>
        <input className='flex flex-col mb-2 w-full rounded-md' type="text" {...register('title')} />
      </div>
       <div>
        <label htmlFor='description'>Description</label>
        <input className='flex flex-col mb-2 w-full rounded-md' type="text" {...register('description')} />
      </div>
       <div className='flex flex-col'>
        <label htmlFor='deadline'>Deadline</label>
        <input className=' mb-2 w-full rounded-md' type="date" {...register('deadline')} />
      </div>
       <div>
        <label htmlFor='assign'>Assign To</label>
        {/* <input className='flex flex-col mb-2 w-full rounded-md' type="text" {...register('assign')} /> */}
        <select  className='flex flex-col mb-2 w-full rounded-md' {...register('assign')}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

      </div>
       <div>
        <label htmlFor='priority'>Priority</label>
        {/* <input className='flex flex-col mb-2 w-full rounded-md' type="text" {...register('priority')} /> */}
        <select  className='flex flex-col mb-2 w-full rounded-md' {...register('priority')}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="very Urgent">very Urgent</option>
        </select>
      </div>
      <div className='flex gap-3 justify-end'>
      <button onClick={ () => onCancel()} type='button' className='bg-red-500 text-white p-2 rounded-md'>Cancel</button>
      <button  type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
      </div>
    </form>

        </Modal>
    </div>
  );
};

export default AddTask;