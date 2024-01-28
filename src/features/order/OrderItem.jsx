import { formatCurrency } from "../../utilis/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  return (
    <li className="space-y-1 py-3 ">
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">{isLoadingIngredients ?'Loading...': ingredients.join(',')}</p>
    </li>
  );
}

export default OrderItem;