const util = require('../../cli-commands/util');
const colors = require('../../utils/colors')
const assert = require('assert');
const sinon = require('sinon');

describe('Print report table test', function() {
    it('should return readable status with fail', () => {
        let colorSpy = sinon.spy(colors, "colorFailure")
        util.getReadableStatus(1)
        sinon.assert.calledWithExactly(colorSpy, 'Fail')
    })
})