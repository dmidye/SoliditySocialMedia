// bring contract into file
const SocialNetwork = artifacts.require('./SocialNetwork.sol'); 

require('chai').use(require('chai-as-promised')).should();

contract('SocialNetwork', ([deployer, author, tipper]) => {
    let socialNetwork

    // gives each test a copy of the contract, reduces code reuse
    before(async () => {
        socialNetwork = await SocialNetwork.deployed()
    })
    // test that a valid creator address is retrieved
    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await socialNetwork.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('has a name', async () => {
            const name = await socialNetwork.name()
            assert.equal(name, 'Simple Social')
        })
    })

    describe('posts', async () => {

        let result, postCount

        it('creates posts', async () => {
            result = await socialNetwork.createPost('First post...', { from: author })
            postCount = await socialNetwork.postCount()
            // success
            assert.equal(postCount, 1)
        })

        it('lists posts', async () => {
            // TODO
        })

        it('allows users to tip posts', async () => {
            // TODO
        })
    })
})