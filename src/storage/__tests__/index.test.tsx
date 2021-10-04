import EncryptedStorage from 'react-native-encrypted-storage';
import { clearStorage } from '..';

// const asMock = {
//   __INTERNAL_MOCK_STORAGE__: {},

//   setItem: jest.fn(async ())
// }

test('clearStorage', async () => {
  await EncryptedStorage.setItem('key1', 'value1');
  await EncryptedStorage.setItem('key2', 'value2');

  const data1 = await EncryptedStorage.getItem('key1');
  expect(data1).toBe('value1');

  const data2 = await EncryptedStorage.getItem('key2');
  expect(data2).toBe('value2');

  await clearStorage();

  const afterData1 = await EncryptedStorage.getItem('key1');
  expect(afterData1).toBe(null);

  const afterData2 = await EncryptedStorage.getItem('key2');
  expect(afterData2).toBe(null);
});
