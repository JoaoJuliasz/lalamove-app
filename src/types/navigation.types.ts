import { Delivery } from './delivery.types';

export type RootStackParamList = {
    Home: undefined;
    Details: { delivery: Delivery };
};