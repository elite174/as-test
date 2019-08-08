export enum FilterState {
    cheap,
    fast
};

export enum TransferCountNames {
    all = 'all',
    zero = 'zero',
    one = 'one',
    two = 'two',
    three = 'three'
};

export const TransferCounts: Record<TransferCountNames, number> = {
    all: -1,
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
};

export const initialTransferCounts: Record<TransferCountNames, boolean> = {
    all: true,
    one: false,
    two: false,
    three: false,
    zero: false
};