import { IconType } from 'react-icons';

interface ICard {
  title: string;
  icon: IconType;
  description: string;
}
export const Card = (props: ICard) => {
  return (
    <div className='bg-light_indigo rounded-md px-6 py-2 shadow-2xl'>
      <div className='flex flex-col items-center text-center h-[10rem] w-full text-zinc-50'>

        <div className='flex flex-col items-center gap-4'>
          {props.icon && <props.icon className="text-2xl" />}
          <h2 className='font-medium text-lg sm:text-base'>{props.title}</h2>
        </div>

        <p className='text-sm text-center font-medium sm:text-xs'>{props.description}</p>
      </div>
    </div>
  )
}