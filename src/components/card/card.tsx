import { CardProps } from "./types";

const Card = ({
  item
}: CardProps): React.ReactElement => {
  return (
    <div
      className='grid grid-rows-2 bg-white gap-x-2 p-2'
    >
      <div
        className='grid grid-cols-2 gap-y-2'
      >
        <picture
          className='flex justify-center items-center'
        >
          <img
            src={`${item?.thumbnail?.path}/portrait_xlarge.${item?.thumbnail.extension}`}
            alt='img-comic'
            className='shadow rounded-full w-40 h-40 align-middle border-none'
          />
        </picture>
        <div
          className='flex flex-col flex-wrap'
        >
          <h2
            className='text-black font-bold'
          >{item?.name}</h2>
          <p
            className='h-20 w-full truncate'
          >{item?.description}</p>
          <button
            className='bg-red-600 text-white p-1'
          >VIEW MORE</button>
        </div>
      </div>
      <div
        className='grid grid-rows-6'
      >
        <h1
          className='text-gray-400 font-bold row-span-1 mb-1'
        >Related comics</h1>
        <div
          className='row-span-5 grid grid-cols-2'
        >
          <div
            className='flex justify-between flex-wrap'
          >
            {
              item.comics.items.map((related, i) => (
                (i < 2) &&
                <span
                  key={`${item.id}${related.name}`}
                  className='text-gray-400'
                >{related.name}</span>
              ))
            }
          </div>
          <div
            className='flex justify-between flex-wrap'
          >
            {
              item.comics.items.map((related, i) => (
                (i >= 2 && i <= 3) &&
                <span
                  key={`${item.id}${related.name}`}
                  className='text-gray-400'
                >{related.name}</span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default Card;
