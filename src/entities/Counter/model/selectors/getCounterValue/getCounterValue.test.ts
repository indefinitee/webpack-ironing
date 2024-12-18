import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { StateSchema } from 'app/providers/StoreProvider';

describe(
    'getCounterValue',
    () => {
        test('should return counter value ', () => {
            const state: DeepPartial<StateSchema> = {
                counter: { value: 10 },
            };
            expect(getCounterValue(state as StateSchema)).toEqual(10);
        });
    },
);
