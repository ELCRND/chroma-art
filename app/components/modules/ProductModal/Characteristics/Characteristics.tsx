import ProductCharacteristic from "@/app/components/elements/Product/ProductCharacteristic";
import { ICharacteristics } from "@/types/products";

const Characteristics = ({
  characteristics,
}: {
  characteristics: ICharacteristics;
}) => {
  return (
    <ol className="mt-10 flex flex-col gap-3 text-xl">
      <ProductCharacteristic type={"База"} value={characteristics.base} />
      <ProductCharacteristic
        type={"Глянец"}
        value={characteristics.glossLevel + "%"}
      />
      <ProductCharacteristic
        type={"Время высыхания"}
        value={characteristics.time + "ч."}
      />
      <ProductCharacteristic
        type={"Влажность до"}
        value={characteristics.wet + "%"}
      />
      <ProductCharacteristic
        type={"Температура от"}
        value={characteristics.temperature + "°C"}
      />
      <ProductCharacteristic
        type={"Объем"}
        value={characteristics.sizes.map((l) => l + "л").join(" | ")}
      />
      <ProductCharacteristic
        type={"Плотность"}
        value={characteristics.substance}
      />
      <ProductCharacteristic
        type={"Способ нанесения"}
        value={characteristics.method}
      />
    </ol>
  );
};

export default Characteristics;
