import { fetchProfileData } from 'entities/Profile';
import { profileActions } from 'entities/profile';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const data = {
    firstname: 'иван',
    lastname: 'андреевич',
    age: 23,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Москва',
    username: 'иванов',
};

describe(
    'fetchProfileData.test',
    () => {
        test('success fetch', async () => {
            const thunk = new TestAsyncThunk(fetchProfileData);

            thunk.api.get.mockReturnValue(Promise.resolve({ data }));

            const result = await thunk.callThunk();

            expect(thunk.api.get).toHaveBeenCalled();
            expect(result.meta.requestStatus).toBe('fulfilled');
            expect(result.payload).toEqual(data);
        });

        test('error fetch', async () => {
            const thunk = new TestAsyncThunk(fetchProfileData);
            thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
            const result = await thunk.callThunk();

            expect(result.meta.requestStatus).toBe('rejected');
        });
    },
);
