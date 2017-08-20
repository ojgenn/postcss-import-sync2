// external tooling
import test from 'ava'

// internal tooling
import checkFixture from './helpers/check-fixture'

test(`should order nested imports correctly`, t => {
    let first = true
    const path = require('path')

    return checkFixture(t, 'order', {
        path: 'test/fixtures/imports',
        resolve: id => {
            if (first) {
                return path.resolve('test/fixtures/imports', id)
                first = false
            } else {
                return path.resolve('test/fixtures/imports', id)
            }
        },
    })
})
