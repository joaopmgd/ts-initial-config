import { User } from '@models/models/User'

test('it should be ok', () => {
    const user = new User()

    user.name = 'Diego'

    expect(user.name).toEqual('Diego')
})