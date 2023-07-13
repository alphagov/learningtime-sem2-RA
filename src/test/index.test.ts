import { helloWorld } from ".."

describe('dummy test', () => {
    
    beforeEach(() => {})

    it('can return HelloWorld', () => {
        const expectedString = 'HelloWorld'
        const message = helloWorld()
        expect(message).toBe(expectedString)
    })

} )
