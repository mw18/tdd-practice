import {expect} from 'chai';
import {isAnagram} from './anagrams';

describe('isAnagram - basic functionality', () =>{
    it("it returns true when known anagrams are passed in", () => {
        const expected = true;
        const actual = isAnagram("listen", "silent");
        expect(actual).to.deep.equal(expected);
    })

    it('returns false when either of the strings has extra letters', () => {
        const expected = false;
        const actual = isAnagram ('elbows', "below")
        expect(actual).to.equal(expected);

        const actual2 = isAnagram ('below','elbows');
        expect(actual2).to.equal(expected);
    })

    it('returns false the strings have the same letters in dofferent quantaties', () => {
        const expected = false;
        const actual = isAnagram ('listens', "silent")
        expect(actual).to.equal(expected);
    })

})