import { merge } from './merge';

describe('merge function testing', () => {
    test('should merge three collections correctly', () => {
        const collection1 = [23, 67];
        const collection2 = [1, 3];
        const collection3 = [11, 6, 8];
        const merged = merge(collection1, collection2, collection3);
        expect(merged).toEqual([1, 3, 6, 8, 11, 23, 67]);
    });

});