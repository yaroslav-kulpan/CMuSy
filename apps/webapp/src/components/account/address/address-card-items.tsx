import clsx from 'clsx';
import {IAccountAddresses} from "./addresses";
import AddressCardItem from "./address-card-item";

interface IAddressCardItemsProps {
  addresses: IAccountAddresses[];
  gridCols?: string;
}

export function AddressCardItems({
  addresses = [],
  gridCols = 'grid-cols-1',
}: IAddressCardItemsProps) {
  const className = clsx('grid gap-y-2 gap-x-4 mb-3', gridCols);
  return (
    <div className={className}>
      {addresses.map((address) => (
        <AddressCardItem key={address.id} {...address} />
      ))}
    </div>
  );
}

export default AddressCardItems;
