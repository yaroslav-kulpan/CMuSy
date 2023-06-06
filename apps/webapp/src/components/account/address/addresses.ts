import { nanoid } from 'nanoid';

export interface IAccountAddresses {
  id: string;
  city: string;
  active: boolean;
  country: string;
  address: string;
}

export const accountAddresses: IAccountAddresses[] = [
  {
    id: nanoid(),
    city: "New York",
    country: "New York State, USA",
    address: "4517 Washington Ave. Manchester, 11004",
    active: true
  },
  {
    id: nanoid(),
    city: "San Diego",
    country: "California State, USA",
    address: "3891 Ranchview Dr. Richardson, 62639",
    active: false
  },
];
