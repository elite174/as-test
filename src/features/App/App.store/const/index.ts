export enum FilterState {
    cheap,
    fast
};

export enum TransferCountsNames {
    all = 'all',
    zero = 'zero',
    one = 'one',
    two = 'two',
    three = 'three'
};

export const TransferCounts: Record<TransferCountsNames, number> = {
    all: -1,
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
};

export const initialTransferCounts: Record<TransferCountsNames, boolean> = {
    all: true,
    one: false,
    two: false,
    three: false,
    zero: false
};