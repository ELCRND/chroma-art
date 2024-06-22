const ProductCharacteristic = ({
  type,
  value,
}: {
  type: string;
  value: string | number;
}) => {
  return (
    <li className="flex last-of-type:block [&:nth-of-type(7)]:block text-wrap">
      <span className="text-nowrap text-white">{type}:</span>
      <span className="w-full h-[1px] mx-2  relative top-6 bg-gray-500 "></span>
      <span className="shrink-0">{value}</span>
    </li>
  );
};

export default ProductCharacteristic;
