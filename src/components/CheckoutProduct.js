import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
    };

    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    //   Remove the item from the Redux
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <CurrencyFormat
          value={price}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
        {hasPrime && (
          <div className="flex items-center space-x-2 mt-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="mt-auto button">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="mt-auto button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
