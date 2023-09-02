import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../redux/features/task/taskSlice';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  let statusUpdate;
  if ( task.status == 'pending' ) {
    statusUpdate = 'runnig'
  }
  else if( task.status == 'runnig' ){
    statusUpdate = 'done'
  }
  else{
    statusUpdate = 'archive'
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1 className="text-lg font-semibold mb-3" >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assign}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.deadline}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>

          <button onClick={() => dispatch(updateStatus({ id: task.id, status: statusUpdate }))}
            title="Update Status" >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default TaskCard;